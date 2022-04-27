import { useStore } from "./store"
import { Button, Text } from "@chakra-ui/react"

function App() {
    const { count, increaseCount, reset } = useStore()
    
    return (
        <div className="app">
            <Text>count: {count}</Text>
            <p>
                <Button type="button" onClick={() => increaseCount(1)}>
                    Add 1 to count
                </Button>
            </p>
            <Button type="button" onClick={reset}>
                Reset
            </Button>
        </div>
    )
}

export default App
