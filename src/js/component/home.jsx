import React, { useState } from "react";

//create your first component
const Home = () => {
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [tareasMuyImportantes, setTareasMuyImportantes] = useState([]);
    const [tareasImportantes, setTareasImportantes] = useState([]);
    const [tareasPocoImportantes, setTareasPocoImportantes] = useState([]);

    function actualizacionDeEntrada(event) {
        setNuevaTarea(event.target.value);
    }

    function agregarTarea(prioridad) {
        if (nuevaTarea.trim() !== "") {
            switch (prioridad) {
                case "muy importante":
                    setTareasMuyImportantes([...tareasMuyImportantes, nuevaTarea]);
                    break;
                case "importante":
                    setTareasImportantes([...tareasImportantes, nuevaTarea]);
                    break;
                case "poco importante":
                    setTareasPocoImportantes([...tareasPocoImportantes, nuevaTarea]);
                    break;
                default:
                    break;
            }
            setNuevaTarea("");
        }
    }

    function eliminarTarea(prioridad, index) {
        switch (prioridad) {
            case "muy importante":
                setTareasMuyImportantes(tareasMuyImportantes.filter((_, i) => i !== index));
                break;
            case "importante":
                setTareasImportantes(tareasImportantes.filter((_, i) => i !== index));
                break;
            case "poco importante":
                setTareasPocoImportantes(tareasPocoImportantes.filter((_, i) => i !== index));
                break;
            default:
                break;
        }
    }

    return (
        <div className="container">
            <h1>My Lista de tareas</h1>
			<input
                    type="text"
                    placeholder="Escribe tarea..."
                    value={nuevaTarea}
                    onChange={actualizacionDeEntrada}
            />
            <div className="botones-prioridad">
                <button onClick={() => agregarTarea("muy importante")}>
                    Muy Importante
                </button>
                <button onClick={() => agregarTarea("importante")}>
                    Importante
                </button>
                <button onClick={() => agregarTarea("poco importante")}>
                    Poco Importante
                </button>
            </div>
            <div className="bloques-tareas">
                <div className="bloque">
                    <h2>Muy Importante</h2>
                    <ul>
                        {tareasMuyImportantes.map((tarea, index) => (
                            <li key={index}>
                                {tarea}
                                <button onClick={() => eliminarTarea("muy importante", index)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bloque">
                    <h2>Importante</h2>
                    <ul>
                        {tareasImportantes.map((tarea, index) => (
                            <li key={index}>
                                {tarea}
                                <button onClick={() => eliminarTarea("importante", index)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bloque">
                    <h2>Poco Importante</h2>
                    <ul>
                        {tareasPocoImportantes.map((tarea, index) => (
                            <li key={index}>
                                {tarea}
                                <button onClick={() => eliminarTarea("poco importante", index)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;


