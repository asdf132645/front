export default {
  // server:"http://tablenjoy.duckdns.org:30080",//개발 서버
  server:
    process.env.NODE_ENV === 'production'
      ? 'https://api.tablenjoy.com'
      : 'http://tablenjoy.duckdns.org:30080', //운영 서버
  sitename: 'tablenjoy',
};
