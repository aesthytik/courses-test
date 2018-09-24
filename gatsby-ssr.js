// require('isomorphic-fetch');

// // eslint-disable-next-line
// import wrapWithProvider from './wrap-with-provider';

// // eslint-disable-next-line
// export const wrapRootElement = wrapWithProvider;

require(`isomorphic-fetch`);

const preferDefault = m => (m && m.default) || m;
exports.wrapRootElement = preferDefault(require(`./wrap-with-provider`));
