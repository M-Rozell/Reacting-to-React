import React, { useState, useEffect } from "react";
import Greet from "./Greeter";

const App = () => {

    const [username, setUserName] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, [loaded])

    if (loaded === false) {

        return (
            <div>
                <h1>Website loading...</h1>

                <button onClick={() => setLoaded(true)}>Clickidy Click</button>
            </div>
        )
    }

    return (

        <div>
            <h4>Step One/Simple Tasks a la React</h4>

            <Greet
                name="Josh"
                phrase="Hello There"
            />
            <Greet
                name="Garrett"
                phrase="Well Hi There"
            />
            <Greet
                name="Haley"
                phrase="What's Up"
            />

            <input value={username} onChange={e => setUserName(e.target.value)} />
            <p>You are logging in as: {username}</p>
        </div>
    )
}

export default App;









