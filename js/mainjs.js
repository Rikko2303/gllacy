var mas = ["img/firstpair.png","img/secondpair.png","img/thirdpair.png"]
var firstSlide = document.querySelector(".slider1");
var secondSlide = document.querySelector(".slider2");
var thirdSlide = document.querySelector(".slider3");
var background = document.querySelector(".main-container");
var mainHead = document.querySelector(".ice-cream"); 
var c;
var a;

function firstButton(e) {
	var obj = document.querySelector(".main-img");
	var backgr = document.querySelector(".main-container");
	backgr.style.backgroundColor = "#849d8f";

	obj.src = mas[0];
	
	mainHead.innerHTML ="Крем-брюле и пломбир<br>с малиновым джемом";
	
	thirdSlide.classList.remove("slider-on");
	secondSlide.classList.remove("slider-on");
	firstSlide.classList.add("slider-on");
	clearTimeout(c);
	//clearTimeout(a);
	//var a=setTimeout(firstFunc,10000);
	
	




}
function secondButton(e) {
	var obj = document.querySelector(".main-img");
	var backgr = document.querySelector(".main-container");
	backgr.style.backgroundColor = "#8996a6";

	obj.src = mas[1]
	
	mainHead.innerHTML ="Шоколадный пломбир<br> и лимонный сорбет";

	thirdSlide.classList.remove("slider-on");
	secondSlide.classList.add("slider-on");
	firstSlide.classList.remove("slider-on");
	clearTimeout(c);
	//clearTimeout(a);
	//var a=setTimeout(secondFunc,10000);
	
	
	




}
function thirdButton(e) {
	var obj = document.querySelector(".main-img");
	var backgr = document.querySelector(".main-container");
	backgr.style.backgroundColor = "#9d8b84";
	
	obj.src = mas[2]

	mainHead.innerHTML ="Пломбир с помадкой<br> и клубничный щербет";
	
	thirdSlide.classList.add("slider-on");
	secondSlide.classList.remove("slider-on");
	firstSlide.classList.remove("slider-on");
	clearTimeout(c);
	//clearTimeout(a);
	//var a=setTimeout(thirdFunc,10000);
	


}

//Таймер автоматического переключения до первого ручного переключения интв 10 сек//
var a=setTimeout(firstFunc,10000);



function firstFunc(e) {
	secondB();
	var b=setTimeout (secondFunc, 10000);
	c=b;
}
function secondFunc(e) {
	thirdB();
	var b=setTimeout (thirdFunc, 10000);
	c=b;
}
function thirdFunc(e) {
	firstB();
    var b=setTimeout(firstFunc, 10000)
    c=b;
}
//доп функции//
function firstB(e) {
	var obj = document.querySelector(".main-img");
	var backgr = document.querySelector(".main-container");
	backgr.style.backgroundColor = "#849d8f";

	obj.src = mas[0];
	
	mainHead.innerHTML ="Крем-брюле и пломбир<br>с малиновым джемом";
	
	thirdSlide.classList.remove("slider-on");
	secondSlide.classList.remove("slider-on");
	firstSlide.classList.add("slider-on");
	


}
function secondB(e) {
	var obj = document.querySelector(".main-img");
	var backgr = document.querySelector(".main-container");
	backgr.style.backgroundColor = "#8996a6";

	obj.src = mas[1]
	
	mainHead.innerHTML ="Шоколадный пломбир<br> и лимонный сорбет";

	thirdSlide.classList.remove("slider-on");
	secondSlide.classList.add("slider-on");
	firstSlide.classList.remove("slider-on");
	


}
function thirdB(e) {
	var obj = document.querySelector(".main-img");
	var backgr = document.querySelector(".main-container");
	backgr.style.backgroundColor = "#9d8b84";
	
	obj.src = mas[2]

	mainHead.innerHTML ="Пломбир с помадкой<br> и клубничный щербет";
	
	thirdSlide.classList.add("slider-on");
	secondSlide.classList.remove("slider-on");
	firstSlide.classList.remove("slider-on");
}