import React from 'react';
import Checkbox from '../checkbox/Checkbox';
import FilterList from '../filterlist/FilterList';
import PriceRange from '../pricerange/PriceRange';
import './style.css';
import { FilterListTwoTone } from '@material-ui/icons';

const FilterPanel = () => (
  <div>
    <div className='input-group'>
      <p className='label'>Danh mục liên quan</p>
      <FilterList
      />
    </div>
    <div className='input-group'>
      <p className='label'>Bán ở</p>
      
        

    </div>
    <div className='input-group'>
      <p className='label-range'>Khoảng giá</p>
      <PriceRange />
    </div>
    <div className='input-group'>
      <p className='label'>Star Rating</p>
      <FilterList

      />
    </div>
  </div>
);

export default FilterPanel;