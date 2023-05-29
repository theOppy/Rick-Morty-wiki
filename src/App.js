import React from "react";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
import Filters from "./Components/Filters/Filters";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Episodes from "./Components/Pages/Episodes";
import Locations from "./Components/Pages/Locations";
import PageDetails from "./Components/Pages/PageDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PageDetails />} />

        <Route path="/episode" element={<Episodes />} />
        <Route path="/episode/:id" element={<PageDetails />} />

        <Route path="/location" element={<Locations />} />
        <Route path="/location/:id" element={<PageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  let [data, setData] = React.useState([]);
  let [pageNumber, setPageNumber] = React.useState(1);
  let [search, setSearch] = React.useState("");
  let [status, setStatus] = React.useState("");
  let [species, setSpecies] = React.useState("");
  let [gender, setGender] = React.useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  React.useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data.results);
    })();
  }, [api]);

  let displaySpecies;
  let displayStatus;
  let displayGender;

  if (species === "") {
    displaySpecies = "";
  } else {
    displaySpecies = `Species: ${species}`;
  }

  if (status === "") {
    displayStatus = "";
  } else {
    displayStatus = `Status: ${status}`;
  }
  if (gender === "") {
    displayGender = "";
  } else {
    displayGender = `Gender: ${gender}`;
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12  ">
            <Filters
              setStatus={setStatus}
              setPageNumber={setPageNumber}
              setSpecies={setSpecies}
              species={species}
              setGender={setGender}
            />
          </div>
          <div className="col-lg-8 col-12 mx-2 d-flex justify-content-center">
            <div className="row">
              <div>
                <Search setSearch={setSearch} setPageNumber={setPageNumber} />
              </div>
              <div className="text-center fs-3 fw-bold">{displayStatus} </div>
              <div className="text-center fs-3 fw-bold">{displayGender} </div>
              <div className="text-center fs-3 fw-bold">{displaySpecies} </div>
              <Card page="/" data={data} />
            </div>
          </div>
          <Pagination
            data={data}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
