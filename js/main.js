$('.menu-trigger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-trigger_active');
  $('.header__menu-list__mob').toggleClass('header__menu-list__mob_active');
})