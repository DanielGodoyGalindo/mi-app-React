import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer2 } from "./components/ItemListContainer/ItemListContainer2";
import "./main.css"

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer2 />
      <ItemDetailContainer itemId={2}/>
    </div>
  );
}

export default App;