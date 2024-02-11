//Animation

const sentences = [
    "I am a full stack website developer.",
    "I am a full stack app developer.",
    "I am youtuber.",
    "Feel free to contact with me"
    
  ];

  const textContainer = document.getElementById('text-container');

  function typeSentence(index) {
    if (index < sentences.length) {
      const currentSentence = sentences[index];
      let charIndex = 0;

      function type() {
        if (charIndex < currentSentence.length) {
          textContainer.innerHTML += currentSentence.charAt(charIndex);
          charIndex++;
          setTimeout(type, 50);
        } else {
          setTimeout(() => {
            textContainer.innerHTML = ''; // Clear the current sentence
            typeSentence(index + 1); // Move on to the next sentence
          }, 1000);
        }
      }

      type();
    } else {
      // If all sentences are typed, restart the animation
      setTimeout(() => {
        textContainer.innerHTML = ''; // Clear the current sentence
        typeSentence(0); // Restart from the first sentence
      }, 1000);
    }
  }

  typeSentence(0);