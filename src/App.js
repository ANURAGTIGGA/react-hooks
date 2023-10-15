import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import UseStateComp from './components/UseStateComp';
import UseEffectComp from './components/UseEffectComp';
import UseMemoComp from './components/UseMemoComp';
import UseCallbackComp from './components/UseCallback/UseCallbackComp';
import UseContextComp from './components/UseContext/UseContextComp';
import UseRefComp from './components/UseRefComp';
import UseReducerComp from './components/UseReducer/UseReducerComp';
import UseImperativeHandleComp from './components/UseImperativeHandle/UseImperativeHandleComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseStateComp />} />
        <Route path="/useeffect" element={<UseEffectComp />} />
        <Route path="/usememo" element={<UseMemoComp />} />
        <Route path="/usecallback" element={<UseCallbackComp />} />
        <Route path="/usecontext" element={<UseContextComp />} />
        <Route path="/useref" element={<UseRefComp />} />
        <Route path="/usereducer" element={<UseReducerComp />} />
        <Route path="/useimperativehandle" element={<UseImperativeHandleComp />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
