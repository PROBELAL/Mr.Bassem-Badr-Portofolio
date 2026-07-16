const menuIcon=document.querySelector('#menu-icon');
const navLinks=document.querySelector('.nav-links')

menuIcon.onclick=()=>{
    navLinks.classList.toggle('active');
}
function whatsupform(){
    let num="+20 1094752357"
    let name=document.getElementById('name').value;
    let phone=document.getElementById('phone').value;
    let address=document.getElementById('address').value;
    let choise=document.getElementById('on-off').value;
    var url="https://wa.me/"+num+"?text="
    +"Name: "+name+"%0a"
    +"Address: "+address+"%0a"
    +"choise: "+choise+"%0a%0a";
    window.open(url,'_blank').focus();
}