import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm';

function App(){
    let [colors, setColors] = useState ([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    const addColor = (newcolor) => {
        setColors([...colors, newcolor]);
    };

    return (
        <div className="App">
            <ColorForm addColor={addColor}/>
            {colors.map ((color, i) => (
                <ColorBlock key={i} color={color}/>
                    )
                )        
            }
        </div>
    )
}

export default App;
