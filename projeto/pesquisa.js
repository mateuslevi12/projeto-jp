let currentQuestionIndex = 0;
let questions = [];

function loadQuestions() {
    fetch('criacao.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
        })
        .catch(error => console.error('Erro ao carregar perguntas:', error));
}

function changeContent() {
    const btnChangeContent = document.getElementById("btnChangeContent");
    const contentDiv = document.querySelector(".content");
    const ratingContainer = document.getElementById("ratingContainer");

    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        contentDiv.innerHTML = `
        <div class="title container">
        <h2>${question.title}<h2>
        </div>
        <div class="description container">
        <p>${question.description}<p>
        </div>
        `;
        ratingContainer.style.display = 'block';
        btnChangeContent.textContent = "Próxima";
        currentQuestionIndex++;
    } else {
        contentDiv.innerHTML = `
        <div class="title"><h2>Pronto, finalizado.<h2></div>
        <div class="description">Obrigado por responder nossa pesquisa de satisfação!</div>
        `;
        ratingContainer.style.display = 'none';
        btnChangeContent.textContent = "Voltar";
        btnChangeContent.onclick = function () {
            window.location.href = "pagina-inicial.html";
        }
    }

    document.querySelectorAll('.star-widget input').forEach(input => {
        input.checked = false;
    });
    changeRating(0);
}
window.onload = loadQuestions;
function loadQuestions() {
  if(localStorage.getItem('questions')) {
      questions = JSON.parse(localStorage.getItem('questions'));
  } else {
      questions = [];
  }
}
window.onload = loadQuestions;
