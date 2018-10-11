const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`);
    // Query for mongodb nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allMongodbLearnrealmBlog {
            edges {
              node {
                id
                title
                slug
                subtitle
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
        result.data.allMongodbLearnrealmBlog.edges.forEach(({ node }) => {
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

  await new Promise((resolve, reject) => {
    const resourceTemplate = path.resolve(`src/templates/resource.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allMongodbLearnrealmResource {
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
        result.data.allMongodbLearnrealmResource.edges.forEach(({ node }) => {
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

  return true;
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
