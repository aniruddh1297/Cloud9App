import './Loader.css';
 const Loader= ({component}) =>{

    return <div className={`loader ${component==="Products"?"loader_Prodects":"loader_login"}`}></div>
 }

 export default Loader;