//Import NPM packages
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Import components
import Header from '../../components/Header/Header';

//Import constants
import { LABEL, PLACEHOLDER } from './constants';

//Import images
import IMAGES from '../../assets/images';

//Import hooks
import { useAuthState } from '../../hooks/useAuthState';

interface FormData {
  emailOrUsername: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    emailOrUsername: '',
    password: ''
  });
  
  const { login, isLoading } = useAuthState();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await login(formData.emailOrUsername, formData.password);
      navigate('/');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.';
      alert(errorMessage);
    }
  };

  return (
    <div>
      <Header />
      {/* SignIn Component - Central Card */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="w-[498px] h-[572px] pt-[11px] pb-[55px] pl-[11px] pr-[11px] bg-[#EBEBEB] rounded-[30px]">
          <div className=" w-full h-full bg-[#FFFFFF] rounded-[21px] shadow-[0px_4px_15px_0px_#00000008] pt-[30px] pb-[57px] pl-[50px] pr-[50px] ">

          <div className='flex flex-col items-center justify-center mb-[65px]'> 
              {/* Main Heading */}
              <img src={IMAGES.LOGIN_ICON.src} alt={IMAGES.LOGIN_ICON.alt} />
            <h1 className="text-[20px] font-bold text-[#000000] font-inter text-center mb-[5px]">
              {LABEL.SIGN_IN_TO_CONTINUE}
            </h1>
            
            {/* Subtitle */}
            <p className="text-[14px] font-normal text-[#0000007A] text-center">
              {LABEL.SIGN_IN_TO_ACCESS_FEATURES}
            </p>
          </div>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Email/Username Field */}
              <div className='mb-[15px]'>
                <label htmlFor="emailOrUsername" className="block text-[14px] font-semibold text-[#000000] mb-[6px]">
                  {LABEL.EMAIL_OR_USERNAME}
                </label>
                <input
                  type="text"
                  id="emailOrUsername"
                  name="emailOrUsername"
                  value={formData.emailOrUsername}
                  onChange={handleInputChange}
                  className="w-full h-[46px] px-[12px] py-[13px]  rounded-[11px] placeholder-[#0000007A] focus:outline-none bg-[#F4F4F4]"
                  placeholder={PLACEHOLDER.EMAIL_OR_USERNAME}
                  required
                />
              </div>

              {/* Password Field */}
              <div className='mb-[22px]'>
                <label htmlFor="password" className="block text-[14px] font-semibold text-[#000000] mb-[10px]">
                  {LABEL.PASSWORD}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full h-[46px] px-[12px] py-[13px]  rounded-[11px] placeholder-[#0000007A] focus:outline-none bg-[#F4F4F4]"
                  placeholder={PLACEHOLDER.PASSWORD}
                  minLength={6}
                  required
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[50px] rounded-[11px] bg-[#5057EA] text-[#FFFFFF] text-[14px] font-semibold font-inter focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {LABEL.SIGN_IN}
              </button>
            </form>

        
          </div>
            {/* Sign Up Link */}
            <div className="mt-[15px] mb-[19px] text-center">
              <span className="text-[#00000099] text-[14px] font-medium font-inter">{LABEL.DONT_HAVE_AN_ACCOUNT} </span>
              <Link to="/signup" className="text-[#00000099] text-[#5057EA] text-[14px] font-semibold font-inter">
                {LABEL.SIGN_UP}
              </Link>
            </div>
        </div>
          
      </div>
    </div>
  );
};

export default SignIn;
