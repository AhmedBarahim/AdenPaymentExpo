// (function () {
//     "use strict";

//     /**
//      * Easy selector helper function
//      */
//     const select = (el, all = false) => {
//         el = el.trim()
//         if (all) {
//             return [...document.querySelectorAll(el)]
//         } else {
//             return document.querySelector(el)
//         }
//     // }
//     /**
//      * Easy event listener function
//      */
//     const on = (type, el, listener, all = false) => {
//         let selectEl = select(el, all)
//         if (selectEl) {
//             if (all) {
//                 selectEl.forEach(e => e.addEventListener(type, listener))
//             } else {
//                 selectEl.addEventListener(type, listener)
//             }
//         }
//     }

//     /**
//      * Mobile nav toggle
//      */
//     on('click', '.mobile-nav-toggle', function (e) {
//         select('#main-navbar').classList.toggle('navbar-mobile')
//         console.log("1")
//         document.querySelector('.fa-xmark').classList.toggle('d-none')
//         document.querySelector('.fa-xmark').classList.toggle('d-block')
//         select('#main-navbar').classList.remove('closing-menu');

//         //   this.classList.toggle('-list')
//         //   this.classList.toggle('bi-x')
//     })
//     on('click', '#close-menu', function (e) {
//         select('#main-navbar').classList.add('closing-menu');
//         setTimeout(function () {
//             document.querySelector('#close-menu').classList.toggle('d-none')
//             select('#main-navbar').classList.toggle('navbar-mobile');
//         }, 500);


//         // document.querySelector('.navbar-mobile').classList.toggle('d-block')


//         //   this.classList.toggle('-list')
//         //   this.classList.toggle('bi-x')
//     })
//     //   on('click', '#menu-btn', function(e) {
//     //   console.log("1")


//     //     // select('#main-navbar').classList.toggle('navbar-mobile')
//     //      //   this.classList.toggle('-list')
//     //   //   this.classList.toggle('bi-x')
//     //   })
//     /**
//      * Mobile nav dropdowns activate
//      */
//     on('click', '.main-navbar .dropdown > a', function (e) {
//         if (select('#navbar').classList.contains('navbar-mobile')) {
//             e.preventDefault()
//             this.nextElementSibling.classList.toggle('dropdown-active')
//         }
//     }, true)


// })()

// var form = document.querySelector('form');
// form.addEventListener('submit', function () {
//     console.log('previenting')
//     this.querySelector('button[type="submit"]').setAttribute('disabled',true)
// });