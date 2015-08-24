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
    output.innerHTML = 'WOW something broke! ' + e.name + ': ' + e.message
  }
});

function findIt (strings, target) {
  var match = strings.filter(function (str) {
    return str.match(target)
  })
  match = match || ['']
  return match[0].replace(target, '')
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnZhciBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybWF0dGVkJylcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGZ1bmN0aW9uKGUpe1xuICB2YXIgZGF0YSA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJylcbiAgdHJ5IHtcbiAgICB2YXIgaW5mb3MgPSBkYXRhLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24ocyl7cmV0dXJuIHMucmVwbGFjZSgvXFxzL2csICcgJyl9KVxuICAgIHZhciBjb25maWdzID0ge1xuICAgICAgY29uc3VtZXJfa2V5OiBmaW5kSXQoaW5mb3MsIC9Db25zdW1lciBLZXkgXFwoQVBJIEtleVxcKSAvKSxcbiAgICAgIGNvbnN1bWVyX3NlY3JldDogZmluZEl0KGluZm9zLCAvQ29uc3VtZXIgU2VjcmV0IFxcKEFQSSBTZWNyZXRcXCkgLyksXG4gICAgICBhY2Nlc3NfdG9rZW46IGZpbmRJdChpbmZvcywgL0FjY2VzcyBUb2tlbiAvKSxcbiAgICAgIGFjY2Vzc190b2tlbl9zZWNyZXQ6IGZpbmRJdChpbmZvcywgL0FjY2VzcyBUb2tlbiBTZWNyZXQgLylcbiAgICB9XG4gICAgb3V0cHV0LmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZ3MsIG51bGwsIDIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgb3V0cHV0LmlubmVySFRNTCA9ICdXT1cgc29tZXRoaW5nIGJyb2tlISAnICsgZS5uYW1lICsgJzogJyArIGUubWVzc2FnZVxuICB9XG59KTtcblxuZnVuY3Rpb24gZmluZEl0IChzdHJpbmdzLCB0YXJnZXQpIHtcbiAgdmFyIG1hdGNoID0gc3RyaW5ncy5maWx0ZXIoZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIubWF0Y2godGFyZ2V0KVxuICB9KVxuICBtYXRjaCA9IG1hdGNoIHx8IFsnJ11cbiAgcmV0dXJuIG1hdGNoWzBdLnJlcGxhY2UodGFyZ2V0LCAnJylcbn1cbiJdfQ==
