$(document).ready(function () {
    // Will wait for everything on the page to load.
    // $(window).bind('load', function() {
    //     $('.overlay').addClass('loaded');
    //     setTimeout(function() {
    //         $('.overlay').css({'display':'none'})
    //     }, 1000)
    // });
    
    // Will remove overlay after 1min for users cannnot load properly.
    // setTimeout(function() {
    //     $('.overlay').addClass('loaded');
    // }, 500);
    
	$(".toggle-bar a").click(function (e) {
       $(this).toggleClass("open");
       $(".full-screen-menu").toggleClass("open");
       $("body").toggleClass("overflow-hidden");
       $("#fp-nav").toggleClass("hidden-block");
       e.preventDefault();
      });

	var myFullpage = new fullpage('#fullpage', {
          menu: '#menu',
          lazyLoad: false,
          scrollOverflow: true,
          navigation: true,
          licenseKey: '3C67B678-F5D245D8-A034EB85-5B6C610F',
          slidesNavigation: true,
          sectionSelector: '.page',
            afterLoad: function(anchorLink, index) {
                //first section
                $('.first-slide .left-mobile-top').removeClass('animate__animated animate__fadeInUp  opacity-1');
                $('.first-slide .head-title').removeClass('animate__animated animate__fadeInUp  opacity-1');
                $('.first-slide .first-des').removeClass('animate__animated animate__fadeInUp  opacity-1');
                $('.first-slide .input-group').removeClass('animate__animated animate__fadeInUp  opacity-1');  
                $('.first-slide .app-link').removeClass('animate__animated animate__fadeInUp  opacity-1');
                //second section
                $('.second-slide .middle-img').removeClass('animate__animated animate__zoomIn animate__delay-0.5s  opacity-1');
                $('.second-slide .block-one div').removeClass('animate__animated animate__fadeInUp animate__delay-0.7s  opacity-1');
                $('.second-slide .block-two div').removeClass('animate__animated animate__fadeInUp  animate__delay-0.9s opacity-1'); 
                $('.second-slide .title-work').removeClass('animate__animated animate__zoomIn  opacity-1');
                //Third section
                $('.third-slide .title-work').removeClass('animate__animated fadeInUp  opacity-1');
                $('.phone-tab-block').removeClass('animate__animated animate__fadeInUpBig opacity-1');
                $('.title-work1').removeClass('animate__animated animate__zoomIn  opacity-1');
                $('.title-work2').removeClass('animate__animated animate__zoomIn  opacity-1');
                $('.title-work3').removeClass('animate__animated animate__zoomIn  opacity-1');
                $('.third-slide .title-work').removeClass('animate__animated animate__zoomIn  opacity-1');
                //Third section
                $('.fourth-slide .title-work').removeClass('animate__animated animate__zoomIn  opacity-1');
                $('.budget-banner-img').removeClass('animate__animated animate__fadeInUp opacity-1');
                $('.heading-animation-1').removeClass('animate__animated animate__fadeInUp opacity-1');
                $('.paragraph-heading-1').removeClass('animate__animated animate__fadeInUp opacity-1');
                $('.heading-animation-2').removeClass('animate__animated animate__fadeInUp opacity-1');
                $('.paragraph-heading-2').removeClass('animate__animated animate__fadeInUp opacity-1');
                //fifth section
                $('.fifth-slide .title-work').removeClass('animate__animated animate__zoomIn  opacity-1');
                $('.payaid-img-block').removeClass('animate__animated animate__zoomIn opacity-1');
                $('li.one').removeClass('animate__animated animate__fadeInUp opacity-1');
                $('li.two').removeClass('animate__animated animate__fadeInUp opacity-1');
                $('li.three').removeClass('animate__animated animate__fadeInUp opacity-1');
                $('.fifth-slide .text-last').removeClass('animate__animated animate__fadeInUp  opacity-1');
                //Sixth section
                $('.six-slide .title-work').removeClass('animate__animated animate__zoomIn  opacity-1');
                $('.download-banner-title h2').removeClass('animate__animated animate__fadeInUp  opacity-1');
                $('.download-btn-link').removeClass('animate__animated animate__fadeInUp  opacity-1');
                $('.last-store-block').removeClass('animate__animated animate__fadeInUp  opacity-1');

                if(index.index == 0){ 
                    $('.first-slide .left-mobile-top').addClass('animate__animated animate__fadeInUp  opacity-1');
                    $('.first-slide .head-title').addClass('animate__animated animate__fadeInUp  opacity-1');
                    $('.first-slide .first-des').addClass('animate__animated animate__fadeInUp  opacity-1');
                    $('.first-slide .input-group').addClass('animate__animated animate__fadeInUp  opacity-1');  
                    $('.first-slide .app-link').addClass('animate__animated animate__fadeInUp  opacity-1');     
                }

                else if(index.index == 1){ 
                    $('.second-slide .title-work').addClass('animate__animated animate__zoomIn  opacity-1');
                    $('.second-slide .middle-img').addClass('animate__animated animate__zoomIn animate__delay-0.5s  opacity-1');
                    $('.second-slide .block-one div').addClass('animate__animated animate__fadeInUp animate__delay-0.7s  opacity-1');
                    $('.second-slide .block-two div').addClass('animate__animated animate__fadeInUp  animate__delay-0.9s opacity-1');     
                }   

                else if(index.index == 2){                    
                    $('.third-slide .title-work').addClass('animate__animated animate__zoomIn  opacity-1');
                    $('.title-work1').addClass('animate__animated animate__zoomIn  opacity-1');
                    $('.title-work2').addClass('animate__animated animate__zoomIn  opacity-1');
                    $('.title-work3').addClass('animate__animated animate__zoomIn  opacity-1');
                    $('.phone-tab-block').addClass('animate__animated animate__fadeInUpBig opacity-1');
                }
                
                else if(index.index == 3){                    
                    $('.fourth-slide .title-work').addClass('animate__animated animate__zoomIn  opacity-1');
                    $('.budget-banner-img').addClass('animate__animated animate__zoomIn opacity-1');
                    $('.heading-animation-1').addClass('animate__animated animate__fadeInUp opacity-1');
                    $('.paragraph-heading-1').addClass('animate__animated animate__fadeInUp opacity-1');
                    $('.heading-animation-2').addClass('animate__animated animate__fadeInUp opacity-1');
                    $('.paragraph-heading-2').addClass('animate__animated animate__fadeInUp opacity-1');
                }

                else if(index.index == 4){                    
                    $('.fifth-slide .title-work').addClass('animate__animated animate__zoomIn  opacity-1');
                    $('.payaid-img-block').addClass('animate__animated animate__zoomIn opacity-1');
                    $('li.one').addClass('animate__animated animate__fadeInUp opacity-1');
                    $('li.two').addClass('animate__animated animate__fadeInUp opacity-1');
                    $('li.three').addClass('animate__animated animate__fadeInUp opacity-1');
                    $('.fifth-slide .text-last').addClass('animate__animated animate__fadeInUp  opacity-1');
                }

                else if(index.index == 5){                    
                    $('.six-slide .title-work').addClass('animate__animated animate__zoomIn  opacity-1');
                    $('.download-banner-title h2').addClass('animate__animated animate__fadeInUp  opacity-1');
                    $('.download-btn-link').addClass('animate__animated animate__fadeInUp  opacity-1');
                    $('.last-store-block').addClass('animate__animated animate__fadeInUp  opacity-1');
                }            

                else if(index.index == 6){                    
                    $('.six-slide .title-work').addClass('opacity-1');
                    $('.download-banner-title h2').addClass('opacity-1');
                    $('.download-btn-link').addClass('opacity-1');
                    $('.last-store-block').addClass('opacity-1');
                }
        },
      });


});
	