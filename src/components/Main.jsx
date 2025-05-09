import titoli from "../assets/titoli.js";

const Main = () => {
    return (
        <div className="main">
            <h1>Lista di titoli</h1>
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

