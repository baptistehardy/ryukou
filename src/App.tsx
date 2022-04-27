import { useStore } from "./store"

function App() {
    const { count, increaseCount, reset } = useStore()
    
    return (
        <div className="app">
            <p>count: {count}</p>
            <p>
                <button type="button" onClick={() => increaseCount(1)}>
                    Add 1 to count
                </button>
            </p>
            <button type="button" onClick={reset}>
                Reset
            </button>
        </div>
    )
}

export default App
