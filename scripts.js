let t1 = gsap.timeline();

t1.to(".frame1", {delay: 1, duration: 2.5, opacity:0})
    .to(".frame2", {duration: 2.5, opacity:1})
    .to(".frame2", {xPercent:-100, duration: 2.5}, 5)
    .set(".frame3",{xPercent:100, opacity:1}, 5)
    .to(".frame3", {xPercent:0, duration: 2.5}, 5)
    .set(".frame2", {opacity: 0})
    .to(".frame3", {duration: 2.5, opacity:0})
    // .set(".frame4", {scale: 0.5})
    .to(".frame4", {scale:1, duration: 2.5, opacity:1, transformOrigin:"right"})

