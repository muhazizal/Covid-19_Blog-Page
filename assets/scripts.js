// Toggle Icon
const navbar = document.querySelector('#nav-trigger');
const toggle = document.querySelector('.icon-toggle');
toggle.addEventListener('click', function () {
  if (navbar.className === 'navbar') {
    navbar.className += ' active';
  } else {
    navbar.className = 'navbar';
  }
});

// Button Read More
const buttons = document.querySelectorAll('.btn-explore');
for (btn of buttons) {
  btn.addEventListener('click', function() {
    alert('Page Under Maintance');
  });
}

// Text Link
const textLinks = document.querySelectorAll('.text-link');
for (txt of textLinks) {
  txt.addEventListener('mouseenter', function (e) {
    e.target.style.textDecoration = 'underline';
  });
  txt.addEventListener('mouseleave', function (e) {
    e.target.style.textDecoration = 'none';
  });
}