import { getData, showData } from '../../redux/category/categorySlice';

describe('breweries data', () => {
  test('fetch correct data', async () => {
    const data = await getData();
    expect(data.length).not.toBeNull();
  });
  test('filtering correct data', async () => {
    const data = await showData();
    expect(data.length).not.toBeNull();
  });
});
