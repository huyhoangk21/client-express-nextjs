import ProcessContainer from './Process.styled';
import { SectionTitle, Info } from '../shared';

const process = [
  {
    title: 'Đăng kí vận chuyển',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.',
  },
  {
    title: 'Gửi hàng',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.',
  },
  {
    title: 'Kí tên biên nhận',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.',
  },
];

export const renderedProcess = process.map((info, index) => {
  return (
    <Info key={info.title}>
      <Info.Content>
        <div className='rounded-number'>{index + 1}</div>
        <h4>{info.title}</h4>
        <p>{info.text}</p>
      </Info.Content>
    </Info>
  );
});

const Process = ({ img }) => {
  return (
    <ProcessContainer img={img} as='section'>
      <SectionTitle>Quy trình dịch vụ</SectionTitle>
      <ProcessContainer.Content>{renderedProcess}</ProcessContainer.Content>
    </ProcessContainer>
  );
};

export default Process;
