// Übungsdaten für "Kommasetzung"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Welcher Satz ist korrekt?',
        options: [
            'Ich gehe morgen wenn das Wetter gut ist spazieren.',
            'Ich gehe morgen, wenn das Wetter gut ist, spazieren.',
            'Ich gehe, morgen wenn das Wetter gut ist, spazieren.'
        ],
        correctAnswer: 'Ich gehe morgen, wenn das Wetter gut ist, spazieren.',
        explanation: 'Der Nebensatz "wenn das Wetter gut ist" muss mit Kommas abgetrennt werden.',
        hint: 'Nebensätze werden immer durch Kommas vom Hauptsatz getrennt.'
    },
    {
        type: 'multiple-choice',
        question: 'Wo ist ein Komma notwendig? "Er sagte er wolle später kommen."',
        options: [
            'Nach "sagte"',
            'Nach "wolle"',
            'Kein Komma nötig'
        ],
        correctAnswer: 'Nach "sagte"',
        explanation: 'Bei direkter Rede bzw. eingeführten Nebensätzen muss ein Komma gesetzt werden: "Er sagte, er wolle später kommen."',
        hint: 'Nach Verben des Sagens und Denkens folgt oft ein Nebensatz, der mit Komma abgetrennt wird.'
    },
    {
        type: 'multiple-choice',
        question: 'Welcher Satz ist korrekt?',
        options: [
            'Sie liebt es zu tanzen, zu singen und zu lachen.',
            'Sie liebt es, zu tanzen, zu singen und, zu lachen.',
            'Sie liebt es, zu tanzen zu singen und zu lachen.'
        ],
        correctAnswer: 'Sie liebt es zu tanzen, zu singen und zu lachen.',
        explanation: 'Infinitivgruppen, die von einem Bezugsausdruck abhängen ("es zu tanzen"), werden mit Komma abgetrennt.',
        hint: 'Infinitivgruppen mit "zu" werden durch Komma abgetrennt, wenn sie von einem Bezugsausdruck abhängen.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Kommasetzung ist richtig?',
        options: [
            'Er ging nach Hause weil es schon spät war.',
            'Er ging nach Hause, weil es schon spät war.',
            'Er ging, nach Hause weil es schon spät war.'
        ],
        correctAnswer: 'Er ging nach Hause, weil es schon spät war.',
        explanation: 'Der Nebensatz "weil es schon spät war" muss mit Komma abgetrennt werden.',
        hint: 'Nebensätze, die mit Konjunktionen wie "weil", "dass", "obwohl" eingeleitet werden, werden durch Komma vom Hauptsatz getrennt.'
    },
    {
        type: 'multiple-choice',
        question: 'Welcher Satz ist korrekt?',
        options: [
            'Sie entschied sich für das blaue Kleid, und bestellte es sofort.',
            'Sie entschied sich, für das blaue Kleid und bestellte es sofort.',
            'Sie entschied sich für das blaue Kleid und bestellte es sofort.'
        ],
        correctAnswer: 'Sie entschied sich für das blaue Kleid und bestellte es sofort.',
        explanation: '"und bestellte es sofort" ist ein Hauptsatz und braucht kein Komma.',
        hint: 'Gleichrangige Hauptsätze, die mit "und" oder "oder" verbunden sind, werden in der Regel nicht durch Komma getrennt.'
    },
    {
        type: 'multiple-choice',
        question: 'Wo ist ein Komma erforderlich?',
        options: [
            'Er las das Buch und fand es sehr spannend.',
            'Er las, das Buch und fand es sehr spannend.',
            'Er las das Buch, und fand es sehr spannend.'
        ],
        correctAnswer: 'Er las das Buch und fand es sehr spannend.',
        explanation: 'Die Konjunktion "und" verbindet zwei gleichrangige Sätze, kein Komma notwendig.',
        hint: 'Bei gleichrangigen Hauptsätzen, die mit "und" verbunden sind, steht in der Regel kein Komma.'
    },
    {
        type: 'fill-in-blank',
        question: 'Ordne die Sätze der richtigen Regel zu:',
        text: 'Ich hoffe, dass du mich besuchst. → [1]\nSie entschied sich, früh aufzustehen. → [2]\nWeil es regnete, blieben wir zu Hause. → [3]\nEs ist wichtig, genug zu schlafen. → [4]',
        blanks: ['Regel 1', 'Regel 2', 'Regel 1', 'Regel 2'],
        explanation: 'Regel 1: Kommas trennen Nebensätze ab. Regel 2: Kommas trennen Infinitivgruppen ab. Satz 1 und 3 enthalten Nebensätze, Satz 2 und 4 enthalten Infinitivgruppen.',
        hint: 'Regel 1 betrifft Nebensätze, Regel 2 betrifft Infinitivgruppen mit "zu".'
    },
    {
        type: 'fill-in-blank',
        question: 'Ordne die Kommas den richtigen Regeln zu:',
        text: 'Sie kam nach Hause, und sie kochte das Abendessen. → [1]\nMein Bruder, ein begeisterter Musiker, spielt jeden Tag Klavier. → [2]\nIch ging einkaufen, danach fuhr ich nach Hause. → [3]\nDas Auto, das ich gestern gekauft habe, ist rot. → [4]',
        blanks: ['Regel 1', 'Regel 2', 'Regel 1', 'Regel 2'],
        explanation: 'Regel 1: Kommas trennen Hauptsätze voneinander. Regel 2: Kommas stehen bei Einschüben. Satz 1 und 3 enthalten Hauptsätze, die durch Komma getrennt sind. Satz 2 und 4 enthalten Einschübe.',
        hint: 'Regel 1 betrifft die Trennung von Hauptsätzen, Regel 2 betrifft Einschübe und Relativsätze.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die fehlenden Kommas:',
        text: 'Sie hoffte [1] dass er kommt. Er bemühte sich [2] die Prüfung zu bestehen. Obwohl sie müde war [3] las sie noch ein Buch. Das Auto [4] das ich gestern gekauft habe [5] ist rot.',
        blanks: [',', ',', ',', ',', ','],
        explanation: '1: Vor dem Nebensatz mit "dass". 2: Vor der Infinitivgruppe mit "zu". 3: Nach dem Nebensatz mit "obwohl". 4 und 5: Vor und nach dem Relativsatz "das ich gestern gekauft habe".',
        hint: 'Achte auf Nebensätze, Infinitivgruppen und Relativsätze - sie werden durch Kommas abgetrennt.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die Kommas an den richtigen Stellen:',
        text: 'Wir gingen in die Stadt [1] um einzukaufen. Das Haus [2] das am Ende der Straße steht [3] ist sehr alt. Ich dachte nicht [4] dass es regnen würde. Nach dem Essen [5] gingen wir spazieren.',
        blanks: [',', ',', ',', ',', ','],
        explanation: '1: Vor der Infinitivgruppe mit "um zu". 2 und 3: Vor und nach dem Relativsatz "das am Ende der Straße steht". 4: Vor dem Nebensatz mit "dass". 5: Nach der vorangestellten Adverbialbestimmung.',
        hint: 'Achte auf Infinitivgruppen, Relativsätze und Nebensätze - sie werden durch Kommas abgetrennt.'
    },
    {
        type: 'multiple-choice',
        question: '"Ich hoffe dass du mich anrufst." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: 'Es fehlt ein Komma: "Ich hoffe, dass du mich anrufst."',
        hint: 'Vor Nebensätzen, die mit "dass" eingeleitet werden, steht ein Komma.'
    },
    {
        type: 'multiple-choice',
        question: '"Da es geregnet hat musste das Spiel abgesagt werden." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: 'Korrekt wäre: "Da es geregnet hat, musste das Spiel abgesagt werden." Der Nebensatz muss mit einem Komma abgetrennt werden.',
        hint: 'Nach einem vorangestellten Nebensatz steht ein Komma.'
    },
    {
        type: 'multiple-choice',
        question: '"Ich wusste nicht dass sie heute nicht kommt." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: 'Korrekt wäre: "Ich wusste nicht, dass sie heute nicht kommt." Der Nebensatz wird mit einem Komma abgetrennt.',
        hint: 'Vor Nebensätzen, die mit "dass" eingeleitet werden, steht ein Komma.'
    },
    {
        type: 'multiple-choice',
        question: '"Das Buch das du mir empfohlen hast ist wirklich spannend." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: 'Korrekt wäre: "Das Buch, das du mir empfohlen hast, ist wirklich spannend." Der Relativsatz muss mit Kommas eingeschlossen werden.',
        hint: 'Relativsätze werden durch Kommas vom Hauptsatz getrennt.'
    },
    {
        type: 'multiple-choice',
        question: '"Nachdem wir gegessen hatten gingen wir spazieren." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: 'Korrekt wäre: "Nachdem wir gegessen hatten, gingen wir spazieren." Der Nebensatz wird mit einem Komma abgetrennt.',
        hint: 'Nach einem vorangestellten Nebensatz steht ein Komma.'
    },
    {
        type: 'multiple-choice',
        question: '"Er arbeitet konzentriert und vergisst dabei die Zeit." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: 'Die Konjunktion "und" verbindet hier zwei gleichrangige Satzteile, sodass kein Komma notwendig ist.',
        hint: 'Bei gleichrangigen Hauptsätzen, die mit "und" verbunden sind, steht in der Regel kein Komma.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Kommasetzung im folgenden Text:',
        text: 'Wenn du Zeit hast komm mich besuchen. Ich freue mich immer wenn du da bist und wir können zusammen kochen backen und Filme schauen.',
        correctText: 'Wenn du Zeit hast, komm mich besuchen. Ich freue mich immer, wenn du da bist, und wir können zusammen kochen, backen und Filme schauen.',
        explanation: '1: Nach dem Nebensatz "Wenn du Zeit hast" muss ein Komma stehen. 2: Vor dem Nebensatz "wenn du da bist" muss ein Komma stehen. 3: Nach dem Nebensatz "wenn du da bist" muss ein Komma stehen. 4: In der Aufzählung "kochen, backen und Filme schauen" müssen die Elemente durch Kommas getrennt werden (außer vor "und").',
        hint: 'Achte auf Nebensätze und Aufzählungen - sie erfordern Kommas.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die Kommas an den richtigen Stellen:',
        text: 'Ich gehe am Wochenende ins Kino [1] weil ich den Film sehen will.',
        blanks: [','],
        explanation: 'Das Komma trennt den Nebensatz ("weil ich den Film sehen will") vom Hauptsatz.',
        hint: 'Vor Nebensätzen, die mit "weil" eingeleitet werden, steht ein Komma.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die Kommas an den richtigen Stellen:',
        text: 'Wenn es morgen regnet [1] bleiben wir zu Hause und machen dann einen Spielabend.',
        blanks: [','],
        explanation: 'Das Komma trennt den Nebensatz ("Wenn es morgen regnet") vom Hauptsatz. Im zweiten Teil wird kein Komma benötigt, da es sich um zwei verbundene Hauptsätze handelt.',
        hint: 'Nach einem vorangestellten Nebensatz steht ein Komma.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die Kommas an den richtigen Stellen:',
        text: 'Obwohl er krank ist [1] geht er zur Arbeit [2] weil er seine Kollegen nicht im Stich lassen möchte.',
        blanks: [',', ','],
        explanation: 'Kommas trennen den Nebensatz ("Obwohl er krank ist") und den zweiten Nebensatz ("weil er seine Kollegen nicht im Stich lassen möchte") vom Hauptsatz.',
        hint: 'Nebensätze werden durch Kommas vom Hauptsatz getrennt.'
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