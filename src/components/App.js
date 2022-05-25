import React, { useEffect, useState } from "react"

function App(){

    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(randomDog => setImage(randomDog.message))
        }, [])

    if (!image){
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src = {image} alt = 'A Random Dog'/>
        </div>
    )

    }

export default App