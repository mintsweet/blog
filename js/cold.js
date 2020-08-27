/*
*
* author qingzhan<yujunren1994@163.com>
*
*/
(function (win, doc, undefined) {
  'use strict';

  var Cold = {};

  Cold.showMobileMenu = function () {
    var main = getId('main'),
        mobileNavbar = getId('mobileNavbar'),
        mobileMenu = getId('mobileMenu'),
        menuBar = getId('menuBar');

    menuBar.addEventListener('click', function () {
      if (!hasClass(mobileMenu, 'open')) {
        addClass(main, 'slide-left');
        addClass(mobileNavbar, 'slide-left');
        addClass(mobileMenu, 'open');
        addClass(menuBar, 'open');
      } else {
        removeClass(main, 'slide-left');
        removeClass(mobileNavbar, 'slide-left');
        removeClass(mobileMenu, 'open');
        removeClass(menuBar, 'open');
      }
    });
  }

  win.Cold = Cold;

})(window, document);