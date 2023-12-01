const FAQ = document.getElementById("FAQ");
const BBL_B = document.getElementById("BBL_Button");
const BOL_B = document.getElementById("BOL_Button");

FAQ.addEventListener("click", open_FAQ) 

function open_FAQ() {
    window.location.href = "../pages/faq.html";
}

BBL_B.addEventListener("click", open_BBL) 

function open_BBL() {
    window.location.href = "../pages/BBL.html";
}

BOL_B.addEventListener("click", open_BOL) 

function open_BOL() {
    window.location.href = "../pages/BOL.html";
}
  
