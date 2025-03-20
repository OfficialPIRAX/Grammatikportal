// Übungsdaten für "Getrennt- und Zusammenschreibung"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['Sie kann gut Rad fahren.', 'Sie kann gut Radfahren.', 'Sie kann gut rad fahren.'],
        correctAnswer: 'Sie kann gut Rad fahren.',
        explanation: 'Verb-Nomen-Verbindungen werden getrennt geschrieben, wenn das Nomen eine eigenständige Bedeutung hat. "Rad" ist hier ein Nomen mit eigenständiger Bedeutung.',
        hint: 'Überlege, ob "Rad" ein eigenständiges Nomen ist oder ob es mit dem Verb eine feste Verbindung bildet.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche der folgenden Varianten ist korrekt?',
        options: ['ab jetzt', 'abjetzt'],
        correctAnswer: 'ab jetzt',
        explanation: 'Die Präposition "ab" und das Adverb "jetzt" werden getrennt geschrieben.',
        hint: 'Präpositionen und Adverbien werden in der Regel getrennt geschrieben.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche der folgenden Kombinationen ist korrekt?',
        options: ['nach dem Essen', 'nachdem Essen', 'nach demessen'],
        correctAnswer: 'nach dem Essen',
        explanation: 'Die Präposition "nach" und der Artikel mit Substantiv "dem Essen" werden getrennt geschrieben.',
        hint: 'Achte auf die grammatikalische Struktur: Präposition + Artikel + Substantiv.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche der folgenden Formen ist richtig?',
        options: ['mit einander', 'miteinander'],
        correctAnswer: 'miteinander',
        explanation: '"Miteinander" ist ein Adverb und wird zusammengeschrieben.',
        hint: 'Bestimmte Adverbien, die aus mehreren Teilen bestehen, werden zusammengeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['zu machen', 'zumachen'],
        correctAnswer: 'zumachen',
        explanation: '"Zumachen" ist ein Verb mit Präfix und wird zusammengeschrieben, wenn es die Bedeutung "schließen" hat.',
        hint: 'Wenn "zu" als Präfix verwendet wird und die Bedeutung verändert, wird es mit dem Verb zusammengeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche der folgenden Varianten ist richtig?',
        options: ['vorhin', 'vor hin'],
        correctAnswer: 'vorhin',
        explanation: '"Vorhin" ist ein Adverb und wird zusammengeschrieben.',
        hint: 'Adverbien, die aus mehreren Teilen bestehen, werden oft zusammengeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche der folgenden Varianten ist korrekt?',
        options: ['übrig bleiben', 'übrigbleiben'],
        correctAnswer: 'übrig bleiben',
        explanation: 'Die Adjektiv-Verb-Verbindung "übrig bleiben" wird getrennt geschrieben.',
        hint: 'Adjektiv-Verb-Verbindungen werden in der Regel getrennt geschrieben.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die fehlenden Wörter in der richtigen Schreibweise (getrennt oder zusammen):',
        text: 'Wir müssen jetzt [1]. Ich habe ihn gestern [2]. Er hat [3].',
        blanks: ['abfahren', 'wiedergesehen', 'zusammengearbeitet'],
        explanation: '1: "abfahren" wird zusammengeschrieben, da "ab" ein Präfix ist, das die Bedeutung des Verbs verändert. 2: "wiedergesehen" wird zusammengeschrieben, da "wieder" hier als Präfix verwendet wird. 3: "zusammengearbeitet" wird zusammengeschrieben, da "zusammen" hier als Präfix verwendet wird.',
        hint: 'Achte darauf, ob der erste Teil ein Präfix ist, das die Bedeutung des Verbs verändert (dann zusammenschreiben) oder ob es sich um eigenständige Wörter handelt (dann getrennt schreiben).'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die fehlenden Wörter in der richtigen Schreibweise (getrennt oder zusammen):',
        text: 'Wir haben [1] gespielt. Wir wollen uns heute [2]. Er hat das Problem [3].',
        blanks: ['zusammen', 'wiedersehen', 'durchdacht'],
        explanation: '1: "zusammen" wird getrennt geschrieben, da es hier als eigenständiges Adverb verwendet wird. 2: "wiedersehen" wird zusammengeschrieben, da es ein Verb mit Präfix ist. 3: "durchdacht" wird zusammengeschrieben, da "durch" hier als Präfix verwendet wird.',
        hint: 'Überlege, ob der erste Teil ein eigenständiges Wort ist oder ob er die Bedeutung des Verbs verändert.'
    },
    {
        type: 'fill-in-blank',
        question: 'Setze die fehlenden Wörter in der richtigen Schreibweise (getrennt oder zusammen):',
        text: 'Der Lehrer hat [1], dass wir die Übung heute noch machen. Wir müssen es heute noch [2]. Sie wollen [3] kochen. Ich habe das [4], aber es nicht gemacht.',
        blanks: ['abgemacht', 'durchlesen', 'miteinander', 'vorgehabt'],
        explanation: '1: "abgemacht" wird zusammengeschrieben, da "ab" ein Präfix ist. 2: "durchlesen" wird zusammengeschrieben, da "durch" ein Präfix ist. 3: "miteinander" wird zusammengeschrieben, da es ein Adverb ist. 4: "vorgehabt" wird zusammengeschrieben, da "vor" ein Präfix ist.',
        hint: 'Achte auf die Funktion des ersten Teils: Ist es ein Präfix oder ein eigenständiges Wort?'
    },
    {
        type: 'multiple-choice',
        question: '"Ich möchte nach Hause gehen." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: 'Der Satz ist korrekt, "nach Hause" wird hier getrennt geschrieben.',
        hint: '"Nach Hause" ist eine feste Wendung, die getrennt geschrieben wird.'
    },
    {
        type: 'multiple-choice',
        question: '"Wir fahren zusammen arbeiten." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: 'Der Satz ist falsch. Es müsste heißen: "Wir fahren zusammenarbeiten." (zusammengeschrieben als Verb).',
        hint: 'Wenn "zusammen" als Präfix verwendet wird und die Bedeutung des Verbs verändert, wird es zusammengeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: '"Sie wollen sich wieder sehen." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: 'Der Satz ist falsch. Es müsste "wiedersehen" zusammengeschrieben werden: "Sie wollen sich wiedersehen."',
        hint: '"Wiedersehen" ist ein Verb mit Präfix und wird zusammengeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: '"Wir haben den Plan gemacht, um nach draußen zu gehen." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: 'Der Satz ist korrekt. "Nach draußen" wird getrennt geschrieben.',
        hint: 'Die Präposition "nach" und das Adverb "draußen" werden getrennt geschrieben.'
    },
    {
        type: 'multiple-choice',
        question: '"Er hat das schon lange vor gehabt." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: 'Der Satz ist falsch. Es müsste heißen: "Er hat das schon lange vorgehabt." (zusammengeschrieben als Verb).',
        hint: '"Vorhaben" ist ein Verb mit Präfix und wird zusammengeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: '"Ich muss heute wieder arbeiten." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: 'Der Satz ist korrekt, "wieder arbeiten" wird hier getrennt geschrieben.',
        hint: '"Wieder" ist hier ein eigenständiges Adverb und wird getrennt vom Verb geschrieben.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler in den folgenden Sätzen (Getrennt- oder Zusammenschreibung):',
        text: 'Ich möchte dich wieder sehen. Er will das Buch mit nehmen. Wir müssen zusammen arbeiten, um das Problem zu lösen. Sie will nach hause gehen.',
        correctText: 'Ich möchte dich wiedersehen. Er will das Buch mitnehmen. Wir müssen zusammenarbeiten, um das Problem zu lösen. Sie will nach Hause gehen.',
        explanation: '1: "wiedersehen" wird zusammengeschrieben, da es ein Verb mit Präfix ist. 2: "mitnehmen" wird zusammengeschrieben, da "mit" ein Präfix ist. 3: "zusammenarbeiten" wird zusammengeschrieben, da "zusammen" hier als Präfix verwendet wird. 4: In "nach Hause" wird "Hause" großgeschrieben, da es ein Substantiv ist.',
        hint: 'Achte darauf, ob der erste Teil ein Präfix ist, das die Bedeutung des Verbs verändert (dann zusammenschreiben) oder ob es sich um eigenständige Wörter handelt (dann getrennt schreiben).'
    },
    {
        type: 'fill-in-blank',
        question: 'Sortiere die folgenden Begriffe in Getrennt- und Zusammenschreibung:',
        text: 'Rad fahren: [1]\nkennenlernen: [2]\nstehen bleiben: [3]\nleidtun: [4]\nspazieren gehen: [5]\nwiedersehen: [6]',
        blanks: ['getrennt', 'zusammen', 'getrennt', 'zusammen', 'getrennt', 'zusammen'],
        explanation: 'Rad fahren: getrennt, da "Rad" ein eigenständiges Nomen ist. Kennenlernen: zusammen, da es ein Verb mit Präfix ist. Stehen bleiben: getrennt, da es eine Verb-Verb-Verbindung ist. Leidtun: zusammen, da es eine feste Verbindung ist. Spazieren gehen: getrennt, da es eine Verb-Verb-Verbindung ist. Wiedersehen: zusammen, da es ein Verb mit Präfix ist.',
        hint: 'Überlege bei jedem Begriff, ob es sich um eigenständige Wörter handelt oder ob der erste Teil die Bedeutung des zweiten Teils verändert.'
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