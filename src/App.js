import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUserPage from "./CreateUserPage";
import SignInPage from "./SignInPage";
import AuthPage from "./AuthPage";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<CreateUserPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
