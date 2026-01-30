const menu=document.getElementById('nav-bar');

 function hide(){

    menu.classList.toggle('hidden');
    document.body.classList.toggle('menu-open');
    
 }

// Resume Download Handler
document.getElementById('resumeBtn').addEventListener('click', function() {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = './Assets/HAFEEZULLA.pdf'; // Path to your CV file
    link.download = 'Hafeez_Ulla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Hire Me Navigation Handler
document.getElementById('hireMeBtn').addEventListener('click', function() {
    window.location.href = './hire.html';
});
 
 