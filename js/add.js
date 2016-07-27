var firstHit = document.querySelector(".buy-ice1");
var secondHit = document.querySelector(".buy-ice2");
var thirdHit = document.querySelector(".buy-ice3");
var forthHit = document.querySelector(".buy-ice4");
var alertBtn = document.querySelector(".modal-window");
var blackMask = document.querySelector(".black-mask");
var confirmage = document.querySelector(".confirm-btn");
var b=0;
var is1=0;
var is2=0;
var is3=0;
var is4=0;
var q1=1;
var q2=1;
var q3=1;
var q4=1;

confirmage.addEventListener("click", function(e) {
  e.preventDefault();
  alertBtn.classList.add("modal-window-off");
  blackMask.classList.add("black-mask-off");
});
  
firstHit.addEventListener("click", function(e) {

  e.preventDefault();
  alertBtn.classList.remove("modal-window-off");
  blackMask.classList.remove("black-mask-off");


if (is1==0){
  var good=document.createElement('li');
  var allGoods = document.querySelector(".goods");
good.className = "goodCont";
allGoods.appendChild(good);
 
 //кнопка//

var obj = document.querySelector(".goodCont");
var offBtn=document.createElement('button')
  offBtn.className = "delete-goods";
  obj.appendChild(offBtn);

 //картинка//


var image=document.createElement('img')
  
  image.src = "img/1hit.png";
  image.width = "35"
  image.height = "35"
  obj.appendChild(image);

 //Название мороженного//
var name=document.createElement('div');
  name.innerHTML="Сливочное с апельсиновым джемом и цитрусовой стружкой";
  name.className ="ice-cream-name";
  obj.appendChild(name);
 //Количество мороженного//
var quantity=document.createElement('div');
  quantity.innerHTML=q1+" кг х 310руб";
  quantity.className ="quantity";
  obj.appendChild(quantity);
 //Сумма//
var sum=document.createElement('div');
  z1=q1*310
  sum.innerHTML=z1+"руб ";
  sum.className ="price";
  obj.appendChild(sum); 
 //Счет//

 b=b+310;
 var a = document.querySelector(".total-sum");
 a.innerHTML=b
 is1=is1+1
}
else {
	q1=q1+1
    var quantity=document.querySelector(".quantity");
	quantity.innerHTML=q1+" кг х 310руб";
    z1=q1*310
    var sum=document.querySelector(".price");
    sum.innerHTML=z1+"руб ";
    b=b+310;
    var a = document.querySelector(".total-sum");
    a.innerHTML=b
    


 //Удаление//
}
var delfirstHit = document.querySelector(".delete-goods");


delfirstHit.addEventListener("click", function(e) {
  e.preventDefault();
  var allGoods = document.querySelector(".goods");
  allGoods.removeChild(good);
  b=b-310*q1;
 var a = document.querySelector(".total-sum");
 a.innerHTML=b
 is1=is1-1
 q1=1;
});

});
//--------------------------------------------Второй товар--------------------//

secondHit.addEventListener("click", function(e) {
  e.preventDefault();
  alertBtn.classList.remove("modal-window-off");
  blackMask.classList.remove("black-mask-off");
if (is2==0){
  var good2=document.createElement('li');
  var allGoods = document.querySelector(".goods");
good2.className = "goodCont2";
allGoods.appendChild(good2);
 
 //кнопка//

var obj = document.querySelector(".goodCont2");
var offBtn=document.createElement('button')
  offBtn.className = "delete-goods2";
  obj.appendChild(offBtn);

 //картинка//


var image=document.createElement('img')
  
  image.src = "img/2hit.png";
  image.width = "35"
  image.height = "35"
  obj.appendChild(image);

 //Название мороженного//
var name=document.createElement('div');
  name.innerHTML="Сливочно-кофейное с кусочками шоколада";
  name.className ="ice-cream-name";
  obj.appendChild(name);
 //Количество мороженного//
var quantity=document.createElement('div');
  quantity.innerHTML="1 кг х 380руб";
  quantity.className ="quantity2";
  obj.appendChild(quantity);
 //Сумма//
var sum=document.createElement('div');
  sum.innerHTML="380руб ";
  sum.className ="price2";
  obj.appendChild(sum);

 //Счет//

 b=b+380;
 var a = document.querySelector(".total-sum");
 a.innerHTML=b
 is2=is2+1  
} 
else {
	q2=q2+1
    var quantity=document.querySelector(".quantity2");
	quantity.innerHTML=q2+" кг х 380руб";
    z2=q2*380
    var sum=document.querySelector(".price2");
    sum.innerHTML=z2+"руб ";
    b=b+380;
    var a = document.querySelector(".total-sum");
    a.innerHTML=b
    
 //Удаление//
}
var delsecondHit = document.querySelector(".delete-goods2");


delsecondHit.addEventListener("click", function(e) {
  e.preventDefault();
  var allGoods = document.querySelector(".goods");
  allGoods.removeChild(good2);
  b=b-380*q2;
 var a = document.querySelector(".total-sum");
 a.innerHTML=b
 is2=is2-1;
 q2=1;
});
});

//--------------------------------------------Третий товар--------------------//

thirdHit.addEventListener("click", function(e) {
  e.preventDefault();
  alertBtn.classList.remove("modal-window-off");
  blackMask.classList.remove("black-mask-off");
if (is3==0){
  var good3=document.createElement('li');
  var allGoods = document.querySelector(".goods");
good3.className = "goodCont3";
allGoods.appendChild(good3);
 
 //кнопка//

var obj = document.querySelector(".goodCont3");
var offBtn=document.createElement('button')
  offBtn.className = "delete-goods3";
  obj.appendChild(offBtn);

 //картинка//


var image=document.createElement('img')
  
  image.src = "img/3hit.png";
  image.width = "35"
  image.height = "35"
  obj.appendChild(image);

 //Название мороженного//
var name=document.createElement('div');
  name.innerHTML="Сливочно-клубничное с присыпкой из белого шоколада";
  name.className ="ice-cream-name";
  obj.appendChild(name);
 //Количество мороженного//
var quantity=document.createElement('div');
  quantity.innerHTML="1 кг х 355руб";
  quantity.className ="quantity3";
  obj.appendChild(quantity);
 //Сумма//
var sum=document.createElement('div');
  sum.innerHTML="355руб ";
  sum.className ="price3";
  obj.appendChild(sum); 

  //Счет//

 b=b+355;
 var a = document.querySelector(".total-sum");
 a.innerHTML=b 
 is3=is3+1 
}
else {
    q3=q3+1
    var quantity=document.querySelector(".quantity3");
	quantity.innerHTML=q3+" кг х 355руб";
    z3=q3*355
    var sum=document.querySelector(".price3");
    sum.innerHTML=z3+"руб ";
    b=b+355;
    var a = document.querySelector(".total-sum");
    a.innerHTML=b
 //Удаление//
}
var delthirdHit = document.querySelector(".delete-goods3");


delthirdHit.addEventListener("click", function(e) {
  e.preventDefault();
  var allGoods = document.querySelector(".goods");
  allGoods.removeChild(good3);
  b=b-355*q3;
  var a = document.querySelector(".total-sum");
  a.innerHTML=b
  is3=is3-1
  q3=1;
});
});

//--------------------------------------------Четвертый товар--------------------//

forthHit.addEventListener("click", function(e) {
  e.preventDefault();
  alertBtn.classList.remove("modal-window-off");
  blackMask.classList.remove("black-mask-off");
if (is4==0){
  var good4=document.createElement('li');
  var allGoods = document.querySelector(".goods");
good4.className = "goodCont4";
allGoods.appendChild(good4);
 
 //кнопка//

var obj = document.querySelector(".goodCont4");
var offBtn=document.createElement('button')
  offBtn.className = "delete-goods4";
  obj.appendChild(offBtn);

 //картинка//


var image=document.createElement('img')
  
  image.src = "img/4hit.png";
  image.width = "35"
  image.height = "35"
  obj.appendChild(image);

 //Название мороженного//
var name=document.createElement('div');
  name.innerHTML="Сливочно крем-брюле с карамельной подливкой";
  name.className ="ice-cream-name";
  obj.appendChild(name);
 //Количество мороженного//
var quantity=document.createElement('div');
  quantity.innerHTML="1 кг х 415руб";
  quantity.className ="quantity4";
  obj.appendChild(quantity);
 //Сумма//
var sum=document.createElement('div');
  sum.innerHTML="415руб ";
  sum.className ="price4";
  obj.appendChild(sum); 
  //Счет//

 b=b+415;
 var a = document.querySelector(".total-sum");
 a.innerHTML=b 
 is4=is4+1 
}
else {
   q4=q4+1
   var quantity=document.querySelector(".quantity4");
   quantity.innerHTML=q4+" кг х 415руб";
   z4=q4*415
   var sum=document.querySelector(".price4");
   sum.innerHTML=z4+"руб ";
   b=b+415;
   var a = document.querySelector(".total-sum");
   a.innerHTML=b	
 //Удаление//
}
var delforthHit = document.querySelector(".delete-goods4");


delforthHit.addEventListener("click", function(e) {
  e.preventDefault();
  var allGoods = document.querySelector(".goods");
  allGoods.removeChild(good4);
  b=b-415*q4;
 var a = document.querySelector(".total-sum");
 a.innerHTML=b
 is4=is4-1
 q4=1;
});
});