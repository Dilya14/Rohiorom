import {Routes, Route} from "react-router-dom";
import {Main, NotFound, Brand, Client, Contacts, Newes, PageNews, Catalog2} from "./pages";


 function App() {
  return (
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/brand" element={<Brand/>}/>
    <Route path="/clients" element={<Client/>}/>
    <Route path="/contact" element={<Contacts/>}/>
    <Route path="/news" element={<Newes/>}/>
    <Route path="/news/:id" element={<PageNews/>}/>
    <Route path="/catalog" element={<Catalog2 />}/>
  </Routes>
  )
}

export default App;