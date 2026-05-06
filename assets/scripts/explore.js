// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const face = document.querySelector('#explore > img');
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore > button');
  let voices = [];

  function loadVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i += 1) {
      const option = document.createElement('option');
      option.value = String(i);
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      voiceSelect.appendChild(option);
    }
  }

  loadVoices();
  synth.onvoiceschanged = loadVoices;

  talkButton.addEventListener('click', function() {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    utterance.voice = voices[voiceSelect.value];

    utterance.onstart = function() {
      face.src = 'assets/images/smiling-open.png';
      face.alt = 'Open mouth face';
    };

    utterance.onend = function() {
      face.src = 'assets/images/smiling.png';
      face.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}