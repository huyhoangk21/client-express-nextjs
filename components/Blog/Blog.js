import BlogContainer from './Blog.styled';
import { SectionTitle, Button, Info } from '../shared';

// to be replaced with fetch api
const blogs = [
  {
    src: '/images/blog_1.jpg',
    title: 'How Logistics Company Improve Spendings',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
  },
  {
    src: '/images/blog_2.jpg',
    title: 'How Logistics Company Improve Spendings',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
  },
  {
    src: '/images/blog_3.jpg',
    title: 'How Logistics Company Improve Spendings',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
  },
];

export const renderedBlogs = blogs.map((blog, index) => {
  return (
    <Info key={index}>
      <Info.Content>
        <img src={blog.src} alt={blog.title} />
        <h3>{blog.title}</h3>
        <p>{blog.text}</p>
      </Info.Content>
    </Info>
  );
});

const Blog = () => {
  return (
    <BlogContainer as='section'>
      <SectionTitle>Thông tin</SectionTitle>
      <BlogContainer.Content>{renderedBlogs}</BlogContainer.Content>
      <Button>Đọc các bài viết khác</Button>
    </BlogContainer>
  );
};

export default Blog;
