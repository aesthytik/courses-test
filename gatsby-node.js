const path = require(`path`);
const fetch = require(`node-fetch`);

// exports.createPages = ({ page, actions }) => {
//   const { createPage } = actions;

//   return new Promise((resolve, reject) => {
//     fetch('https://dev-api.youngworks.co.uk/jobs/search')
//       .then(res => res.json())
//       .then(json => {
//         json.forEach(node => {
//           // Gatsby uses Redux to manage its internal state.
//           // Plugins and sites can use functions like "createPage"
//           // to interact with Gatsby.
//           // console.log('job', `/job/${node._id}/`);
//           createPage({
//             // Each page is required to have a `path` as well
//             // as a template component. The `context` is
//             // optional but is often necessary so the template
//             // can query data specific to each page.
//             path: `/blog/${node.slug}`,
//             component: path.resolve(`src/templates/blog.js`),
//             context: {
//               id: node._id,
//             },
//           });
//         });

//         resolve();
//       });
//   });
// };

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/`) {
    page.matchPath = `/*`;
    createPage(page);
  }
};

// // To create client side routing
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/profile/)) {
//     page.matchPath = `/profile/*`;

//     // Update the page.
//     createPage(page);
//   }

//   if (page.path.match(/^\/conversation/)) {
//     page.matchPath = `/conversation/*`;

//     // Update the page.
//     createPage(page);
//   }
// };
