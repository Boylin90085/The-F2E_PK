'use strict';

$('[data-id="burger"]').on('click', function () {
  $(this).toggleClass('active');
  $('[data-id="menu"]').toggleClass('active');
});

$('.switchBtn').on('click', function () {
  var activeValue = $(this).attr('data-value');

  $('.switchBtn').removeClass('active');
  $(this).addClass('active');

  $('.invoice').removeClass('active');
  $('[data-id="' + activeValue + '"]').addClass('active');
});
//# sourceMappingURL=checkout-3.js.map
