import { useState } from "react";
import "./App.css";
import RequestDataComponent from "./components/RequestDataComponent/RequestDataComponent";
import axios from "axios";

function App() {
  const [data, setData] = useState<string | undefined>(undefined);
  const [isError, setIsError] = useState<boolean>(false);

  const handleClick = () => {
    setData(undefined);
    setIsError(false);

    axios.get('https://catfact.ninja/facts')
      .then(response => {
        setData(JSON.stringify(response.data));
      })
      .catch(error => {
        setIsError(true);
        setData(JSON.stringify(error.message));
      });
  }

  return (
    <>
      <button onClick={handleClick}>Get data</button>
      { data && <RequestDataComponent text={data} isError={isError} />}
    </>
  );
}

export default App;
