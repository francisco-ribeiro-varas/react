import { useState } from "react";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  function agregarTarea() {
    if (texto.trim() === "") return;
    const nueva = { id: Date.now(), titulo: texto, hecha: false };
    setTareas([...tareas, nueva]);
    setTexto("");
  }

  function alternarTarea(id) {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, hecha: !t.hecha } : t
      )
    );
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((t) => t.id !== id));
  }

const manejarKeyDown = (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
};

const borrarTodas = () =>{
  setTareas([]);
};

const hechas = tareas.filter((t) => t.hecha).length;
const pendientes = tareas.filter((t) => !t.hecha).length;

  return (
    <div className="app">
      <h1>Mi lista de tareas</h1>

      <div className="entrada">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una tarea"
          onKeyDown={manejarKeyDown}
        />
        <button onClick={agregarTarea}>Agregar</button>
        <button onClick={borrarTodas}>borrar todo</button>
      </div>

      {tareas.length === 0 ? (
        <p>no hay tareas</p>
      ) : (
            <ul>
              {tareas.map((t) => (
              <li key={t.id}>
              <span
                onClick={() => alternarTarea(t.id)}
                className={t.hecha ? "hecha" : ""}
              >
                {t.titulo}
              </span>
              <button onClick={() => eliminarTarea(t.id)}>X</button>
            </li>
          ))}
      </ul>
      )}

      <p>{tareas.length} tarea(s) en total</p>
      <p>{hechas} tarea(s) hecha(s)</p>
      <p>{pendientes} tarea(s) pendiente(s)</p>
    </div>
  );
}

export default App;