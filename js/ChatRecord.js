data = [
  { browImg:'../images/default/0.gif' },
  { browImg:'../images/default/1.gif' },
  { browImg:'../images/default/2.gif' },
  { browImg:'../images/default/3.gif' },
  { browImg:'../images/default/4.gif' },
  { browImg:'../images/default/5.gif' },
  { browImg:'../images/default/6.gif' },
  { browImg:'../images/default/7.gif' },
  { browImg:'../images/default/8.gif' },
  { browImg:'../images/default/9.gif' },
  { browImg:'../images/default/10.gif' },
  { browImg:'../images/default/11.gif' },
  { browImg:'../images/default/12.gif' },
  { browImg:'../images/default/13.gif' },
  { browImg:'../images/default/14.gif' },
  { browImg:'../images/default/6.gif' },
  
];
  
var items = $('#browList');
var html = '';
for(var i = 0; i < data.length ; i++){
    var obj = data[i];
    
  html += '<li>'+
           ' <a href="javascript:;" >'+
               '<img src="'+ obj.browImg +'" alt="">'+
            '</a>'+
          '</li>'
}
// items.innerHTML = html;

$('#browList').html(html);