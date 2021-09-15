import React from 'react';
import { CardWrapper, CardTitle } from './CategoryCard2.style';
import { AidaImage } from '../Wrapper/AidaImage';

const CategoryCard2 = ({ category }) => {
  const { category: cat, image } = category;

  return (
    <CardWrapper>
      <CardTitle>
        <AidaImage>
          <img
            src={image}
            alt="Cool"
          />
          {cat}
        </AidaImage>
      </CardTitle>
    </CardWrapper>
  );
};

export default CategoryCard2;
