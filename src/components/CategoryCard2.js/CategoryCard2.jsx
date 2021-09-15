import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardWrapper, CardImageWrapper, CardOverlay, CardTitle,
} from './CategoryCard2.style';
import { AidaImage } from '../Wrapper/AidaImage';

const CategoryCard2 = ({ category }) => {
  const { category: cat, image } = category;

  return (
    <Link to={`category/${cat}`}>
      <CardWrapper>
        <CardTitle>
          {cat}
        </CardTitle>
        <CardImageWrapper>
          <CardOverlay />
          <AidaImage>
            <img
              src={image}
              alt="Cool"
            />
          </AidaImage>
        </CardImageWrapper>
      </CardWrapper>
    </Link>
  );
};

export default CategoryCard2;
