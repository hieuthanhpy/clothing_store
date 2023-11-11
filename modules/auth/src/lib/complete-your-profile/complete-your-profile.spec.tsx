import { render } from '@testing-library/react';

import CompleteYourProfile from './complete-your-profile';

describe('CompleteYourProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompleteYourProfile />);
    expect(baseElement).toBeTruthy();
  });
});
