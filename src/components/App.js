import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCounter((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={counter} />
    </div>
  );
}

function Message(props) {
  return (
    <>
    <p>welcome yasta</p>
      <p>You Have Read <strong>{props.count}</strong></p>
    </>
  );
}

export default App;
