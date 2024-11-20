import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { globalContext } from "../../context/GlobalContext";

export default function Login() {

    const navigate = useNavigate(); 

    const context = useContext(globalContext);
    const {emaillog,passwordlog,setEmaillog,setPasswordlog, setFlag, flag, setIsAuthenticated} = context

    useEffect(() => {
        const authStatus = localStorage.getItem('dataSubmissionEmail');
        if (authStatus !== '' && emaillog === authStatus) {
          setIsAuthenticated(true);
          navigate("/Register")
        }
      }, []);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('dataSubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('dataSubmissionEmail').replace(/"/g, "");

        if (!emaillog || !passwordlog) {
            setFlag(true);
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setIsAuthenticated(true);
            navigate("/");
        }
    }

    return (
        <div className = "form-container">
            <form onSubmit={handleLogin} className="form">
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        onChange={(event) => setEmaillog(event.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        onChange={(event) => setPasswordlog(event.target.value)} 
                    />
                </div>

                <button type="submit" className="button">Login</button>

                {flag && <p>Fill correct Info else keep trying.</p>}
            </form>
        </div>
    );
}