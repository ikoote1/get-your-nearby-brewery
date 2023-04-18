import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { getData } from '../redux/category/categorySlice';
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

  return (
    <div>
      <div className="country">
        <img src={a} alt="map" />
        <h1>united states</h1>
      </div>
      <div>
        {
          dataStore.map((data) => (
            <div className="breweries" key={data.id}>
              <div>
                <img src={b} alt="beer" />
                <NavLink to="/breweryAbout"><BsArrowRightCircle /></NavLink>
              </div>
              <h1>{data.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Categories;
