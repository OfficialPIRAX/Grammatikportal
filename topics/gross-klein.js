// Übungsdaten für "Groß- und Kleinschreibung"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['Gestern abend war ich im kino.', 'Gestern Abend war ich im Kino.'],
        correctAnswer: 'Gestern Abend war ich im Kino.',
        explanation: '"Abend" ist hier eine Tageszeit nach "gestern" und wird großgeschrieben. "Kino" ist ein Substantiv und wird ebenfalls großgeschrieben.',
        hint: 'Achte auf Substantive und Tageszeiten nach gestern/heute/morgen.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['Ich habe keine Angst im dunkeln.', 'Ich habe keine Angst im Dunkeln.'],
        correctAnswer: 'Ich habe keine Angst im Dunkeln.',
        explanation: '"im Dunkeln" ist eine Substantivierung des Adjektivs "dunkel" und wird daher großgeschrieben.',
        hint: 'Ist das Adjektiv "dunkel" hier substantiviert?'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['Er spricht fließend Englisch.', 'Er spricht fließend englisch.'],
        correctAnswer: 'Er spricht fließend Englisch.',
        explanation: 'Sprachbezeichnungen wie "Englisch" werden im Deutschen großgeschrieben.',
        hint: 'Wie werden Sprachbezeichnungen geschrieben?'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['Das Beste kommt zum Schluss.', 'Das beste kommt zum schluss.'],
        correctAnswer: 'Das Beste kommt zum Schluss.',
        explanation: '"das Beste" ist eine Substantivierung des Adjektivs "gut" (Superlativ) und "Schluss" ist ein Substantiv. Beide werden großgeschrieben.',
        hint: 'Achte auf Substantivierungen und Substantive.'
    },
    {
        type: 'fill-in-blank',
        question: 'Schreibe die Wörter in der korrekten Groß- oder Kleinschreibung:',
        text: 'Beim [1] (laufen) im [2] (wald) habe ich viel [3] (freude) empfunden. [4] (heute) [5] (morgen) werde ich wieder [6] (sport) treiben.',
        blanks: ['Laufen', 'Wald', 'Freude', 'Heute', 'Morgen', 'Sport'],
        explanation: '1: "Laufen" ist hier substantiviert. 2: "Wald" ist ein Substantiv. 3: "Freude" ist ein Substantiv. 4: "Heute" ist ein Adverb. 5: "Morgen" ist hier eine Tageszeit nach "heute". 6: "Sport" ist ein Substantiv.',
        hint: 'Überlege bei jedem Wort, ob es sich um ein Substantiv, eine Substantivierung oder eine Tageszeit handelt.'
    },
    {
        type: 'drag-drop',
        question: 'Ziehe die Wörter in der richtigen Groß- oder Kleinschreibung in die Lücken:',
        text: [
            'Meine Schwester hat ',
            ' in der Schule, weil sie ',
            ' sehr gut kann. Sie möchte später ',
            ' werden, um anderen Menschen zu ',
            '.'
        ],
        options: ['Spaß', 'rechnen', 'Ärztin', 'helfen'],
        explanation: '"Spaß" ist ein Substantiv. "rechnen" ist ein Verb. "Ärztin" ist ein Substantiv (Berufsbezeichnung). "helfen" ist ein Verb.',
        hint: 'Achte auf die Wortart: Substantive werden großgeschrieben, Verben kleingeschrieben.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler in der Groß- und Kleinschreibung:',
        text: 'am anfang war es schwer, aber mit der zeit wurde das lernen leichter. Ich habe viel spaß beim lesen und schreiben. Meine freunde helfen mir beim üben.',
        correctText: 'Am Anfang war es schwer, aber mit der Zeit wurde das Lernen leichter. Ich habe viel Spaß beim Lesen und Schreiben. Meine Freunde helfen mir beim Üben.',
        explanation: 'Satzanfänge und Substantive (auch substantivierte Verben) werden großgeschrieben.',
        hint: 'Achte auf Satzanfänge, Substantive und substantivierte Verben.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['Ich freue mich auf das wiedersehen.', 'Ich freue mich auf das Wiedersehen.'],
        correctAnswer: 'Ich freue mich auf das Wiedersehen.',
        explanation: '"Wiedersehen" ist ein substantiviertes Verb und wird daher großgeschrieben.',
        hint: 'Ist "wiedersehen" hier ein Verb oder ein Substantiv?'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['Im allgemeinen bin ich zufrieden.', 'Im Allgemeinen bin ich zufrieden.'],
        correctAnswer: 'Im Allgemeinen bin ich zufrieden.',
        explanation: '"im Allgemeinen" ist eine feststehende Wendung mit einer Substantivierung und wird daher großgeschrieben.',
        hint: 'Handelt es sich um eine Substantivierung?'
    },
    {
        type: 'fill-in-blank',
        question: 'Schreibe die Wörter in der korrekten Groß- oder Kleinschreibung:',
        text: '[1] (viele) [2] (menschen) haben [3] (angst) vor dem [4] (fliegen). [5] (ich) finde es jedoch [6] (spannend), die [7] (welt) von oben zu [8] (sehen).',
        blanks: ['Viele', 'Menschen', 'Angst', 'Fliegen', 'Ich', 'spannend', 'Welt', 'sehen'],
        explanation: '1: "Viele" steht am Satzanfang. 2: "Menschen" ist ein Substantiv. 3: "Angst" ist ein Substantiv. 4: "Fliegen" ist ein substantiviertes Verb. 5: "Ich" steht am Satzanfang. 6: "spannend" ist ein Adjektiv. 7: "Welt" ist ein Substantiv. 8: "sehen" ist ein Verb.',
        hint: 'Achte auf Satzanfänge, Substantive, substantivierte Verben, Adjektive und Verben.'
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
                const hint = textParts[i+1].match(/\((.*?)\)/)[1];
                html += `<input type="text" class="blank-input" data-index="${blankIndex}" placeholder="${hint}">`;
                i++; // Überspringe die Hinweise
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
            userData.progress['gross-klein'].completed = correctAnswers;
            userData.progress['gross-klein'].points += points;
            
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
            showReward(points, 'Du hast das Thema "Groß- und Kleinschreibung" erfolgreich gemeistert!');
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