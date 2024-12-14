import React, { useState } from 'react';

const syllables = [
  ["Der Hund", "Herr Rau", "Die Puppe", "Frau Löschner", "Die Katze", "Mama", "Papa", "Eine Maus", "Die Ameise", "Mein Bruder", "Meine Schwester", "Das Brot"],
  ["springt", "liegt", "spielt", "fliegt", "isst", "schläft", "läuft", "träumt", "rollt", "lernt", "lernt", "quiekt", "schmatzt", "popelt", "kratzt", "schleicht", "flüstert", "hustet"],
  ["auf dem Bett", "auf dem Baum", "auf dem Teppich", "auf dem Haus", "im Keller", "im Garten", "auf dem Hof", "auf dem Trampolin", "auf dem Auto", "auf dem Schrank", "in der Schule", "im Klassenraum", "im Mund", "in der Nase", "im Rucksack", "in der Toilette", "im Suppentopf", "auf dem Stuhl", "auf der Treppe", "im Kindergarten", "im Mülleimer"],
    ];

function SyllableButton({ index, onSpeak }) {
  const [currentSyllable, setCurrentSyllable] = useState(syllables[index][0]);

  const handleClick = () => {
    const nextIndex = (syllables[index].indexOf(currentSyllable) + 1) % syllables[index].length;
    setCurrentSyllable(syllables[index][nextIndex]);
  };

  return (
    <div className="syllable-button-container">
      <button onClick={handleClick}>
        {currentSyllable}
      </button>
      <button onClick={() => onSpeak(currentSyllable)}>
        🎤
      </button>
    </div>
  );
}

export default SyllableButton;