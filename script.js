//////////EXHIBITIONS.HTML///////////////
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
//////////SPECIAL-EVENTS.HTML///////////////
function changeStyleVisitingProfessor() {
    var element = document.getElementById("gallery__card--visiting-professor");
    element.classList.toggle("gallery_card--expand");
}
function changeStyleMuseumNight() {
    var element = document.getElementById("gallery__card--museum-night");
    element.classList.toggle("gallery_card--expand");
}
function changeStyleEnergetica() {
    var element = document.getElementById("gallery__card--energetica");
    element.classList.toggle("gallery_card--expand");
}
//////////SPECIAL-EVENTS.HTML///////////////
function changeStyleKids() {
    var element = document.getElementById("gallery__card--kids");
    element.classList.toggle("gallery_card--expand");
}
function changeStyleTeachers() {
    var element = document.getElementById("gallery__card--teachers");
    element.classList.toggle("gallery_card--expand");
}
function changeStyleResearchers() {
    var element = document.getElementById("gallery__card--researchers");
    element.classList.toggle("gallery_card--expand");
}




// HAMBURGER MENU 
const hamburger = document.querySelector(".hamburger")
const navMenuUl = document.querySelector(".navbar__menu__ul")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active")
    navMenuUl.classList.toggle("is-active")
})

//AUTHOR:FIRESHIP
//SOURCE: https://www.youtube.com/watch?v=T33NN_pPeNI&ab_channel=BeyondFireship
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

const zeroOpacityElements = document.querySelectorAll(".intro__item")
zeroOpacityElements.forEach((el) => fadeInObserver.observe(el));



