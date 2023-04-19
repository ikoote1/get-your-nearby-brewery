import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import BreweryAbout from '../breweryAbout';
import store from '../../store';
import '@testing-library/jest-dom/extend-expect';

window.scrollTo = jest.fn();

describe('Details component', () => {
  it('should render the data correctly', async () => {
    window.scrollTo.mockClear();
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <BreweryAbout />
        </Provider>
        ,
      </BrowserRouter>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
