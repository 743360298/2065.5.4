data = [
  {
    href: './couponsDetails.html',
    circleImg: '../images/12-2.jpg',
    circleTxtTop1:'蜀客酸菜鱼（珠村店）',
    circleTxtTop2:'元气二人餐',
    circleTxtTop3:'15元',
    circleTxtTop4: '优惠券（满100元可用）',
    distance:'../images/mipmap-xhdpi/icon_distance.png',
    distancenum:'20m',
  },
  {
    href: './couponsDetails.html',
    circleImg: '../images/12-2.jpg',
    circleTxtTop1:'金拱门',
    circleTxtTop2:'单身狗套餐',
    circleTxtTop3:'15元',
    circleTxtTop4: '优惠券（满100元可用）',
    distance:'../images/mipmap-xhdpi/icon_distance.png',
    distancenum:'20m',
  },
  {
    href: './couponsDetails.html',
    circleImg: '../images/12-2.jpg',
    circleTxtTop1:'肯德基',
    circleTxtTop2:'单身狗套餐',
    circleTxtTop3:'15元',
    circleTxtTop4: '优惠券（满100元可用）',
    distance:'../images/mipmap-xhdpi/icon_distance.png',
    distancenum:'20m',
  },
  
  
];
  
var items = $('.circleList');
var html = '';
for(var i = 0; i < data.length ; i++){
    var obj = data[i];
    
  html += 
  '<li>'+
  '<a href="'+ obj.href +'">'+
  '<div class="circleImg">'+
    '<img src="'+ obj.circleImg +'" alt="">'+
  '</div>'+
    '<div class="circleTxt">'+
     ' <div class="circleTxtTop">'+
         ' <span>'+ obj.circleTxtTop1 +'</span>'+
         ' <span>'+ obj.circleTxtTop2 +'</span>'+
         ' <span><i>'+ obj.circleTxtTop3 +'</i>'+ obj.circleTxtTop4 +'</span>'+
      '</div>'+
      '<div class="circle-positioning">'+
          '<img src="'+ obj.distance +'" alt="">'+
          '<span>'+ obj.distancenum +'</span>'+
      '</div>'+
    '</div>'+
  '</a>'+
'</li>'
}
// items.innerHTML = html;

$('.circleList').html(html);