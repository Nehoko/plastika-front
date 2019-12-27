import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('one', 2, 'three')).toBeTruthy();
  });
});
