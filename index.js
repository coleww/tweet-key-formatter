
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
