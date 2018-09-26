import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import AddResourceButton from './AddResourceButton';
import CreateForm from './CreateForm';

const addResourceMutation = gql`
  mutation($title: String!) {
    addResource(input: { title: $title }) {
      id
      title
      slug
    }
  }
`;

const resourcesQuery = gql`
  query {
    resources {
      id
      title
    }
  }
`;

class CreateResource extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  toggleModel = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  handleUpdate = (cache, { data: { resource } }) => {
    const { resources } = cache.readQuery({ query: resourcesQuery });
    cache.writeQuery({
      query: resourcesQuery,
      data: { resources: resources.concat([resource]) },
    });
  };

  handleOnCompleted = () => {
    this.toggleModel();
  };

  render() {
    const { isActive } = this.state;
    return (
      <div>
        <AddResourceButton toggleModel={this.toggleModel} />
        <div id="modal" className={`modal ${isActive && 'is-active'}`}>
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">
              <p className="modal-card-title">Create Resource</p>
              <hr />
              <Mutation
                mutation={addResourceMutation}
                update={this.handleUpdate}
                onCompleted={this.handleOnCompleted}
              >
                {(login, { loading, error }) => (
                  <div>
                    <CreateForm
                      submit={input => login({ variables: input })}
                      loading={loading}
                    />
                    {error && <p>Error :( Please try again {error}</p>}
                  </div>
                )}
              </Mutation>
            </div>
          </div>
          <button
            type="button"
            className="modal-close is-large"
            aria-label="close"
            onClick={this.toggleModel}
          />
        </div>
      </div>
    );
  }
}

export default CreateResource;
