import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const resourcesQuery = gql`
  query {
    resources {
      id
      title
      slug
    }
  }
`;

const Resources = () => (
  <div className="columns is-multiline">
    <Query query={resourcesQuery}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { resources } = data;

        return (
          <React.Fragment>
            {resources.map(resource => (
              <div className="column is-half" key={resources.id}>
                <div className="card">
                  <div className="card-content">
                    bxsabxas
                    <p className="subtitle">{resource.title}</p>
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <span>View on</span>
                    </p>
                    <p className="card-footer-item">
                      <span>
                        Share on <a href="#">Facebook</a>
                      </span>
                    </p>
                  </footer>
                </div>
              </div>
            ))}
          </React.Fragment>
        );
      }}
    </Query>
  </div>
);

export default Resources;
