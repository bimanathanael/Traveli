$(window).on('load', function() {
  // $('.next').click(function(){ $('.carousel').carousel('next');return false; });
  // $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });  

  const currLoc = window.location.pathname

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 100){
      $('#mainNavbar').addClass("bg-transBlue").fadeIn()
    }else {
      $('#mainNavbar').removeClass("bg-transBlue")
    }
  });

  if( currLoc === '/'  ){
    setTimeout(function()   {
      const slider = document.querySelector('.items');
      let isDown = false;
      let startX;
      let scrollLeft;
    
      // $('#exampleModal').modal('show');
      // $('#closeModal').click(function(){
      //   $('#exampleModal').modal('hide');
      // })

      // $(".items").click('touchstart', (e) => {
      //   isDown = true;
      //   startX = e.pageX - slider.offsetLeft;
      //   scrollLeft = slider.scrollLeft;
      //   console.log(isDown, startX, scrollLeft, "<<<< TOUCHSTART",e.pageX ,slider.offsetLeft)
      // })
      // $(".items").click('touchend', function(){
      //   isDown = false;
      //   slider.classList.remove('active');
      // })
      // $(".items").click('touchmove', function(e){
      //   if(!isDown) return;
      //   e.preventDefault();
      //   const x = e.pageX - slider.offsetLeft;
      //   const walk = (x - startX) * 1; //scroll-fast
      //   slider.scrollLeft = scrollLeft - walk;
      //   console.log(walk, slider.scrollLeft);
      //   // checkRadio();
      // })

      slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.changedTouches[0].screenX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('touchend', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.changedTouches[0].screenX - slider.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        // checkRadio();
      });
      
      
      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;

      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        // checkRadio();
      });

      let currSlider = 0

      $('.prev').click(function (){ 
        let i = 300
        // while( i >= 0 ){
        //   setTimeout(function(){ 
        //     slider.scrollLeft -= 1;
        //   }, 120);
        //   i -= 1
        // }
        // console.log(currSlider, "<currSlider")
        if( currSlider < 0 ){
          currSlider += 300
          $(".items").animate({left: currSlider});
        }
        
        // console.log(slider.scrollLeft);
        // checkRadio();

        // var currentPositionOfPage = window.scrollX;
        // window.scrollTo(0, currentPositionOfPage + 150);
      });
      
      $('.next').click(function(){ 
        let i = 300
        // while ( i >= 0 ){
        //   setTimeout(function(){ 
        //     slider.scrollLeft += 1;
        //   }, 120);
        //   i -= 1
        // }
        // console.log(currSlider, "<currSlider")

        if(currSlider > -2500){
          currSlider -= 300
          $(".items").animate({left: currSlider});
        }
        
        // console.log(slider.scrollLeft);
        // checkRadio();
      });

    }, 4000);



    // features
    $(".section-1").mouseover(function(){
      $(".supplier-overview").addClass("imageSection1");
    });

    $(".section-2").mouseover(function(){
      $(".supplier-overview").addClass("imageSection2");
    });

    $(".section-3").mouseover(function(){
      $(".supplier-overview").addClass("imageSection3");
    });

    $(".section-4").mouseover(function(){
      $(".supplier-overview").addClass("imageSection4");
    });

    $(".section-5").mouseover(function(){
      $(".supplier-overview").addClass("imageSection5");
    });

    $(".section-6").mouseover(function(){
      $(".supplier-overview").addClass("imageSection6");
    });

    $(".hover-effect").mouseleave(function(){
      $(".supplier-overview").removeClass("imageSection1");
      $(".supplier-overview").removeClass("imageSection2");
      $(".supplier-overview").removeClass("imageSection3");
      $(".supplier-overview").removeClass("imageSection4");
      $(".supplier-overview").removeClass("imageSection5");
      $(".supplier-overview").removeClass("imageSection6");
    });

    // features2
    $(".section2-1").mouseover(function(){
      // console.log("masuk");
      $(".supplier-overview2").addClass("imageSection1");
    });

    $(".section2-2").mouseover(function(){
      $(".supplier-overview2").addClass("imageSection2");
    });

    $(".section2-3").mouseover(function(){
      $(".supplier-overview2").addClass("imageSection3");
    });

    $(".section2-4").mouseover(function(){
      $(".supplier-overview2").addClass("imageSection4");
    });

    $(".section2-5").mouseover(function(){
      $(".supplier-overview2").addClass("imageSection5");
    });

    $(".section2-6").mouseover(function(){
      $(".supplier-overview2").addClass("imageSection6");
    });

    $(".hover-effect2").mouseleave(function(){
      $(".supplier-overview2").removeClass("imageSection1");
      $(".supplier-overview2").removeClass("imageSection2");
      $(".supplier-overview2").removeClass("imageSection3");
      $(".supplier-overview2").removeClass("imageSection4");
      $(".supplier-overview2").removeClass("imageSection5");
      $(".supplier-overview2").removeClass("imageSection6");
    });

    // $(".rad1").click(function(){
    //   slider.scrollLeft = 0
    //   // checkRadio()
    // })

    // $(".rad2").click(function(){
    //   slider.scrollLeft = 900
    //   // checkRadio()
    // })

    // $(".rad3").click(function(){
    //   slider.scrollLeft = 1800
    //   // checkRadio()
    // })

    // $(".rad4").click(function(){
    //   slider.scrollLeft = 2700
    //   // checkRadio()
    // })

    // function checkRadio(){
    //   if (slider.scrollLeft >= 0 && slider.scrollLeft < 900) {
    //     $(".rad1").addClass("radioFilled");
    //     $(".rad2, .rad3, .rad4").removeClass("radioFilled");
    //   } else if (slider.scrollLeft >= 900 && slider.scrollLeft < 1800){
    //     $(".rad2").addClass("radioFilled");
    //     $(".rad1, .rad3, .rad4").removeClass("radioFilled");
    //   } else if (slider.scrollLeft >= 1800 && slider.scrollLeft < 2700){
    //     $(".rad3").addClass("radioFilled");
    //     $(".rad1, .rad2, .rad4").removeClass("radioFilled");
    //   } else {
    //     $(".rad4").addClass("radioFilled");
    //     $(".rad1, .rad2, .rad3").removeClass("radioFilled");
    //   } 
    // }

    $(".heroSection-1").click(function(){
      $(".heroSlider").addClass("heroSliderImg1");
      $(".heroSection-1").addClass("sliderTextActive");
      $(".heroSection-2").removeClass("sliderTextActive");
      $(".heroSection-3").removeClass("sliderTextActive");
      $(".heroSlider").removeClass("heroSliderImg2");
      $(".heroSlider").removeClass("heroSliderImg3");
    });

    $(".heroSection-2").click(function(){
      $(".heroSlider").addClass("heroSliderImg2");
      $(".heroSection-2").addClass("sliderTextActive");
      $(".heroSection-1").removeClass("sliderTextActive");
      $(".heroSection-3").removeClass("sliderTextActive");
      $(".heroSlider").removeClass("heroSliderImg1");
      $(".heroSlider").removeClass("heroSliderImg3");

    });

    $(".heroSection-3").click(function(){
      $(".heroSlider").addClass("heroSliderImg3");
      $(".heroSection-3").addClass("sliderTextActive");
      $(".heroSection-1").removeClass("sliderTextActive");
      $(".heroSection-2").removeClass("sliderTextActive");
      $(".heroSlider").removeClass("heroSliderImg1");
      $(".heroSlider").removeClass("heroSliderImg2");
    });

    $(".solution-1").hide()
    $(".solution-2").hide()
    $(".solution-3").hide()
    $(".solution-4").hide()
    $(".solution-5").hide()
    $(".solution-6").hide()

    $(".solution").click(function(){
      let curr = $(".solution").index(this) + 1

      $(this).toggleClass("solution-active")
      $(".solution-"+curr).show()
      $(this).toggleClass("solution-card-hover-" + curr);
      $( ".solution" ).not(this).removeClass("solution-active");

      for( let i = 1 ; i <= 6 ; i ++){
        if(i != curr){
          $(".solution-"+i).hide()
          $( ".solution" ).not(this).removeClass("solution-card-hover-"+i);
        }
      }
      $(this).addClass('hover');
    })


    var curr = 0

    $("#caption-0").show()
    $("#caption-1").hide()
    $("#caption-2").hide()

    var poss = 0
    $(".slideNext").click(function(){
      $("#caption-" + curr).fadeOut()
      if( curr+1 >= 3 ){
        curr = 0
      } else{
        curr ++
      }
      if(poss <= -1152){
        poss = 0
      }else{
        poss -= 576
      }
      $("#caption-" + curr).fadeIn()
      $(".imageSlider").animate({left: poss});
    });

    $(".slidePrev").click(function(){
      $("#caption-" + curr).fadeOut()
      if( curr-1 < 0  ){
        curr = 2
      } else{
        curr --
      }
      if(poss >= 0){
        poss = -1152
      }else{
        poss += 576
      }
      $("#caption-" + curr).fadeIn()
      $(".imageSlider").animate({left: poss});
    });
  }


  //maps
  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
});
