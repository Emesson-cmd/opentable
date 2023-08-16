import axios from 'axios';
import { useContext } from 'react';
import { AuthenticationContext } from '../app/context/AuthContext';
import { deleteCookie, getCookie, removeCookies } from 'cookies-next';

type SigninProps = {
  email: string;
  password: string;
  handleClose?: () => void;
};

type SignupProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  phone: string;
};

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);

  const signin = async ({ email, password }: SigninProps, handleClose?: () => void) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post('http://localhost:3000/api/auth/signin', {
        email,
        password,
      });
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      handleClose && handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const signup = async (
    { email, password, firstName, lastName, city, phone }: SignupProps,
    handleClose?: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        email,
        password,
        firstName,
        lastName,
        city,
        phone,
      });
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      handleClose && handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const signout = () => {
    deleteCookie('jwt');

    setAuthState({
      data: null,
      error: null,
      loading: false,
    });
  };

  return {
    signin,
    signup,
    signout
  };
};

export default useAuth;
