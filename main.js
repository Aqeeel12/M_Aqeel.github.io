document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading-screen");
  const main = document.getElementById("main-page");

  setTimeout(() => {
    loading.style.display = "none";
    main.style.display = "block";
  }, 1500);
});
