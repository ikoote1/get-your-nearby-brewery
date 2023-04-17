import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/category/categorySlice';
// BsArrowRightCircle,

const Categories = () => {
  const { dataStore, isLoading } = useSelector((store) => store.category);
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
    <div>ikoote</div>
  );
};

export default Categories;
