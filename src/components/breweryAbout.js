import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, showData } from '../redux/category/categorySlice';

const BreweryAbout = () => {
  const { dataStore, isLoading } = useSelector((store) => store.brewery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataStore.length) {
      dispatch(getData());
    }
  }, [dispatch, dataStore]);

  if (isLoading) {
    return (
      <div>Loading</div>
    );
  }
  return (
    <div>
      <div><h1>ikoote</h1></div>
      <div className="aboutData" key={showData.phone}>
        <h1>{showData.name}</h1>
      </div>
    </div>
  );
};

export default BreweryAbout;
