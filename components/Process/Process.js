import ProcessContainer from './Process.styled';
import { SectionTitle, Info } from '../shared';

const process = [
  {
    title: 'Đăng kí',
    text:
      'Khách hàng chọn một trong các dịch vụ Pham Chu Express cung cấp. Khách hàng có thể đăng kí tại văn phòng, qua email, hoặc qua điện thoại.',
  },
  {
    title: 'Gửi hàng',
    text:
      'Hàng hoá sẽ được kiểm tra và cân để quy đổi thành tiền. Nhân viên sẽ in ra biên nhận cho dịch vụ và mặt hàng đã được đăng kí.',
  },
  {
    title: 'Kí tên biên nhận',
    text:
      'Sau khi hoàn tất các thủ tục cần thiết, khách hàng kí tên và nhận một bản sao biên nhận. Dịch vụ sẽ được đáp ứng nhanh chóng sau khi được đăng kí.',
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
