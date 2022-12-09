//Toggle learn more button

function changeStyleCosmology() {
    var element = document.getElementById("gallery__card--cosmology");
    element.classList.toggle("gallery_card--expand");
 }
function changeStyleEvolution() {
    var element = document.getElementById("gallery__card--evolution");
    element.classList.toggle("gallery_card--expand");
 }
function changeStyleEcology() {
    var element = document.getElementById("gallery__card--ecology");
    element.classList.toggle("gallery_card--expand");
 }
function changeStyleRoboticsAndAi() {
    var element = document.getElementById("gallery__card--robotics-and-ai");
    element.classList.toggle("gallery_card--expand");
 }
function changeStyleBiologyAndMedicine() {
    var element = document.getElementById("gallery__card--biology-and-medicine");
    element.classList.toggle("gallery_card--expand");
 }



// HAMBURGER MENU 
const hamburger = document.querySelector(".hamburger")
const navMenuUl = document.querySelector(".navbar__menu__ul")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active")
    navMenuUl.classList.toggle("is-active")
})



//FADE-IN CONTENT
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("fadein");
        } else {
            entry.target.classList.remove("fadein");
        }
    });
});

const zeroOpacityElements = document.querySelectorAll(".intro-text")
zeroOpacityElements.forEach((el) => fadeInObserver.observe(el));




// function myFunction() {
//     document.documentElement.style
//       .setProperty('.gallery__overlay', 'green');
//   }



// const learMore = document.querySelectorAll(".overlay__CTA")
// learMore.forEach((card) => {
//     card.addEventListener("click", () => {
//         card.classList.toggle("active")
//     })    
    
    
// })


// var content = document.getElementById("gallery__card--cosmology");
// var button = document.getElementById("overlay_CTA--cosmology");

// button.onclick = function(){
//     if(content.className == "open" ){
//         content.className = "";
//         button.innerHTML = "Learn More";
//     } else{
//         content.className = "open";
//         button.innerHTML = "Exit";
//     }
// };






/*

//BACKGROUND-COLOR CHANGE
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("fadein");
        } else {
            entry.target.classList.remove("fadein");
        }
    });
});

const zeroOpacityColor = document.querySelectorAll(".intro-text")
sectionObserver.forEach((el) => observer.observe(el));


//CHANGING THE BODY BACKGROUND COLOR WHEN SCROLLING
/*var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'green';

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        body.style.backgroundColor = 'green';
    } else if (scroll >= 300 && scroll < 600) {
        body.style.backgroundColor = 'yellow';
    } else if (scroll >= 600 && scroll < 1200) {
        body.style.backgroundColor = 'blue';
    } else if (scroll >= 1200 && scroll < 1800) {
        body.style.backgroundColor = 'orange';
    } else if (scroll >= 1800 && scroll < 3000) {
        body.style.backgroundColor = 'red';
    } else {
        body.style.backgroundColor = 'purple';
    }
}
*/