import { render } from '@testing-library/react';

import Wishlist from './wishlist';

describe('Wishlist', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Wishlist />);
    expect(baseElement).toBeTruthy();
  });
});
