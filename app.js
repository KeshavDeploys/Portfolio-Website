const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const videoList =[video1, video2, video3];



// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})


///////////// Contact ME Button Redirect

 document.querySelector(".Contact-btn-Top").addEventListener("click", function () {
  const contactSection = document.querySelector(".contact-container");
  contactSection.scrollIntoView({ behavior: "smooth" });
});


////////////////// Get resume submenu
document.querySelectorAll(".getresume").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Stop the default jump

    const resumeLink = document.createElement("a");
    resumeLink.href = "Keshav_Resume.pdf"; // Path to your resume
    resumeLink.download = "Keshav_Resume.pdf";
    document.body.appendChild(resumeLink);
    resumeLink.click();
    document.body.removeChild(resumeLink);
  });
});
