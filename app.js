let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let Navlink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(set => {
    let offset = set.offsetTop - 150;
    let height = set.offsetHeight;
    let id = set.getAttribute("id");

    if (top >= offset && top < offset + height) {
      Navlink.forEach(link => link.classList.remove("active"));
      let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

menuicon.onclick = () => {
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


//  Scroll to Top Button 
// document.addEventListener('DOMContentLoaded', function() {
//   var scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show the button when the user scrolls down 20px from the top
  // window.addEventListener('scroll', function() {
  //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //         scrollToTopBtn.style.display = 'block';
  //     } else {
  //         scrollToTopBtn.style.display = 'none';
  //     }
  // });

  // Scroll to top when the button is clicked
//   scrollToTopBtn.addEventListener('click', function() {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
// });
