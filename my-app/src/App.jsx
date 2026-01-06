import { useState } from 'react';

const Card = () => {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(prev => prev + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-10 rounded-3xl shadow-2xl w-full max-w-sm text-center transform transition-all hover:scale-105">
        
        <h1 className="text-white text-3xl font-extrabold mb-2 tracking-tight">
          My Counter
        </h1>
        
        <div className="my-8">
          <span className="text-7xl font-black text-white drop-shadow-md">
            {counter}
          </span>
          <p className="text-indigo-100 mt-2 font-medium uppercase tracking-widest text-sm">
            Current Value
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={addValue}
            className="bg-white cursor-pointer text-indigo-600 font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-50 transition duration-200 active:scale-95"
          >
            Add Value
          </button>
          
          <button
            onClick={removeValue}
            className="bg-transparent  border-2 border-white/50 text-white font-bold py-3 px-6 rounded-xl hover:bg-white/10 transition duration-200 active:scale-95"
          >
            Remove Value
          </button>
        </div>

        <button 
          onClick={() => setCounter(0)}
          className="mt-6 cursor-pointer text-white/60 text-sm hover:text-white underline transition"
        >
          Reset Counter
        </button>
        
      </div>
    </div>
  );
};

export default Card;