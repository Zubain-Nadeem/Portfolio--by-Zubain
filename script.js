// let cir =document.getElementById(".cursor");
// document.onmousemove =function(e){
//     cir.style.left= (e.pageX -25) +"px";
//     cir.style.top= (e.pagey -25) +"px";

// }

let crcr=document.querySelector("#cursor")
let blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crcr.style.left = dets.x+"px"
    crcr.style.top = dets.y+"px"
     blur.style.left = dets.x -18+"px"
    blur.style.top = dets.y -20 +"px"
})
