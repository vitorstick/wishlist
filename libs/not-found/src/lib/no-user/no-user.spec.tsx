import { render } from '@testing-library/react';

import NoUser from './no-user';

describe('NoUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoUser />);
    expect(baseElement).toBeTruthy();
  });
});
