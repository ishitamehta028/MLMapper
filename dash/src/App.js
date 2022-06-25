import "./App.css";
import React from "react";
import Header from "./components/help";
import FileUploader from "./components/UploadFile";
import CustomizedSlider from "./components/slider";
import Button from "react-bootstrap/Button"
import ResourceAllocate from "./components/resource";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
          <h1>Resource Allocation Platform</h1>

          <div className="Variables">
            <CustomizedSlider name="Number of Resources" />
            <CustomizedSlider name="Episodes" />
            <CustomizedSlider name="Epochs" />
          </div>

          <div className="resourcess"><ResourceAllocate /></div>
          
          <Button variant="danger" className="btn">
            Run Model
        </Button>

        </header>
      </div>
      <div className="model">
      <FileUploader />
      </div>
      
    </>
  );
}

export default App;
