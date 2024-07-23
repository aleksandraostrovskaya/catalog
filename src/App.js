import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import {HomePage} from "./pages/HomePage"
import {CartPage} from "./pages/CartPage"
import {CatalogPage} from "./pages/CatalogPage"
import {FavoritesPage} from "./pages/FavoritesPage"
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/catalog" element={<CatalogPage/>}/>
          {/* <Route path="/phone/:id" element={<PhoneDetailPage/>}/> */}
          <Route path="/favorites" element={<FavoritesPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          {/* <Route path="/*" element={<NotFoundPage/>}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
