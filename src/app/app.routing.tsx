// 'splash' --> route to Splash Screen
// 'welcome' --> route to Welcome Screen
// 'sign-in' --> route to Sign In Screen
// 'onboarding' --> Onboarding Screen

import { Route, Routes } from 'react-router-dom';
import { App } from './app';
import { Welcome } from 'welcome';
import { Screen } from 'screen';
import { Location } from 'location';
import { SignIn } from 'modules/auth/src/lib/sign-in/sign-in.tsx';
import { CreateAccount } from 'modules/auth/src/lib/create-account/create-account.tsx';
import { VerifyCode } from 'modules/auth/src/lib/verify-code/verify-code.tsx';


export const AppRouting: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/screen" element={<Screen />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<CreateAccount />} />
      <Route path="/verifycode" element={<VerifyCode />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
};