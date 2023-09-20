var imgGif =document.getElementById("demo")
document.addEventListener("mousemove" ,function(e){
imgGif.style.left = e.clientX +"px";
imgGif.style.top =e.clientY +"px" ;
})