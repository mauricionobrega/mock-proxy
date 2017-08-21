const http = require('http'),
  json = JSON.stringify([{
  'productId': 2253278,
  'skuId': 295967,
  'bought': false,
  'sellerId': 'mash'
}, {
  'productId': 2027188,
  'skuId': 28052,
  'bought': false,
  'sellerId': 'mash'
}, {
  'productId': 3279988,
  'skuId': 1472048,
  'bought': false,
  'sellerId': 'mash'
}, {
  'productId': 3222426,
  'skuId': 1397591,
  'bought': false,
  'sellerId': 'mash'
}]);

console.log('LISTENING on port 9011');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'application/json; charset=UTF-8'});
  response.end(json);
}).listen(9011);