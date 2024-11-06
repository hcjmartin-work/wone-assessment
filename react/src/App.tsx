import React, { useEffect, useState } from "react";
import "./App.css";
import FormElement, { IFormElement } from "./components/FormElement";

function App() {
  const [apiResponse, setApiResponse] = useState<null | any>(null);
  const [stepsData, setStepsData] = useState<null | IFormElement[]>();

  useEffect(() => {
    fetch(
      "https://localhost:3000/form?formId=35d0cb33-5927-4f65-8b4c-f7b51607eb76&formVersionId=8777bb1c-3886-4069-b9f6-a2e3166352a2",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (apiResponse && apiResponse.steps) {
      console.log(apiResponse.steps);
      setStepsData(apiResponse.steps);
    }
  }, [apiResponse]);

  return (
    <div className="App">
      <header className="App-header">
        {stepsData &&
          stepsData.map((step) => (
            <FormElement
              id={step.id}
              titleHtml={step.titleHtml}
              subtitleHtml={step.subtitleHtml}
              input={step.input}
            />
          ))}
      </header>
    </div>
  );
}

export default App;
