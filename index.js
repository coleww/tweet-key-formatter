
var output = document.querySelector('.formatted')

document.body.addEventListener('paste', function(e){
  var data = e.clipboardData.getData('text/plain')
  var infos = data.split('\n')
  var configs = {
    consumer_key: findIt(infos, /Consumer Key \(API Key\) /),
    consumer_secret: findIt(infos, /Consumer Secret \(API Secret\) /),
    access_token: findIt(infos, /Access Token  /),
    access_token_secret: findIt(infos, /Access Token Secret /)
  }
  output.innerHTML = JSON.stringify(configs, null, 2);
});

function findIt (strings, target) {
  console.log(target)
  return strings.filter(function (str) {
    console.log(str, target, str.match(target))
    if(str.match(target)) console.log(str, target)
    return str.match(target)
  })[0].replace(target, '')
}
