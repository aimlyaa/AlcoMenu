// переменная для ползунка цены
var Slider = $("input.slider").slider();
// булевая переменная проверки фулскрина фотографии вина
let imageFullscreen = false; 
// список для корректной работы фильтра
let selected = [];
	// главный вертикальный свайпер
    var swiperH = new Swiper('.swiper-container-h', {
    	direction: 'vertical',
        pagination: '.swiper-pagination-h',
        paginationClickable: true,
        spaceBetween: 0,
		grabCursor:true,
		shortSwipes:false,
		longSwipesRatio:0.2,
		longSwipesMs:50,
		initialSlide:1,
		centeredSlides: true,
	});
	// свайпер параметров вина
    var swiperV = new Swiper('.swiper-container-v', {
        direction: 'horizontal',
        nested: true,
		loop: true,
		effect: 'slide',
		spaceBetween: 0,
		grabCursor:true,
		shortSwipes:false,
		longSwipesRatio:0.2,
		longSwipesMs:50,
		centeredSlides: true,
		on: {
		slideChange: function () {
			setTimeout(sync_slide, 1,this.activeIndex);
		},
		},
	});
	// свайпер описания вина
	var swiperV_about = new Swiper('.swiper-container-v-about', {
	direction: 'horizontal',
	nested: true,
	loop: true,
	effect: 'slide',
	spaceBetween: 0,
	grabCursor:true,
	shortSwipes:false,
	longSwipesRatio:0.2,
	longSwipesMs:50,
	centeredSlides: true,
	on: {
	slideChange: function () {
		    setTimeout(sync_slide, 1,this.activeIndex);
	},
	},
	});
	// свайпер каталога
	var catalog_swiperV = new Swiper('.catalog-swiper-container-v', {
        pagination: '.swiper-pagination-v',
        paginationClickable: true,
        direction: 'horizontal',
        slidesPerView: 3,
		preloadImages: false,
		lazy: true,
		slidesPerColumn: 2,
		spaceBetween: 0,
		centeredSlides: true,
		initialSlide:1,
		on: {
		click: function () {
			sync_slide(this.clickedIndex);
			swiperH.slideTo(2);
		},
		},
		breakpoints: {
			2160: {
				slidesPerView: 7,
				spaceBetween: 9,
			  },
			1440: {
				slidesPerView: 6,
				spaceBetween: 8,
			  },
			1200: {
				slidesPerView: 5,
				spaceBetween: 7,
			  },
			1024: {
			  slidesPerView: 4,
			  spaceBetween: 6,
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 5,
			},
			640: {
			  slidesPerView: 2,
			  spaceBetween: 4,
			},
			320: {
			  slidesPerView: 1,
			  spaceBetween: 3,
			}
	  },
        nested: true
	});
// ползунок цены
$("#ex2").slider({});
$("#ex2").slider();
$("#ex2").on("slide", function(slideEvt) {
	$("#ex2SliderVal").text(slideEvt.value[0]);
});
$("#ex2").on("slide", function(slideEvt) {
	$("#ex2SliderVal2").text(slideEvt.value[1]);
});
// скрытие лишних полей фильтрации при загрузке страницы
$('#exampleFormControlSelect2').hide();
$('#exampleFormControlSelect3').hide();
$('#exampleFormControlSelect4').hide();
$('#exampleFormControlSelect5').hide();
$('#exampleFormControlSelect6').hide();
$('#exampleFormControlSelect7').hide();
$('#exampleFormControlSelect8').hide();
$('#exampleFormControlSelect9').hide();

// синхронизация слайда параметров вина с его описанием при свайпе
function sync_slide(new_slide){
	if(swiperV.activeIndex != new_slide){
		swiperV.slideTo(new_slide);
	}
	if(swiperV_about.activeIndex != new_slide){
		swiperV_about.slideTo(new_slide);
	}
	
};
//Анимация развертки и свертки фотографии
$( window ).click(function(){
    if (imageFullscreen){
		$(".alco-photo").animate({width: "40vw"});
        setTimeout(function(){$(".alco-par").animate({opacity:"1"});}, 200);
        setTimeout(function(){imageFullscreen = false;}, 100);
    }
});
$(".alco-photo").click(function(){
    if (!imageFullscreen){
        setTimeout(function(){$(".alco-photo").animate({width: "100vw"});}, 200);
		$(".alco-par").animate({opacity:"0"});
		$(".alco-about").animate({opacity:"1"});
        setTimeout(function(){imageFullscreen = true;}, 100);
    }
    else{
        $(".alco-photo").animate({width: "40vw"});
        setTimeout(function(){$(".alco-par").animate({opacity:"1"});}, 200);
        setTimeout(function(){imageFullscreen = false;}, 100);
    }
});
// Появление новых полей в фильтре
$("#exampleFormControlSelect1").click(function(){
	if (this.selectedIndex !=0 && selected[0] != this.selectedIndex){
		$('#exampleFormControlSelect2').show();
	}
	selected[0] = this.selectedIndex;
});
$("#exampleFormControlSelect2").click(function(){
	if (this.selectedIndex !=0 && selected[1] != this.selectedIndex){
		$('#exampleFormControlSelect3').show();
	}
	selected[1] = this.selectedIndex;
});
$("#exampleFormControlSelect3").click(function(){
	if (this.selectedIndex !=0 && selected[2] != this.selectedIndex){
		$('#exampleFormControlSelect4').show();
	}
	selected[2] = this.selectedIndex;
});
$("#exampleFormControlSelect4").click(function(){
	if (this.selectedIndex !=0 && selected[3] != this.selectedIndex){
		$('#exampleFormControlSelect5').show();
	}
	selected[3] = this.selectedIndex;
});
$("#exampleFormControlSelect5").click(function(){
	if (this.selectedIndex !=0 && selected[4] != this.selectedIndex){
		$('#exampleFormControlSelect6').show();
	}
	selected[4] = this.selectedIndex;
});
$("#exampleFormControlSelect6").click(function(){
	if (this.selectedIndex !=0 && selected[5] != this.selectedIndex){
		$('#exampleFormControlSelect7').show();
	}
	selected[5] = this.selectedIndex;
});
$("#exampleFormControlSelect7").click(function(){
	if (this.selectedIndex !=0 && selected[6] != this.selectedIndex){
		$('#exampleFormControlSelect8').show();
	}
	selected[6] = this.selectedIndex;
});
$("#exampleFormControlSelect8").click(function(){
	if (this.selectedIndex !=0 && selected[7] != this.selectedIndex){
		$('#exampleFormControlSelect9').show();
	}
	selected[7] = this.selectedIndex;
});