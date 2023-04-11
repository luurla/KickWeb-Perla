const cloudlinks = document.querySelector('.cloudlinks');
const cloudrechts = document.querySelector('.cloudrechts');
const cloudlinks2 = document.querySelector('.cloudlinks2');
const cloudrechts2 = document.querySelector('.cloudrechts2');

window.onscroll = () =>{
    let pos1 = window.scrollY - 800;
    // let pos2 = window.scrollY + 800;

    console.log(pos1);

    cloudlinks.style.left = `${pos1}px`;
    cloudrechts.style.right = `${pos1}px`;
    cloudlinks2.style.left = `${pos1}px`;
    cloudrechts2.style.right = `${pos1}px`;
} 
