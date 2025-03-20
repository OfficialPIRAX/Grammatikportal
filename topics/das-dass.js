// Übungsdaten für "Das oder Dass"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form aus: "Ich denke, ___ du heute pünktlich bist."',
        options: ['das', 'dass'],
        correctAnswer: 'dass',
        explanation: '"dass" ist eine Konjunktion, die Nebensätze einleitet. Hier verbindet "dass" die beiden Aussagen: "Ich denke" und "du bist heute pünktlich".',
        hint: 'Versuche, das Wort durch "dieses" zu ersetzen. Wenn es keinen Sinn ergibt, ist wahrscheinlich "dass" richtig, da es einen Nebensatz einleitet.'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form aus: "Das Buch, ___ ich gestern gekauft habe, war sehr spannend."',
        options: ['das', 'dass'],
        correctAnswer: 'das',
        explanation: 'Hier handelt es sich um ein Relativpronomen. Das Wort "das" bezieht sich auf "Buch" und leitet den Relativsatz ein ("ich gestern gekauft habe").',
        hint: 'Hier handelt es sich um einen bestimmten Artikel vor einem Substantiv. Welche Form würde vor "Buch" passen?'
    },
    {
        type: 'multiple-choice',
        question: 'Welche der folgenden Sätze ist korrekt?',
        options: ['"Ich weiß, das du zu Hause bist."', '"Ich weiß, dass du zu Hause bist."'],
        correctAnswer: '"Ich weiß, dass du zu Hause bist."',
        explanation: '"dass" ist die richtige Form, weil es als Konjunktion einen Nebensatz einleitet. "Das" wäre hier falsch.',
        hint: 'Kann man hier "dieses" einsetzen? Wenn nicht, dann handelt es sich wahrscheinlich um einen Nebensatz, der mit "dass" eingeleitet wird.'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form aus: "Ich habe gehört, ___ du gestern krank warst."',
        options: ['das', 'dass'],
        correctAnswer: 'dass',
        explanation: '"dass" ist eine Konjunktion, die einen Nebensatz einleitet.',
        hint: 'Nach Verben wie "hören", "sagen", "denken" folgt oft ein Nebensatz mit "dass".'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Form ist hier korrekt? "Das Kleid, ___ sie trägt, ist wunderschön."',
        options: ['das', 'dass'],
        correctAnswer: 'das',
        explanation: '"das" ist ein Relativpronomen und bezieht sich auf "Kleid".',
        hint: 'Prüfe, ob sich das Wort auf ein Substantiv bezieht. Wenn ja, ist es wahrscheinlich "das" als Relativpronomen.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Aussage ist richtig?',
        options: ['"Ich denke, das alles gut wird."', '"Ich denke, dass alles gut wird."'],
        correctAnswer: '"Ich denke, dass alles gut wird."',
        explanation: '"dass" leitet hier einen Nebensatz ein und ist als Konjunktion korrekt.',
        hint: 'Nach Verben wie "denken" folgt oft ein Nebensatz mit "dass".'
    },
    {
        type: 'fill-in-blank',
        question: 'Fülle die Lücken mit "das" oder "dass" aus:',
        text: 'Ich hoffe, [1] es dir gut geht. [2] Haus ist sehr groß. [3] Auto, [4] ich gestern gesehen habe, gefällt mir. Es ist wichtig, [5] du dich meldest.',
        blanks: ['dass', 'Das', 'Das', 'das', 'dass'],
        explanation: '1: "dass" leitet einen Nebensatz ein. 2: "Das" ist ein Artikel vor dem Substantiv "Haus". 3: "Das" ist ein Artikel vor dem Substantiv "Auto". 4: "das" ist ein Relativpronomen, das sich auf "Auto" bezieht. 5: "dass" leitet einen Nebensatz ein.',
        hint: 'Prüfe bei jeder Lücke: Handelt es sich um einen Artikel/Pronomen (dann "das") oder wird ein Nebensatz eingeleitet (dann "dass")? Versuche auch, "dieses" einzusetzen - wenn es passt, ist "das" richtig.'
    },
    {
        type: 'fill-in-blank',
        question: 'Fülle die Lücken mit "das" oder "dass" aus:',
        text: '[1] Fahrrad steht vor der Tür. Es freut mich, [2] du gekommen bist. [3] Geschenk, [4] du mir gemacht hast, war toll. Er sagte, [5] er später kommt. [6] Wetter ist heute perfekt.',
        blanks: ['Das', 'dass', 'Das', 'das', 'dass', 'Das'],
        explanation: '1: "Das" ist ein Artikel vor dem Substantiv "Fahrrad". 2: "dass" leitet einen Nebensatz ein. 3: "Das" ist ein Artikel vor dem Substantiv "Geschenk". 4: "das" ist ein Relativpronomen, das sich auf "Geschenk" bezieht. 5: "dass" leitet einen Nebensatz ein. 6: "Das" ist ein Artikel vor dem Substantiv "Wetter".',
        hint: 'Prüfe bei jeder Lücke: Handelt es sich um einen Artikel/Pronomen (dann "das") oder wird ein Nebensatz eingeleitet (dann "dass")? Versuche auch, "dieses" einzusetzen - wenn es passt, ist "das" richtig.'
    },
    {
        type: 'fill-in-blank',
        question: 'Fülle die Lücken mit "das" oder "dass" aus:',
        text: 'Ich denke, [1] du [2] schaffen wirst. [3] Wetter heute ist wunderschön. [4] Problem, [5] mich schon lange beschäftigt, ist gelöst. Sie sagt, [6] sie morgen kommen kann. Ich glaube, [7] Buch liegt noch auf dem Tisch.',
        blanks: ['dass', 'das', 'Das', 'Das', 'das', 'dass', 'das'],
        explanation: '1: "dass" leitet einen Nebensatz ein. 2: "das" ist ein Demonstrativpronomen. 3: "Das" ist ein Artikel vor dem Substantiv "Wetter". 4: "Das" ist ein Artikel vor dem Substantiv "Problem". 5: "das" ist ein Relativpronomen, das sich auf "Problem" bezieht. 6: "dass" leitet einen Nebensatz ein. 7: "das" ist ein Artikel vor dem Substantiv "Buch".',
        hint: 'Prüfe bei jeder Lücke: Handelt es sich um einen Artikel/Pronomen (dann "das") oder wird ein Nebensatz eingeleitet (dann "dass")? Versuche auch, "dieses" einzusetzen - wenn es passt, ist "das" richtig.'
    },
    {
        type: 'multiple-choice',
        question: '"Er glaubt, dass seine Idee gut ist." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: '"dass" ist korrekt, da es als Konjunktion den Nebensatz "dass seine Idee gut ist" einleitet.',
        hint: 'Prüfe, ob "dass" hier einen Nebensatz einleitet.'
    },
    {
        type: 'multiple-choice',
        question: '"Das ich müde bin, ist kein Wunder." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: 'Hier muss "dass" verwendet werden, da es den Nebensatz einleitet: "dass ich müde bin".',
        hint: 'Prüfe, ob hier ein Nebensatz eingeleitet wird.'
    },
    {
        type: 'multiple-choice',
        question: '"Das Handy, das du mir gezeigt hast, ist toll." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: 'Beide "das" sind korrekt. Das erste "das" ist ein Artikel, das zweite ein Relativpronomen.',
        hint: 'Prüfe die Funktion beider "das" im Satz.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler im folgenden Text:',
        text: 'Ich hoffe, das du morgen Zeit hast. Das Fahrrad, dass ich gestern gekauft habe, gefällt mir sehr. Es ist wichtig, das wir bald losfahren.',
        correctText: 'Ich hoffe, dass du morgen Zeit hast. Das Fahrrad, das ich gestern gekauft habe, gefällt mir sehr. Es ist wichtig, dass wir bald losfahren.',
        explanation: 'Erster Satz: "dass" als Konjunktion. Zweiter Satz: "das" als Relativpronomen. Dritter Satz: "dass" als Konjunktion.',
        hint: 'Achte darauf, ob ein Nebensatz eingeleitet wird (dann "dass") oder ob es sich um einen Artikel/Pronomen handelt (dann "das").'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler im folgenden Text:',
        text: 'Ich hoffe, das du morgen Zeit hast. Das Geschenk, dass du mir gegeben hast, war wunderschön. Es war so schön, das ich fast geweint habe. Meine Freunde glauben, das ich übertreibe.',
        correctText: 'Ich hoffe, dass du morgen Zeit hast. Das Geschenk, das du mir gegeben hast, war wunderschön. Es war so schön, dass ich fast geweint habe. Meine Freunde glauben, dass ich übertreibe.',
        explanation: '1: "das" → dass: Hier wird "dass" als Konjunktion verwendet, um Nebensätze einzuleiten. 2: "dass" → das: Hier handelt es sich um ein Relativpronomen, das sich auf "Geschenk" bezieht.',
        hint: 'Achte darauf, ob ein Nebensatz eingeleitet wird (dann "dass") oder ob es sich um einen Artikel/Pronomen handelt (dann "das").'
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