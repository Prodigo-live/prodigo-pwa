//select elemnet function
/* menu part-1
const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');

});*/

/* menu part-2 */

window.onload = () => {
    setTimeout(() =>{
    document.querySelector('body').classList.add
    ('display');
}, 500);
};

document.querySelector('.hamburger-menu').addEventListener('click',() => {
    document.querySelector('body').classList.toggle('change');
});


