

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
// gsap.to(".why-us img", {
// scrollTrigger:{
//   trigger: '.why-us img',
  
//   pin: true,   // pin the trigger element while active
//       start: "center center", // when the top of the trigger hits the top of the viewport
//       end: "center center", // end after scrolling 500px beyond the start
//       scrub: 1, 
// },
// duration: 5,
//   opacity: 0.5, 
//   ease: "bounce"
//  });
let whyimg = gsap.timeline({
   scrollTrigger: {
    trigger: "#whyus ",
    start: "top 100%",
    end: "bottom 90%",
    scrub: true,
    
    toggleActions: "restart none none restart",
  }
  
   });
  
   whyimg.to('.why-img', { opacity: 0.2, duration: 0.5 })
   .to('.why-img', { opacity: 1, duration: 0.5 })
   


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
