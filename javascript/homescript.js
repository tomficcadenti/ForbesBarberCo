function homeClick() {
  hideAllContent();
  document.getElementById('homePage').style.display = "block";
}

function bookNowClick() {
  window.location = "https://squareup.com/appointments/book/2CB8QMWHX63E8/forbes-barber-company-laguna-hills-ca";
}

function serviceMenuClick() {
  let serviceMenu = document.getElementById('serviceMenu');
  if (document.getElementById('homePage').style.display === "none") {
    homeClick();
  }
  console.log('success');
  serviceMenu.scrollIntoView({behavior: "smooth", block: "start"});
}

function photoGalleryClick() {
  hideAllContent();
  document.getElementById('photoGalleryPage').style.display = "inline";
}

function hideAllContent() {
  document.getElementById('homePage').style.display = "none";
  document.getElementById('photoGalleryPage').style.display = "none";
}
