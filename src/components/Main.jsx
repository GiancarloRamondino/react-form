import titoli from "../assets/titoli.js";
import { useState } from "react";

const Main = () => {
    const [titoliState, setTitoliState] = useState(titoli);
    const [newTitle, setNewTitle] = useState("");

    const handleAddTitle = () => {
        if (newTitle.trim() !== "") {
            setTitoliState([...titoliState, newTitle.trim()]);
            setNewTitle(""); // Clear the input field
        }
    };

    return (
        <>
            <div className="main">
                <h2>Elenco titoli</h2>
                <ul>
                    {titoliState.map((titolo, index) => (
                        <li key={index}>
                            {titolo}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="aggiungi titolo" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)} 
                />
                <button onClick={handleAddTitle}>Aggiungi</button>
            </div>
        </>
    );
};

export default Main;

