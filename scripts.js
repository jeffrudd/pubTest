let t1 = gsap.timeline();

t1.to(".frame1, .text1", {delay: 1, duration: 2.5, opacity:0})
    // .to(".text1", {delay: 1, duration: 2.5, opacity:0})

    .to(".frame2, .text2", {duration: 2.5, opacity:1})
    .to(".text3", {duration: 2.5, opacity:1})

    .to(".frame2", {xPercent:-100, duration: 2.5}, 5)
    .to(".text2", {opacity: 0, duration: 2}, 5)

    .set(".frame3",{xPercent:100, opacity:1}, 5)
    // .set(".text3",{xPercent:100, opacity:1}, 5)

    .to(".frame3", {xPercent:0, duration: 2.5}, 5)
    // .to(".text3", {xPercent:0, duration: 2.5}, 5)

    .set(".frame2", {opacity: 0})
    // .set(".text2", {opacity: 0})
    
    .to(".frame3", {duration: 0.5, opacity:0})
    .to(".text3", {duration: 0, opacity:0})

    .set(".frame4", {scale: 2})
    .to(".frame4", {scale: 1, duration: 1, opacity: 1})

    .fromTo(".title4", {marginLeft:-800, opacity:0}, {marginLeft:0, opacity:1})
    .fromTo(".title4", {width:0}, {width:255})
    .to(".text4", {opacity:1})
    .fromTo(".button4", {opacity:0, rotation: -20}, {opacity: 1, rotation: 0, ease: "steps(12)"})