document.getElementById('switch').onclick = function(){
  document.getElementById('body').classList.toggle('dark-theme');
  document.getElementById('table').classList.toggle('table-dark');
  document.getElementById('m-menu').classList.toggle('m-menu-dark');
  document.getElementById('close-menu').classList.toggle('close-menu-dark');
  document.getElementById('menu-link1').classList.toggle('menu-linkn-dark');
  document.getElementById('menu-link2').classList.toggle('menu-linkn-dark');
  document.getElementById('menu-link3').classList.toggle('menu-linkn-dark');
  document.getElementById('menu-link4').classList.toggle('menu-linkn-dark');
  document.getElementById('menu-link5').classList.toggle('menu-linkn-dark');
};

window.onscroll = function showHeader() {
  var header = document.querySelector('.header');
  if(window.pageYOffset > 50){
      header.classList.add('header_fixed');
  } else{
      header.classList.remove('header_fixed');
  }
  var arrow = document.querySelector('.arrow');
  if(window.pageYOffset > 100){
    arrow.classList.add('arrow-fixed');
  } else{
    arrow.classList.remove('arrow-fixed');
  }
};

jQuery(document).ready(function() {
  jQuery("a.menu-link").click(function () {
  elementClick = jQuery(this).attr("href")
  destination = jQuery(elementClick).offset().top -50;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
  return false;
  });
  jQuery("a.arrow").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
    });
  });

$(function () {
  var link = $('.m-menu-link');
  var close = $('.close-menu');
  var menu = $('.m-menu');
  link.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active')
  })
  close.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active')
  })
});
