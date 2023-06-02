window.onload = function() {
    const questions = JSON.parse(localStorage.getItem('questions'));
    for(let i = 0; i < questions.length; i++) {
        addQuestionToList(questions[i].title, questions[i].description, i);
    }
}
 

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const questionTitle = document.getElementById('titulo').value;
    const questionDescription = document.getElementById('descricao').value;

    let questions;
    if(localStorage.getItem('questions')) {
        questions = JSON.parse(localStorage.getItem('questions'));
    } else {
        questions = [];
    }

    questions.push({
        title: questionTitle,
        description: questionDescription
    });

    localStorage.setItem('questions', JSON.stringify(questions));

    addQuestionToList(questionTitle, questionDescription, questions.length - 1);

    document.getElementById('questionTitle').value = '';
    document.getElementById('questionDescription').value = '';

    alert('Pergunta adicionada com sucesso!');

});

function addQuestionToList(title, description, index) {
    const questionList = document.getElementById('questionList');
    const questionElement = document.createElement('div');

    questionElement.innerHTML = 
        `<h2>${title}</h2>
        <p>${description}</p>
        <button onclick="removeQuestion(${index})">Remover</button>
        <hr>`
        
    ;

    questionList.appendChild(questionElement);
}

function removeQuestion(index) {
    let questions = JSON.parse(localStorage.getItem('questions')) ;
    questions.splice(index, 1);
    localStorage.setItem('questions', JSON.stringify(questions));
    location.reload();
}

// document.getElementById('submit').addEventListener('submit', function(e) {
//     e.preventDefault();
//     questionList.style.display = 'none';
// })
