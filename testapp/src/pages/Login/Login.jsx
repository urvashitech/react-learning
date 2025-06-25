import { useAuth } from '../../context/authContext';

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const onLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Welcome to Login Page</h1>
      <button onClick={onLoginClick}>
        {!isLoggedIn ? 'Login' : 'LogOut'}
      </button>
    </div>
  );
}

export default Login;