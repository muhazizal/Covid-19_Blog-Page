// Toggle Icon for Navbar
function toggleIcon() {
  const navbar = document.querySelector('#nav-trigger');
  if (navbar.className === 'navbar') {
    navbar.className += ' responsive';
  } else {
    navbar.className = 'navbar';
  }
}