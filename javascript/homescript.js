function homeClick() {
  hideAllContent();
  document.getElementById('homePage').style.display = "block";
  window.location.href = "https://forbesbarberco.com";
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
  // hideAllContent();
  // document.getElementById('photoGalleryPage').style.display = "inline";
  window.open("https://www.instagram.com/forbesbarberco/", "_blank");

}

function aboutUsClick() {
  hideAllContent();
  document.getElementById('aboutUsPage').style.display = "block";
}

function bookNowClick() {
    window.location.href = "https://forbesbarberco.com/BookNow";
}

function goHomeExternalClick() {
    window.location.href = "https://forbesbarberco.com";
}

function locationClick() {
  hideAllContent();
  document.getElementById('locationPage').style.display = "block";
}

function hideAllContent() {
  document.getElementById('homePage').style.display = "none";
  //document.getElementById('photoGalleryPage').style.display = "none";
  document.getElementById('aboutUsPage').style.display = "none";
  document.getElementById('locationPage').style.display = "none";
}

function bookWithStaff(e) {
  if (e.target.id === "mark") {
    window.open("https://squareup.com/appointments/book/d24020c4-ccc7-440e-a2fe-517a8da00ab2/2CB8QMWHX63E8/services", "_blank");
  } else if (e.target.id === "evan") {
    window.open("https://squareup.com/appointments/book/d24020c4-ccc7-440e-a2fe-517a8da00ab2/2CB8QMWHX63E8/services", "_blank");
  } else {
    window.open("https://squareup.com/appointments/book/d24020c4-ccc7-440e-a2fe-517a8da00ab2/2CB8QMWHX63E8/services", "_blank");
  }
  console.log('tits');
}

function myFunction() {
  var mobileNav = document.getElementById("myLinks");
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}

function detectMobile() {
  var desktopNav = document.getElementById("topbanner");
  var mobileNav = document.getElementById("topnavMobile");

  var banner = document.getElementById("banner");

  if (window.innerWidth <= 900 && window.innerHeight <= 800) {
   desktopNav.style.display = "none";
   mobileNav.style.display = "block";
   banner.style.margin = "0px 0px 0px 0px";
 } else {
   desktopNav.style.display = "block";
   mobileNav.style.display = "none";
   banner.style.margin = "87px 0px 0px 0px";
 }

 $(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
  });

  $(window).bind('resizeEnd', function() {
    detectMobile();
  });
}
