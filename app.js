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