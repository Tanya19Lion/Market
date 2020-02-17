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

     let mixer = mixitup(".products_inner_box");
     
     $(".product_slider_inner").slick({
          dots: true,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
      });
    
      $(".btn_list").on("click", function(){
          $(".product_item").addClass("list");
      });
});