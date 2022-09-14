$(document).ready(function () {
  $(".search-icon").click(function () {
    $(".search-box").toggleClass("better");
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $(".header-box").addClass("sticky");
    } else {
      $(".header-box").removeClass("sticky");
    }
  });
});

let logo = document.getElementById("logo");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 10) {
    logo.style.transform = "scale(0.8)";
  } else {
    logo.style.transform = "scale(1)";
  }
});

let logo1 = document.getElementById("logo1");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 10) {
    logo.style.transform = "scale(0.8)";
  } else {
    logo.style.transform = "scale(1)";
  }
});

// $(document).ready(function () {
//   $("#my-icon").click(function () {
//     $("#text").toggleClass("my-design");
//   });
// });

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.getElementById('text').classList.add('mydesign');
//   } else {
//     document.getElementById('text').classList.remove('mydesign');

//   }
// }

// var x = window.matchMedia("(min-width: 1025px) and (max-width:1200px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction)

$(document).ready(function () {
  // $('#maindiv').hide();

  $("#icon").click(function () {
    $("#maindiv").slideToggle(1000);
  });
});

$(document).ready(function () {
  $(".main").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});



$(document).ready(function () {
  $(".wedding-info").hide(0);
  $(".wedding").click(function () {
    $(".wedding-info").toggle();
    $("#click").toggleClass("bg");
  });
});


$(document).ready(function () {
  $('.wed-cont').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplayHoverPause: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});




$(document).ready(function () {

  $('.scroll_top').hide(0);

  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('.scroll_top').show(300);
    }

    else {
      $('.scroll_top').hide(300);
    }

  });

});

$(document).ready(function () {
  $('.scroll_top').click(function () {

    $('html, body').animate({
      scrollTop: 0
    }, 1000);

  });
});

// swiper js

const swiper = new Swiper('.swiper', {

  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },


});


const vendor = new Swiper('.venslider', {

  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});



$(document).ready(function () {
  $(".ven-infobox").hide(0);
  $(".veninfo").click(function () {
    $(".ven-infobox").toggle();
    $("#vendorclick").toggleClass("bg");
  });
});


window.oncontextmenu = function () {
  return false;
}
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74) || (event.ctrlKey && event.shiftKey && event.keyCode == 77)) {
    return false;
  }
});















