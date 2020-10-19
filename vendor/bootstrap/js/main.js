

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


$(window).scroll(function () {
  $(".navbar").toggleClass("scrolled", $(this).scrollTop() > 50);
});
// custom word count
$.validator.addMethod("wordCount", function(value, element, wordCount) {
  return value.split(' ').length <= wordCount;
}, 'Exceeded word count');


$(function () {
  let $query = $("#queryForm");
  
    $query.validate({
      rules: {
        mail: {
          required: true,
          email:true
        },
        subject: {
          required: true,
        },
        description: {
          required: true,
          wordCount:50,
        },
      },
      messages: {
        mail: {
          required: "Email is mandatory ",
          email:"Plz Enter Email"
        },
        subject: {
          required: "Subject is mandatory",
        },
        description: {
          required: "Description is mandatory",
          wordCount:"No More Thna 50 Words",
        },
      },
    });
  
});



$(function () {
  let $contact = $("#contactForm");
  
    $contact.validate({
      rules: {
        email: {
          required: true,
          email:true
        },
        Fname: {
          required: true,
        },
        message: {
          required: true,
          wordCount:50,
          
        },
      },
      messages: {
        email: {
          required: "Email is mandatory ",
          email:"Plz Enter Email"
        },
        Fname: {
          required: "Subject is mandatory",
        },
        message: {
          required: "Description is mandatory",
          wordCount:"No More Thna 50 Words",
        
        },
      },
    });
  
});
