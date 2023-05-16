

const Article = ({ title, author, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-4">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700 text-base mb-4">{author}</p>
    <p className="text-gray-600 text-lg">{content}</p>
  </div>
);

const ArticleList = () => (
  <div className="max-w-4xl mx-auto py-8">
    <h1 className="text-4xl font-bold mb-8">Article List</h1>
    <Article
      title="The Benefits of Using Tailwind CSS"
      author="John Doe"
      content="Tailwind CSS is a modern CSS framework that can help you quickly build beautiful and responsive web pages. It provides a set of pre-defined CSS classes that you can use to style your elements, making it much easier and faster to create a consistent and professional-looking design for your website. In this article, we'll explore some of the benefits of using Tailwind CSS and show you how to get started with it."
    />
    <Article
      title="How to Use React with Tailwind CSS"
      author="Jane Smith"
      content="React is a popular JavaScript library that allows you to build dynamic user interfaces for your web applications. When used with Tailwind CSS, you can create even more powerful and flexible UI components that can be easily customized to suit your needs. In this article, we'll show you how to use React with Tailwind CSS and walk you through the process of building a sample application."
    />
  </div>
);

export default ArticleList;
