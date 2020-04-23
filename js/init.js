$(document).ready(function () {
  initHeader();
  initSidebar();
  initAccordion();
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