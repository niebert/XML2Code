

/*
######## get_protoype_methods(pPrototype,pUML_data) #######
'XML2Code.get_prototype_methods()' defined in file /src/libs/method2jscc.js

var LoadFile4DOM = require('../src/main.js');
var vUML = require('../jscc/loadfile4dom_uml');

var vPrototype = LoadFile4DOM.prototype;

vUML.data.methods = get_prototype_methods(vPrototype,vUML.data);

var vContent = JSON.stringify(vUML.data, null, 4);
//console.log("JSCC:\n" + vContent);

*/

function save_file(pFilename, pContent) {
  fs.writeFile(pFilename, pContent, function(err) {
      if(err) {
          return console.log(err);
      };
      console.log("The file '" + pFilename + "' was saved!");
  });
}

function save_json(pFilename, pJSON) {
  var vContent = JSON.stringify(pJSON,null,4);
  save_file(pFilename,vContent);
}


var XML2Code = {
  "get_prototype_methods": get_prototype_methods,
  "save_file": save_file,
  "save_json": save_json
};
