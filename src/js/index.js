$(".main_header__top-burger").click(function(){
    $('.mobile-menu').animate({width:'toggle'},250,function (){
    if($('.mobile-menu').is(":visible")){
      $('body').addClass("open_body");
    }
    else{
      $('body').removeClass("open_body");
    }
  })
})
$(".close-menu").click(function(){
    $('.mobile-menu').animate({width:'toggle'},250,function (){
    if($('.mobile-menu').is(":visible")){
      $('body').addClass("open_body");
    }
    else{
      $('body').removeClass("open_body");
    }
  })
})

$(".mobile-menu ul li a").click(function(){
  
  $('.mobile-menu').hide()
  $('body').removeClass("open_body");


  

})


document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});



//video-play

const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");
const pl = document.querySelector(".play-button-wrapper")


function togglePlay() {
  pl.style.cssText = "z-index: -1;"
  video.setAttribute("controls","controls")   
 
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);

video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
     
});

video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});


$('.col_f-row').masonry({
  // options
  itemSelector: '.col_f',
  columnWidth: 270,
  fitWidth: true,
  gutter: 10
});







ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 9
  });

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.797007, 37.938118], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });

      myPlacemarkWithContent1 = new ymaps.Placemark([55.676499, 37.898125], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });

      myPlacemarkWithContent2 = new ymaps.Placemark([55.721927, 38.195964], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });


      myPlacemarkWithContent3 = new ymaps.Placemark([55.491819, 37.314312], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });

      myPlacemarkWithContent4 = new ymaps.Placemark([55.439545, 37.558757], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });

      myPlacemarkWithContent5 = new ymaps.Placemark([55.447351, 37.760631], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });

      myPlacemarkWithContent6 = new ymaps.Placemark([55.548694, 37.071239], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });
      myPlacemarkWithContent7 = new ymaps.Placemark([55.743624, 36.878978], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });

      myPlacemarkWithContent8 = new ymaps.Placemark([55.582294, 36.717564], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });

      myPlacemarkWithContent9 = new ymaps.Placemark([56.019333, 37.846409], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });

      myPlacemarkWithContent10 = new ymaps.Placemark([55.946193, 36.725804], {
         
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'img/myIcon.svg',
          iconImageSize: [37, 47],
      });

      

  myMap.geoObjects
     
      .add(myPlacemarkWithContent)
      .add(myPlacemarkWithContent1)
      .add(myPlacemarkWithContent2)
      .add(myPlacemarkWithContent3)
      .add(myPlacemarkWithContent4)
      .add(myPlacemarkWithContent5)
      .add(myPlacemarkWithContent6)
      .add(myPlacemarkWithContent7)
      .add(myPlacemarkWithContent8)
      .add(myPlacemarkWithContent9)
      .add(myPlacemarkWithContent10)



});