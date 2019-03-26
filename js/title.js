window.onload=function(){
  var title = document.querySelector("title");
  var titleTxt = $('.mui-title').text()
  // console.log(titleTxt);
  title.innerHTML = titleTxt;
}