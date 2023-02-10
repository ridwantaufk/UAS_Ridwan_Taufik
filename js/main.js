let scrollAwal = window.pageYOffset;
window.onscroll = function () {
  let scrollSekarang = window.pageYOffset;
  if (scrollAwal > scrollSekarang) {
    document.querySelector("nav").classList.remove("show");
  } else {
    document.querySelector("nav").classList.add("show");
  }
  scrollAwal = scrollSekarang;

  // slide effect
  if (document.documentElement.scrollTop > 400) {
    document.querySelector(".box2 h1").className = "slideEffect-slideUp-box2";
  }
  if (document.documentElement.scrollTop > 600) {
    let paket = document.querySelectorAll("figure");
    for (let x = 0; x < paket.length; x++) {
      paket[x].className = "slideEffect-slideUp-box2";
    }
  }
  if (document.documentElement.scrollTop > 2000) {
    document.querySelector(".box3 h1").className =
      "slideEffect-slideRight-box3";
  }
  if (document.documentElement.scrollTop > 2100) {
    let li = document.querySelectorAll(".box3 ul li");
    li[0].className = "paket1-box3";
    li[1].className = "paket2-box3";
    li[2].className = "paket3-box3";
    li[3].className = "paket4-box3";
    li[4].className = "paket5-box3";
    li[5].className = "paket6-box3";
  }
  if (document.documentElement.scrollTop > 2200) {
    let h2 = document.querySelectorAll(".paket-1 h2"),
      h3 = document.querySelectorAll(".content-paket h3"),
      kontenPaketP = document.querySelectorAll(".content-paket p"),
      hargaPaketSpan = document.querySelectorAll(".harga-paket span");

    for (let x = 0; x < h2.length; x++) {
      h2[x].className = "slideEffect-slideUp-box3";
    }
    for (let x = 0; x < h3.length; x++) {
      h3[x].className = "slideEffect-slideLeft-box3";
    }
    for (let x = 0; x < kontenPaketP.length; x++) {
      kontenPaketP[x].className = "slideEffect-slideDown-box3";
    }
    for (let x = 0; x < hargaPaketSpan.length; x++) {
      hargaPaketSpan[x].className = "slideEffect-slideRight-box3";
    }
  }
  if (document.documentElement.scrollTop > 2700) {
    document.querySelector(".box4 h1").className = "slideEffect-slideUp-box4";
  }
  if (document.documentElement.scrollTop > 2900) {
    document.getElementById("slideback").className =
      "slideEffect-slideRight-box4";
    document.getElementById("slide").className = "slideEffect-slideLeft-box4";
    let pil = document.querySelectorAll(".pil-awal");
    for (let x = 0; x < pil.length; x++) {
      pil[x].className = "pil";
    }
  }
  if (document.documentElement.scrollTop > 3200) {
    document.querySelector(".box5 h1").className = "slideEffect-slideUp-box5";
    let p = document.querySelectorAll(".box5 p");
    p[0].className = "p1";
    p[1].className = "p2";
    p[2].className = "p3";
    p[3].className = "p4";
  }
  if (document.documentElement.scrollTop > 3400) {
    document.querySelector(".box6 h1").className = "slideEffect-slideUp-box6";
  }
  if (document.documentElement.scrollTop > 3410) {
    let a = document.querySelectorAll(".sosmed a");
    a[0].className = "sosmed1";
    a[1].className = "sosmed2";
    a[2].className = "sosmed3";
    a[3].className = "sosmed4";
    a[4].className = "sosmed5";
    document.querySelector(".contact a").className = "whatsapp";
  }
};

// burger navbar button
function myFunction(x) {
  x.classList.toggle("change");
}

let acc = document.getElementsByClassName("burger");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

//Penjualan Button scrollX
var button = document.getElementById("slide");
button.onclick = function () {
  var container = document.getElementById("container");
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    container.scrollLeft += 800;
    scrollAmount += 800;
    if (scrollAmount >= 800) {
      window.clearInterval(slideTimer);
    }
  }, 25);
};

var back = document.getElementById("slideback");
back.onclick = function () {
  var container = document.getElementById("container");
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    container.scrollLeft -= 800;
    scrollAmount += 800;
    if (scrollAmount >= 800) {
      window.clearInterval(slideTimer);
    }
  }, 25);
};

//whatsapp
function whatsapp() {
  let confir = confirm("lanjutkan OK via whatsapp");
  if (confir == true) {
    window.open("https://wa.me/6281312025217");
  }
}
