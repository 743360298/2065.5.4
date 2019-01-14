data = [
  {
    href: './couponsDetails.html',
    strategyImg: '../images/timg.jpg',
    strategytitle: '单身狗1',
    message:'10',
    good:'666',
    delete:'15元',
    distance:'../images/mipmap-xhdpi/icon_distance.png',
    distancenum:'20m',
  },
  {
    href: './couponsDetails.html',
    strategyImg: '../images/timg.jpg',
    strategytitle: '单身狗2',
    message:'10',
    good:'666',
    delete:'15元',
    distance:'../images/mipmap-xhdpi/icon_distance.png',
    distancenum:'20m',
  },
  {
    href: './couponsDetails.html',
    strategyImg: '../images/timg.jpg',
    strategytitle: '单身狗3',
    message:'10',
    good:'666',
    delete:'15元',
    distance:'../images/mipmap-xhdpi/icon_distance.png',
    distancenum:'20m',
  },

  
  
];
  
var items = $('.strategyList');
var html = '';
for(var i = 0; i < data.length ; i++){
    var obj = data[i];
    
  html += 
  '<li>'+
    '<a href="javascript:;">'+
      '<div class="strategyItem">'+
        '<img src="'+ obj.strategyImg +'" alt="">'+
        '<div class="strategytitle"><span>'+ obj.strategytitle +'</span></div>'+
        '<div class="strategyComments">'+
          '<div><img src="../images/mipmap-xhdpi/icon_message.png" alt=""><span>'+ obj.message +'</span></div>'+
          '<div><img src="../images/mipmap-xhdpi/icon_good.png" alt=""><span>'+ obj.good +'</span></div>'+
          '<div class="deleteBtn"><img src="../images/mipmap-xhdpi/delete.png" alt=""><span>删除</span></div>'+
        '</div>'+
      '</div>'+
   ' </a>'+
  '</li>'
}
// items.innerHTML = html;

$('.strategyList').html(html);

data = [
  {
    href: './couponsDetails.html',
    strategyImg: '../images/12-2.jpg',
    strategy1: '蜀客酸菜鱼（珠村店）',
    strategy2: '酸菜鱼',
  },
  {
    href: './couponsDetails.html',
    strategyImg: '../images/12-2.jpg',
    strategy1: '真功夫',
    strategy2: '酸菜鱼',
  },
  {
    href: './couponsDetails.html',
    strategyImg: '../images/12-2.jpg',
    strategy1: '肯德基',
    strategy2: '肯德基',
  },
  {
    href: './couponsDetails.html',
    strategyImg: '../images/12-2.jpg',
    strategy1: '麦当劳',
    strategy2: '麦当劳',
  },


  
  
];
  
var items = $('.collectionList');
var html = '';
for(var i = 0; i < data.length ; i++){
    var obj = data[i];
    
  html += 
  '<li class="collectionLi">'+
  '<a href="javascript:;">'+
    '<div class="collectionItem">'+
      '<img src="'+ obj.strategyImg +'" alt="">'+
      '<div class="collectionTxt">'+
        '<span>'+ obj.strategy1 +'</span>'+
        '<span>'+ obj.strategy2 +'</span>'+
      '</div>'+
   ' </div>'+
    '<div class="h_top">置顶</div>'+
    '<div class="h_del">删除</div>'+
  '</a>'
'</li>'
}
// items.innerHTML = html;

$('.collectionList').html(html);


// 优惠券未使用
data = [
  {
    href: './couponsDetails.html',
    noUseImg: '../images/12-2.jpg',
    noUse1: '蜀客酸菜鱼（珠村店）',
    noUse2: '元气二人餐',
    noUse3: '优惠券（满100元可用）',
    noUse4: '有效期：2018.07.01-2018.08.31',
    price: '15元',
  },
  {
    href: './couponsDetails.html',
    noUseImg: '../images/12-2.jpg',
    noUse1: '肯德基',
    noUse2: '单身狗套餐',
    noUse3: '优惠券（满100元可用）',
    noUse4: '有效期：2018.07.01-2018.08.31',
    price: '20元',
  },
  {
    href: './couponsDetails.html',
    noUseImg: '../images/12-2.jpg',
    noUse1: '麦当劳',
    noUse2: '肥宅套餐',
    noUse3: '优惠券（满100元可用）',
    noUse4: '有效期：2018.07.01-2018.08.31',
    price: '20元',
  },



  
  
];
  
var items = $('.noUse');
var html = '';
for(var i = 0; i < data.length ; i++){
    var obj = data[i];
    
  html += 
 ' <li>'+
  '<a href="'+ obj.href +'">'+
    '<div class="noUseItem">'+
      '<img src="'+ obj.noUseImg +'" alt="">'+
      '<div class="noUseRight">'+
        '<span>'+ obj.noUse1 +'</span>'+
        '<span>'+ obj.noUse2 +'</span>'+
        '<span><i>'+ obj.price +'</i>'+ obj.noUse3 +'</span>'+
        '<span class="divider"></span>'+
        '<span>'+ obj.noUse4 +'</span>'+
      '</div>'+
    '</div>'+
  '</a>'+
'</li>'
}
// items.innerHTML = html;

$('.noUse').html(html);



// 优惠券已使用
data = [
  {
    href: './hasUsedDetails.html',
    noUseImg: '../images/12-2.jpg',
    noUse1: '蜀客酸菜鱼（珠村店）',
    noUse2: '元气二人餐',
    noUse3: '优惠券（满100元可用）',
    noUse4: '有效期：2018.07.01-2018.08.31',
    price: '15元',
  },
  {
    href: './hasUsedDetails.html',
    noUseImg: '../images/12-2.jpg',
    noUse1: '肯德基',
    noUse2: '单身狗套餐',
    noUse3: '优惠券（满100元可用）',
    noUse4: '有效期：2018.07.01-2018.08.31',
    price: '20元',
  },
  {
    href: './hasUsedDetails.html',
    noUseImg: '../images/12-2.jpg',
    noUse1: '麦当劳',
    noUse2: '肥宅套餐',
    noUse3: '优惠券（满100元可用）',
    noUse4: '有效期：2018.07.01-2018.08.31',
    price: '25元',
  },



  
  
];
  
var items = $('.noUse');
var html = '';
for(var i = 0; i < data.length ; i++){
    var obj = data[i];
    
  html += 
 ' <li>'+
  '<a href="'+ obj.href +'">'+
    '<div class="noUseItem">'+
      '<img src="'+ obj.noUseImg +'" alt="">'+
      '<div class="noUseRight">'+
        '<span>'+ obj.noUse1 +'</span>'+
        '<span>'+ obj.noUse2 +'</span>'+
        '<span><i>'+ obj.price +'</i>'+ obj.noUse3 +'</span>'+
        '<span class="divider"></span>'+
        '<span>'+ obj.noUse4 +'</span>'+
      '</div>'+
    '</div>'+
  '</a>'+
'</li>'
}
// items.innerHTML = html;

$('.hasUsed').html(html);

