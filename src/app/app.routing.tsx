// 'splash' --> route to Splash Screen
// 'welcome' --> route to Welcome Screen
// 'sign-in' --> route to Sign In Screen
// 'onboarding' --> Onboarding Screen

import { Route, Routes } from 'react-router-dom';
import { App } from './app';
import { Welcome } from 'welcome';
import { Screen } from 'screen';
import { SignIn } from 'modules/auth/src/lib/sign-in/sign-in.tsx';
import { CreateAccount } from 'modules/auth/src/lib/create-account/create-account.tsx';
import { VerifyCode } from 'modules/auth/src/lib/verify-code/verify-code.tsx';
import { NewPassword } from 'modules/auth/src/lib/new-password/new-password.tsx';
import { CompleteYourProfile } from 'modules/auth/src/lib/complete-your-profile/complete-your-profile.tsx';
import { Location } from 'location';

export const AppRouting: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/screen" element={<Screen />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<CreateAccount />} />
      <Route path="/verify_code" element={<VerifyCode />} />
      <Route path="/new_password" element={<NewPassword />} />
      <Route path="/complete_your_profile" element={<CompleteYourProfile />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
};