document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  const output = document.getElementById("formOutput");
  const welcome = document.getElementById("welcome-text");

  // Greeting pakai nama
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && phone && message) {
      welcome.textContent = `Hi, ${name}! 👋`;
      output.innerHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
      form.reset();
    } else {
      alert("Please fill all fields correctly!");
    }
  });
});
