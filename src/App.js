import React from 'react';

const Context = React.createContext();

function Son() {
    return (
        <Context.Consumer>
            {value =>
                <div>
                    <h3>I am a son</h3>
                    <h4>My gift from grandfather: <span style={{color: "goldenrod"}}>{value}</span></h4>

                </div>}
        </Context.Consumer>);
}

function Father() {
    return (
        <div>
            <h2>I am a father, I have a son</h2>
            <Son/>
        </div>
    );
}

function Grandfather() {
    return (
        <div>
            <h1>I am a grandfather, I have a son</h1>
            <Father/>
        </div>);
}

function App() {
    return (
        <div>
            <Context.Provider value="gold watch">
                <Grandfather/>
            </Context.Provider>
        </div>
    );
}

export default App;
