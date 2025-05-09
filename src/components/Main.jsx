import titoli from "../assets/titoli.js";

const Main = () => {
    return (
        <div className="main">
            <h2>Elenco titoli</h2>
            <ul>
                {titoli.map((titolo, index) => (
                    <li key={index}>
                        {titolo}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Main;

