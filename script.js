var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");
var backgroungImg = new Array(
    "./Radiance_img/bg1.png",
    "./Radiance_img/bg2.png",
    "./Radiance_img/bg3.png",
    "./Radiance_img/bg4.png",
    "./Radiance_img/bg5.png",
    
);
let i = 0;
next.onclick = function(){
    if(i < 4){
    hero.style.backgroundImage = 'url("'+backgroungImg[i+1]+'")';
    thumbnail[i+1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i++;
    }
}
prev.onclick = function(){
    if(i > 0){
    hero.style.backgroundImage = 'url("'+backgroungImg[i-1]+'")';
    thumbnail[i-1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i--;
    }
}