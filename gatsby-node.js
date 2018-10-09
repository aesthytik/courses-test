const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve(`src/templates/post.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(``).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.allPrismicProducts.edges.forEach(({ node }) => {
          const slug = node.slugs[0];
          createPage({
            path: `/product/${slug}`,
            component: productTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              path: `/product/${slug}`,
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
