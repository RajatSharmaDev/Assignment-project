// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   "use strict";
//   window.addEventListener(
//     "load",
//     function () {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName("needs-validation");
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function (form) {
//         form.addEventListener(
//           "submit",
//           function (event) {
//             if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add("was-validated");
//           },
//           false
//         );
//       });
//     },
//     false
//   );
// })();

gsap.from(".banner-text h3", {duration: 1, x: -200, ease: "bounce"});
gsap.to(".banner-text h3", {duration: 1, x: 0, ease: "bounce"});
gsap.from(".why-us img", {
  scrollTrigger:{
    trigger: '.why-us img',
    
    pin: true,   // pin the trigger element while active
        start: "center center", // when the top of the trigger hits the top of the viewport
        end: "center center", // end after scrolling 500px beyond the start
        scrub: 1, 
        ease: "bounce"
  },
  duration: 0,
    opacity: 0.5, 
  
   });
gsap.to(".why-us img", {
scrollTrigger:{
  trigger: '.why-us img',
  
  pin: true,   // pin the trigger element while active
      start: "center center", // when the top of the trigger hits the top of the viewport
      end: "center center", // end after scrolling 500px beyond the start
      scrub: 1, 
},
duration: 5,
  opacity: 0.5, 
  ease: "bounce"
 });

 let tc = gsap.timeline({
  scrollTrigger: {
    trigger: ".pv-txt h4",
    start: "top center",
    toggleActions: "restart none none reset",
  },
});
tc.from(
  ".pv-txt h4",
  {
    duration: 2.5,
    ease: "bounce",
    y:20
  },
 
).to(
  ".pv-txt h4",
  {
    y: 0,
    duration: 1,
  },
);
//about gsap

gsap.from(".pos-card-gsap-1", {
  opacity: 0, 
  x: -100, 
  duration: 1
});
gsap.from(".pos-card-gsap-2", {
  opacity: 0, 
  x: 100, 
  duration: 1
});
gsap.from(".pos-card-gsap-3", {
  opacity: 0, 
  x: -100, 
  duration: 1
});
gsap.from(".service-txt-anim1", {
  opacity: 0, 
  x: 200, 
  duration: 1
});
gsap.from(".service-txt-anim2", {
  opacity: 0, 
  x: -200, 
  duration: 1
});
gsap.from(".service-txt-anim3", {
  opacity: 0, 
  x: 200, 
  duration: 1
});

//  gsap.from(".pv-txt h4", { 
//   scrollTrigger:{
//     trigger: ".pv-txt h4",
//     pin: true,   // pin the trigger element while active
//     start: "top 50%", // when the top of the trigger hits the top of the viewport
//     end: "top center",
//     toggleActions:"restart none reset none"
//   }, 
//   duration: 2.5,
//   ease: "elastic.out(1, 0.3)",
//   y:20
//   });

//  gsap.to(".pv-txt h4", { 
//   scrollTrigger:{
//     trigger: ".pv-txt h4",
//     pin: true,   // pin the trigger element while active
//     start: "top center", // when the top of the trigger hits the top of the viewport
//     end: "top center",
//     toggleActions:"restart none none restart"
//   },  
//   duration: 2.5,
//   ease: "elastic.out(1, 0.3)",
//   y: 0
//   });

$(window).scroll(function () {
  $(".navbar").toggleClass("scrolled", $(this).scrollTop() > 50);
});

$(function () {
  let $register = $(".registerForm");
  if ($register.length) {
    $register.validate({
      rules: {
        mail: {
          required: true,
        },
        subject: {
          required: true,
        },
        description: {
          required: true,
        },
      },
      messages: {
        mail: {
          required: "looks good ",
        },
        subject: {
          required: "looks good",
        },
        description: {
          required: "looks good",
        },
      },
    });
  }
});



 