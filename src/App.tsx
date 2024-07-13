import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProductData } from './store/productSlice';
import productData from './stackline_frontend_assessment_data_2021.json';
import Dashboard from './components/Dashboard';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductData(productData[0]));
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;
