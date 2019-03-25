data = [
  {
    num: 1,
    news:"前端1"
  },
  {
    num: 2,
    news:"前端2"
  },
  {
    num: 3,
    news:"前端3"
  },
  {
    num: 4,
    news:"前端4"
  },
  {
    num: 5,
    news:"前端5"
  },
  {
    num: 6,
    news:"前端6"
  },
  {
    num: 7,
    news:"前端7"
  },
  {
    num: 8,
    news:"前端8"
  },
  {
    num: 9,
    news:"前端9"
  },
  {
    num: 10,
    news:"前端10"
  },
  
  
];
  
var items = $('.hotSearchList');
var html = '';
for(var i = 0; i < data.length ; i++){
    var obj = data[i];
    
  html += 
  '<li>'+
  '<a href="javascript:;">'+
    '<span>'+obj.num+'</span>'+
    '<span>'+obj.news+'</span>'+
  '</a>'+
'</li>'
}
// items.innerHTML = html;

$('.hotSearchList').html(html);