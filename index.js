// Include it and extract some methods for convenience
const server = require('server');
const { get, post } = server.router;
const { render, json } = server.reply;


// Launch server with options and a couple of routes
server({security: { csrf: false }}, [
  get('/', ctx => 'Hello world'),
  post('/', ctx => {
    console.log(ctx.data);
    return json({body: ctx.data});
  })
]);