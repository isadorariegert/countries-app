import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Container from "./components/layout/Container";
import Header from './components/layout/Header';
import CountriesList from './components/pages/CountriesList';
import CountryDetail from './components/pages/CountryDetail';

function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
            <Route path='/' element={<CountriesList />}></Route>
            <Route path='/countrydetail/:name' element={<CountryDetail />}></Route>
          </Routes>
      </Container>
    </Router>
  );
}

export default App;
