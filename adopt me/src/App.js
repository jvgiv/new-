import React from "react"
import ReactDOM from 'react-dom'
// import Pet from './Pet'
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
            <h1>Adopt me!</h1>
            <SearchParams />
            {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Bella" animal="Dog" breed="Pit Bull" />
            <Pet name="Joe" animal="Bird" breed="Crow" /> */}
        </div>
    )
    
    
    
    
    
    // React.createElement(
    //         "div",
    //         {},
    //         [
    //             React.createElement("h1", {}, "Adopt Me!"),
    //             React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese"}),
    //             React.createElement(Pet, { name: "Bella", animal: "Dog", breed: "Pit Bull"}),
    //             React.createElement(Pet, { name: "Tiger", animal: "Cat", breed: "Who knows"}),
    //         ]
    //     );
    };

ReactDOM.render(React.createElement(App), document.getElementById('root'))
    