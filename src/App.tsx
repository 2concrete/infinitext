import { useEffect, useState } from "react";

const randomStrings = [
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "concrete",
  "crypt",
  "sacred",
  "unfound",
  "shadow",
  "void",
  "abyss",
  "whisper",
  "oblivion",
  "silence",
  "midnight",
  "raven",
  "sorrow",
  "phantom",
  "spectral",
  "reverie",
  "nocturne",
  "ethereal",
  "forgotten",
  "cryptic",
  "obscure",
  "veiled",
  "shrouded",
  "arcane",
  "essence",
  "veil",
  "dusk",
  "twilight",
  "eclipse",
  "requiem",
  "elegy",
  "dirge",
  "grimoire",
  "curse",
  "hex",
  "spell",
  "omen",
  "malice",
  "torment",
  "anguish",
  "desolate",
  "wasteland",
  "ruin",
  "decay",
  "dust",
  "ash",
  "ember",
  "flame",
  "scourge",
  "plague",
];
const randomSeed = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

const baseCount = 20000;

const getRandomStringForIndex = (index: number) => {
  let h = (index ^ randomSeed) >>> 0;
  h = ((h ^ (h >>> 16)) * 0x7feb352d) >>> 0;
  h = (h ^ (h >>> 15)) >>> 0;
  return randomStrings[h % randomStrings.length];
};

const App = () => {
  const [count, setCount] = useState(baseCount);

  useEffect(() => {
    const handleScroll = () => {
      setCount(baseCount + window.pageYOffset * 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-x- justify-center items-center">
      {Array.from({ length: count }, (_, index) => (
        <span key={index}>{getRandomStringForIndex(index)}</span>
      ))}
    </div>
  );
};

export default App;
