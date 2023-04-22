import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/category/categorySlice';
import Detail from './details';

const BreweryAbout = () => {
  const params = useParams();
  const { dataStore, isLoading } = useSelector((store) => store.brewery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataStore.length) {
      dispatch(getData());
    }
  }, [dispatch, dataStore]);

  const data = dataStore.find((item) => item.phone === params.breweryName);

  if (isLoading) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div>
      <div className="aboutData">
        {data && <Detail item={data} key={data.id} />}
      </div>
    </div>
  );
};

export default BreweryAbout;
