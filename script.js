// Funcionalidade 1: Exibir uma saudação com alert()
document.getElementById("show-message-btn").addEventListener("click", function () {
    alert("Olá, bem-vindo ao meu currículo online! Fico feliz com a sua visita.");
});

// Funcionalidade 2: Mostrar e esconder uma seção
const toggleBtn = document.getElementById("toggle-experience-btn");
const experienceSection = document.getElementById("experiencia");

toggleBtn.addEventListener("click", function() {
    if (experienceSection.style.display === "none") {
        experienceSection.style.display = "block";
        toggleBtn.textContent = "Ocultar Experiência";
    } else {
        experienceSection.style.display = "none";
        toggleBtn.textContent = "Mostrar Experiência";
    }
});

// Funcionalidade 3: Coletar e exibir dados inseridos em um campo
const submitNameBtn = document.getElementById("submit-name-btn");
const visitorNameInput = document.getElementById("visitor-name");
const greetingMessage = document.getElementById("greeting-message");

submitNameBtn.addEventListener("click", function() {
    const name = visitorNameInput.value.trim();
    if (name) {
        greetingMessage.innerHTML = `Olá, <strong>${name}</strong>! Obrigado por visitar meu currículo.`;
        greetingMessage.classList.remove("hidden");
    } else {
        greetingMessage.innerHTML = "Por favor, digite seu nome.";
        greetingMessage.classList.remove("hidden");
    }
});


const canvas = document.getElementById("skills-canvas");
const ctx = canvas.getContext("2d");


ctx.fillStyle = "#004d40";
ctx.fillRect(10, 20, 100, 50);


ctx.beginPath();
ctx.arc(180, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#00796b";
ctx.fill();
ctx.strokeStyle = "#004d40";
ctx.stroke();


ctx.fillStyle = "#333";
ctx.font = "16px Arial";
ctx.fillText("HTML/CSS", 15, 90);
ctx.fillText("JavaScript", 140, 90);