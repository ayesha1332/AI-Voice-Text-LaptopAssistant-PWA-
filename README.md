# 🤖 AI Voice & Text Laptop Assistant (PWA)

## 📌 Project Overview

You built a **JavaScript-based AI Assistant** that allows you to **control and manage laptop tasks using voice (oral) and text commands**.
The project works as a **Progressive Web App (PWA)**, meaning you can **install it on mobile or PC** and use it like a native application.

This assistant listens to your commands, understands them, and performs actions such as opening apps, executing tasks, and responding intelligently.

---

## 🗂️ Project Structure

```
📁 AI-Laptop-Assistant
├── app.js                 # Main AI logic (voice & text handling)
├── server.js              # Backend server logic
├── index.html             # Main UI
├── index.html             # (Entry point for the app)
├── styles.css             # Styling & responsive design
├── service-worker.js      # Offline support & caching
├── manifest.webmanifest   # PWA configuration
```

---

## ✨ Features

* 🎤 **Voice Command Support**
  Control your laptop using spoken commands.

* ⌨️ **Text Command Support**
  Type commands to perform tasks easily.

* 🧠 **AI Command Processing**
  Understands natural language instructions.

* 📱 **Progressive Web App (PWA)**

  * Installable on mobile & desktop
  * Works offline
  * Fast and lightweight

* 🖥️ **Laptop Task Automation**

  * Open applications
  * Execute system-related commands
  * Automate daily actions

* 🎨 **Responsive UI**
  Works smoothly on **mobile & PC**.

---

## 🛠️ Technologies Used

* **JavaScript (Vanilla JS)**
* **HTML5**
* **CSS3**
* **Service Workers**
* **Web Speech API (Voice Input)**
* **PWA (Manifest + Offline Support)**

---

## ▶️ How It Works

1. You give a **voice command** or **type a command**
2. The assistant processes your input using JavaScript
3. The system executes the requested task
4. You receive feedback or confirmation

---

## 🗣️ Example Commands

* “Open Chrome”
* “Create a new folder”
* “Start the assistant”
* “Search files”
* “Execute command”

---

## 🚀 How to Run the Project

```bash
npm install
node server.js
```

Then open in browser:

```
http://localhost:3000
```

You can also **install it as a PWA** from your browser.

---
JavaScript (Vanilla JS)
```
// Simple client-side voice assistant app.js
appendBot('Network error: ' + err.message);
}
}


function speak(text, lang='en-US'){
if (!('speechSynthesis' in window)) return;
const u = new SpeechSynthesisUtterance(text);
u.lang = lang;
// pick a female-ish voice if available
const voices = speechSynthesis.getVoices();
if (voices.length){
// prefer matching language
const v = voices.find(x=>x.lang.startsWith(lang.split('-')[0]) && x.name.toLowerCase().includes('female'))
|| voices.find(x=>x.lang.startsWith(lang.split('-')[0]))
|| voices[0];
u.voice = v;
}
speechSynthesis.cancel();
speechSynthesis.speak(u);
}


function handleSimpleCommands(text, aiReply){
// open websites
if (text.includes('open youtube') || text.includes('youtube کھول')){
window.open('https://youtube.com', '_blank');
}
if (text.startsWith('search for') || text.includes('search')){
const q = text.replace(/search for|search/,'').trim();
if (q) window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank');
}
if (text.includes('what time') || text.includes('کتنے')){
const now = new Date().toLocaleTimeString();
appendBot('Time: ' + now);
speak('Current time is ' + now, langSelect.value);
}
}


// Controls
toggleBtn.onclick = () => {
if (!recognition) return;
if (!recognizing){
recognition.lang = langSelect.value;
recognition.start();
recognizing = true;
toggleBtn.innerText = 'Listening... (click to pause)';
} else {
recognition.stop();
recognizing = false;
toggleBtn.innerText = 'Start Listening';
}
}
stopBtn.onclick = () => {
if (recognition){ recognition.stop(); recognizing = false; toggleBtn.innerText = 'Start Listening'; }
}


// Register service worker for PWA
if ('serviceWorker' in navigator){
window.addEventListener('load', async () => {
try{ await navigator.serviceWorker.register('/service-worker.js'); console.log('SW registered'); }catch(e){console.warn('SW failed', e)}
});
}


// quick boot message
appendBot('Assistant ready. Say the wake-word (e.g. "' + wakeInput.value + '") or click Start Listening.');

```
---
HTML5
```
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Desktop Assistant</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            overflow: hidden;
        }

        .container {
            width: 90%;
            max-width: 800px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            text-align: center;
        }

        h1 {
            margin-bottom: 20px;
            font-size: 2.5rem;
            background: linear-gradient(to right, #fdbb2d, #b21f1f);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .assistant-icon {
            width: 150px;
            height: 150px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, #1a2a6c, #b21f1f);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 60px;
            box-shadow: 0 0 20px rgba(253, 187, 45, 0.5);
            position: relative;
            overflow: hidden;
        }

        .assistant-icon::before {
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
            animation: pulse 3s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(0.8); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.5; }
            100% { transform: scale(0.8); opacity: 1; }
        }

        .status {
            margin: 20px 0;
            font-size: 1.2rem;
            min-height: 30px;
        }

        .controls {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
        }

        button {
            padding: 12px 25px;
            border: none;
            border-radius: 50px;
            background: linear-gradient(to right, #1a2a6c, #b21f1f);
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        button:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        button:active {
            transform: translateY(1px);
        }

        #listenBtn.listening {
            background: linear-gradient(to right, #b21f1f, #fdbb2d);
            animation: pulse-button 1.5s infinite;
        }

        @keyframes pulse-button {
            0% { box-shadow: 0 0 0 0 rgba(178, 31, 31, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(178, 31, 31, 0); }
            100% { box-shadow: 0 0 0 0 rgba(178, 31, 31, 0); }
        }

        .conversation {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 20px;
            margin: 20px 0;
            height: 300px;
            overflow-y: auto;
            text-align: left;
        }

        .message {
            margin-bottom: 15px;
            padding: 10px 15px;
            border-radius: 15px;
            max-width: 80%;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .user-message {
            background: rgba(26, 42, 108, 0.7);
            margin-left: auto;
            border-bottom-right-radius: 5px;
        }

        .assistant-message {
            background: rgba(178, 31, 31, 0.7);
            margin-right: auto;
            border-bottom-left-radius: 5px;
        }

        .system-message {
            background: rgba(253, 187, 45, 0.7);
            margin: 0 auto;
            text-align: center;
            font-style: italic;
            max-width: 90%;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .feature {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            font-size: 0.9rem;
        }

        .feature i {
            font-size: 1.5rem;
            margin-bottom: 10px;
            display: block;
        }

        footer {
            margin-top: 20px;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
            .container {
                width: 95%;
                padding: 20px;
            }
            
            h1 {
                font-size: 1.8rem;
            }
            
            .assistant-icon {
                width: 120px;
                height: 120px;
                font-size: 50px;
            }
            
            .controls {
                flex-direction: column;
                gap: 10px;
            }
            
            .conversation {
                height: 250px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>AI Desktop Assistant</h1>
        
        <div class="assistant-icon">
            🤖
        </div>
        
        <div class="status" id="status">
            Click "Start Listening" to begin
        </div>
        
        <div class="controls">
            <button id="listenBtn">
                <span>🎤</span> Start Listening
            </button>
            <button id="clearBtn">
                <span>🗑️</span> Clear Chat
            </button>
        </div>
        
        <div class="conversation" id="conversation">
            <div class="message system-message">
                Hello! I'm your AI assistant. How can I help you today?
            </div>
        </div>
        
        <div class="features">
            <div class="feature">
                <i>🎤</i>
                <h3>Voice Commands</h3>
                <p>Speak naturally to control your system</p>
            </div>
            <div class="feature">
                <i>🌐</i>
                <h3>Web Search</h3>
                <p>Search the web with voice commands</p>
            </div>
            <div class="feature">
                <i>📱</i>
                <h3>App Control</h3>
                <p>Open applications on your computer</p>
            </div>
            <div class="feature">
                <i>🔊</i>
                <h3>Text-to-Speech</h3>
                <p>Hear responses spoken aloud</p>
            </div>
        </div>
        
        <footer>
            Note: This assistant works in your browser. For full system control, additional permissions may be required.
        </footer>
    </div>

    <script>
        // DOM Elements
        const listenBtn = document.getElementById('listenBtn');
        const clearBtn = document.getElementById('clearBtn');
        const status = document.getElementById('status');
        const conversation = document.getElementById('conversation');
        
        // Speech Recognition Setup
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition;
        let isListening = false;
        
        if (SpeechRecognition) {
            recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';
            
            recognition.onstart = function() {
                isListening = true;
                listenBtn.classList.add('listening');
                status.textContent = "Listening... Speak now";
            };
            
            recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript;
                addMessage(transcript, 'user');
                processCommand(transcript);
            };
            
            recognition.onerror = function(event) {
                console.error('Speech recognition error', event.error);
                status.textContent = `Error: ${event.error}`;
                stopListening();
            };
            
            recognition.onend = function() {
                stopListening();
            };
        } else {
            status.textContent = "Speech recognition not supported in this browser";
            listenBtn.disabled = true;
        }
        
        // Text-to-Speech Setup
        const synth = window.speechSynthesis;
        
        function speak(text) {
            if (synth.speaking) {
                synth.cancel();
            }
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1;
            utterance.pitch = 1;
            utterance.volume = 0.8;
            synth.speak(utterance);
        }
        
        // Control Functions
        function startListening() {
            if (recognition && !isListening) {
                try {
                    recognition.start();
                } catch (error) {
                    console.error('Error starting recognition:', error);
                    status.textContent = "Error starting voice recognition";
                }
            }
        }
        
        function stopListening() {
            if (recognition && isListening) {
                recognition.stop();
                isListening = false;
                listenBtn.classList.remove('listening');
                status.textContent = "Click the microphone to speak";
            }
        }
        
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', `${sender}-message`);
            messageDiv.textContent = text;
            conversation.appendChild(messageDiv);
            conversation.scrollTop = conversation.scrollHeight;
        }
        
        function clearConversation() {
            conversation.innerHTML = '';
            addMessage("Hello! I'm your AI assistant. How can I help you today?", 'system');
        }
        
        // Command Processing
        function processCommand(command) {
            status.textContent = "Processing your command...";
            
            // Convert to lowercase for easier matching
            const lowerCommand = command.toLowerCase();
            
            // System commands
            if (lowerCommand.includes('open') || lowerCommand.includes('launch')) {
                handleOpenCommand(lowerCommand);
            } else if (lowerCommand.includes('search') || lowerCommand.includes('find')) {
                handleSearchCommand(lowerCommand);
            } else if (lowerCommand.includes('time')) {
                handleTimeCommand();
            } else if (lowerCommand.includes('date')) {
                handleDateCommand();
            } else if (lowerCommand.includes('weather')) {
                handleWeatherCommand();
            } else if (lowerCommand.includes('joke') || lowerCommand.includes('tell me a joke')) {
                handleJokeCommand();
            } else {
                // For other commands, simulate AI response
                simulateAIResponse(command);
            }
        }
        
        function handleOpenCommand(command) {
            let response = "";
            
            if (command.includes('calculator') || command.includes('calc')) {
                response = "Opening calculator";
                // In a real implementation, you would launch the calculator app
                // This is a simulation for the browser environment
                window.open('calculator://', '_blank');
            } else if (command.includes('notepad') || command.includes('text editor')) {
                response = "Opening text editor";
                // This would open Notepad in a real implementation
                window.open('notepad://', '_blank');
            } else if (command.includes('browser') || command.includes('chrome') || command.includes('firefox')) {
                response = "Opening web browser";
                // This would open the default browser in a real implementation
                window.open('https://www.google.com', '_blank');
            } else if (command.includes('youtube')) {
                response = "Opening YouTube";
                window.open('https://www.youtube.com', '_blank');
            } else if (command.includes('google')) {
                response = "Opening Google";
                window.open('https://www.google.com', '_blank');
            } else {
                response = "I'm not sure which application you want me to open. Please specify.";
            }
            
            addMessage(response, 'assistant');
            speak(response);
            status.textContent = "Ready for next command";
        }
        
        function handleSearchCommand(command) {
            const searchQuery = command.replace(/search|find|for|about/gi, '').trim();
            let response = "";
            
            if (searchQuery) {
                response = `Searching for "${searchQuery}"`;
                // In a real implementation, this would perform a search
                window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
            } else {
                response = "What would you like me to search for?";
            }
            
            addMessage(response, 'assistant');
            speak(response);
            status.textContent = "Ready for next command";
        }
        
        function handleTimeCommand() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const response = `The current time is ${timeString}`;
            
            addMessage(response, 'assistant');
            speak(response);
            status.textContent = "Ready for next command";
        }
        
        function handleDateCommand() {
            const now = new Date();
            const dateString = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const response = `Today is ${dateString}`;
            
            addMessage(response, 'assistant');
            speak(response);
            status.textContent = "Ready for next command";
        }
        
        function handleWeatherCommand() {
            const response = "I can't access real-time weather data in this demo. In a full implementation, I would connect to a weather API.";
            
            addMessage(response, 'assistant');
            speak(response);
            status.textContent = "Ready for next command";
        }
        
        function handleJokeCommand() {
            const jokes = [
                "Why don't scientists trust atoms? Because they make up everything!",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "Why don't skeletons fight each other? They don't have the guts!",
                "What do you call a fake noodle? An impasta!",
                "Why couldn't the bicycle stand up by itself? It was two tired!"
            ];
            
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            const response = `Here's a joke for you: ${randomJoke}`;
            
            addMessage(response, 'assistant');
            speak(response);
            status.textContent = "Ready for next command";
        }
        
        function simulateAIResponse(command) {
            // Simulate AI processing delay
            setTimeout(() => {
                const responses = [
                    `I understand you said: "${command}". How can I assist you with that?`,
                    `You asked about: "${command}". I can help you with that.`,
                    `Regarding "${command}", I can provide information or perform tasks related to that.`,
                    `I heard: "${command}". What would you like me to do about that?`
                ];
                
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                
                addMessage(randomResponse, 'assistant');
                speak(randomResponse);
                status.textContent = "Ready for next command";
            }, 1500);
        }
        
        // Event Listeners
        listenBtn.addEventListener('click', function() {
            if (isListening) {
                stopListening();
            } else {
                startListening();
            }
        });
        
        clearBtn.addEventListener('click', clearConversation);
        
        // Initialize
        clearConversation();
    </script>
</body>
</html>

```
---
HTML5
```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Voice AI Assistant — Ayesha</title>
<link rel="manifest" href="/manifest.webmanifest">
<meta name="theme-color" content="#4f46e5">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<main class="container">
<h1>Voice AI Assistant — <span class="accent">Ayesha</span></h1>


<div class="controls">
<label for="lang">Language</label>
<select id="lang">
<option value="en-US">English (US)</option>
<option value="ur-PK">اردو (Urdu)</option>
</select>


<label for="wake">Wake word</label>
<input id="wake" placeholder="Hey Ayesha" value="hey ayesha" />


<button id="toggle-listen">Start Listening</button>
<button id="stop">Stop</button>
</div>


<section class="log">
<h2>Conversation</h2>
<div id="messages"></div>
</section>


<section class="quick">
<h3>Try commands</h3>
<ul>
<li>"Open YouTube" / "YouTube کھولیں"</li>
<li>"Search for cat videos" / "بِلّیاں دیکھائیں"</li>
<li>"What time is it?" / "کتنے بجے ہیں؟"</li>
<li>"Play music" (controls audio on this page)</li>
</ul>
</section>


</main>
<script src="/app.js" defer></script>
</body>
</html>

```
---
CSS3
```
:root{--bg:#0f172a;--card:#0b1220;--accent:#7c3aed;color-scheme:dark}
*{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,Arial;background:linear-gradient(180deg,#020617, #071033);color:#e6eef8;min-height:100vh}
.container{max-width:920px;margin:32px auto;padding:20px;background:rgba(255,255,255,0.02);border-radius:14px}
h1{font-size:1.5rem;margin:0 0 14px}
.accent{color:var(--accent)}
.controls{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px}
.controls select,input,button{padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);background:transparent;color:inherit}
button{cursor:pointer}
.log{margin-top:12px}
#messages{margin-top:8px;padding:10px;background:rgba(255,255,255,0.01);border-radius:8px;min-height:160px}
.message{margin-bottom:10px}
.message.you{color:#cfe8ff}
.message.bot{color:#ffd9f4}
.quick{margin-top:12px;font-size:0.95rem}
@media(max-width:600px){.controls{flex-direction:column;align-items:stretch}}

```
---
Service Workers
```
const CACHE_NAME = 'voice-ai-v1';
const FILES = ['/', '/index.html', '/styles.css', '/app.js', '/manifest.webmanifest'];
self.addEventListener('install', (evt) => {
evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
self.skipWaiting();
});
self.addEventListener('activate', (evt)=>{
evt.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (evt) => {
evt.respondWith(caches.match(evt.request).then(resp => resp || fetch(evt.request)));
});

```
---
Web Speech API (Voice Input)
```
// Minimal proxy server to forward requests to OpenAI safely.
// Usage: set OPENAI_API_KEY in your environment, then `node server.js`


const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


if (!process.env.OPENAI_API_KEY){
console.warn('Warning: OPENAI_API_KEY not set. Set it in your environment before running server.');
}


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/api/chat', async (req, res) => {
const { message, lang } = req.b

```
---
PWA (Manifest + Offline Support)
```
{
"name": "Ayesha — Voice AI Assistant",
"short_name": "Ayesha",
"start_url": "/",
"display": "standalone",
"background_color": "#071033",
"theme_color": "#4f46e5",
"icons": [
{"src":"icon-192.png","sizes":"192x192","type":"image/png"},
{"src":"icon-512.png","sizes":"512x512","type":"image/png"}
]
}

```
---
## 🔮 Future Enhancements

* Advanced AI responses
* More system-level controls
* API integrations
* Custom voice commands
* Multi-language support (English / Urdu)

---

## ⚠️ Disclaimer

This project is built for **learning, experimentation, and personal use**.
Some features may require **browser permissions** (microphone, system access).


