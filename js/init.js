$(document).ready(function () {
  initHeader();
  initSidebar();
  initAccordion();
  initSmoothScroll();
});

function initAccordion() {
  $('.ui.accordion').accordion();
}

function initSidebar() {
  $('.ui.sidebar').sidebar('attach events', '#sidebar-activator');
}

function initHeader() {
  $('.menu')
    .visibility({
      once: false,
      onBottomPassed: function () {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function () {
        $('.fixed.menu').transition('fade out');
      }
    });
}

function initSmoothScroll() {
  $("a[href='#works']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 50});
    return false;
  });
  $("a[href='#price']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 50});
    return false;
  });
  $("a[href='#feedback']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 50});
    return false;
  });
  $("a[href='#phone']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 50});
    return false;
  });
}


