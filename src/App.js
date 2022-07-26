import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Provider} from "react-redux";
import {Home} from "./pages/home";
import {GamePage} from "./pages/game_page"
import {OrderPage} from "./pages/order_page";
import {Header} from "./components/header";
import {store} from "./redux";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/app/:title" element={<GamePage/>}/>
                        <Route path="/order" element={<OrderPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
