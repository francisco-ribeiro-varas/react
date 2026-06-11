import {useState}from "react";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [texto,setTexto] = useState("");
}


function alternarTarea(id) {
  setTareas(
    tareas.map((t) =>
      t.id === id ? {...t, hecha: !t.hecha} : t
    )
  );
}

function eliminarTarea(id) {
  setTareas(tareas.filter((t) => t.id !== id));
}



  function agregarTarea() {
    if (texto.trim() === "") return;
    const nueva = {
      id: Date.now(),
      titulo: texto,
      hecha: false,
    };
    setTareas([...tareas, nueva]);
    setTexto("");
  }

  return (
    <div className= "app">
      <h1>Mi lista de tareas</h1>
      <div className="entrada">
        <ul>
          {tareas.map((t) => (
            <li key={t.id}>
              <span
                onclick={() => alternarTarea(t.id)}
                className={t.hecha ? "hecha" : ""}
              >
                {t.titulo}
                </span>
                <button onClick={() => eliminarTarea(t.id)}>X</button>
            </li>
          ))}
        </ul>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una tarea"
        />
        <button onClick={agregarTarea}>agregar</button>
      </div>
    </div>
  );


export default App;