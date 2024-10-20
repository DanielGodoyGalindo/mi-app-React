import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer2 } from "./components/ItemListContainer/ItemListContainer2";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { ContactoHookForm } from "./components/Contacto/ContactoHookForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./main.css"


function App() {
  return (
    <div>
      {/* Encerramos todo el render de componentes en el router */}
      <BrowserRouter>

        <Navbar />

        {/* Definimos el routing */}
        <Routes>
          <Route path="/" element={<ItemListContainer2 />} /> {/* Inicio */}
          <Route path="/item/:id" element={<ItemDetailContainer />} /> {/* Item :id (dinámico) */}
          <Route path="/productos" element={<ItemListContainer2 />} /> {/* Productos */}
          <Route path="/productos/:categoria" element={<ItemListContainer2 />} /> {/* Categorias */}
          <Route path="/nosotros" element={<Nosotros />} /> {/* Nosotros */}
          <Route path="/contacto" element={<ContactoHookForm />} /> {/* Nosotros */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;