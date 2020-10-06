import styled from 'styled-components';
import { Button } from '../shared';
export const CardContainer = styled.div`
  width: 300px;
  box-shadow: 0 0 0.5rem #444444;
  margin: 2rem 0;
  .card-content {
    padding: 2rem 1.5rem;

    ${Button} {
      margin-top: 1rem;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Name = styled.div`
  font-size: 1.5rem;
`;

const Description = styled.div`
  margin-top: 1rem;
  line-height: 2rem;
`;

CardContainer.Image = Image;
CardContainer.Name = Name;
CardContainer.Description = Description;
