const express = require('express');

const app = express();
const FLAG = process.env.PT_FLAG || "NodeDummyFlag";
const PORT = process.env.PT_PORT || 8080;


app.disable('x-powered-by');

let headers =['Access-control-Allow-Credentials: true',
  'Access-control-Allow-Origin: *',
  'Cache-control: max-age=0',
  'Content-language: en',
  'Content-security-policy: default-src \'self\'; upgrade-insecure-requests; referrer no-referrer',
  'Referrer-policy: no-referrer',
  'X-content-Type-Options: nosniff',
  'X-frame-Options: SAMEORIGIN'];

function setHeader(res,id){
  var chr = "\x00";
  if (id != null && id >= 0 && id < FLAG.length) {
    chr = FLAG[id];
  }
  var bin = chr.charCodeAt().toString(2);
  bin = Array(8-bin.length+1).join("0") + bin;

  for (var i = 0; i < headers.length; i++ ) {
    var hs = headers[i];
    var aHs = hs.split(":");
    if (bin[i] == "0") {
      res.set(aHs[0], aHs[1]);
    }else{
      var minus = aHs[0].indexOf("-");
      var customH = aHs[0].slice(0,minus+1) + aHs[0][minus+1].toUpperCase() + aHs[0].slice(minus+2);
      res.set(customH, aHs[1]);
    }
  }
}
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');

});

app.get('/thumb', async (req, res) => {
	try {
        var id = req.query.id;
	setHeader(res, parseInt(id));
	res.sendFile(__dirname + '/public/stega-'+parseInt(id)+'.jpg');//If id is not an int, we will have NaN
	}catch (e) {
        	console.log(e);
	        return res.end('error');
    }
});

app.listen(PORT);
console.log("Started on " + PORT);
