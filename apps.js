// Light & Dark Mode
var dark = document.getElementById('dark');

dark.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        dark.src = "dark/sun.png";
    }else{
        dark.src = "dark/moon.png";
    }
}
// Coupon Code
function loadCoupon(){
    document.getElementById('coupon').style.visibility = "visible";
    document.getElementById('blur').style.filter = '20';
}
function closeCoupon(){
    document.getElementById('coupon').style.visibility = "hidden";
    document.getElementById('blur').style.filter = '0';
}
