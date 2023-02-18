document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        window.scrollTo({
          top: document.querySelector(hash).offsetTop,
          behavior: 'smooth'
        });
        window.history.pushState(null, null, hash);
      }
    });
  });

  const navToggle = document.querySelector('.nav-button');
  const navList = document.querySelector('.nav');
console.log(navList);
  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('is-active');
    navList.classList.toggle('show');
  });
});
