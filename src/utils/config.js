const debug = process.env.NODE_ENV === 'development';

module.exports = {
  debug,

  siteName: 'Learn-Realm',
  author: 'Parminder Klair',
  description: 'A Learning platform, bundled with awesome GatsbyJs.',
  siteUrl: 'http://learn-realm.netlify.com',

  apiUrl: debug
    ? 'http://localhost:4000/graphql'
    : 'https://api.learnrealm.com/graphql',

  twitter: '@NAME-HERE',
  fbUserId: '@NAME-HERE',
  fbAppID: '@NAME-HERE',
  type: 'website',
  googleAnalytics: '',

  backgroundColor: '#e0e0e0',
  themeColor: '#1dbe71',

  primaryColor: '#1DBE71',
};
