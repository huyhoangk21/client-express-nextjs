import React from 'react';
import { ProductContent } from './ProductPage.styled';
import { ProductCard } from '../ProductCard';
import { SectionTitle } from '../shared';
const ProductPage = () => {
  return (
    <ProductContent>
      <SectionTitle>Sản phẩm</SectionTitle>
      <div className='products'>
        <ProductCard
          name='Sữa Ensure'
          description='Sữa bột dinh dưỡng Ensure vị Vanilla'
          image='https://static.abbottnutrition.com/cms-prod/abbottnutrition-2016.com/img/A210cENpwdVan1219.png'
        />
        <ProductCard
          name='Dầu gió xanh'
          description='Dầu gió xanh giảm đau nhức và ngăn ngừa cảm cúm'
          image='https://boisdejasmin.com/images/2020/08/green-oil.jpg'
        />
        <ProductCard
          name='Nước tăng lực M-150'
          description='Nước tăng lực không ga M-150 250ml'
          image='https://shreeramkenya.com/wp-content/uploads/2018/02/M-150-Energy-Drink-250ml.jpg'
        />
      </div>
    </ProductContent>
  );
};

export default ProductPage;
