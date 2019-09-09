import './js/libs/weapp-adapter'
// import './js/libs/symbol'

// import Main from './js/main'

// new Main()
// const canvas = wx.createCanvas();
const ctx = canvas.getContext('2d');
const image = wx.createImage();
image.src = 'images/bg.jpg';
var topMargin = 0;
var speed = 1;
function move(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  topMargin +=speed;
  ctx.drawImage(image,0,-canvas.height+topMargin,canvas.width,canvas.height);
  ctx.drawImage(image, 0, topMargin, canvas.width, canvas.height);
  if(topMargin >= canvas.height){
    topMargin= 0;
  }
  requestAnimationFrame(move);
}
move();
const heroimg = wx.createImage();
heroimg.src = "images/hero.png";
var herox = canvas.width/2-93;
var heroy = canvas.height/2-100;
heroimg.onload = function(){
  ctx.drawImage(heroimg,herox,heroy);
  console.log("123");
}
var touchX = herox;
var touchY= heroy;
wx.onTouchMove(function (res) {
  ctx.clearRect(touchX, touchY, 100, 100); 
  touchX = res.changedTouches[0].clientX  
  touchY = res.changedTouches[0].clientY 
  ctx.drawImage(image, touchX, touchY);
})

