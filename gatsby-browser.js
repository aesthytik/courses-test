// import wrapWithProvider from './wrap-with-provider';

// // eslint-disable-next-line
// export const wrapRootElement = wrapWithProvider;

const preferDefault = m => (m && m.default) || m;
exports.wrapRootElement = preferDefault(require(`./wrap-with-provider`));
