const JSON5 = require('json5');
function getJsonFile(filePath) {
  var json = fs.readFileSync(path.resolve(__dirname,filePath), 'utf-8');
  return JSON5.parse(json);
}

module.exports = function(app) {
  app.get('/user/userinfo',function (rep,res) {
    var json = getJsonFile('./userInfo.json5');
    res.json(Mock.mock(json));
  })
}