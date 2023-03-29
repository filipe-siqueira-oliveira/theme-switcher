document.getElementById("toggle").addEventListener("click", () => {
  document.getElementById("theme").classList.toggle("dark");
  document.getElementById("theme").classList.toggle("light");
});

console.log(document.getElementById("theme").classList.value);
