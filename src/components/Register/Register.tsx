import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { login } from "../../store/userSlice";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const submitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & {
      usernameInput: HTMLInputElement
    }

    const inputValue = formElements.usernameInput.value;

    if (inputValue == '') { return; }
    dispatch(login({ username: inputValue }));
    navigate("/");
  };

  return (
    <>
      <h1>Регистрация нового пользователя</h1>
      <form onSubmit={submitHandle}>
        <div>
          <label>login:</label>
          <input id="usernameInput" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;
