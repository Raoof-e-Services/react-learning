import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSummary from './MainSummary';
import SummarySearch from "./SummarySearch";
import Test1 from "./Test1";
import React from 'react'
import Form from "./Form";
import FormMultipleInputs from "./FormMultipleInputs"

function Routess() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<MainSummary />} />
       <Route path="/search" element={<SummarySearch />} />
       <Route path="/test1" element={<Test1 />} />
       <Route path="/Form" element={<Form />} />
       <Route path="/multiform" element={<FormMultipleInputs />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routess
