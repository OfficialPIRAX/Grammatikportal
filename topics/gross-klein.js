// Übungsdaten für "Groß- und Kleinschreibung"
const exercises = [
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt?',
        options: ['Ich freue mich auf das Morgen.', 'Ich freue mich auf das morgen.'],
        correctAnswer: 'Ich freue mich auf das Morgen.',
        explanation: '"das Morgen" wird großgeschrieben, da es hier als Substantiv verwendet wird und einen Zeitpunkt (den kommenden Tag) beschreibt. Klein geschrieben wäre "morgen" nur als Adverb korrekt (z. B. "Wir sehen uns morgen").',
        hint: 'Achte auf die Wortart: Ist es ein Substantiv (dann groß) oder ein Adverb (dann klein)?'
    },
    {
        type: 'multiple-choice',
        question: 'Welche der folgenden Sätze ist richtig?',
        options: ['Er ist ein großer Fan von Fußball.', 'Er ist ein großer fan von Fußball.'],
        correctAnswer: 'Er ist ein großer Fan von Fußball.',
        explanation: 'Substantive (Nomen) werden immer großgeschrieben. "Fan" ist ein Nomen und muss deshalb großgeschrieben werden.',
        hint: 'Substantive (Nomen) werden im Deutschen immer großgeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Schreibweise: "Sie hat mir die Sache klar und deutlich erklärt."',
        options: ['deutlich', 'Deutlich'],
        correctAnswer: 'deutlich',
        explanation: '"deutlich" ist ein Adjektiv und wird kleingeschrieben, da es die Art und Weise beschreibt, wie etwas erklärt wurde.',
        hint: 'Adjektive werden kleingeschrieben, wenn sie als Attribut oder Adverb verwendet werden.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Version ist korrekt? "Er liebt das Laufen im Park."',
        options: ['das laufen', 'das Laufen'],
        correctAnswer: 'das Laufen',
        explanation: 'Wenn ein Verb als Substantiv verwendet wird (Nominalisierung), schreibt man es groß. Hier ist "das Laufen" ein substantiviertes Verb.',
        hint: 'Wenn ein Verb mit einem Artikel verwendet wird, wird es zum Substantiv und großgeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Schreibweise ist korrekt? "Er hat mir das Geheimnis anvertraut."',
        options: ['geheimnis', 'Geheimnis'],
        correctAnswer: 'Geheimnis',
        explanation: 'Substantive (Nomen) werden immer großgeschrieben. Hier ist "Geheimnis" ein Substantiv.',
        hint: 'Substantive (Nomen) werden im Deutschen immer großgeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche Form ist korrekt? "Sie freute sich auf das Eis an diesem heißen Tag."',
        options: ['eis', 'Eis'],
        correctAnswer: 'Eis',
        explanation: '"Eis" ist ein Substantiv und bezeichnet hier das Lebensmittel → daher großschreiben.',
        hint: 'Substantive (Nomen) werden im Deutschen immer großgeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die richtige Schreibweise: "Das Auto ist neu und sehr teuer."',
        options: ['Neu, Teuer', 'neu, teuer'],
        correctAnswer: 'neu, teuer',
        explanation: '"neu" und "teuer" sind Adjektive, die Eigenschaften beschreiben, und werden daher kleingeschrieben.',
        hint: 'Adjektive werden kleingeschrieben, wenn sie als Attribut oder Adverb verwendet werden.'
    },
    {
        type: 'multiple-choice',
        question: 'Welche der folgenden Sätze ist richtig?',
        options: ['Ich liebe das Reisen in ferne Länder.', 'Ich liebe das reisen in ferne Länder.'],
        correctAnswer: 'Ich liebe das Reisen in ferne Länder.',
        explanation: 'Hier wird "das Reisen" als substantiviertes Verb verwendet. Substantivierungen werden immer großgeschrieben.',
        hint: 'Wenn ein Verb mit einem Artikel verwendet wird, wird es zum Substantiv und großgeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: 'Wähle die korrekte Form: "Das Wetter heute ist gut."',
        options: ['gut', 'Gut'],
        correctAnswer: 'gut',
        explanation: '"gut" ist ein Adjektiv, das kleingeschrieben wird.',
        hint: 'Adjektive werden kleingeschrieben, wenn sie als Attribut oder Adverb verwendet werden.'
    },
    {
        type: 'fill-in-blank',
        question: 'Ergänze die fehlenden Wörter mit der richtigen Groß- oder Kleinschreibung:',
        text: 'Ich liebe das [1] in den Bergen. Heute ist ein wirklich [2] Tag. Er antwortete mir sehr [3]. Das [4] macht ihm viel Spaß. Die [5] scheint heute besonders stark.',
        blanks: ['Wandern', 'schöner', 'freundlich', 'Laufen', 'Sonne'],
        explanation: '1: "das Wandern" ist ein substantiviertes Verb → groß. 2: "schöner" ist ein Adjektiv → klein. 3: "freundlich" ist ein Adjektiv → klein. 4: "das Laufen" ist ein substantiviertes Verb → groß. 5: "Sonne" ist ein Substantiv → großgeschrieben.',
        hint: 'Substantive und substantivierte Verben werden großgeschrieben, Adjektive und Adverbien werden kleingeschrieben.'
    },
    {
        type: 'fill-in-blank',
        question: 'Ergänze die Lücken mit der korrekten Groß- oder Kleinschreibung:',
        text: 'Wir haben gestern viel [1] gehabt. Das [2] im Wald ist sehr entspannend. Er sprach sehr [3]. Die [4] ging langsam unter. Ich finde es [5], dass du da bist.',
        blanks: ['Spaß', 'Laufen', 'leise', 'Sonne', 'gut'],
        explanation: '1: "Spaß" ist ein Substantiv → großschreiben. 2: "das Laufen" ist ein substantiviertes Verb → groß. 3: "leise" ist ein Adjektiv → kleinschreiben. 4: "Sonne" ist ein Substantiv → großschreiben. 5: "gut" ist ein Adjektiv → kleinschreiben.',
        hint: 'Substantive und substantivierte Verben werden großgeschrieben, Adjektive und Adverbien werden kleingeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: '"Das Schwimmen im Meer ist erfrischend." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: '"Schwimmen" ist hier ein substantiviertes Verb und wird deshalb großgeschrieben.',
        hint: 'Wenn ein Verb mit einem Artikel verwendet wird, wird es zum Substantiv und großgeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: '"Wir haben gestern viel Gelacht." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: '"gelacht" ist ein Verb und muss kleingeschrieben werden.',
        hint: 'Verben werden kleingeschrieben, außer wenn sie substantiviert sind (mit Artikel).'
    },
    {
        type: 'multiple-choice',
        question: '"Sie liest ein spannendes Buch." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: '"Buch" ist ein Substantiv und wird großgeschrieben.',
        hint: 'Substantive (Nomen) werden im Deutschen immer großgeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: '"Das Schreiben eines Briefes fällt mir schwer." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: '"Schreiben" ist hier ein substantiviertes Verb und wird deshalb großgeschrieben.',
        hint: 'Wenn ein Verb mit einem Artikel verwendet wird, wird es zum Substantiv und großgeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: '"Die kinder spielen im Garten." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: '"Kinder" ist ein Substantiv und muss daher großgeschrieben werden.',
        hint: 'Substantive (Nomen) werden im Deutschen immer großgeschrieben.'
    },
    {
        type: 'multiple-choice',
        question: '"Das Wetter war gestern sehr Schön." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Falsch',
        explanation: '"schön" ist ein Adjektiv und muss kleingeschrieben werden.',
        hint: 'Adjektive werden kleingeschrieben, wenn sie als Attribut oder Adverb verwendet werden.'
    },
    {
        type: 'multiple-choice',
        question: '"Er hat mir das Geheimnis erzählt." Ist dieser Satz korrekt?',
        options: ['Wahr', 'Falsch'],
        correctAnswer: 'Wahr',
        explanation: '"Geheimnis" ist ein Substantiv und wird korrekt großgeschrieben.',
        hint: 'Substantive (Nomen) werden im Deutschen immer großgeschrieben.'
    },
    {
        type: 'fill-in-blank',
        question: 'Ordne die Wörter in die Kategorien "Großschreibung" und "Kleinschreibung" ein:',
        text: 'Das: [1]\nlaufen: [2]\nFreude: [3]\nhell: [4]\nSpielen: [5]\nschnell: [6]',
        blanks: ['groß', 'klein', 'groß', 'klein', 'groß', 'klein'],
        explanation: 'Das: groß (Artikel/Pronomen), laufen: klein (Verb), Freude: groß (Substantiv), hell: klein (Adjektiv), Spielen: groß (substantiviertes Verb), schnell: klein (Adjektiv)',
        hint: 'Substantive und substantivierte Verben werden großgeschrieben, Verben, Adjektive und Adverbien werden kleingeschrieben.'
    },
    {
        type: 'fill-in-blank',
        question: 'Sortiere die folgenden Wörter in die Kategorien "Großschreibung" und "Kleinschreibung":',
        text: 'spielen: [1]\nder Erfolg: [2]\nlaut: [3]\ndas Tanzen: [4]\nmutig: [5]',
        blanks: ['klein', 'groß', 'klein', 'groß', 'klein'],
        explanation: 'spielen: klein (Verb), der Erfolg: groß (Substantiv), laut: klein (Adjektiv), das Tanzen: groß (substantiviertes Verb), mutig: klein (Adjektiv)',
        hint: 'Substantive und substantivierte Verben werden großgeschrieben, Verben, Adjektive und Adverbien werden kleingeschrieben.'
    },
    {
        type: 'correction',
        question: 'Korrigiere die Fehler in der Groß- und Kleinschreibung im folgenden Text:',
        text: 'Gestern war ein schöner tag. wir sind zum schwimmen gegangen und haben viel spaß gehabt. Meine freunde waren auch dabei. Danach haben wir ein Leckeres eis gegessen.',
        correctText: 'Gestern war ein schöner Tag. Wir sind zum Schwimmen gegangen und haben viel Spaß gehabt. Meine Freunde waren auch dabei. Danach haben wir ein leckeres Eis gegessen.',
        explanation: 'Tag: Substantiv → groß, Wir: Satzanfang → groß, Schwimmen: substantiviertes Verb → groß, Spaß: Substantiv → groß, Freunde: Substantiv → groß, leckeres: Adjektiv → klein, Eis: Substantiv → groß',
        hint: 'Substantive und Satzanfänge werden großgeschrieben, Adjektive werden kleingeschrieben.'
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