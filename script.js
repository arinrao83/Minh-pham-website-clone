// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });




// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();







var page0 = document.querySelector("#page0")
var btn = document.querySelector("#page0 button")
var icon = document.querySelector("#icon i")

btn.addEventListener("click",function(){
    page0.style.display = "none"
})


var circle = document.querySelector("#circle")
var logo = document.querySelector("#nav img")
var nam = document.querySelector("#page1 h1")


window.addEventListener("mousemove",function(dets){
    circle.style.left = `${dets.x -10}px`
    circle.style.top = `${dets.y -10}px`
    
    
    
})

logo.addEventListener("mouseenter",function(dets){
    logo.style.transform = `translate(-50%,-50%) translate(${dets.x*.3}px,${dets.y*.3}px)`
    
})

logo.addEventListener("mouseleave",function(dets){
    // logo.style.transform = `translate(-50%,-50%) )`
    logo.style.left = "4 rem"
    logo.style.top = "1 rem"

    
})



nam.addEventListener("mouseover",function(){
    circle.style.scale = "10"
})

nam.addEventListener("mouseout",function(){
    circle.style.scale = "1"
})




gsap.from("#page8 video",{
    scale:0,
    y:"50%",
    scrollTrigger:{
        trigger:"#page8",
        scrub:3,
        start:"top 70%",
        end:"top 10%"
        
    }
    
})


gsap.from("#coffee",{
    y:100,
    
    scrollTrigger:{
        trigger:"#page3",
        scrub:5,
        start:"top 50%",
        end:"top 10%",
        
    }
    
})


gsap.from("#mouse",{
    y:-100,
    
    scrollTrigger:{
        trigger:"#page3",
        scrub:5,
        start:"top 50%",
        end:"top 10%",
        
    }
    
})

gsap.to("#move",{
    y:790,
    scrollTrigger:{
        
        trigger:"#page9",
        scrub:1,
        start:"20% 40%",
        end:"70% 40%"

    } 

})


gsap.to("#point",{
    y:100,
    scrollTrigger:{
        trigger:"#page9",
        
        start:"30% 40%",
       end:"32% 40%",
       scrub:1
       
    }
    
})

gsap.to("#point",{
    y:200,
    scrollTrigger:{
        trigger:"#page9",
        
        start:"40% 40%",
        end:"42% 40%",
       scrub:1

    }
})



var clutter = "";
document.querySelector("#page2 h1").textContent.split("").forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

document.querySelector("#page2 h1").innerHTML = clutter

gsap.to("#page2>h1 span",{
    opacity:1,
    stagger:.4,
    scrollTrigger:{
        trigger:"#page2",
        start:"10% 30%",
        end:"45% 40%",
        // markers:true,
        scrub:3
    }
})

gsap.from("#page3 h1",{
    x:100,
    y:20,
    scale:0,
    opacity:1,
    stagger:2,
    scrollTrigger:{
        trigger:"#page3",
        start:"top 20%",
        end:"top 50%",
        
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:150,
    x:-40,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4",
        start:"10% 30%",
        end:"45% 40%",
        // markers:true,
        scrub:3
    }
})


gsap.from("#page6 h1",{
    y:150,
    x:-950,
    rotate:"180deg",
    opacity:0,
    scrollTrigger:{
        trigger:"#page6",
        start:"-80% 30%",
        end:"0% 40%",
        // markers:true,
        scrub:3
    }
})





gsap.from("#page10 h1",{
    y:150,
    x:0,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#page10",
        start:"10% 30%",
        end:"45% 40%",
        // markers:true,
        scrub:3
    }
})