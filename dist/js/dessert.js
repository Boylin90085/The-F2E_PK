'use strict';

AOS.init({
  once: true
});

$('[data-id="burger"]').on('click', function () {
  $(this).toggleClass('active');
  $('[data-id="menu"]').toggleClass('active');
});

var isLike = false;
$('[data-id="like"]').on('click', function () {
  isLike = !isLike;
  isLike ? $(this).text('favorite') : $(this).text('favorite_border');
});
//# sourceMappingURL=dessert.js.map
