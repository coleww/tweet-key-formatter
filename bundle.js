(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var output = document.querySelector('.formatted')

document.body.addEventListener('paste', function(e){
  var data = e.clipboardData.getData('text/plain')
  try {
    var infos = data.split('\n').map(function(s){return s.replace(/\s/g, ' ')})
    var configs = {
      consumer_key: findIt(infos, /Consumer Key \(API Key\) /),
      consumer_secret: findIt(infos, /Consumer Secret \(API Secret\) /),
      access_token: findIt(infos, /Access Token /),
      access_token_secret: findIt(infos, /Access Token Secret /)
    }
    output.innerHTML = JSON.stringify(configs, null, 2);
  } catch (e) {
    output.innerHTML = 'WOW something broke! ' + e.name + ': ' + e.message + ' |||| Are you certain that you clicked the generate access token button and copied the entire page at "https://apps.twitter.com/app/SOME_NUMBER/keys"?'
  }
});

function findIt (strings, target) {
  var match = strings.filter(function (str) {
    return str.match(target)
  })
  match = match || ['']
  return match[0].replace(target, '').replace(/\s/, '')
}

},{}]},{},[1]);
