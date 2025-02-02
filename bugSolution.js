```javascript
// bugSolution.js
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 relative">
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10">
        Click me
      </button>
    </div>
  );
}

export default App;
```