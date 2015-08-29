(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var JSONoutput = document.querySelector('.json')
var YAMLoutput = document.querySelector('.yaml')

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
    var stringy = JSON.stringify(configs, null, 2)
    JSONoutput.innerHTML = stringy


    YAMLoutput.innerHTML = stringy.replace(/(\"|\{|\}|  |\,)/g, '')
  } catch (e) {
    error.innerHTML = 'WOW something broke! ' + e.name + ': ' + e.message + ' |||| Are you certain that you clicked the generate access token button and copied the entire page at "https://apps.twitter.com/app/SOME_NUMBER/keys"?'
  }
});

function findIt (strings, target) {
  var match = strings.filter(function (str) {
    return str.match(target)
  })
  match = match || ['']
  return match[0].replace(target, '').replace(/\s/, '')
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG52YXIgSlNPTm91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc29uJylcbnZhciBZQU1Mb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnlhbWwnKVxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgZnVuY3Rpb24oZSl7XG4gIHZhciBkYXRhID0gZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKVxuICB0cnkge1xuICAgIHZhciBpbmZvcyA9IGRhdGEuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihzKXtyZXR1cm4gcy5yZXBsYWNlKC9cXHMvZywgJyAnKX0pXG4gICAgdmFyIGNvbmZpZ3MgPSB7XG4gICAgICBjb25zdW1lcl9rZXk6IGZpbmRJdChpbmZvcywgL0NvbnN1bWVyIEtleSBcXChBUEkgS2V5XFwpIC8pLFxuICAgICAgY29uc3VtZXJfc2VjcmV0OiBmaW5kSXQoaW5mb3MsIC9Db25zdW1lciBTZWNyZXQgXFwoQVBJIFNlY3JldFxcKSAvKSxcbiAgICAgIGFjY2Vzc190b2tlbjogZmluZEl0KGluZm9zLCAvQWNjZXNzIFRva2VuIC8pLFxuICAgICAgYWNjZXNzX3Rva2VuX3NlY3JldDogZmluZEl0KGluZm9zLCAvQWNjZXNzIFRva2VuIFNlY3JldCAvKVxuICAgIH1cbiAgICB2YXIgc3RyaW5neSA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZ3MsIG51bGwsIDIpXG4gICAgSlNPTm91dHB1dC5pbm5lckhUTUwgPSBzdHJpbmd5XG5cblxuICAgIFlBTUxvdXRwdXQuaW5uZXJIVE1MID0gc3RyaW5neS5yZXBsYWNlKC8oXFxcInxcXHt8XFx9fCAgfFxcLCkvZywgJycpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlcnJvci5pbm5lckhUTUwgPSAnV09XIHNvbWV0aGluZyBicm9rZSEgJyArIGUubmFtZSArICc6ICcgKyBlLm1lc3NhZ2UgKyAnIHx8fHwgQXJlIHlvdSBjZXJ0YWluIHRoYXQgeW91IGNsaWNrZWQgdGhlIGdlbmVyYXRlIGFjY2VzcyB0b2tlbiBidXR0b24gYW5kIGNvcGllZCB0aGUgZW50aXJlIHBhZ2UgYXQgXCJodHRwczovL2FwcHMudHdpdHRlci5jb20vYXBwL1NPTUVfTlVNQkVSL2tleXNcIj8nXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmaW5kSXQgKHN0cmluZ3MsIHRhcmdldCkge1xuICB2YXIgbWF0Y2ggPSBzdHJpbmdzLmZpbHRlcihmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5tYXRjaCh0YXJnZXQpXG4gIH0pXG4gIG1hdGNoID0gbWF0Y2ggfHwgWycnXVxuICByZXR1cm4gbWF0Y2hbMF0ucmVwbGFjZSh0YXJnZXQsICcnKS5yZXBsYWNlKC9cXHMvLCAnJylcbn1cbiJdfQ==
