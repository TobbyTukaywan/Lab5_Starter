// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const HORNS = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      audio: 'assets/audio/air-horn.mp3',
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      audio: 'assets/audio/car-horn.mp3',
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      audio: 'assets/audio/party-horn.mp3',
    },
  };

  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const audio = document.querySelector('#expose > audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose > button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function() {
    const key = hornSelect.value;
    const horn = HORNS[key];

    hornImage.src = horn.image;
    hornImage.alt = key;
    audio.src = horn.audio;
  });

  volumeSlider.addEventListener('input', function() {
    const v = Number(volumeSlider.value);
    audio.volume = v / 100;
    let level;
    if (v === 0) level = 0;
    else if (v < 33) level = 1;
    else if (v < 67) level = 2;
    else level = 3;
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  playButton.addEventListener('click', function() {
    const key = hornSelect.value;

    audio.currentTime = 0;
    audio.play();

    if (key === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
