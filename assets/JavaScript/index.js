let hero_height=document.getElementById('hero').clientHeight;
let about_height=document.getElementById('aboutUs').clientHeight+hero_height;
let service_height=document.getElementById('Services').clientHeight+document.getElementById('vendors').clientHeight+document.getElementById('gallery').clientHeight+about_height+100;
let vendor_height=document.getElementById('Services').clientHeight+document.getElementById('vendors').clientHeight+about_height+200;
let top_button=document.getElementById('top-button');
function scrollToAbout(){
    window.scrollTo({top:hero_height,behavior:'smooth'})
}
function scrollToService(){
    window.scrollTo({top:about_height,behavior:'smooth'});
}
function scrollToReview(){
    window.scrollTo({top:service_height,behavior:'smooth'})
}
function scrollToGallery(){
    window.scrollTo({top:vendor_height,behavior:'smooth'})
}



// Scroll to Top
window.addEventListener('scroll',()=>{
    if(window.scrollY>hero_height){
        top_button.style.display='block';
    }
    else{
        top_button.style.display='none';
    }
})

top_button.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:'smooth'});
})

function scrollToTop(){
    window.scrollTo({top:0,behavior:'smooth'});
}



// Vendor Modal Opening/Closing
const vendor_but=document.getElementById('vender-registration');
const bg_dull=document.getElementById('bg-dull');
const close_but=document.getElementById('close-modal');
vendor_but.addEventListener('click',()=>{
    bg_dull.style.display='block';
})
close_but.addEventListener('click',()=>{
    bg_dull.style.display='none';
})


// Navigation bar toggling
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // navLinks.style.display='block';
    });
});