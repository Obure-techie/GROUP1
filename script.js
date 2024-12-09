 // Smooth scroll for the "Our Menu" button
 document.getElementById('ourMenuButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior
    document.querySelector('#menu').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling effect
    });
});

