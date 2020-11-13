$(function(){
  $(document).scroll(function(){
      var s = $(window).scrollTop();  
      console.log(s);

      if ( s >= 900 ) {
        $('#main_quick').fadeIn(1000);
        $('#btn_top').fadeIn(1000);

      } else {
        $('#main_quick').fadeOut(1000);
        $('#btn_top').fadeOut(1000);
      }

      // 대표상품
      if ( s >= 900 && s < 1700 ) {

        $('.products div').addClass('active');
        $('.products span').addClass('products_active');

        $('.company div').removeClass('active');
        $('.company span').removeClass('active');
      }

      // 회사소개
      if ( s >= 1700 && s < 2800 ) {
        $('.company div').addClass('active');
        $('.company span').addClass('active');
        
        $('.products div').removeClass('active');
        $('.products span').removeClass('products_active');
        $('.process div').removeClass('active');
        $('.process span').removeClass('active');
      }

      // 운용프로세스
      if ( s >= 2800 && s < 3900 ) {
        $('.process div').addClass('active');
        $('.process span').addClass('active');

        $('.company div').removeClass('active');
        $('.company span').removeClass('active');
        $('.team div').removeClass('active');
        $('.team span').removeClass('active');
      }

      // 조직도
      if ( s >= 3900 && s < 4900 ) {
        $('.team div').addClass('active');
        $('.team span').addClass('active');

        $('.process div').removeClass('active');
        $('.process span').removeClass('active');
        $('.info div').removeClass('active');
        $('.info span').removeClass('info_active');
      }

      // 공시정보
      if ( s >= 4900 && s < 5900 ) {
        $('.info div').addClass('active');
        $('.info span').addClass('info_active');

        $('.team div').removeClass('active');
        $('.team span').removeClass('active');
      }

  })
});    
