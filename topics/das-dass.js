// Übungsdaten für "Das oder Dass"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form: Ich hoffe, ____ du bald kommst.',
        options: ['das', 'dass'],
        correctAnswer: 'dass',
        explanation: '"Dass" ist hier richtig, weil es einen Nebensatz einleitet.',
        hint: 'Überlege, ob du hier "dieses" einsetzen könntest.'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form: ____ Buch, das auf dem Tisch liegt, gehört mir.',
        options: ['Das', 'Dass'],
        correctAnswer: 'Das',
        explanation: '"Das" ist hier richtig, weil es ein Artikel ist.',
        hint: 'Hier handelt es sich um einen bestimmten Artikel.'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form: Ich weiß, ____ er nicht kommen wird.',
        options: ['das', 'dass'],
        correctAnswer: 'dass',
        explanation: '"Dass" ist hier richtig, weil es einen Nebensatz einleitet.',
        hint: 'Kann man hier "dieses" einsetzen?'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form: ____ ist mein neues Fahrrad.',
        options: ['Das', 'Dass'],
        correctAnswer: 'Das',
        explanation: '"Das" ist hier richtig, weil es ein Demonstrativpronomen ist (= dieses).',
        hint: 'Versuche, das Wort durch "dieses" zu ersetzen.'
    },
    {
        type: 'fill-in-blank',
        question: 'Fülle die Lücken aus:',
        text: 'Ich glaube, [1] er recht hat. [2] Problem ist, [3] niemand ihm zuhören will. [4] finde ich schade.',
        blanks: ['dass', 'Das', 'dass', 'Das'],
        explanation: '1: "dass" leitet einen Nebensatz ein. 2: "Das" ist ein Artikel. 3: "dass" leitet einen Nebensatz ein. 4: "Das" ist ein Demonstrativpronomen.',
        hint: 'Überlege bei jeder Lücke, ob du "dieses" einsetzen könntest.'
    },
    {
        type: 'drag-drop',
        question: 'Ziehe "das" oder "dass" in die richtigen Lücken:',
        text: [
            'Ich weiß nicht, ob ',
            ' stimmt, was er sagt.',
            ' Haus, ',
            ' wir gestern gesehen haben, steht zum Verkauf.',
            ' ist ',
            ', was ich dir sagen wollte.'
        ],
        options: ['das', 'dass', 'Das', 'das', 'Das', 'das'],
        explanation: '1: "das" bezieht sich auf "was er sagt". 2: "Das" ist ein Artikel. 3: "das" ist ein Relativpronomen. 4: "Das" ist ein Demonstrativpronomen. 5: "das" bezieht sich auf "was ich dir sagen wollte".',
        hint: 'Versuche bei jeder Lücke zu überlegen, ob du "dieses" einsetzen könntest.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler im folgenden Text:',
        text: 'Ich hoffe, das du morgen Zeit hast. Das Buch, dass auf dem Tisch liegt, gehört mir. Ich weiß, das er nicht kommen wird. Dass ist mein neues Fahrrad.',
        correctText: 'Ich hoffe, dass du morgen Zeit hast. Das Buch, das auf dem Tisch liegt, gehört mir. Ich weiß, dass er nicht kommen wird. Das ist mein neues Fahrrad.',
        explanation: '1: "dass" leitet einen Nebensatz ein. 2: "das" ist ein Relativpronomen. 3: "dass" leitet einen Nebensatz ein. 4: "Das" ist ein Demonstrativpronomen.',
        hint: 'Achte darauf, ob ein Nebensatz eingeleitet wird oder ob es sich um einen Artikel/Pronomen handelt.'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form: Er behauptet, ____ er die Wahrheit sagt.',
        options: ['das', 'dass'],
        correctAnswer: 'dass',
        explanation: '"Dass" ist hier richtig, weil es einen Nebensatz einleitet.',
        hint: 'Kann man hier "dieses" einsetzen?'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form: ____ Auto, das ich gestern gekauft habe, ist rot.',
        options: ['Das', 'Dass'],
        correctAnswer: 'Das',
        explanation: '"Das" ist hier richtig, weil es ein Artikel ist.',
        hint: 'Hier handelt es sich um einen bestimmten Artikel.'
    },
    {
        type: 'fill-in-blank',
        question: 'Fülle die Lücken aus:',
        text: 'Ich bin mir sicher, [1] [2] die richtige Entscheidung ist. [3] Problem ist nur, [4] ich nicht weiß, wie ich es ihr sagen soll.',
        blanks: ['dass', 'das', 'Das', 'dass'],
        explanation: '1: "dass" leitet einen Nebensatz ein. 2: "das" ist ein Demonstrativpronomen. 3: "Das" ist ein Artikel. 4: "dass" leitet einen Nebensatz ein.',
        hint: 'Überlege bei jeder Lücke, ob du "dieses" einsetzen könntest.'
    }
];

// DOM-Elemente
document.addEventListener('DOMContentLoaded', function() {
    const exerciseContent = document.getElementById('exercise-content');
    const hintButton = document.getElementById('hint-button');
    const checkButton = document.getElementById('check-button');
    const nextButton = document.getElementById('next-button');
    const hintText = document.getElementById('hint-text');
    const feedback = document.getElementById('feedback');
    const currentExerciseSpan = document.getElementById('current-exercise');
    const totalExercisesSpan = document.getElementById('total-exercises');
    const exerciseProgress = document.getElementById('exercise-progress');
    const userDisplay = document.getElementById('user-display');
    
    // Variablen
    let currentExerciseIndex = 0;
    let userAnswers = [];
    let points = 0;
    let userName = '';
    
    // Benutzerdaten aus dem lokalen Speicher laden
    loadUserData();
    
    // Erste Übung anzeigen
    totalExercisesSpan.textContent = exercises.length;
    loadExercise(currentExerciseIndex);
    
    // Event-Listener
    hintButton.addEventListener('click', showHint);
    checkButton.addEventListener('click', checkAnswer);
    nextButton.addEventListener('click', nextExercise);
    
    // Funktionen
    function loadUserData() {
        const savedData = localStorage.getItem('grammatikportal_user');
        
        if (savedData) {
            const userData = JSON.parse(savedData);
            userName = userData.name;
            userDisplay.textContent = `Angemeldet als: ${userName}`;
        } else {
            // Zurück zur Startseite, wenn kein Benutzer gefunden wurde
            window.location.href = '../index.html';
        }
    }
    
    function loadExercise(index) {
        const exercise = exercises[index];
        currentExerciseSpan.textContent = index + 1;
        
        // Fortschrittsbalken aktualisieren
        const progressPercentage = Math.round(((index + 1) / exercises.length) * 100);
        exerciseProgress.style.width = `${progressPercentage}%`;
        exerciseProgress.textContent = `${progressPercentage}%`;
        
        // Feedback und Hinweis zurücksetzen
        feedback.style.display = 'none';
        hintText.style.display = 'none';
        
        // Buttons zurücksetzen
        checkButton.style.display = 'block';
        nextButton.style.display = 'none';
        
        // Übungsinhalt basierend auf dem Typ erstellen
        let exerciseHTML = `<h3 class="exercise-title">Übung ${index + 1}</h3>`;
        exerciseHTML += `<p class="exercise-description">${exercise.question}</p>`;
        
        switch (exercise.type) {
            case 'multiple-choice':
                exerciseHTML += createMultipleChoiceHTML(exercise);
                break;
            case 'fill-in-blank':
                exerciseHTML += createFillInBlankHTML(exercise);
                break;
            case 'drag-drop':
                exerciseHTML += createDragDropHTML(exercise);
                break;
            case 'correction':
                exerciseHTML += createCorrectionHTML(exercise);
                break;
        }
        
        exerciseContent.innerHTML = exerciseHTML;
        
        // Event-Listener für den spezifischen Übungstyp hinzufügen
        if (exercise.type === 'multiple-choice') {
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        } else if (exercise.type === 'drag-drop') {
            initDragAndDrop();
        }
    }
    
    function createMultipleChoiceHTML(exercise) {
        let html = '<div class="options-container">';
        
        exercise.options.forEach(option => {
            html += `<div class="option" data-value="${option}">${option}</div>`;
        });
        
        html += '</div>';
        return html;
    }
    
    function createFillInBlankHTML(exercise) {
        let html = '<div class="fill-in-blank-container">';
        html += '<p class="exercise-text">';
        
        const textParts = exercise.text.split(/\[(\d+)\]/g);
        
        for (let i = 0; i < textParts.length; i++) {
            if (i % 2 === 0) {
                // Text
                html += textParts[i];
            } else {
                // Lücke
                const blankIndex = parseInt(textParts[i]) - 1;
                html += `<input type="text" class="blank-input" data-index="${blankIndex}" placeholder="...">`;
            }
        }
        
        html += '</p></div>';
        return html;
    }
    
    function createDragDropHTML(exercise) {
        let html = '<div class="drag-drop-container">';
        
        // Drag-Optionen
        html += '<div class="drag-container">';
        exercise.options.forEach((option, index) => {
            html += `<div class="draggable" draggable="true" data-index="${index}">${option}</div>`;
        });
        html += '</div>';
        
        // Drop-Zonen
        html += '<div class="text-with-drops">';
        for (let i = 0; i < exercise.text.length; i++) {
            html += exercise.text[i];
            if (i < exercise.text.length - 1) {
                html += `<div class="drop-zone" data-index="${i}"></div>`;
            }
        }
        html += '</div>';
        
        html += '</div>';
        return html;
    }
    
    function createCorrectionHTML(exercise) {
        let html = '<div class="correction-container">';
        html += '<p>Korrigiere den folgenden Text:</p>';
        html += `<textarea class="correction-textarea" rows="6">${exercise.text}</textarea>`;
        html += '</div>';
        return html;
    }
    
    function initDragAndDrop() {
        const draggables = document.querySelectorAll('.draggable');
        const dropZones = document.querySelectorAll('.drop-zone');
        
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', function() {
                this.classList.add('dragging');
            });
            
            draggable.addEventListener('dragend', function() {
                this.classList.remove('dragging');
            });
        });
        
        dropZones.forEach(dropZone => {
            dropZone.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.classList.add('highlight');
            });
            
            dropZone.addEventListener('dragleave', function() {
                this.classList.remove('highlight');
            });
            
            dropZone.addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('highlight');
                
                const dragging = document.querySelector('.dragging');
                if (dragging) {
                    // Wenn bereits ein Element in der Drop-Zone ist, zurück in den Container
                    if (this.children.length > 0) {
                        const existingDraggable = this.children[0];
                        const dragContainer = document.querySelector('.drag-container');
                        dragContainer.appendChild(existingDraggable);
                    }
                    
                    this.appendChild(dragging);
                }
            });
        });
    }
    
    function showHint() {
        const exercise = exercises[currentExerciseIndex];
        hintText.textContent = exercise.hint;
        hintText.style.display = 'block';
    }
    
    function checkAnswer() {
        const exercise = exercises[currentExerciseIndex];
        let isCorrect = false;
        let userAnswer;
        
        switch (exercise.type) {
            case 'multiple-choice':
                const selectedOption = document.querySelector('.option.selected');
                if (selectedOption) {
                    userAnswer = selectedOption.getAttribute('data-value');
                    isCorrect = userAnswer === exercise.correctAnswer;
                    
                    // Visuelles Feedback
                    selectedOption.classList.add(isCorrect ? 'correct' : 'incorrect');
                } else {
                    feedback.textContent = 'Bitte wähle eine Option aus.';
                    feedback.className = 'feedback error';
                    feedback.style.display = 'block';
                    return;
                }
                break;
                
            case 'fill-in-blank':
                const inputs = document.querySelectorAll('.blank-input');
                userAnswer = Array.from(inputs).map(input => input.value.trim());
                isCorrect = userAnswer.every((answer, index) => 
                    answer.toLowerCase() === exercise.blanks[index].toLowerCase());
                
                // Visuelles Feedback
                inputs.forEach((input, index) => {
                    const inputCorrect = input.value.trim().toLowerCase() === exercise.blanks[index].toLowerCase();
                    input.style.borderColor = inputCorrect ? 'var(--success-color)' : 'var(--error-color)';
                    input.style.backgroundColor = inputCorrect ? 'rgba(6, 214, 160, 0.1)' : 'rgba(239, 71, 111, 0.1)';
                });
                break;
                
            case 'drag-drop':
                const dropZones = document.querySelectorAll('.drop-zone');
                userAnswer = Array.from(dropZones).map(zone => {
                    if (zone.children.length > 0) {
                        return zone.children[0].textContent;
                    }
                    return '';
                });
                
                isCorrect = userAnswer.every((answer, index) => 
                    answer === exercise.options[index]);
                
                // Visuelles Feedback
                dropZones.forEach((zone, index) => {
                    if (zone.children.length > 0) {
                        const zoneCorrect = zone.children[0].textContent === exercise.options[index];
                        zone.style.borderColor = zoneCorrect ? 'var(--success-color)' : 'var(--error-color)';
                        zone.style.backgroundColor = zoneCorrect ? 'rgba(6, 214, 160, 0.1)' : 'rgba(239, 71, 111, 0.1)';
                    } else {
                        zone.style.borderColor = 'var(--error-color)';
                        zone.style.backgroundColor = 'rgba(239, 71, 111, 0.1)';
                    }
                });
                break;
                
            case 'correction':
                const textarea = document.querySelector('.correction-textarea');
                userAnswer = textarea.value.trim();
                isCorrect = userAnswer === exercise.correctText;
                
                // Visuelles Feedback
                textarea.style.borderColor = isCorrect ? 'var(--success-color)' : 'var(--error-color)';
                textarea.style.backgroundColor = isCorrect ? 'rgba(6, 214, 160, 0.1)' : 'rgba(239, 71, 111, 0.1)';
                break;
        }
        
        // Antwort speichern
        userAnswers[currentExerciseIndex] = {
            answer: userAnswer,
            correct: isCorrect
        };
        
        // Punkte vergeben
        if (isCorrect) {
            points += 10;
        }
        
        // Feedback anzeigen
        feedback.textContent = isCorrect 
            ? `Richtig! ${exercise.explanation}` 
            : `Leider falsch. ${exercise.explanation}`;
        feedback.className = isCorrect ? 'feedback success' : 'feedback error';
        feedback.style.display = 'block';
        
        // Buttons aktualisieren
        checkButton.style.display = 'none';
        nextButton.style.display = 'block';
        
        // Wenn es die letzte Übung war, Ergebnisse speichern
        if (currentExerciseIndex === exercises.length - 1) {
            nextButton.textContent = 'Ergebnisse anzeigen';
        }
    }
    
    function nextExercise() {
        if (currentExerciseIndex < exercises.length - 1) {
            currentExerciseIndex++;
            loadExercise(currentExerciseIndex);
        } else {
            // Alle Übungen abgeschlossen
            saveResults();
            showResults();
        }
    }
    
    function saveResults() {
        const savedData = localStorage.getItem('grammatikportal_user');
        
        if (savedData) {
            const userData = JSON.parse(savedData);
            
            // Anzahl der korrekten Antworten zählen
            const correctAnswers = userAnswers.filter(answer => answer.correct).length;
            
            // Fortschritt aktualisieren
            userData.progress['das-dass'].completed = correctAnswers;
            userData.progress['das-dass'].points += points;
            
            localStorage.setItem('grammatikportal_user', JSON.stringify(userData));
        }
    }
    
    function showResults() {
        // Anzahl der korrekten Antworten zählen
        const correctAnswers = userAnswers.filter(answer => answer.correct).length;
        const percentage = Math.round((correctAnswers / exercises.length) * 100);
        
        // Ergebnisanzeige erstellen
        let resultsHTML = `
            <div class="results-container">
                <h2>Übungen abgeschlossen!</h2>
                <div class="results-summary">
                    <p>Du hast <strong>${correctAnswers} von ${exercises.length}</strong> Übungen richtig gelöst.</p>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${percentage}%;">${percentage}%</div>
                    </div>
                    <p>Gesammelte Punkte: <strong>${points}</strong></p>
                </div>
                <div class="results-actions">
                    <button id="retry-button">Übungen wiederholen</button>
                    <button id="back-to-menu-button">Zurück zum Hauptmenü</button>
                </div>
            </div>
        `;
        
        exerciseContent.innerHTML = resultsHTML;
        
        // Buttons ausblenden
        checkButton.style.display = 'none';
        nextButton.style.display = 'none';
        hintButton.style.display = 'none';
        
        // Event-Listener für die Ergebnisseite
        document.getElementById('retry-button').addEventListener('click', function() {
            // Übungen zurücksetzen
            currentExerciseIndex = 0;
            userAnswers = [];
            points = 0;
            
            // Buttons wieder anzeigen
            hintButton.style.display = 'block';
            
            // Erste Übung laden
            loadExercise(currentExerciseIndex);
        });
        
        document.getElementById('back-to-menu-button').addEventListener('click', function() {
            window.location.href = '../index.html';
        });
        
        // Belohnung anzeigen, wenn mehr als 70% richtig
        if (percentage >= 70) {
            showReward(points, 'Du hast das Thema "Das oder Dass" erfolgreich gemeistert!');
        }
    }
}); 