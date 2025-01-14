import $ from 'jquery'

window.addEventListener('scroll' , ()=>{
    const scroll = window.scrollY;
    scroll>=130  ? $("#navbar").fadeIn(600).css("top" , "0") : $("#navbar").fadeOut(900,"linear").css("top","-90px");
});
