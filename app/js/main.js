$(function(){

     $(".rate_star").rateYo({
          rating: 5,
          starWidth: "12px",
          readOnly: true
     });

     $(".js-range-slider").ionRangeSlider({
          min: 0,
          max: 1000,
          from: 0,
          to: 600,
          type: 'double',
          prefix: "$",
     });

     $(".product_slider_inner").slick({
          dots: true,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
               {
               breakpoint: 1900,
               settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                    }
               },
               {
               breakpoint: 1441,
               settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                    }
               },
               {
               breakpoint: 801,
               settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1   
                    }
               }
          ]
      });
    
      $(".icon-th-list").on("click", function(){
          $(".product_item").addClass("list");
          $(".icon-th-list").addClass("active");
          $(".icon-th-large").removeClass("active");
      });

      $(".icon-th-large").on("click", function(){
          $(".product_item").removeClass("list");
          $(".icon-th-large").addClass("active");
          $(".icon-th-list").removeClass("active");
     })

     $(".menu_btn").on("click", function(){
          $(".menu_list").slideToggle();
     });

     $(".header_btn_menu").on("click", function(){
          $(".header_box").toggleClass("active");
     });

     $('.product_one_tabs .tab, .settings_tabs .tab').on('click', function(event) {
          var id = $(this).attr('data-id');
               $('.product_one_tabs, .settings_tabs').find('.tab-item').removeClass('active-tab').hide();
               $('.product_one_tabs .tabs, .settings_tabs .tabs').find('.tab').removeClass('active');
               $(this).addClass('active');
               $('#'+id).addClass('active-tab').fadeIn();
               return false;
          });

     $('input[type="file"], select').styler();

     let mixer = mixitup(".products_inner_box");
     
  
});