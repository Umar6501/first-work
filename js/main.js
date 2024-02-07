window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 27);
});

// menu btn and menu list parameters
// document.addEventListener("DOMContentLoaded", function () {
//   var menuBtn = false; // Установка изначального значения в false

//   function toggleMenu() {
//     var span1 = document.getElementById("span1");
//     var span2 = document.getElementById("span2");
//     var span3 = document.getElementById("span3");
//     var navLinks = document.querySelector(".Frame1");
//     var headerWrapper = document.querySelector(".menu-bg");
//     console.log(innerWidth);
//     console.log(menuBtn);

//     if (window.innerWidth > 946) {
//       // Проверяем ширину экрана и значение menuBtn
//       !menuBtn; // Если условие выполняется, меняем значение menuBtn
//     }

//     if (menuBtn) {
//       // Проверяем значение menuBtn после возможного изменения
//       span1.style.transform = "rotate(0deg) translateY(0px) translateX(0px)"; // Показываем меню
//       span2.style.transform = "translateX(0px)";
//       span2.style.backgroundColor = "white";
//       span2.style.transition = "0.1s";
//       span3.style.transform = "none";
//       navLinks.style.transform = "translate(100%, -50%)";
//       headerWrapper.style.transform = "translateX(100%)";
//     } else {
//       span1.style.transform = "rotate(45deg) translateY(5px) translateX(5px)"; // Показываем меню
//       span2.style.transform = "translateX(3px)";
//       span2.style.backgroundColor = "transparent";
//       span3.style.transform = "rotate(-45deg) translateY(-6px) translateX(6px)";
//       navLinks.style.transform = "translate(0%, -50%)";
//       headerWrapper.classList.add("header-w-bg");
//       headerWrapper.style.transform = "translateX(0%)";
//     }

//     menuBtn = !menuBtn; // Инвертируем значение переменной
//   }

//   // Добавляем обработчик клика на кнопку меню
//   document.getElementById("menuBtn").addEventListener("click", toggleMenu);
// });

document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = false; // Устанавливаем изначальное значение menuBtn в false

  function toggleMenu() {
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    var span3 = document.getElementById("span3");
    var navLinks = document.querySelector(".menu-links");
    var headerWrapper = document.querySelector(".menu-bg");

    if (menuBtn) {
      span1.style.transform = "rotate(0deg) translateY(0px) translateX(0px)";
      span2.style.transform = "translateX(0px)";
      span2.style.backgroundColor = "white";
      span2.style.transition = "0.1s";
      span3.style.transform = "none";
      navLinks.style.transform = "translate(100%, -50%)";
      headerWrapper.style.transform = "translateX(100%)";
    } else {
      span1.style.transform = "rotate(45deg) translateY(5px) translateX(5px)";
      span2.style.transform = "translateX(3px)";
      span2.style.backgroundColor = "transparent";
      span3.style.transform = "rotate(-45deg) translateY(-6px) translateX(6px)";
      navLinks.style.transform = "translate(0%, -50%)";
      headerWrapper.classList.add("header-w-bg");
      headerWrapper.style.transform = "translateX(0%)";
    }

    menuBtn = !menuBtn;
  }
  function handleResize() {
    var screenWidth = window.innerWidth;

    if (screenWidth > 946 && !menuBtn) {
      // Если экран больше 946px и menuBtn равен false
      menuBtn = true; // Устанавливаем menuBtn в true
    } else if (screenWidth <= 946 && menuBtn) {
      // Если экран меньше или равен 946px и menuBtn равен true
      menuBtn = false; // Устанавливаем menuBtn в false
    }
  }

  // Вызываем функцию toggleMenu при клике на кнопку меню
  document.getElementById("menuBtn").addEventListener("click", toggleMenu);
  // console. log(menuBtn);
  // Вызываем функцию handleResize при загрузке страницы и при изменении размера окна
  window.addEventListener("resize", handleResize);

  // Инициализация значения menuBtn при загрузке страницы
  handleResize();
});
