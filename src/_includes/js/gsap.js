document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(Draggable,MorphSVGPlugin,ScrollTrigger,ScrollSmoother,SplitText,TextPlugin)

    ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      });

});




// Marquee Banner Scrolling
const init = () => {
    const marquee = document.getElementById('marquee-container')
    if (!marquee){
        return;      
    }
    const marqueeContent = document.getElementById('marquee-content');
    if (!marqueeContent){
        return;      
    }

    const width = parseInt( window.getComputedStyle(marqueeContent).getPropertyValue("width"),10
    );

    gsap.fromTo(
        ".marquee",
        { x:0 },
        { 
            x:-1*width,
            duration: 20,
            ease: "none",
            repeat: -1
        }
    )

}

document.addEventListener('DOMContentLoaded',init);