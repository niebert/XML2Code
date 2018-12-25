/*
const fs = require('fs');
var LoadFile4DOM = require('../src/main.js');
var vUML = require('../jscc/loadfile4dom_uml');

var vPrototype = LoadFile4DOM.prototype;
*/

function cloneJSON(pJSON) {
    return JSON.parse(JSON.stringify(pJSON));
}

function extract_body(pFunctionDef) {
  var vString = pFunctionDef + " ";
  var vBody = "";
  if (vString) {
    var begin = vString.indexOf("{");
    var end   = vString.lastIndexOf("}");
    vBody = vString.substring(begin+1,end);
  }
  return vBody;
}

function extract_param(pFunctionDef) {
  var vString = pFunctionDef + " ";
  var vParam = "";
  if (vString) {
    var begin = vString.indexOf("(");
    var end   = vString.indexOf(")");
    vParam = vString.substring(begin+1,end);
  }
  return vParam;
}

function find_name_index(pname,parray) {
  var vFound = -1;
  for (var i = 0; i < parray.length; i++) {
    if (pname == parray[i].name) {
      vFound = i;
    }
  }
  return vFound;
}

function get_method_parameter(pFunctionDef,pmethod) {
  var vParamString = extract_param(pFunctionDef);
  var vParArr = vParamString.split(",");
  var vNewPar = [];
  // console.log("pmethod="+JSON.stringify(pmethod,null,4));
  var vOldPar = pmethod.parameter;
  for (var i = 0; i < vParArr.length; i++) {
    var par_i = find_name_index(vParArr[i],vOldPar);
    if (par_i >= 0) {
      // paraemeter already exists in UML of method
      // push old parameter definition to new parameter array
      vNewPar.push(cloneJSON(vOldPar[par_i]));
    } else {
      // create the new parameter in UML model
      vNewPar.push({
          "name": vParArr[i],
          "class": " ",
          "comment": "the parameter provides ..."
        });
    }
  }
  //pmethod.parameter = vNewPar;
  return vNewPar;
}


function get_method(pMethodID,pFunctionDef,pData) {
  var vMethodHash = null;
  var vParamString = extract_param(pFunctionDef);
  var meth_i = find_name_index(pMethodID,pData.methods);
  if (meth_i >= 0) {
    console.log("Method '" + pMethodID + "(" + vParamString + ")' found");
    // method name found in vUML.data.methods
    // update the code
    vMethodHash = cloneJSON(pData.methods[meth_i]);
    vMethodHash.code = extract_body(pFunctionDef);
    vMethodHash.parameter = get_method_parameter(pFunctionDef,vMethodHash);
  } else {
    console.log("NEW Method '" + pMethodID + "(" + vParamString + ")' created in UML");
    vMethodHash = {
      "visibility": "public",
      "name": pMethodID,
      "parameter": [],
      "return": " ",
      "comment": "the method performs ...",
      "code": extract_body(pFunctionDef)
    };
    vMethodHash.parameter = get_method_parameter(pFunctionDef,vMethodHash);
  }
  // update the methods in UML model
  return vMethodHash;
}

function get_prototype_methods (pPrototype,pData) {
  var vMethArray = [];
  for (var meth_name in pPrototype) {
    if (pPrototype.hasOwnProperty(meth_name)) {
      console.log("CALL: LoadFile4DOM.prototype." + meth_name + "(" + extract_param(pPrototype[meth_name]) + ")");
      //console.log("FUNCTION: LoadFile4DOM.prototype." + variable + "\nFunction:\n"+vHash[variable]);
      //console.log("CODE: LoadFile4DOM.prototype." + variable + "\nCode:\n"+extract_body(vHash[variable]));
      //console.log("PARAM: LoadFile4DOM.prototype." + variable + "\nParam:"+extract_param(vHash[variable]));
      vMethArray.push(get_method(meth_name,pPrototype[meth_name],pData));
    }
  }
  return vMethArray;
}

/*
vUML.data.methods = get_prototype_methods(vPrototype,vUML.data);

var vContent = JSON.stringify(vUML.data, null, 4);
//console.log("JSCC:\n" + vContent);
fs.writeFile("./jscc/loadfile4dom_uml_build.json", vContent, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

*/
