import { useContext, useEffect } from "react";
import "./App.css";
import { UserContext } from "./Components/context/Usecontext";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Login from "./Components/Pages/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Pages/Header/Header";
import Footer from "./Components/Pages/Footer/Footer";
import AskQuestion from "./Components/Pages/AskQ/Ask";
import SingleQuestion from "./Components/Pages/QuestionDetail/QuestionDetail";
// import Ask from "./Components/Pages/AskQ/Ask";

function App() {
  const [userData, setUserData] = useContext(UserContext);

  const checkLoggedIn = async () => {
    //check if token already exists in localStorage
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      //token not in localStorage then set auth token empty
      localStorage.setItem("auth-token", "");
      token = "";
    } else {
      //if token exists in localStorage then use auth to verify token and get user info
      const userRes = await axios.get("http://localhost:4000/api/users", {
        headers: { "x-auth-token": token },
      });

      //set the global state with user info
      setUserData({
        token,
        user: {
          id: userRes.data.data.user_id,
          display_name: userRes.data.data.user_name,
        },
      });
    }
  };

  const logout = () => {
    //set global state to undefined will logout the user
    setUserData({
      token: undefined,
      user: undefined,
    });

    //resetting localStorage
    localStorage.setItem("auth-token", "");
  };

  useEffect(() => {
    //check if the user is logged in
    checkLoggedIn();
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                <Header /> <SignUp /> <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header /> <Login /> <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header />
                <Home logout={logout} />
                <Footer />
              </>
            }
          />
          {/* <Route path="/askquestions" element={<Question />} /> */}
          {/* <AnsQ /> */}
          <Route path="/askquestion" element={<AskQuestion />} />
          <Route
            path="/questions/:id"
            element={
              <>
                <Header /> <SingleQuestion />
              </>
            }
          />

          {/* //UserProfile */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
