import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UIElements from "./modules/ui-elements";
import EditPreview from "./modules/edit-preview";
import RulesPolicies from "./modules/rules-policies";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <div className="box box1">
          <UIElements />
        </div>
        <div className="box box2">
          <EditPreview />
        </div>
        <div className="box box3">
          <RulesPolicies />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
