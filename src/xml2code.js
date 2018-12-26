

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

function load_file (pFilename) {
  //var fs = require('fs');
  var vContent = fs.readFileSync(pFilename, 'utf8');
  //console.log(vContent);
  if (vContent) {
    console.log("load_file('" + pFilename + "') was sucessful");
  } else {
    vContent = " ";
    console.log("WARNING: load_file('" + pFilename + "') has no content");
  }
  return vContent;
}

function save_file(pFilename, pContent) {
  fs.writeFile(pFilename, pContent, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file '" + pFilename + "' was saved!");
  });
}

function load_json(pFilename) {
  // vJSON = require(pFilename);
  var vJSONstring = load_file(pFilename);
  var vJSON = null;
  try {
    vJSON = JSON.parse(vJSONstring);
    console.log("load_json('" + pFilename + "')");
    // console.log(JSON.parse(vJSONstring));
  } catch (objError) {
    if (objError instanceof SyntaxError) {
        console.err(objError.name);
    } else {
        console.err(objError.message);
    }
    vJSON = null;
  }
  return vJSON;
}

function save_json(pFilename, pJSON) {
  var vContent = JSON.stringify(pJSON,null,4);
  save_file(pFilename,vContent);
}

function concat_files_to_string(pFileArr) {
  var vOut = "";
  for (var i = 0; i < pFileArr.length; i++) {
    vOut += load_file(pFileArr[i]);
  }
  return vOut;
}

function is_function (obj) {
  // test if an object is a function
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

var XML2Code = {
  "get_prototype_methods": get_prototype_methods,
  "concat_files_to_string": concat_files_to_string,
  "is_function": is_function,
  "load_file": load_file,
  "save_file": save_file,
  "load_json": load_json,
  "save_json": save_json,
  "codegen": codegen
};
