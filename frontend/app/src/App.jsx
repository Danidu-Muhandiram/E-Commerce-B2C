import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      {/*add routes components from the react router*/}
      <Routes>
        <Route>{/*user layout*/}</Route>
        <Route>{/*admin layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
