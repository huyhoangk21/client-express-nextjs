import styled from 'styled-components';

const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.main};
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  left: 50%;
  transform: translateX(-50%);
`;

export default SectionTitle;
