import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { getData, showData } from '../redux/category/categorySlice';
import a from '../images/f.png';
import b from '../images/d.jpg';
import './styling/categories.css';

const Categories = () => {
  const { dataStore, isLoading } = useSelector((store) => store.brewery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataStore.length) {
      dispatch(getData());
    }
  }, [dispatch, dataStore]);

  if (isLoading) {
    return (
      <div><h1>Loading</h1></div>
    );
  }
  // const handleClick = (id) => {
  //   dispatch(showData(id));
  // };

  return (
    <div>
      <div className="country">
        <img src={a} alt="map" />
        <h1>united states</h1>
      </div>
      <div className="breweries">
        {
          dataStore.map((data) => (
            <div className="brewery" key={data.phone}>
              <div>
                <img src={b} alt="beer" />
                <NavLink to={`/breweryAbout/${data.phone}`}>
                  <BsArrowRightCircle className="logo" onClick={() => dispatch(showData(data.phone))} />
                </NavLink>
              </div>
              <h1>
                City:
                {' '}
                {data.city}
              </h1>
              <h1>
                Name:
                {' '}
                {data.name}
              </h1>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Categories;
