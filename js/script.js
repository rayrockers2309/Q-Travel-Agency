const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};



document.getElementById("myForm").addEventListener("submit", function(event) {
    var email = document.getElementById("emailInput").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        document.getElementById("errorText").style.display = "block";
        event.preventDefault(); // Menghentikan perilaku default formulir
    } else {
        document.getElementById("errorText").style.display = "none";
        // Tampilkan popup berhasil setelah submit berhasil
        document.getElementById("successPopup").style.display = "block";
        // Beri waktu delay sebelum menghilangkan popup
        setTimeout(function() {
            document.getElementById("successPopup").style.display = "none";
        }, 3000); // Delay 3000ms (3 detik)
        event.preventDefault(); // Menghentikan perilaku default formulir
    }
});