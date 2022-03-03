import './Home.css';

const Home = () => {
  return (
    <div className="content">
      <h1>Welcome....</h1>
      <p>We help you to take informed decisions!! </p>
      <div className='container'>
        <h1 className='heading'></h1>
        <p className='text'>We are all in one free vidoegraphy/photgraphy consultancy services.
Providing specification about cameras and its other equipments.</p>
      </div>
      <div className='hero'>   <img 
        src="https://images.unsplash.com/photo-1591288685011-819c8f071c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="site banner"
      /></div>
    </div>
  );
};

export default Home;
