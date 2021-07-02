import React, { useState, useEffect } from "react";
import { heroData } from "./mock/data";
import Hero from "./components/Hero";

function App() {
  const [hero, setHero] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
  }, []);

  return (
    <div>
      <Hero hero={hero} />
    </div>
  );
}

export default App;
