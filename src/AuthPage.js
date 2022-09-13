import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const user = currentUser;

  const handleClick = async () => {
    try {
      await logout();
      navigate("/signin");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="container">
      <h4> User Logged In: </h4>
      {user !== null && <p>user email: {user.email}</p>}
      {user !== null && <img src={user.photoURL} />}

      <button onClick={handleClick}> Sign Out </button>
    </div>
  );
};

export default AuthPage;
