document.addEventListener("DOMContentLoaded", () => {
    
    // Header shadow on scroll for better UX
    const header = document.querySelector(".header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)";
            header.style.padding = "0.8rem 10%"; // slightly shrinks header
        } else {
            header.style.boxShadow = "none";
            header.style.padding = "1.2rem 10%"; // original padding
        }
    });

    // Console greeting (Shows you are tech-savvy even as a marketer)
    console.log("%c Welcome to my Digital Marketing Portfolio! ", "background: #f97316; color: #fff; font-size: 16px; font-weight: bold; padding: 10px; border-radius: 5px;");
});