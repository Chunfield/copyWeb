// console.log(1);
// // var img =document.getElementsByClassName("recommended-img");
// var currentIndex = 0;
// var arr =new Array();
// arr[0] = "1.avif";
// arr[1] = "2.avif";
// arr[2] = "3.avif";

// // console.dir(img[0].src = "2.avif");
// var interval = setInterval(function(){
//     var img =document.getElementById("inof");
//     if(currentIndex ==arr.length-1){
//         currentIndex = 0;
//     }
//     else{
//         currentIndex +=1;
//     }
//     img.src = arr[currentIndex];
//     console.log(img);
// },3000)

// const banner = document.querySelector("animated-banner")
// const childs = document.querySelectorAll("img")
// const styleArr = [
// {x: 0,y: 0,rotate:0},
// {x: 90,y: -18,rotate:0},
// {x: 210,y: 9,rotate:0},
// {x: -96,y: 6,rotate:0},
// {x: -120,y: 24,rotate:0},
// {x: -525,y: 35,rotate:0},
// {x: -570,y: 42,rotate:0},
// {x: 357.5,y: 71.5,rotate:0},
// {x: 60,y: 0,rotate:0},
// {x: -120,y: 12,rotate:0},
// {x: -182,y: 39,rotate:0},
// {x: -22.5,y: -3.75,rotate:0},
// {x: -252,y: -48,rotate:0},
// {x: 0,y: -14,rotate:0,filter_blur:3},
// ]

// function init(){
//     styleArr.forEach((ele,index)=>{
//         childs[index].style = `
//         transform: translate(${ele.x}px,${ele.y}px) rotate(${ele.rotate}deg)
//         filter:blur(${ele.filter_blur}px)`
//         console.log(ele)
//     })
// }
// init()
// console.log(1)


let statx = 0;

let toucharea = document.getElementById("movearea")
let childs =document.getElementById("layer1");

console.log(toucharea)
console.log(childs)
toucharea.addEventListener('mouseenter',function(e){

    statx = e.clientX;
    console.log(1);
    console.log(statx)

})
toucharea.addEventListener('mousemove',function(e){
    console.log(2)
    let level = e.clientX - statx;
    console.log(level)
    let newX = level /window.outerWidth;
    let x  = newX*12;
    console.log(newX)

    console.log(`height: 132.6px; width: 856.2px; transform: translate(${x}px, 24px) rotate(0deg) scale(1); opacity: 1;`)
    childs.style = `height: 132.6px; width: 856.2px; transform: translate(${x}px, 24px) rotate(0deg) scale(1); opacity: 1;`
})

