var offset = 0;

$(window).scroll(function() {
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();

  var titleCss;
  var barCss;
  var contentCss;
  var subheaderCss;

  if(scrollTop == 0) {
    // start of page
    titleCss = {
      transform: "rotate(0deg) translateY(0%)",
      bottom: "50%",
      width: '100%',
      maxWidth: '1080px'
    };

    barCss = {
      width: '100%'
    };

    contentCss = {
      marginTop: 'calc(50vh + 0px)'
    };

    subheaderCss = {
      marginBottom: '50vh'
    };
    $('.scrollPrompt').fadeIn();
  } else if (scrollTop > (windowHeight / 2)) {
    // animation finished
    titleCss = {
      transform: "rotate(-90deg) translateY(100%)",
      bottom: "0%",
      width: '100vh',
      maxWidth: '100vh'
    };
    
    barCss = {
      width: '100%'
    };

    contentCss = {
      marginTop: 'calc(50vh + ' + (windowHeight / 4) + 'px)'
    };

    subheaderCss = {
      marginBottom: '0vh'
    };

    $('.scrollPrompt').fadeOut();
  } else if (scrollTop > (windowHeight / 4)) {
    // bar transition
    var relativeScrollTop = scrollTop - (windowHeight / 4);
    var animationProgress = (relativeScrollTop / (windowHeight / 4)) * 100;

    titleCss = {
      transform: "rotate(-90deg) translateY(100%)",
      bottom: "0%",
      width: '100vh',
      maxWidth: '100vh'
    };
    
    barCss = {
      width: animationProgress + '%'
    };

    contentCss = {
      marginTop: 'calc(50vh + ' + (windowHeight / 4) + 'px)'
    };

    subheaderCss = {
      marginBottom: '0vh'
    };
    $('.scrollPrompt').fadeOut();
  } else {
    // main title transition
    var animationProgress = (scrollTop / (windowHeight / 4)) * 100;
    var rotation = animationProgress * 90 / 100;
    var bottomPercentage = 50 - (animationProgress / 2);

    titleCss = {
      transform: "rotate(-" + rotation + "deg) translateY(" + animationProgress + "%)",
      bottom: bottomPercentage + "%",
      width: '100vh',
      maxWidth: '100vh'
    };
    
    barCss = {
      width: '0vh',
    };

    contentCss = {
      marginTop: 'calc(50vh + ' + ( animationProgress * (windowHeight / 4) / 100) + 'px)'
    };

    subheaderCss = {
      marginBottom: (50 - (animationProgress / 2)) + 'vh'
    };
    $('.scrollPrompt').fadeOut();
  }

  $('.title .transformWrapper').css(titleCss);
  $('.title .bar').css(barCss);
  $('.content').css(contentCss);
  $('.subheader').css(subheaderCss);
});