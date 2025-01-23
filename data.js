// Select all elements with the class name 'nav_link'
const navLinks = document.querySelectorAll('.nav_link');

// Function to remove 'active_link' class from all links and add it to the clicked one
function handleNavClick(event) {
    // Remove 'active_link' class from all nav links
    navLinks.forEach(link => link.classList.remove('active_link'));

    // Add 'active_link' class to the clicked link
    event.target.classList.add('active_link');
}

// Attach the click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
});
