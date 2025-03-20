// Globale Variablen
let userName = '';
let userProgress = {
    'das-dass': { completed: 0, total: 10, points: 0 },
    'getrennt-zusammen': { completed: 0, total: 10, points: 0 },
    'gross-klein': { completed: 0, total: 10, points: 0 },
    'komma': { completed: 0, total: 10, points: 0 }
};

// DOM-Elemente
document.addEventListener('DOMContentLoaded', function() {
    // Startbildschirm-Elemente
    const startButton = document.getElementById('start-button');
    const userNameInput = document.getElementById('user-name');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainMenu = document.getElementById('main-menu');
    const userNameDisplay = document.getElementById('user-name-display');
    
    // Fortschritts-Elemente
    const overallProgress = document.getElementById('overall-progress');
    const completedExercises = document.getElementById('completed-exercises');
    const earnedPoints = document.getElementById('earned-points');
    
    // Themen-Karten
    const topicCards = document.querySelectorAll('.topic-card');
    
    // Event-Listener
    startButton.addEventListener('click', function() {
        if (userNameInput.value.trim() !== '') {
            userName = userNameInput.value.trim();
            startPortal();
        } else {
            alert('Bitte gib deinen Namen ein, um fortzufahren.');
        }
    });
    
    userNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && userNameInput.value.trim() !== '') {
            userName = userNameInput.value.trim();
            startPortal();
        }
    });
    
    topicCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Only load the topic if the click was not on the video button
            if (!e.target.closest('.video-button')) {
                const topic = this.getAttribute('data-topic');
                loadTopic(topic);
            }
        });
    });
    
    // Video functionality
    const videoButtons = document.querySelectorAll('.video-button');
    const videoModal = document.getElementById('video-modal');
    const youtubeFrame = document.getElementById('youtube-frame');
    const closeVideo = document.getElementById('close-video');
    
    videoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the topic card click event
            const videoUrl = this.getAttribute('data-video');
            // Convert YouTube watch URL to embed URL
            const embedUrl = videoUrl.replace('watch?v=', 'embed/');
            youtubeFrame.src = embedUrl;
            videoModal.classList.add('active');
        });
    });
    
    closeVideo.addEventListener('click', function() {
        videoModal.classList.remove('active');
        youtubeFrame.src = ''; // Stop the video from playing
    });
    
    // Close modal when clicking outside the video
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            youtubeFrame.src = '';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            videoModal.classList.remove('active');
            youtubeFrame.src = '';
        }
    });
    
    // Lokalen Speicher überprüfen
    checkLocalStorage();
    
    // Funktionen
    function startPortal() {
        userNameDisplay.textContent = userName;
        saveToLocalStorage();
        switchScreen(welcomeScreen, mainMenu);
        updateProgressDisplay();
    }
    
    function switchScreen(fromScreen, toScreen) {
        fromScreen.classList.remove('active-screen');
        toScreen.classList.add('active-screen');
        toScreen.classList.add('fade-in');
        setTimeout(() => {
            toScreen.classList.remove('fade-in');
        }, 500);
    }
    
    function updateProgressDisplay() {
        // Gesamtfortschritt berechnen
        let totalCompleted = 0;
        let totalExercises = 0;
        let totalPoints = 0;
        
        for (const topic in userProgress) {
            totalCompleted += userProgress[topic].completed;
            totalExercises += userProgress[topic].total;
            totalPoints += userProgress[topic].points;
        }
        
        const progressPercentage = totalExercises > 0 ? Math.round((totalCompleted / totalExercises) * 100) : 0;
        
        // UI aktualisieren
        overallProgress.style.width = `${progressPercentage}%`;
        overallProgress.textContent = `${progressPercentage}%`;
        completedExercises.textContent = totalCompleted;
        earnedPoints.textContent = totalPoints;
    }
    
    function loadTopic(topic) {
        // Hier würden wir normalerweise die Übungen für das ausgewählte Thema laden
        // Für dieses Beispiel erstellen wir eine einfache Weiterleitung
        window.location.href = `topics/${topic}.html`;
    }
    
    function saveToLocalStorage() {
        const userData = {
            name: userName,
            progress: userProgress,
            lastVisit: new Date().toISOString()
        };
        
        localStorage.setItem('grammatikportal_user', JSON.stringify(userData));
    }
    
    function checkLocalStorage() {
        const savedData = localStorage.getItem('grammatikportal_user');
        
        if (savedData) {
            const userData = JSON.parse(savedData);
            userName = userData.name;
            userProgress = userData.progress;
            
            // Wenn Benutzerdaten vorhanden sind, direkt zum Hauptmenü
            if (userName) {
                userNameInput.value = userName;
                userNameDisplay.textContent = userName;
                switchScreen(welcomeScreen, mainMenu);
                updateProgressDisplay();
            }
        }
    }
});

// Konfetti-Animation für Belohnungen
function createConfetti() {
    const celebration = document.createElement('div');
    celebration.classList.add('celebration');
    document.body.appendChild(celebration);
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        celebration.appendChild(confetti);
        
        // Animation
        setTimeout(() => {
            confetti.style.opacity = '1';
            confetti.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 500 + 200}px) rotate(${Math.random() * 360}deg)`;
            confetti.style.transition = `all ${Math.random() * 3 + 1}s ease-out`;
        }, 10);
        
        // Entfernen
        setTimeout(() => {
            confetti.style.opacity = '0';
        }, Math.random() * 3000 + 1000);
    }
    
    // Celebration entfernen
    setTimeout(() => {
        celebration.remove();
    }, 5000);
}

function getRandomColor() {
    const colors = [
        '#ffd166', // Akzentfarbe
        '#4a6da7', // Primärfarbe
        '#8fb8de', // Sekundärfarbe
        '#06d6a0', // Erfolgsfarbe
        '#ef476f'  // Fehlerfarbe
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
}

// Belohnungsanimation anzeigen
function showReward(points, message) {
    // Konfetti erstellen
    createConfetti();
    
    // Belohnungsanimation erstellen
    const reward = document.createElement('div');
    reward.classList.add('reward-animation');
    reward.innerHTML = `
        <h2 class="reward-title">Gut gemacht!</h2>
        <div class="reward-points">+${points}</div>
        <p class="reward-message">${message}</p>
        <button class="reward-button">Weiter</button>
    `;
    
    document.body.appendChild(reward);
    
    // Animation anzeigen
    setTimeout(() => {
        reward.style.display = 'block';
    }, 500);
    
    // Event-Listener für den Button
    const button = reward.querySelector('.reward-button');
    button.addEventListener('click', function() {
        reward.style.display = 'none';
        setTimeout(() => {
            reward.remove();
        }, 300);
    });
}

// Hilfsfunktion zum Mischen von Arrays (für Quizfragen)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} 