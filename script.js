let logo = document.getElementById("logo")
let text = document.getElementById("text")
let bg = document.getElementById("bg")

window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    text.style.top = value * -0.5 + "%";
})


// // window.addEventListener('scroll',function(){
// //   Let value window.scrollY;
// //  text.style.top=50 value+-0.5 0.5+'%'
// //   birdl.style.top value -1.5+'px';
// //                               2+'px';bird1.style.left=value
// //   bird2.style.top value -1.5+'px';
// //   bird2.style.left value$'px';