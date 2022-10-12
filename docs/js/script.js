

window.onload = function(){
    
    if (window.matchMedia("(min-width: 600px)").matches) { //PC、タブレットの処理
    // 画像を自動的にスライドさせる。
        $('.slider').slick({
            autoplay: true,         // 自動的に動き出すか。初期値はfalse。
            arrows: true,
            autoplaySpeed: 2500,    // 2.5秒毎にスライドさせる。
            dots: true,             // 
            slidesToShow: 5,        // 一度に表示させる画像の枚数を5枚に指定。
            pauseOnHover: true,     // ホバー時にスライドを止める。
        });        
    } else { //スマホの処理
    // 画像を自動的にスライドさせる。
        $('.slider').slick({
            autoplay: true,         // 自動的に動き出すか。初期値はfalse。
            arrows: true,
            autoplaySpeed: 2500,    // 2.5秒毎にスライドさせる。
            dots: true,             // 
            slidesToShow: 4,        // 一度に表示させる画像の枚数を4枚に指定。
            pauseOnHover: true,     // ホバー時にスライドを止める。
        });           
    }
}; 

// scroll_effect
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll-up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 50;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});

// hamburger
function changeHamburger() {
    hamburger = !hamburger; 
    
    if(hamburger == true) {
        document.getElementById("hamburger-nav").style.display = 'flex';
    } else {
        document.getElementById("hamburger-nav").style.display = 'none';
    }
}