import { useSelector } from "react-redux";
import withAuth from "../../HOC/withAuth";
import type { RootState } from "../../store";

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
      <h2>Добро пожаловать на главную страницу!</h2>
      {user && <h3>Вы зарегистрированы под пользователем: {user.username}</h3>}
    </>
  );
};

const ProtectedHomePage = withAuth(HomePage);
export default ProtectedHomePage;
