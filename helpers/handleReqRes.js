const url = require('url');
const { StringDecoder } = require('string_decoder');

const handler = {};
handler.handleReqRes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  //console.log(req);
  console.log(parsedUrl.pathname);
  req.method = 'POST';
  console.log(req.method);
  const queryStringObject = parsedUrl.query;
  console.log(queryStringObject);
  const headers = req.headers;
  headers.title = 'test title';
  //console.log(headers);

  //string decoder
  // const stringDecoder = new StringDecoder('UTF-8');
  // let realDate = '';
  // req.on('data', (buffer) => {
  //   realData += decoder.write(buffer);
  // });

  // req.on('end', () => {
  //   realData += decoder.end();
  //   console.log(decoder);
  //   res.end('Hello World after save');
  // });

  res.end('Hello World after save');
};

module.exports = handler;
