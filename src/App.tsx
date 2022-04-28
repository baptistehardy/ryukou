import { useClothesStore, useStore } from "./store"
import { Box, Button, Container, Input, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import { ReactNode, useState } from "react"
import { Cloth } from "./store"

const useInput = (placeholder: string, type: string): [string, ReactNode] => {
    const [value, setValue] = useState<string>('');
    const input = <Input placeholder={placeholder} size={'md'} onChange={(e) => setValue(e.target.value)} type={type} />
    return [value, input];
}

function App() {
    const { clothes, addCloth, reset } = useClothesStore()
    
    const [ name, nameInput ] = useInput('name', 'text');
    const [ url, urlInput ] = useInput('url', 'text');
    
    const saveCloth = () => {
        const newCloth: Cloth = {
            id: 'random-id',
            name: name,
            url: url,
        }
        addCloth(newCloth)
    }
    
    return (
        <Container>
            <Box mt={5}>
                <form>
                    <Stack spacing={5}>
                        {nameInput}
                        {urlInput}
                        <Button colorScheme={'teal'} type={'submit'} onClick={(e) => {
                            e.preventDefault()
                            saveCloth()
                        }}>
                            Save
                        </Button>
                        <Button colorScheme={'red'} onClick={() => reset()}>Reset</Button>
                    </Stack>
                </form>
            </Box>
            <Box mt={5}>
                <UnorderedList>
                    {clothes.map((cloth: Cloth) => {
                        return <ListItem>{cloth.name}</ListItem>
                    })}
                </UnorderedList>
            </Box>
        </Container>
    )
}

export default App
