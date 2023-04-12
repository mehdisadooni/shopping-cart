import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Header from "./components/Header";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
