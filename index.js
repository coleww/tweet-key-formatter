
var output = document.querySelector(".formatted");

document.body.addEventListener('paste', function(e){
  var data = e.clipboardData.getData('text/plain');


  console.log(data)





  // output.innerHTML = fmtJson;
});
