// var main = document.querySelector(".main")
// var cursor = document.querySelector(".cursor")

// main.addEventListener("mousemove", function (dets) {
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         duration:0.6,
//     })
// })

const navSection = document.querySelector('.navbar');
const menu = document.querySelector('#menu');
const closebtn = document.querySelector('#close');

menu.onclick = () => {
    navSection.classList.toggle('active');
}

closebtn.onclick = () => {
    navSection.classList.remove('active');
}

