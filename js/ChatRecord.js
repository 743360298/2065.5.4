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



// data = [
//   {
//     day:'03',
//     month:'1月',
//     dynamicImg1:{
//       Img:'../images/12-1.jpg',
//       // Img:'../images/12-2.jpg',
//       // Img:'../images/12-1.jpg',
//     },
//     dynamicTxts: '很多人被命运安排，而我安排命运……',
//     // dynamicImgNum: '2'
//   },
//   {
//     day:'02',
//     month:'1月',
//     dynamicImg1: {
//       Img:'../images/12-2.jpg',
//       // Img:'../images/12-1.jpg',
//       // Img:'../images/12-1.jpg',
//     },
//     dynamicTxts: '很多人被命运安排，而我安排命运……',
//   },
//   {
//     day:'01',
//     month:'1月',
//     dynamicImg1: {
//       Img:'../images/12-2.jpg',
//       Img:'../images/12-1.jpg',
//       Img:'../images/12-1.jpg',
//     },
//     dynamicTxts: '很多人被命运安排，而我安排命运……',
//   },
// ];  

// var items = $('.dynamicList');
// var html = '';
// for(var i = 0; i < data.length ; i++){
//     var obj = data[i];
    // console.log(obj.dynamicImg1.Img);
    
//   html += 
//   '<li>'+
//   '<a href="javascript:;">'+
//     '<div class="date"><i>'+ obj.day +'</i>'+ obj.month +'</div>'+
//     '<div class="dynamicRight">'+
//         '<div class="dynamicImgs">'+
//           '<img src="' + obj.dynamicImg1.Img + '" alt="">' +
//          '</div>'+
//          '<div class="dynamicTxts">'+
//            '<span>'+ obj.dynamicTxts +'</span>'+
//            '<span class="togetherNum">共<i class="dynamicImgNum"></i>张</span>'+
//          '</div>'+
//       '</div>'+
//    ' </a>'+
//   '</li>'
// }

data = [
  {
    day:'03',
    month:'1月',
    dynamicImg1:[
        // { Img:'../images/12-1.jpg' },
        // { Img:'../images/12-2.jpg' },
        // { Img:'../images/12-1.jpg' },
     ],
    dynamicTxts: '很多人被命运安排，而我安排命运……',
  },
  {
    day:'03',
    month:'1月',
    dynamicImg1:[
        { Img:'../images/12-1.jpg' },
        // { Img:'../images/12-2.jpg' },
        // { Img:'../images/12-1.jpg' },
     ],
    dynamicTxts: '很多人被命运安排，而我安排命运……',
  },
  {
    day:'02',
    month:'1月',
    dynamicImg1:[
      { Img:'../images/12-1.jpg' },
      { Img:'../images/12-2.jpg' },
      // { Img:'../images/12-1.jpg' },
   ],
    dynamicTxts: '很多人被命运安排，而我安排命运……',
  },
  {
    day:'01',
    month:'1月',
    dynamicImg1:[
      { Img:'../images/12-1.jpg' },
      { Img:'../images/12-2.jpg' },
      { Img:'../images/12-1.jpg' },
   ],
    dynamicTxts: '很多人被命运安排，而我安排命运……',
  },
  {
    day:'01',
    month:'1月',
    dynamicImg1:[
      { Img:'../images/12-1.jpg' },
      { Img:'../images/12-2.jpg' },
      { Img:'../images/12-1.jpg' },
      { Img:'../images/12-1.jpg' },
   ],
    dynamicTxts: '很多人被命运安排，而我安排命运……',
  },
  {
    day:'01',
    month:'1月',
    dynamicImg1:[
      { Img:'../images/12-1.jpg' },
      { Img:'../images/12-2.jpg' },
      { Img:'../images/12-1.jpg' },
      { Img:'../images/12-1.jpg' },
      { Img:'../images/12-1.jpg' },
   ],
    dynamicTxts: '很多人被命运安排，而我安排命运……',
  },
];  

  // // 发布内容
  // $("#dynamicTxt").html(localStorage.getItem("dynamicTxt"));
  // // m
  // $("#month").html(localStorage.getItem("month"));
  // // date
  // $("#date").html(localStorage.getItem("date"));

  var dynamicArr = this.data.dynamicArr;
  var dynamicObj = this.data.dynamicObj;
  var month = localStorage.getItem("month")+'月'
  
  dynamicObj = {
    day:localStorage.getItem("date"),
    month:month,
    dynamicImg1:[],
    dynamicTxts : localStorage.getItem("dynamicTxt"),
  }
  
  console.log(dynamicObj);
  // if (dynamicObj.day==""&&dynamicObj.month==""&&dynamicObj.dynamicTxt=="") {
  if (dynamicObj.day==""||dynamicObj.day==null) {
      console.log('day为空');
  } else {
    data.unshift(dynamicObj);
  }
  // if (dynamicObj.month==""||dynamicObj.month==null) {
  //     console.log('month为空');
  // } else {
  //   data.unshift(dynamicObj);
  //   console.log(dynamicObj);
  // }
  // if (dynamicObj.dynamicTxt==""||dynamicObj.dynamicTxt==null) {
  //     console.log('dynamicTxt为空');
  // } else {
  //   data.unshift(dynamicObj);
  // }
 
  // console.log(data);
  // var html = template("goodsTpl",{data});
  // $('.dynamicList').html(html);
  


console.log(data);
var html = template("goodsTpl",{data});
$('.dynamicList').html(html);








// console.log($('.dynamicImgs').eq(1).children("img").length);
var total=0
$('.dynamicImgs').each(function (index, val) {
  console.log($('.dynamicImgs').eq(index).children().length);
  total = $('.dynamicImgs').eq(index).children().length
  
  // console.log($(this).siblings().children().children('.dynamicImgNum'));
  
  // arr.push(val.children("img").length)
  // console.log(total); 
  $(this).siblings().children().children('.dynamicImgNum').html(total);

  if (total == 0) {
    console.log(total);
    $(this).parent().addClass('dynamicImgs0')
  }
  if (total == 1) {
    console.log(total);
    $(this).addClass('dynamicImgs1')
  }
  if (total == 3) {
    console.log(total);
    $(this).addClass('dynamicImgs3')
  }
  if (total == 4) {
    console.log(total);
    $(this).addClass('dynamicImgs4')
  }
  if (total > 4) {
    console.log(total);
    $(this).addClass('dynamicImgs4')
  }
})







// var ImgNum = $('.dynamic .dynamicImgs img').length
// console.log($('.dynamic .dynamicImgs img').length);

// if (total == 0) {
//   console.log(total);
//   $('.dynamicImgs').parent().addClass('dynamicImgs0')
// }
// if (total == 1) {
//   $('.dynamicImgs').addClass('dynamicImgs1')
//   $('.dynamicImgs').next().children('.togetherNum').hide()  
// }
// if (total == 3) {
//   $('.dynamicImgs').addClass('dynamicImgs3')
// }
// if (total == 4) {
//   $('.dynamicImgs').addClass('dynamicImgs4')
// }
// if (total > 4) {
//   $('.dynamicImgs').addClass('dynamicImgs4')

// }
