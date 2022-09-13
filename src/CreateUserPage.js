import { useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const CreateUserPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, signup, upload, photo, setPhoto } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      alert("Account created successfully, please upload your picture!");
    } catch (err) {
      alert(err);
    }
    setLoading(false);
  };

  function selectPhoto(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  const uploadPhoto = async () => {
    try {
      await upload(photo, currentUser, setLoading);
      navigate("/auth");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h3> Register User </h3>
      <input type="email" placeholder="Input your email here" ref={emailRef} />
      <input
        type="password"
        placeholder="Input your password here"
        ref={passwordRef}
      />
      <button disabled={loading} onClick={createUser}>
        Check Account Availability
      </button>
      <br />
      <input type="file" accept="image/*" onChange={selectPhoto} />
      <button disabled={loading} onClick={uploadPhoto}>
        Upload picture and Go to your profile
      </button>
      <Link to="/signin">
        <p>Already registered? Sign in here</p>
      </Link>
    </div>
  );
};

export default CreateUserPage;
