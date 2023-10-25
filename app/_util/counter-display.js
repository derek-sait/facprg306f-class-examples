

export default function CounterDisplay({ currentCount, incrementCountFunction }) {
  return (
    <div className="bg-slate-300 mt-10 p-5  max-w-sm">
      <p>Counter: {currentCount}</p>
      <button
      className="bg-blue-500 hover:bg-blue-400 active:bg-slate-400 rounded mt-5 p-2 pl-3 pr-3"
      onClick={() => incrementCountFunction(currentCount)}>
        Increment Counter
      </button>
    </div>
  );
}
