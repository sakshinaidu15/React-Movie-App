import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleMovie from "./components/SingleMovie";
import Error from "./components/Error";

const App = () => {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<SingleMovie />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}
export default App;