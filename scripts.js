let t1 = gsap.timeline();

t1.to(".text1", {delay: 1.5, duration: 0.5, opacity: 1})
    .to(".text1", {delay: 3.5, duration: 0.5, opacity: 0})

    .add("fade")
    .to(".frame1", {duration: 1, opacity:0}, "fade")
    // .set(".frame1", {opacity: 0})
    .set(".full", {yPercent: -38, xPercent:-15, scale: 0.75}, "fade")
    .to(".full, .layer", {opacity: 1, duration: 1}, "fade")

    // .set(".layer", {opacity: 1})
    .to(".text2", {duration: 0.5, opacity: 1})

    .add("motion")
    .to(".full", {delay: 2, xPercent:-50, duration: 2.5}, "motion")
    .to(".text2", {delay: 1.5, duration: 1, opacity: 0}, "motion")
    .to(".text3", {delay: 4.5, duration: 0.5, opacity: 1}, "motion")

    
    .to(".text3", {delay: 3, duration: 0, opacity:0})
    .to(".full", {scale: 0.41, xPercent:-36, duration: 0.5, opacity: 1})

    .fromTo(".title4", {marginLeft:-800, opacity:0}, {marginLeft:0, opacity:1})
    .fromTo(".title4", {width:0}, {width:255})
    .to(".text4", {delay: 1, opacity:1})
    // .fromTo(".button4", {rotation: -20, opacity:0}, {opacity: 1, rotation: 0, ease: "steps(12)"})
    .to(".button4",{opacity: 1})