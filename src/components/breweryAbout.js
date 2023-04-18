import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/category/categorySlice';
import Detail from './details';

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

  const data = dataStore.find((item) => item.id === id);

  return (
    <div>
      <div><h1>ikoote</h1></div>
      <div className="aboutData">
        {data && <Detail item={data} key={data.phone} />}
      </div>
    </div>
  );
};

export default BreweryAbout;
