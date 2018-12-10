var langs = ['en', 'th'];
var baseScriptpath = 'assets/lang/';
var langCode = 'th';
var langLoader = {};
String.prototype.lg = function () {
    return lg(this);
};
var lg = function (key) {
    var l = langLoader[key];
    return (typeof l === "undefined" ? "[" + key + "]" : l)
};
var translate = function (jsdata) {
    langLoader = jsdata;
};

var LoadLang = function (lg) {
    $.getJSON(baseScriptpath + lg + '.json', translate);
};

// get Cookie
var lang = "th";
LoadLang(lang);