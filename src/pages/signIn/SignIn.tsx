//Import NPM packages
import React from "react";

//Import components
import Header from "../../components/Header/Header";
import SignIn from "../../components/SignIn/SignIn";

const SignInPage: React.FC = () => {
  return (
    <div>
      <Header />
      <SignIn />
    </div>
  );
};

export default SignInPage;
