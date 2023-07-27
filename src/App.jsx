import Header from "./components/Header/Header.jsx";
import CharactersPage from "./pages/CharactersPage/CharactersPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SingleCharacterPage from "./pages/SingleCharacterPage/SingleCharacterPage.jsx";
import LocationsPage from "./pages/LocationsPage/LocationsPage.jsx";
import SingleLocationPage from "./pages/SingleLocationPage/SingleLocationPage.jsx";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage.jsx";
import SingleEpisodePage from "./pages/SingleEpisodePage/SingleEpisodePage.jsx";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="main">
                    <Routes>
                        <Route path="/" element={<CharactersPage/>}/>
                        <Route path="/locations" element={<LocationsPage/>}/>
                        <Route path="/episodes" element={<EpisodesPage/>}/>
                        <Route path="/characters/:id" element={<SingleCharacterPage/>}/>
                        <Route path="/locations/:id" element={<SingleLocationPage/>}/>
                        <Route path="/episodes/:id" element={<SingleEpisodePage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
