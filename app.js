document.addEventListener("DOMContentLoaded", () => {
  // Sidebar logic
  const sideBar = document.querySelector('.sidebar');
  const menu = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  menu?.addEventListener("click", () => {
    sideBar?.classList.remove("close-sidebar");
    sideBar?.classList.add("open-sidebar");
  });

  closeIcon?.addEventListener("click", () => {
    sideBar?.classList.remove("open-sidebar");
    sideBar?.classList.add("close-sidebar");
  });

  // Contact Me scroll
  const contactBtn = document.querySelector(".Contact-btn-Top");
  contactBtn?.addEventListener("click", () => {
    const contactSection = document.querySelector(".contact-container");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  });

  // Resume download
  document.querySelectorAll(".getresume").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const resumeLink = document.createElement("a");
      resumeLink.href = "Resume.pdf";
      resumeLink.download = "Keshav_Resume.pdf";
      document.body.appendChild(resumeLink);
      resumeLink.click();
      document.body.removeChild(resumeLink);
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const connectBtn = document.getElementById("connectBtn");

  connectBtn?.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/keshav-kumar-3649812b5/", "_blank");
  });
});

