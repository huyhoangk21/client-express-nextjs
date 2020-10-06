import React from 'react';
import { SectionTitle } from '../shared';
import { MockedNewsContainer } from './MockedNew.styled';

const MockedNews = () => {
  return (
    <MockedNewsContainer>
      <SectionTitle>Chuyển hàng tháng 9 - 2020</SectionTitle>
      <div className='news-description'>
        Một số hình ảnh hàng hoá được chuyển trong tháng 9 2020
      </div>
      <div className='news-image'>
        <img src='images/mockedNews/1.jpg' />
        <img src='images/mockedNews/2.jpg' />
        <img src='images/mockedNews/3.jpg' />
        <img src='images/mockedNews/4.jpg' />
        <img src='images/mockedNews/5.jpg' />
        <img src='images/mockedNews/6.jpg' />
        <img src='images/mockedNews/7.jpg' />
        <img src='images/mockedNews/8.jpg' />
      </div>
    </MockedNewsContainer>
  );
};

export default MockedNews;
