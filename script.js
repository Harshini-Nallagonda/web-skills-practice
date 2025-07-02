// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorEl = document.getElementById("formError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    errorEl.textContent = "All fields are required.";
    return;
  }

  if (!emailRegex.test(email)) {
    errorEl.textContent = "Please enter a valid email.";
    return;
  }

  errorEl.textContent = "";
  alert("Form submitted successfully!");
  document.getElementById("contactForm").reset();
});

// To-do list DOM manipulation
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
