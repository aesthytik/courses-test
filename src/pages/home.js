import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Global/Seo';
import {Link} from 'gatsby';
import Layout from '../components/Global/Layout';

const Wrapper = styled.div`
  padding: 5rem;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className=" container has-text-centered is-size-4">
          Welcome to Edu Learn. Whether you're trying to level up your career,
           build your side project, or simply play around with programming, 
           you've found the right place to start. Explore our programs and courses,
            try an exercise or two, and join our community of 45 million learners. 
        </div>
        <Wrapper className="has-text-centered">
         <Link to="/dashboard/" className="button is-success is-large">Browse Available courses here</Link>
        </Wrapper>
       
      </Layout>
    );
  }
}
