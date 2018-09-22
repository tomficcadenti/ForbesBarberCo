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
  document.getElementById('pixlee_container').style.width = "100%";
  document.getElementById('pixlee_container').style.height = "100%";
  //document.getElementById('photoGalleryPage').style.float = "left";
}

function hideAllContent() {
  document.getElementById('homePage').style.display = "none";
  document.getElementById('photoGalleryPage').style.display = "none";
}
