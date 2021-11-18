import { render } from '@testing-library/react';

import ItemDetail from './item-detail';

describe('ItemDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemDetail />);
    expect(baseElement).toBeTruthy();
  });
});
