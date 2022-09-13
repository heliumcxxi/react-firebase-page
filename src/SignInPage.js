import { useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/auth");
    } catch (err) {
      alert(err);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h3> Login </h3>
      <input type="email" placeholder="Input your email here" ref={emailRef} />
      <input
        type="password"
        placeholder="Input your password here"
        ref={passwordRef}
      />
      <button disabled={loading} onClick={handleClick}>
        Login
      </button>
      <Link to="/">
        <p>Register here</p>
      </Link>
    </div>
  );
};

export default SignInPage;
