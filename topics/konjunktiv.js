// Übungsdaten für "Konjunktiv / indirekte Rede"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form des Konjunktiv I für den Satz: "Er sagt, er ___ morgen."',
        options: ['kommt', 'komme', 'käme', 'würde kommen'],
        correctAnswer: 'komme',
        explanation: 'In der indirekten Rede wird der Konjunktiv I verwendet. Die richtige Form von "kommen" in der 3. Person Singular ist "komme".',
        hint: 'Der Konjunktiv I wird vom Präsensstamm gebildet und erhält in der 3. Person Singular die Endung "-e".'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form für den Satz: "Sie behauptet, sie ___ keine Zeit."',
        options: ['hat', 'habe', 'hätte', 'würde haben'],
        correctAnswer: 'habe',
        explanation: 'In der indirekten Rede wird der Konjunktiv I verwendet. Die richtige Form von "haben" in der 3. Person Singular ist "habe".',
        hint: 'Der Konjunktiv I wird vom Präsensstamm gebildet. Bei "haben" ist die Form für die 3. Person Singular "habe".'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Form für den Satz: "Er sagt, wir ___ zu spät gekommen."',
        options: ['sind', 'seien', 'wären', 'würden sein'],
        correctAnswer: 'seien',
        explanation: 'In der indirekten Rede wird der Konjunktiv I verwendet. Die richtige Form von "sein" in der 1. Person Plural ist "seien".',
        hint: 'Das Verb "sein" hat besondere Formen im Konjunktiv I: ich sei, du seist, er/sie/es sei, wir seien, ihr seiet, sie seien.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die richtige Form des Konjunktivs ein:',
        text: 'Er sagt, er [1] krank. (sein)\nSie behauptet, sie [2] die Wahrheit. (sagen)\nDie Lehrerin meint, wir [3] fleißiger üben. (müssen)',
        blanks: ['sei', 'sage', 'müssten'],
        explanation: '1: "sei" ist die Konjunktiv I-Form von "sein" in der 3. Person Singular. 2: "sage" ist die Konjunktiv I-Form von "sagen" in der 3. Person Singular. 3: "müssten" ist die Konjunktiv II-Form von "müssen", da die Konjunktiv I-Form "müssen" mit dem Indikativ identisch wäre.',
        hint: 'Verwende den Konjunktiv I, außer wenn er mit dem Indikativ identisch ist - dann nimm den Konjunktiv II.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler in der indirekten Rede:',
        text: 'Er sagt, er kommt morgen. Sie behauptet, sie ist unschuldig. Der Lehrer meint, wir sind zu laut.',
        correctText: 'Er sagt, er komme morgen. Sie behauptet, sie sei unschuldig. Der Lehrer meint, wir seien zu laut.',
        explanation: 'In der indirekten Rede wird der Konjunktiv I verwendet. Die korrekten Formen sind: "komme" (statt "kommt"), "sei" (statt "ist") und "seien" (statt "sind").',
        hint: 'Achte darauf, dass in der indirekten Rede der Konjunktiv I verwendet wird.'
    },
    {
        type: 'fill-in-blank',
        question: 'Wandle die direkte Rede in indirekte Rede um:',
        text: 'Direkt: "Ich bin müde."\nIndirekt: Er sagt, er [1] müde.\n\nDirekt: "Wir haben keine Zeit."\nIndirekt: Sie sagen, sie [2] keine Zeit.\n\nDirekt: "Ich kann nicht kommen."\nIndirekt: Sie sagt, sie [3] nicht kommen.',
        blanks: ['sei', 'hätten', 'könne'],
        explanation: '1: "sei" ist die Konjunktiv I-Form von "sein" in der 3. Person Singular. 2: "hätten" ist die Konjunktiv II-Form von "haben", da die Konjunktiv I-Form "haben" mit dem Indikativ identisch wäre. 3: "könne" ist die Konjunktiv I-Form von "können" in der 3. Person Singular.',
        hint: 'Achte auf die Veränderung der Personalpronomen und die Verwendung des Konjunktivs.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Form ist korrekt für den Satz: "Du sagst, du ___ morgen kommen."',
        options: ['kommst', 'kommest', 'kämest', 'würdest kommen'],
        correctAnswer: 'würdest kommen',
        explanation: 'In der indirekten Rede wird der Konjunktiv I verwendet, aber wenn dieser ungebräuchlich ist (wie "kommest"), wird der Konjunktiv II oder die würde-Form bevorzugt.',
        hint: 'Die Form "kommest" ist zwar grammatikalisch korrekt, aber ungebräuchlich. In solchen Fällen verwendet man den Konjunktiv II oder die würde-Form.'
    },
    {
        type: 'correction',
        question: 'Wandle die direkte Rede in indirekte Rede um:',
        text: 'Direkt: "Komm morgen zu mir!"\nIndirekt: Er sagt, ich komme morgen zu ihm.\n\nDirekt: "Hast du Zeit?"\nIndirekt: Er fragt, ob ich Zeit habe.\n\nDirekt: "Wo wohnst du?"\nIndirekt: Er fragt, wo ich wohne.',
        correctText: 'Direkt: "Komm morgen zu mir!"\nIndirekt: Er sagt, ich solle morgen zu ihm kommen.\n\nDirekt: "Hast du Zeit?"\nIndirekt: Er fragt, ob ich Zeit habe.\n\nDirekt: "Wo wohnst du?"\nIndirekt: Er fragt, wo ich wohne.',
        explanation: 'Bei Imperativen in der indirekten Rede wird "sollen" im Konjunktiv verwendet. Bei Fragen wird "ob" für Ja/Nein-Fragen und das entsprechende Fragewort für W-Fragen verwendet.',
        hint: 'Achte besonders auf die Umwandlung des Imperativs und die korrekte Einleitung von Fragen.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die richtige Form des Konjunktivs ein:',
        text: 'Direkt: "Ich werde morgen kommen."\nIndirekt: Er sagt, er [1] morgen kommen.\n\nDirekt: "Ich bin gestern angekommen."\nIndirekt: Sie sagt, sie [2] gestern angekommen.\n\nDirekt: "Ich werde das Buch gelesen haben."\nIndirekt: Er sagt, er [3] das Buch gelesen haben.',
        blanks: ['werde', 'sei', 'werde'],
        explanation: '1: "werde" ist die Konjunktiv I-Form von "werden" in der 3. Person Singular (Futur I). 2: "sei" ist die Konjunktiv I-Form von "sein" in der 3. Person Singular (Perfekt). 3: "werde" ist die Konjunktiv I-Form von "werden" in der 3. Person Singular (Futur II).',
        hint: 'Achte auf die Zeitform des Originalverbs und bilde den entsprechenden Konjunktiv I.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler in der indirekten Rede und achte auf die Anpassung der Pronomen und Zeitangaben:',
        text: 'Direkt: "Ich komme heute zu dir."\nIndirekt: Er sagt, er kommt heute zu mir.\n\nDirekt: "Wir treffen uns hier morgen."\nIndirekt: Sie sagen, sie treffen sich hier morgen.\n\nDirekt: "Ich habe dich gestern gesehen."\nIndirekt: Sie sagt, sie hat mich gestern gesehen.',
        correctText: 'Direkt: "Ich komme heute zu dir."\nIndirekt: Er sagt, er komme heute zu mir.\n\nDirekt: "Wir treffen uns hier morgen."\nIndirekt: Sie sagen, sie träfen sich dort am nächsten Tag.\n\nDirekt: "Ich habe dich gestern gesehen."\nIndirekt: Sie sagt, sie habe mich am Vortag gesehen.',
        explanation: 'In der indirekten Rede wird der Konjunktiv I verwendet. Zudem müssen Zeitangaben (heute → an diesem Tag, morgen → am nächsten Tag, gestern → am Vortag) und Ortsangaben (hier → dort) angepasst werden.',
        hint: 'Achte auf die Verwendung des Konjunktivs und die Anpassung von Pronomen, Zeit- und Ortsangaben.'
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
        
        // Text mit Zeilenumbrüchen
        const lines = exercise.text.split('\n');
        html += '<div class="exercise-text">';
        
        for (let line of lines) {
            const textParts = line.split(/\[(\d+)\]/g);
            
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
            
            html += '<br>';
        }
        
        html += '</div></div>';
        return html;
    }
    
    function createCorrectionHTML(exercise) {
        let html = '<div class="correction-container">';
        html += '<p>Korrigiere den folgenden Text:</p>';
        html += `<textarea class="correction-textarea" rows="8">${exercise.text}</textarea>`;
        html += '</div>';
        return html;
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
            userData.progress['konjunktiv'].completed = correctAnswers;
            userData.progress['konjunktiv'].points += points;
            
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
            showReward(points, 'Du hast das Thema "Konjunktiv / indirekte Rede" erfolgreich gemeistert!');
        }
    }
}); 