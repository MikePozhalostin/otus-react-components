import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/register");
  };

  return (
    <div>
      <h2>Вход</h2>
      <button className="btn btn-primary" onClick={handleLogin}>
        Войти
      </button>
    </div>
  );
};

export default Login;
