import React from 'react';
import { CardContainer } from './ProductCard.styled';
import { Button } from '../shared';

const ProductCard = ({ name, description, image }) => {
  return (
    <CardContainer>
      <CardContainer.Image src={image} />
      <div className='card-content'>
        <CardContainer.Name>{name}</CardContainer.Name>
        <CardContainer.Description>{description}</CardContainer.Description>
        <Button>Mua hàng</Button>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
