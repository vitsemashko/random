import { useState, useMemo } from "react";
import { Chessboard } from "react-chessboard";
import { capitalLetter, numberInRange } from "./shared/func";
import { openingsNames } from "./shared/db";
import "./App.css";

const App = () => {
  const [coords, setCoords] = useState({ letter: capitalLetter(), number: numberInRange() });
  const [isVis, setIsVis] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleRandomize = () => {
    setCoords({ letter: capitalLetter(), number: numberInRange() });
    setIsVis(!isVis);
  };

  // Фільтрація: працює миттєво при введенні тексту
  const filteredOpenings = useMemo(() => {
    const term = searchValue.trim().toUpperCase();
    if (!term) return [];
    return openingsNames.filter((item) => item.id.toUpperCase() === term);
  }, [searchValue]);

  return (
    <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
      <button className="button-66" onClick={handleRandomize} type="button">
        Randomize
      </button>

      <div style={{ height: '60px', marginTop: '20px' }}>
        {isVis && (
          <h1 className="id" style={{ fontSize: '40px', margin: 0 }}>
            {coords.letter}{coords.number}
          </h1>
        )}
      </div>

      <hr />

      <div className="search-section">
        <input
          className="input"
          type="text"
          placeholder="Enter ID"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ padding: '10px', width: '250px', fontSize: '40px' }}
        />
      </div>

      <div className="results" style={{ marginTop: '30px' }}>
        {filteredOpenings.map((item) => (
          <div key={item.id} className="opening-card" style={{ maxWidth: '500px', margin: '0 auto 40px' }}>
            <h3>{item.name}</h3>
            <div style={{ width: '400px', margin: '0 auto' }}>
              <Chessboard 
                id={`board-${item.id}`}
                position={item.fen || 'start'} 
                arePiecesDraggable={false} // Тільки перегляд
              />
            </div>
            <p style={{ color: 'gray', fontSize: '36px' }}>FEN: {item.fen}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
