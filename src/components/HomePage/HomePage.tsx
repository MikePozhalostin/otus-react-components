import { useSelector } from "react-redux";
import withAuth from "../../HOC/withAuth";
import type { RootState } from "../../store";
import axios from "axios";
import { useState } from "react";

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const [data, setData] = useState<string | undefined>(undefined);

  const handleClick = () => {
    setData(undefined);
    axios
      .get("https://localhost:4040/weatherforecast")
      .then((response) => {
        setData(JSON.stringify(response.data));
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <h2>Добро пожаловать на главную страницу!</h2>
      {user && <h3>Вы зарегистрированы под пользователем: {user.username}</h3>}
      <div>
        <button onClick={handleClick}>GET WHEATHER</button>
      </div>
      {data && (
        <div>
          <h1>Погода:</h1>
          <h2>{data}</h2>
        </div>
      )}
    </>
  );
};

const ProtectedHomePage = withAuth(HomePage);
export default ProtectedHomePage;
