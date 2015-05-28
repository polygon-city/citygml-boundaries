var DOMParser = require("xmldom").DOMParser;
var domParser = new DOMParser();

var xmldom2xml = require("xmldom-to-xml");

module.exports = citygmlBoundaries;

var citygmlBoundaries = function(xml) {
  var xmlDOM = domParser.parseFromString(xml);

  var exterior = xmldom2xml(xmlDOM.getElementsByTagName("gml:exterior"));
  var interior = xmldom2xml(xmlDOM.getElementsByTagName("gml:interior"));

  return {
    exterior: exterior,
    interior: interior
  };
};
