$(function(){

     $(".rate_star").rateYo({
          rating: 5,
          starWidth: "12px",
          readOnly: true
     });

     var mixer = mixitup('.products_inner_box');
     $(".product_slider_inner").slick({
          dots: true,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
      });
    
});