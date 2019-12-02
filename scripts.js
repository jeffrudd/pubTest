let t1 = gsap.timeline();
var rule = CSSRulePlugin.getRule("button:before")

t1.to(".text1", {delay: 1, duration: 0.5, opacity: 1})
    .to(".text1", {delay: 3.5, duration: 0.5, opacity: 0})

    .add("fade")
    .to(".frame1", {duration: 1.5, opacity:0}, "fade")
    .set(".full", {yPercent: -38, xPercent:-15, scale: 0.75}, "fade")
    .to(".full, .layer", {opacity: 1, duration: 1.5}, "fade")

    .to(".text2", {duration: 0.5, opacity: 1})

    .add("motion")
    .to(".full", {delay: 2, xPercent:-50, duration: 2.5}, "motion")
    .to(".text2", {delay: 1.5, duration: 1, opacity: 0}, "motion")
    .to(".text3", {delay: 4.5, duration: 0.5, opacity: 1}, "motion")

    
    .to(".text3", {delay: 3, duration: 0, opacity:0})
    .to(".full", {scale: 0.41, xPercent:-36, duration: 1, opacity: 1})

    .fromTo(".title4", {marginLeft:-800, opacity:0}, {marginLeft:0, opacity:1})
    .fromTo(".title4", {width:0}, {width:255})
    .to(".text4", {delay: 1, opacity:1})
    .to("button, .buttonText",{delay: 1, opacity: 1})
    .to(rule, {cssRule: {left: 60}, duration: 0.75})
    .to(rule, {delay: 0.75, cssRule: {left: -120}, duration: 0.5})