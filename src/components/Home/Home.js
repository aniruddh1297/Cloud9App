import './Home.css';

const Home = () => {
  return (
    <div className="content">
      <h1>Welcome....</h1>
      <p>We help you to take informed decisions!! </p>
      <div className='hero'>   <img 
        src="https://images.unsplash.com/photo-1591288685011-819c8f071c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="site banner"
      /></div>
   
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
};

export default Home;
