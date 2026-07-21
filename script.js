const menuIcon=document.querySelector('#menu-icon');
const navLinks=document.querySelector('.nav-links')

menuIcon.onclick=()=>{
    navLinks.classList.toggle('active');
}
function whatsupform() {
    
    let num = "201110078274"; 
    
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let choise = document.getElementById('on-off').value;
    
    
    let message = "الاسم: " + name + "\n"
                + "رقم التليفون: " + phone + "\n"
                + "العنوان: " + address + "\n"
                + "نوع الحجز: " + choise;

    
    let url = "https://wa.me/" + num + "?text=" + encodeURIComponent(message);
    
    window.open(url, '_blank').focus();
}