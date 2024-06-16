const cursorDot = document.querySelector(".cursor-dot");
const box = document.querySelector('button');

window.addEventListener("mousemove", function (e){
    const PosX = e.clientX;
    const PosY = e.clientY;

    // cursorDot.style.left = `${PosX}px`;
    // cursorDot.style.top = `${PosY}px`

    cursorDot.animate({
        left: `${PosX}px`,
        top: `${PosY}px`},
        { duration: 500, fill: "forwards"})

});

// box.addEventListener('mousemove', (e) => {
//     let x = e.offsetX
//     let y = e.offsetY
//     let BoxWidth = box.clientWidth
//     let BoxHeight = box.clientHeight
//     let moveX = (x - BoxWidth/2)
//     let moveY = (y - BoxHeight/2)
//     box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
// });

gsap.to(".fleft", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})