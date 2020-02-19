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
     let mixer = mixitup(".products_inner_box");
     
  
});