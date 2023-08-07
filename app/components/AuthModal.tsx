'use client';

import { useEffect, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthModalInputs from './AuthModalInputs';
import useAuth from '../../hooks/useAuth';
import { AuthenticationContext } from '../context/AuthContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const { error, loading, data, setAuthState } = useContext(AuthenticationContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  });

  const { signin } = useAuth({ email: inputs.email, password: inputs.password });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignIn) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.phone &&
        inputs.city &&
        inputs.password
      ) {
        return setDisabled(false);
      }
    }

    setDisabled(true);
  }, [inputs, isSignIn]);

  const handleClick = () => {
    if (signin) {
      signin();
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${renderContent('bg-blue-400 text-white', '')}  border p-2 px-4 rounded mr-3`}
      >
        {renderContent('Sign In', 'Sign Up')}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">{renderContent('Sign In', 'Create Account')}</p>
            </div>
          </div>

          <div className="m-auto">
            <h2 className="text-2xl font-light text-center">
              <p className="text-lg">
                {renderContent('Log Into Your Account', 'Create Your Open Table Account')}
              </p>
            </h2>

            <AuthModalInputs
              inputs={inputs}
              handleChangeInputs={handleChangeInputs}
              isSignIn={isSignIn}
            />

            <button
              className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
              disabled={disabled}
              onClick={handleClick}
            >
              {renderContent('Sign In', 'Create Account')}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
