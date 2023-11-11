import { render } from '@testing-library/react';

import NewPassword from './new-password';

describe('NewPassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewPassword />);
    expect(baseElement).toBeTruthy();
  });
});
