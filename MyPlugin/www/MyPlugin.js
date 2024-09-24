var exec = require("cordova/exec");

exports.coolMethod = function (arg0, success, error) {
  exec(success, error, "MyPlugin", "coolMethod", [arg0]);
};

exports.showtoast = function (arg0, success, error) {
  exec(success, error, "MyPlugin", "showtoast", [arg0]);
};

exports.showtoastjs = function (arg0, success, error) {
  if (arg0 && typeof arg0 === "string" && arg0.length > 0) {
    success(arg0);
  } else {
    error("Empty message!");
  }
};

exports.echo = function (arg0, success, error) {
  exec(success, error, "MyPlugin", "echo", [arg0]);
};

exports.echojs = function (arg0, success, error) {
  if (arg0 && typeof arg0 === "string" && arg0.length > 0) {
    success(arg0);
  } else {
    error("Empty message!");
  }
};
