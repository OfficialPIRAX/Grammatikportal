// Übungsdaten für "Zeitform: Futur I & II"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Welcher Satz verwendet das Futur I korrekt?',
        options: [
            'Ich habe morgen kommen werden.',
            'Ich werde morgen kommen.',
            'Ich bin morgen kommen.',
            'Ich wurde morgen kommen.'
        ],
        correctAnswer: 'Ich werde morgen kommen.',
        explanation: 'Das Futur I wird mit der konjugierten Form von "werden" im Präsens + Infinitiv des Hauptverbs gebildet. Die korrekte Form ist daher "Ich werde kommen". "Ich habe kommen werden" mischt Perfekt und Futur, "Ich bin kommen" ist grammatikalisch falsch, und "Ich wurde kommen" verwendet die Vergangenheitsform von "werden".',
        hint: 'Das Futur I besteht aus einer konjugierten Form von "werden" im Präsens und dem Infinitiv des Hauptverbs. Achte auf die richtige Zeitform von "werden".'
    },
    {
        type: 'multiple-choice',
        question: 'Welcher Satz verwendet das Futur II korrekt?',
        options: [
            'Ich werde das Buch gelesen haben.',
            'Ich habe das Buch gelesen werden.',
            'Ich werde das Buch haben gelesen.',
            'Ich wurde das Buch gelesen haben.'
        ],
        correctAnswer: 'Ich werde das Buch gelesen haben.',
        explanation: 'Das Futur II wird mit der konjugierten Form von "werden" im Präsens + Partizip Perfekt des Hauptverbs + "haben" oder "sein" (je nach Verb) gebildet. Die korrekte Form ist daher "Ich werde gelesen haben". Die anderen Optionen haben eine falsche Wortstellung oder verwenden die falsche Zeitform von "werden".',
        hint: 'Das Futur II besteht aus drei Teilen: 1. konjugierte Form von "werden" im Präsens, 2. Partizip Perfekt des Hauptverbs, 3. "haben" oder "sein" im Infinitiv. Verwende "sein" bei Verben der Bewegung und Zustandsänderung, sonst "haben".'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Funktion hat das Futur I in diesem Satz: "Du wirst doch nicht etwa krank sein?"',
        options: [
            'Es drückt eine zukünftige Handlung aus.',
            'Es drückt eine Vermutung in der Gegenwart aus.',
            'Es drückt einen Befehl aus.',
            'Es drückt eine Bedingung aus.'
        ],
        correctAnswer: 'Es drückt eine Vermutung in der Gegenwart aus.',
        explanation: 'Das Futur I kann verwendet werden, um eine Vermutung über die Gegenwart auszudrücken. Der Satz "Du wirst doch nicht etwa krank sein?" bedeutet "Ich vermute/befürchte, dass du krank bist" und bezieht sich auf die Gegenwart, nicht auf die Zukunft.',
        hint: 'Achte auf den Kontext des Satzes. Geht es um etwas, das in der Zukunft passieren wird, oder um eine Annahme über die gegenwärtige Situation?'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die richtige Form des Futur I ein:',
        text: 'Morgen [1] ich nach Berlin [2]. (fahren)\nSie [3] uns bald [4]. (besuchen)\nWir [5] nächstes Jahr ein neues Auto [6]. (kaufen)',
        blanks: ['werde', 'fahren', 'wird', 'besuchen', 'werden', 'kaufen'],
        explanation: '1+2: "werde fahren" ist die Futur I-Form von "fahren" in der 1. Person Singular. "Werden" wird konjugiert (ich werde), das Hauptverb steht im Infinitiv (fahren). 3+4: "wird besuchen" ist die Futur I-Form von "besuchen" in der 3. Person Singular. "Werden" wird konjugiert (sie wird), das Hauptverb steht im Infinitiv (besuchen). 5+6: "werden kaufen" ist die Futur I-Form von "kaufen" in der 1. Person Plural. "Werden" wird konjugiert (wir werden), das Hauptverb steht im Infinitiv (kaufen).',
        hint: 'Verwende die richtige konjugierte Form von "werden" (werde, wird, werden) entsprechend der Person und setze das Hauptverb im Infinitiv ans Ende des Satzes.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die richtige Form des Futur II ein:',
        text: 'Bis morgen [1] ich den Aufsatz [2] [3]. (schreiben)\nEr [4] bis dahin nach Hause [5] [6]. (gehen)\nIhr [7] bis zum Wochenende die Arbeit [8] [9]. (beenden)',
        blanks: ['werde', 'geschrieben', 'haben', 'wird', 'gegangen', 'sein', 'werdet', 'beendet', 'haben'],
        explanation: '1+2+3: "werde geschrieben haben" ist die Futur II-Form von "schreiben" in der 1. Person Singular. "Werden" wird konjugiert (ich werde), das Hauptverb steht im Partizip Perfekt (geschrieben), und das Hilfsverb "haben" steht im Infinitiv am Ende. 4+5+6: "wird gegangen sein" ist die Futur II-Form von "gehen" in der 3. Person Singular. "Gehen" verwendet im Perfekt das Hilfsverb "sein", daher "sein" statt "haben". 7+8+9: "werdet beendet haben" ist die Futur II-Form von "beenden" in der 2. Person Plural.',
        hint: 'Das Futur II besteht aus drei Teilen: 1. konjugierte Form von "werden", 2. Partizip Perfekt des Hauptverbs, 3. "haben" oder "sein" im Infinitiv. Verwende "sein" bei Verben der Bewegung und Zustandsänderung, sonst "haben".'
    },
    {
        type: 'multiple-choice',
        question: 'Welcher Satz drückt eine Vermutung in der Gegenwart aus?',
        options: [
            'Er wird morgen zu Hause sein.',
            'Er wird jetzt zu Hause sein.',
            'Er ist jetzt zu Hause.',
            'Er war zu Hause gewesen.'
        ],
        correctAnswer: 'Er wird jetzt zu Hause sein.',
        explanation: 'Das Futur I kann verwendet werden, um eine Vermutung über die Gegenwart auszudrücken. Der Satz "Er wird jetzt zu Hause sein" bedeutet "Er ist vermutlich jetzt zu Hause". Die Zeitangabe "jetzt" zeigt, dass es sich um eine Vermutung über die Gegenwart handelt, nicht um eine Aussage über die Zukunft.',
        hint: 'Achte auf die Zeitangabe "jetzt" in Verbindung mit dem Futur I. Diese Kombination drückt eine Vermutung über die Gegenwart aus, nicht eine Aussage über die Zukunft.'
    },
    {
        type: 'multiple-choice',
        question: 'Welcher Satz drückt eine Vermutung über die Vergangenheit aus?',
        options: [
            'Er wird den Zug verpasst haben.',
            'Er hat den Zug verpasst.',
            'Er wird den Zug verpassen.',
            'Er verpasste den Zug.'
        ],
        correctAnswer: 'Er wird den Zug verpasst haben.',
        explanation: 'Das Futur II kann verwendet werden, um eine Vermutung über die Vergangenheit auszudrücken. Der Satz "Er wird den Zug verpasst haben" bedeutet "Er hat vermutlich den Zug verpasst". Die Verwendung des Futur II zeigt hier keine zukünftige Handlung, sondern eine Vermutung über ein bereits vergangenes Ereignis.',
        hint: 'Das Futur II (werden + Partizip Perfekt + haben/sein) kann eine Vermutung über ein vergangenes Ereignis ausdrücken. Vergleiche mit dem Perfekt "Er hat den Zug verpasst", das eine Tatsache ausdrückt.'
    },
    {
        type: 'multiple-choice',
        question: 'In welchem Fall wird das Futur I verwendet, um eine Absicht oder ein Versprechen auszudrücken?',
        options: [
            'Ich werde morgen pünktlich sein, versprochen!',
            'Er wird jetzt in der Schule sein.',
            'Sie werden das Buch gelesen haben.',
            'Du wirst wohl Recht haben.'
        ],
        correctAnswer: 'Ich werde morgen pünktlich sein, versprochen!',
        explanation: 'Das Futur I kann verwendet werden, um eine Absicht oder ein Versprechen auszudrücken. Der Satz "Ich werde morgen pünktlich sein, versprochen!" zeigt eine klare Absicht oder ein Versprechen des Sprechers. Die anderen Sätze drücken Vermutungen aus oder verwenden das Futur II.',
        hint: 'Achte auf Sätze, die ein Versprechen oder eine feste Absicht ausdrücken. Diese verwenden oft das Futur I und enthalten Wörter wie "versprochen" oder beziehen sich auf zukünftige Handlungen, die der Sprecher kontrollieren kann.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler in den folgenden Sätzen:',
        text: 'Ich wurde morgen kommen.\nSie wird das Buch gelesen wird.\nWir werden gegangen sein bis heute Abend.\nDu wirst haben das Essen gekocht.',
        correctText: 'Ich werde morgen kommen.\nSie wird das Buch gelesen haben.\nWir werden bis heute Abend gegangen sein.\nDu wirst das Essen gekocht haben.',
        explanation: 'Futur I: "werde kommen" (nicht "wurde kommen") - "werden" muss im Präsens stehen. Futur II: "wird gelesen haben" (nicht "wird gelesen wird") - die korrekte Struktur ist werden + Partizip Perfekt + haben/sein. Futur II: "werden bis heute Abend gegangen sein" - die Zeitangabe steht normalerweise vor dem Partizip Perfekt. Futur II: "wirst gekocht haben" (nicht "wirst haben gekocht") - die korrekte Wortstellung ist werden + Partizip Perfekt + haben/sein.',
        hint: 'Achte auf die korrekte Bildung und Wortstellung bei Futur I (werden im Präsens + Infinitiv) und Futur II (werden im Präsens + Partizip Perfekt + haben/sein). Bei Zeitangaben ist die Wortstellung flexibler, aber das Hilfsverb (haben/sein) steht immer am Ende.'
    },
    {
        type: 'fill-in-blank',
        question: 'Wandle die Sätze ins Futur I um:',
        text: 'Präsens: Ich fahre morgen nach Berlin.\nFutur I: Ich [1] morgen nach Berlin [2].\n\nPräsens: Er liest das Buch.\nFutur I: Er [3] das Buch [4].\n\nPräsens: Wir besuchen unsere Großeltern.\nFutur I: Wir [5] unsere Großeltern [6].',
        blanks: ['werde', 'fahren', 'wird', 'lesen', 'werden', 'besuchen'],
        explanation: '1+2: "werde fahren" ist die Futur I-Form von "fahre". "Werden" wird konjugiert (ich werde), das Hauptverb steht im Infinitiv (fahren). 3+4: "wird lesen" ist die Futur I-Form von "liest". "Werden" wird konjugiert (er wird), das Hauptverb steht im Infinitiv (lesen). 5+6: "werden besuchen" ist die Futur I-Form von "besuchen". "Werden" wird konjugiert (wir werden), das Hauptverb steht im Infinitiv (besuchen).',
        hint: 'Um einen Satz ins Futur I umzuwandeln, verwende die konjugierte Form von "werden" im Präsens und setze das Hauptverb im Infinitiv ans Ende des Satzes.'
    },
    {
        type: 'fill-in-blank',
        question: 'Wandle die Sätze ins Futur II um:',
        text: 'Perfekt: Ich habe den Brief geschrieben.\nFutur II: Ich [1] den Brief [2] [3].\n\nPerfekt: Er ist nach Hause gegangen.\nFutur II: Er [4] nach Hause [5] [6].\n\nPerfekt: Wir haben das Projekt beendet.\nFutur II: Wir [7] das Projekt [8] [9].',
        blanks: ['werde', 'geschrieben', 'haben', 'wird', 'gegangen', 'sein', 'werden', 'beendet', 'haben'],
        explanation: '1+2+3: "werde geschrieben haben" ist die Futur II-Form von "habe geschrieben". "Werden" wird konjugiert (ich werde), das Hauptverb steht im Partizip Perfekt (geschrieben), und das Hilfsverb "haben" steht im Infinitiv am Ende. 4+5+6: "wird gegangen sein" ist die Futur II-Form von "ist gegangen". "Gehen" verwendet im Perfekt das Hilfsverb "sein", daher "sein" statt "haben". 7+8+9: "werden beendet haben" ist die Futur II-Form von "haben beendet".',
        hint: 'Um einen Satz im Perfekt ins Futur II umzuwandeln, ersetze die konjugierte Form von "haben"/"sein" durch die konjugierte Form von "werden" und setze das Hilfsverb "haben"/"sein" im Infinitiv ans Ende des Satzes. Das Partizip Perfekt bleibt unverändert.'
    },
    {
        type: 'multiple-choice',
        question: 'Welcher Satz verwendet das Futur I, um eine Aufforderung auszudrücken?',
        options: [
            'Du wirst jetzt sofort dein Zimmer aufräumen!',
            'Du wirst morgen dein Zimmer aufräumen.',
            'Du hast dein Zimmer aufgeräumt.',
            'Du räumst dein Zimmer auf.'
        ],
        correctAnswer: 'Du wirst jetzt sofort dein Zimmer aufräumen!',
        explanation: 'Das Futur I kann verwendet werden, um eine nachdrückliche Aufforderung oder einen Befehl auszudrücken. Der Satz "Du wirst jetzt sofort dein Zimmer aufräumen!" ist keine neutrale Aussage über die Zukunft, sondern eine Aufforderung mit Nachdruck. Die Betonung liegt auf der Erwartung, dass die Handlung ausgeführt wird.',
        hint: 'Achte auf den Tonfall und die Zeitangabe "jetzt sofort". Diese Kombination mit dem Futur I deutet auf eine nachdrückliche Aufforderung hin, nicht auf eine einfache Zukunftsaussage.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler in den folgenden Sätzen und achte auf die korrekte Verwendung von Futur I und Futur II:',
        text: 'Bis nächste Woche wird ich den Roman lesen. (Futur I)\nSie werden das Haus verkauft. (Futur I)\nBis morgen werde ich den Aufsatz schreiben. (Futur II)\nEr wird jetzt im Büro gewesen sein. (Futur I)',
        correctText: 'Bis nächste Woche werde ich den Roman lesen. (Futur I)\nSie werden das Haus verkaufen. (Futur I)\nBis morgen werde ich den Aufsatz geschrieben haben. (Futur II)\nEr wird jetzt im Büro sein. (Futur I)',
        explanation: 'Futur I: "werde lesen" (nicht "wird ich lesen") - die korrekte Konjugation ist "ich werde". Futur I: "werden verkaufen" (nicht "werden verkauft") - im Futur I steht das Hauptverb im Infinitiv, nicht im Partizip Perfekt. Futur II: "werde geschrieben haben" (nicht "werde schreiben") - für eine in der Zukunft abgeschlossene Handlung wird das Futur II verwendet. Futur I als Vermutung: "wird sein" (nicht "wird gewesen sein") - für eine Vermutung über die Gegenwart wird das Futur I verwendet, nicht das Futur II.',
        hint: 'Achte auf die korrekte Konjugation von "werden" (ich werde, nicht wird ich), die korrekte Verbform (Infinitiv im Futur I, Partizip Perfekt + haben/sein im Futur II) und den richtigen Zeitbezug (Futur II für in der Zukunft abgeschlossene Handlungen, Futur I für Vermutungen über die Gegenwart).'
    },
    {
        type: 'fill-in-blank',
        question: 'Ergänze die Sätze mit der passenden Form des Futur I oder Futur II:',
        text: 'Wenn du nach Hause kommst, [1] ich schon [2] [3]. (schlafen)\nIch bin mir sicher, dass er [4] pünktlich [5]. (sein)\nNächstes Jahr [6] wir nach Italien [7]. (reisen)\nBis zum Ende des Monats [8] sie das Projekt [9] [10]. (abschließen)',
        blanks: ['werde', 'geschlafen', 'haben', 'wird', 'sein', 'werden', 'reisen', 'wird', 'abgeschlossen', 'haben'],
        explanation: '1+2+3: "werde geschlafen haben" ist Futur II, da es sich um eine Handlung handelt, die zum Zeitpunkt deiner Ankunft bereits abgeschlossen sein wird. 4+5: "wird sein" ist Futur I und drückt eine Vermutung oder Erwartung aus. 6+7: "werden reisen" ist Futur I und drückt eine zukünftige Handlung aus. 8+9+10: "wird abgeschlossen haben" ist Futur II, da es sich um eine Handlung handelt, die zu einem bestimmten Zeitpunkt in der Zukunft abgeschlossen sein wird.',
        hint: 'Überlege bei jedem Satz: Handelt es sich um eine einfache zukünftige Handlung (Futur I) oder um eine Handlung, die zu einem bestimmten Zeitpunkt in der Zukunft bereits abgeschlossen sein wird (Futur II)?'
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
            userData.progress['futur'].completed = correctAnswers;
            userData.progress['futur'].points += points;
            
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
            showReward(points, 'Du hast das Thema "Zeitform: Futur I & II" erfolgreich gemeistert!');
        }
    }
}); 