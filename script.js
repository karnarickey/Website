const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

function handleSubmit(event) {
  event.preventDefault();
  const message = document.getElementById("form-message");
  message.textContent = "Thanks — your enquiry has been captured for this demo.";
  event.target.reset();
  return false;
}

const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll("#nav-menu a:not(.nav-cta)");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));
