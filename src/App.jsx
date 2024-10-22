import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer2 } from "./components/ItemListContainer/ItemListContainer2";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { ContactoHookForm } from "./components/Contacto/ContactoHookForm";
import { CartProvider } from "./context/CartContext";
import { Carrito } from "./components/Carrito/Carrito";
import { CheckOut } from "./components/CheckOut/CheckOut";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./main.css"


function App() {

  // Return
  return (
    <div>
      <CartProvider>

        <BrowserRouter> {/* Encerramos todo el render de componentes en el router */}

          <Navbar />

          <Routes> {/* Definimos el routing */}
            <Route path="/" element={<ItemListContainer2 />} /> {/* Inicio */}
            <Route path="/item/:id" element={<ItemDetailContainer />} /> {/* Item :id (dinámico) */}
            <Route path="/productos" element={<ItemListContainer2 />} /> {/* Productos */}
            <Route path="/productos/:categoria" element={<ItemListContainer2 />} /> {/* Categorias */}
            <Route path="/nosotros" element={<Nosotros />} /> {/* Nosotros */}
            <Route path="/contacto" element={<ContactoHookForm />} /> {/* Contacto */}
            <Route path="/carrito" element={<Carrito />} /> {/* Carrito */}
            <Route path="/checkout" element={<CheckOut />} /> {/* CHeckOut */}
          </Routes>

        </BrowserRouter>

      </CartProvider>
    </div>
  );
}

export default App;