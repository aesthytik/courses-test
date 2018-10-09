const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allMongodbTestBlog {
            edges {
              node {
                title
                slug
                subTitle
                description
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each mongoDb entry.
        result.data.allMongodbTestBlog.edges.forEach(({ node }) => {
          const { slug } = node;
          createPage({
            path: `/blog/${slug}`,
            component: postTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              slug,
            },
          });
        });
      }),
    );
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const resourceTemplate = path.resolve(`src/templates/course.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allMongodbTestResources {
            edges {
              node {
                id
                title
                slug
                isActive
                createdAt
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each mongoDb entry.
        result.data.allMongodbTestResources.edges.forEach(({ node }) => {
          const { slug } = node;
          createPage({
            path: `/course/${slug}`,
            component: resourceTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              slug,
            },
          });
        });
      }),
    );
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/`) {
    page.matchPath = `/*`;
    createPage(page);
  }
};
