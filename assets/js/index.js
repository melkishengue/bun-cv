window.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("print-button")
  button.addEventListener("click", function() {
    window.print();
  })
});
