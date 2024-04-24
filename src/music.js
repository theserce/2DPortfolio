document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const toggleMusicButton = document.getElementById('toggleMusic');

    backgroundMusic.play();

    toggleMusicButton.addEventListener('click', () => {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusicButton.classList.remove('paused');
      } else {
        backgroundMusic.pause();
        toggleMusicButton.classList.add('paused');
      }
    });
});