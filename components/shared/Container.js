import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 1rem;

  @media screen and (min-width: 768px) {
    padding: 4rem 4rem;
  }

  @media screen and (min-width: 992px) {
    padding: 4rem 8rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 4rem 10rem;
  }

  @media screen and (min-width: 1600px) {
    padding: 4rem 25rem;
  }
`;

export default Container;
