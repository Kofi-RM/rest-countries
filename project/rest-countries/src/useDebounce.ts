import { useEffect, useState } from "react"

type DebounceProps = {
    input: string
    delay: number
}

export default function useDebounce({ input, delay }: DebounceProps) {
    const [debounceValue, setDebounceValue] = useState(input)
    const isLoading = input !== debounceValue;
    useEffect(() => {
       
        const timer = setTimeout(() => {
     
            setDebounceValue(input)
            

        }, delay)

        return () => clearTimeout(timer);
    }
        , [delay, input])
        
    
    console.log(debounceValue)
    return {debounceValue,
        isLoading
    }
}