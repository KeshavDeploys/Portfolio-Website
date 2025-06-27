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
      resumeLink.href = "Keshav_Resume.pdf";
      resumeLink.download = "Keshav_Resume.pdf";
      document.body.appendChild(resumeLink);
      resumeLink.click();
      document.body.removeChild(resumeLink);
    });
  });

  // ✅ Lazy load videos after DOM is ready
  const videoMap = [
    { id: "heroSkillVid", src: "videos/2.mp4" },
    { id: "projectVideo1", src: "videos/IMP.mp4" },
    { id: "projectVideo2", src: "videos/Project2.mp4" },
    { id: "projectVideo3", src: "videos/Project3.mp4" }
    { id: "aboutGlobeVid", src: "videos/glob.mp4" }
  ];

  videoMap.forEach(({ id, src }) => {
    const video = document.getElementById(id);
    if (video) {
      const source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4";
      video.appendChild(source);
    }
  });
});
