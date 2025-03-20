// Übungsdaten für "Getrennt- oder Zusammenschreibung"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['kennen lernen', 'kennenlernen'],
        correctAnswer: 'kennenlernen',
        explanation: 'Bei "kennenlernen" handelt es sich um eine feste Verbindung aus zwei Verben, die zusammengeschrieben wird.',
        hint: 'Überlege, ob es sich um eine feste Verbindung handelt oder um zwei eigenständige Handlungen.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['Rad fahren', 'radfahren'],
        correctAnswer: 'Rad fahren',
        explanation: 'Bei "Rad fahren" bleibt das Substantiv "Rad" erkennbar, daher wird es getrennt geschrieben.',
        hint: 'Ist das erste Wort ein erkennbares Substantiv?'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['schwarz fahren', 'schwarzfahren'],
        correctAnswer: 'schwarzfahren',
        explanation: '"Schwarzfahren" wird zusammengeschrieben, weil durch die Verbindung von Adjektiv und Verb eine neue Bedeutung entsteht (ohne Fahrschein fahren).',
        hint: 'Entsteht durch die Verbindung eine neue Bedeutung?'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['sitzen bleiben', 'sitzenbleiben'],
        correctAnswer: 'sitzen bleiben',
        explanation: 'Bei "sitzen bleiben" handelt es sich um zwei eigenständige Handlungen, daher wird es getrennt geschrieben. (Hinweis: "sitzenbleiben" im Sinne von "nicht versetzt werden" wäre auch korrekt, aber hier ist die wörtliche Bedeutung gemeint.)',
        hint: 'Handelt es sich um zwei eigenständige Handlungen oder eine feste Verbindung mit neuer Bedeutung?'
    },
    {
        type: 'fill-in-blank',
        question: 'Fülle die Lücken mit der korrekten Schreibweise (getrennt oder zusammen):',
        text: 'Ich möchte dich [1] (kennen lernen/kennenlernen). Wir können zusammen [2] (Fahrrad fahren/fahrradfahren) und danach im Park [3] (spazieren gehen/spazierengehen).',
        blanks: ['kennenlernen', 'Fahrrad fahren', 'spazierengehen'],
        explanation: '1: "kennenlernen" ist eine feste Verbindung. 2: Bei "Fahrrad fahren" bleibt das Substantiv erkennbar. 3: "spazierengehen" ist eine feste Verbindung.',
        hint: 'Überlege bei jedem Fall, ob es sich um eine feste Verbindung handelt oder ob das erste Wort eigenständig bleibt.'
    },
    {
        type: 'drag-drop',
        question: 'Ziehe die Wörter in die richtige Position, um korrekte Sätze zu bilden:',
        text: [
            'Ich möchte heute ',
            ' und nicht zu Hause ',
            '.',
            'Sie will morgen ',
            ', um ihre Freundin zu ',
            '.'
        ],
        options: ['spazierengehen', 'bleiben', 'Auto fahren', 'besuchen'],
        explanation: '"spazierengehen" wird zusammengeschrieben, weil es eine feste Verbindung ist. "bleiben" ist ein eigenständiges Verb. "Auto fahren" wird getrennt geschrieben, weil das Substantiv erkennbar bleibt. "besuchen" ist ein eigenständiges Verb.',
        hint: 'Achte auf die Regeln für Zusammen- und Getrenntschreibung bei Verb-Verb-Verbindungen und Substantiv-Verb-Verbindungen.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler im folgenden Text:',
        text: 'Ich möchte heute schwimmen gehen und danach Eis essen. Mein Bruder will lieber zuhause bleiben und fern sehen. Morgen werden wir zusammen einkaufen gehen und Klavier spielen.',
        correctText: 'Ich möchte heute schwimmen gehen und danach Eis essen. Mein Bruder will lieber zuhause bleiben und fernsehen. Morgen werden wir zusammen einkaufen gehen und Klavier spielen.',
        explanation: '"schwimmen gehen" und "Eis essen" sind korrekt getrennt geschrieben. "fernsehen" wird zusammengeschrieben, weil es eine feste Verbindung ist. "einkaufen gehen" und "Klavier spielen" sind korrekt geschrieben.',
        hint: 'Achte besonders auf Verbindungen mit "sehen".'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['zusammen arbeiten', 'zusammenarbeiten'],
        correctAnswer: 'zusammenarbeiten',
        explanation: '"Zusammenarbeiten" wird zusammengeschrieben, weil "zusammen" hier als Partikel fungiert und mit dem Verb eine feste Verbindung bildet.',
        hint: 'Ist "zusammen" hier ein eigenständiges Adverb oder eine Partikel, die mit dem Verb eine Einheit bildet?'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['stehen lassen', 'stehenlassen'],
        correctAnswer: 'stehen lassen',
        explanation: 'Bei "stehen lassen" handelt es sich um zwei eigenständige Handlungen, daher wird es getrennt geschrieben.',
        hint: 'Handelt es sich um zwei eigenständige Handlungen oder eine feste Verbindung mit neuer Bedeutung?'
    },
    {
        type: 'fill-in-blank',
        question: 'Fülle die Lücken mit der korrekten Schreibweise (getrennt oder zusammen):',
        text: 'Wir sollten [1] (zusammen bleiben/zusammenbleiben), um das Problem zu lösen. Du kannst das Buch [2] (liegen lassen/liegenlassen), ich werde es später [3] (weg räumen/wegräumen).',
        blanks: ['zusammenbleiben', 'liegen lassen', 'wegräumen'],
        explanation: '1: "zusammenbleiben" wird zusammengeschrieben, weil es eine feste Verbindung ist. 2: Bei "liegen lassen" handelt es sich um zwei eigenständige Handlungen. 3: "wegräumen" wird zusammengeschrieben, weil "weg" eine Partikel ist.',
        hint: 'Überlege bei jedem Fall, ob es sich um eine feste Verbindung handelt oder ob beide Teile eigenständig bleiben.'
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
                const options = textParts[i+1].match(/\((.*?)\)/)[1].split('/');
                html += `<input type="text" class="blank-input" data-index="${blankIndex}" placeholder="${options.join(' oder ')}">`;
                i++; // Überspringe die Optionen
            }
        }
        
        html += '</p></div>';
        return html;
    }
    
    function createDragDropHTML(exercise) {
        let html = '<div class="drag-drop-container">';
        
        // Drag-Optionen
        html += '<div class="drag-container">';
        const shuffledOptions = shuffleArray([...exercise.options]);
        shuffledOptions.forEach((option, index) => {
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
                
                isCorrect = userAnswer.every((answer, index) => {
                    const correctIndex = exercise.options.indexOf(answer);
                    return correctIndex !== -1;
                }) && userAnswer.length === dropZones.length && userAnswer.every(answer => answer !== '');
                
                // Visuelles Feedback
                dropZones.forEach((zone, index) => {
                    if (zone.children.length > 0) {
                        const zoneCorrect = exercise.options.includes(zone.children[0].textContent);
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
            userData.progress['getrennt-zusammen'].completed = correctAnswers;
            userData.progress['getrennt-zusammen'].points += points;
            
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
            showReward(points, 'Du hast das Thema "Getrennt- oder Zusammenschreibung" erfolgreich gemeistert!');
        }
    }
    
    // Hilfsfunktion zum Mischen von Arrays
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}); 