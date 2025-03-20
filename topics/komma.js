// Übungsdaten für "Kommasetzung"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Wo muss ein Komma gesetzt werden?',
        options: [
            'Ich gehe einkaufen und koche danach.',
            'Ich gehe einkaufen, und koche danach.'
        ],
        correctAnswer: 'Ich gehe einkaufen und koche danach.',
        explanation: 'Bei einer einfachen Aufzählung mit "und" steht kein Komma.',
        hint: 'Überlege, ob es sich um eine einfache Verbindung mit "und" handelt.'
    },
    {
        type: 'multiple-choice',
        question: 'Wo muss ein Komma gesetzt werden?',
        options: [
            'Wenn es regnet bleiben wir zu Hause.',
            'Wenn es regnet, bleiben wir zu Hause.'
        ],
        correctAnswer: 'Wenn es regnet, bleiben wir zu Hause.',
        explanation: 'Zwischen Nebensatz und Hauptsatz steht immer ein Komma. Hier steht der Nebensatz "Wenn es regnet" vor dem Hauptsatz.',
        hint: 'Achte auf die Satzstruktur: Nebensatz und Hauptsatz.'
    },
    {
        type: 'multiple-choice',
        question: 'Wo muss ein Komma gesetzt werden?',
        options: [
            'Ich kaufe Äpfel Bananen und Orangen.',
            'Ich kaufe Äpfel, Bananen und Orangen.'
        ],
        correctAnswer: 'Ich kaufe Äpfel, Bananen und Orangen.',
        explanation: 'Bei Aufzählungen werden die Elemente durch Kommas getrennt, aber vor "und" steht in der Regel kein Komma.',
        hint: 'Wie werden Aufzählungen durch Kommas strukturiert?'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die Kommas an den richtigen Stellen ein (verwende "," für ein Komma und lasse die Stelle leer, wenn kein Komma nötig ist):',
        text: 'Mein Bruder[1] der in Berlin wohnt[2] besucht uns nächste Woche[3] wenn er Zeit hat.',
        blanks: [',', ',', ','],
        explanation: '1: Vor einem Relativsatz steht ein Komma. 2: Nach einem Relativsatz steht ein Komma. 3: Vor einem Nebensatz mit "wenn" steht ein Komma.',
        hint: 'Achte auf Relativsätze und Nebensätze.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die Kommas an den richtigen Stellen ein (verwende "," für ein Komma und lasse die Stelle leer, wenn kein Komma nötig ist):',
        text: 'Er liest[1] schreibt[2] und rechnet gerne[3] aber er mag keine Hausaufgaben.',
        blanks: [',', ',', ','],
        explanation: '1: Bei Aufzählungen steht ein Komma zwischen den Elementen. 2: Bei Aufzählungen steht ein Komma zwischen den Elementen, aber vor "und" steht kein Komma. 3: Vor "aber" steht ein Komma, da es zwei Hauptsätze verbindet.',
        hint: 'Achte auf Aufzählungen und die Verbindung von Hauptsätzen.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Kommasetzung im folgenden Text:',
        text: 'Wenn ich Zeit habe besuche ich meine Großeltern die in einem kleinen Dorf wohnen. Sie freuen sich immer, wenn ich komme und backen leckeren Kuchen. Mein Opa, erzählt spannende Geschichten und meine Oma, kocht das beste Essen der Welt.',
        correctText: 'Wenn ich Zeit habe, besuche ich meine Großeltern, die in einem kleinen Dorf wohnen. Sie freuen sich immer, wenn ich komme, und backen leckeren Kuchen. Mein Opa erzählt spannende Geschichten, und meine Oma kocht das beste Essen der Welt.',
        explanation: 'Nach einem Nebensatz steht ein Komma. Vor einem Relativsatz steht ein Komma. Nach einem Nebensatz steht ein Komma. Vor "und" steht in einfachen Verbindungen kein Komma. Vor "und" steht ein Komma, wenn es zwei Hauptsätze verbindet.',
        hint: 'Achte auf Nebensätze, Relativsätze und die Verbindung von Hauptsätzen.'
    },
    {
        type: 'multiple-choice',
        question: 'Wo muss ein Komma gesetzt werden?',
        options: [
            'Er ist größer als sein Bruder.',
            'Er ist größer, als sein Bruder.'
        ],
        correctAnswer: 'Er ist größer als sein Bruder.',
        explanation: 'Bei einfachen Vergleichen mit "als" oder "wie" steht kein Komma.',
        hint: 'Handelt es sich um einen einfachen Vergleich oder einen Nebensatz?'
    },
    {
        type: 'multiple-choice',
        question: 'Wo muss ein Komma gesetzt werden?',
        options: [
            'Sie ging in die Stadt um ein Geschenk zu kaufen.',
            'Sie ging in die Stadt, um ein Geschenk zu kaufen.'
        ],
        correctAnswer: 'Sie ging in die Stadt, um ein Geschenk zu kaufen.',
        explanation: 'Vor einer Infinitivgruppe mit "um zu" steht ein Komma.',
        hint: 'Wie werden Infinitivgruppen mit "um zu" behandelt?'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die Kommas an den richtigen Stellen ein (verwende "," für ein Komma und lasse die Stelle leer, wenn kein Komma nötig ist):',
        text: 'Liebe Freunde[1] ich lade euch herzlich zu meiner Geburtstagsfeier ein[2] die am Samstag[3] den 15. Juni[4] stattfindet.',
        blanks: [',', ',', ',', ','],
        explanation: '1: Nach einer Anrede steht ein Komma. 2: Vor einem Relativsatz steht ein Komma. 3: Vor einer Apposition steht ein Komma. 4: Nach einer Apposition steht ein Komma.',
        hint: 'Achte auf Anreden, Relativsätze und Appositionen.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Kommasetzung im folgenden Text:',
        text: 'Ich weiß nicht ob ich morgen Zeit habe aber ich versuche zu kommen. Falls ich es nicht schaffe, rufe ich dich an damit du Bescheid weißt. Ich bringe, Getränke, Snacks und einen Kuchen mit.',
        correctText: 'Ich weiß nicht, ob ich morgen Zeit habe, aber ich versuche zu kommen. Falls ich es nicht schaffe, rufe ich dich an, damit du Bescheid weißt. Ich bringe Getränke, Snacks und einen Kuchen mit.',
        explanation: 'Vor einem indirekten Fragesatz mit "ob" steht ein Komma. Vor "aber" steht ein Komma. Vor einem Nebensatz mit "damit" steht ein Komma. Bei Aufzählungen steht ein Komma zwischen den Elementen, aber nicht vor dem ersten Element.',
        hint: 'Achte auf indirekte Fragesätze, die Verbindung von Hauptsätzen und Aufzählungen.'
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
        html += '<p class="exercise-text">';
        
        const textParts = exercise.text.split(/\[(\d+)\]/g);
        
        for (let i = 0; i < textParts.length; i++) {
            if (i % 2 === 0) {
                // Text
                html += textParts[i];
            } else {
                // Lücke
                const blankIndex = parseInt(textParts[i]) - 1;
                html += `<input type="text" class="blank-input" data-index="${blankIndex}" placeholder="Komma?">`;
            }
        }
        
        html += '</p>';
        html += '<p class="exercise-tip">Tipp: Setze "," für ein Komma oder lasse das Feld leer, wenn kein Komma nötig ist.</p>';
        html += '</div>';
        return html;
    }
    
    function createCorrectionHTML(exercise) {
        let html = '<div class="correction-container">';
        html += '<p>Korrigiere die Kommasetzung im folgenden Text:</p>';
        html += `<textarea class="correction-textarea" rows="6">${exercise.text}</textarea>`;
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
                    (answer === exercise.blanks[index]) || (answer === '' && exercise.blanks[index] === ''));
                
                // Visuelles Feedback
                inputs.forEach((input, index) => {
                    const inputCorrect = (input.value.trim() === exercise.blanks[index]) || 
                                        (input.value.trim() === '' && exercise.blanks[index] === '');
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
            userData.progress['komma'].completed = correctAnswers;
            userData.progress['komma'].points += points;
            
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
            showReward(points, 'Du hast das Thema "Kommasetzung" erfolgreich gemeistert!');
        }
    }
}); 