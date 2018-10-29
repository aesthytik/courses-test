import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import Layout from '../components/Global/Layout';
import UserUpdateForm from '../components/UserUpdateForm';
import Button from '../elements/Button';

const Card = styled.div`
  margin: 1rem 0rem;
`;

const Image = styled.img`
  border-radius: 100%;
`;

const EditButton = styled(Button)`
  min-width: 16.5rem;
`;

export default class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: false,
    };
  }

  handleEdit = () => {
    const { edit } = this.state;
    this.setState({ edit: !edit });
  };

  render() {
    // const { navigate } = this.props;
    const { edit } = this.state;

    return (
      <Layout>
        <Seo
          title="Login"
          description="Welcome to Learn Realm"
          url={`${config.siteUrl}`}
        />
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <div className="box has-text-centered">
                <Card>
                  <Image
                    className="is-rounded is-128x128"
                    src="/images/admin-icon.svg"
                  />
                  <br />
                  <br />
                  <p className=" heading is-size-5 has-text-weight-bold	">
                    <span className="icon">
                      <i className="fas fa-user" />
                    </span>
                    Nasim Akhtar
                  </p>
                  <p className="is-size-5 has-text-weight-semi-bold	">
                    <span className="icon">
                      <i className="fas fa-envelope" />
                    </span>
                    devnasim18@gmail.com
                  </p>
                  <br />
                  <br />
                  <nav className="level">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">date of birth</p>
                        <p className=" is-size-5 has-text-weight-semi-bold	">
                          12 May 2018
                        </p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">location</p>
                        <p className=" is-size-5 has-text-weight-semi-bold	">
                          jalandhar, india
                        </p>
                      </div>
                    </div>
                  </nav>

                  <EditButton
                    title={edit ? 'Details' : 'Edit'}
                    className="is-primary"
                    onClick={this.handleEdit}
                  />
                </Card>
              </div>
            </div>
            <div className="column">
              {edit ? <UserUpdateForm /> : <div className="box">cbjdzvcjd</div>}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
