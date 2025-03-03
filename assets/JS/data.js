const menubtn = document.querySelector('.menubtn');
const closebtn = document.querySelector('.closebtn');
const nav_small = document.querySelector('.nav-small');
const navLinks = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('section');

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

// Function to update the active link based on the section in view
function updateActiveLink() {
    let currentSection = '';

    // Loop through each section to determine which one is in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove 'active_link' class from all nav links and add it to the active one
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active_link');
        } else {
            link.classList.remove('active_link');
        }
    });
}

// Listen to the scroll event and update the active link
window.addEventListener('scroll', updateActiveLink);

//Small screen navbar toggle system
function openNav(event) {
	nav_small.classList.add("nav-small-open");
	menubtn.style.visibility = "hidden"
	closebtn.style.visibility = "visible"
}

function closeNav(event) {
	nav_small.classList.remove("nav-small-open");
	menubtn.style.visibility = "visible"
	closebtn.style.visibility = "hidden"
}

menubtn.addEventListener("click", openNav);
closebtn.addEventListener("click", closeNav);
