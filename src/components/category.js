import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/category/categorySlice';
import a from '../images/f.png';
import './styling/categories.css';
// BsArrowRightCircle,

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
              <h1>{data.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Categories;
