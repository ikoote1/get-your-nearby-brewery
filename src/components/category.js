import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/category/categorySlice';
import usa1 from '../images/usa1.png';
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
        <img src={usa1} alt="usa1" />
        <h1>united states</h1>
      </div>
    </div>
  );
};

export default Categories;
