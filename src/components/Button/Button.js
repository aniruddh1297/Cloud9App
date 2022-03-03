import Loader from '../Loader/Loader';
import './Button.css'

const Button =({value , displayTrue,displayFalse,handleChange,isLoadding}) =>{


    if (isLoadding){

            return(
                <div>
                    <button className='login' ><Loader/></button>
                </div>
            )
    }
    else
    {
        return (
            <div>
             <button className='login' onClick={handleChange}> {value?displayTrue:displayFalse}</button>
            </div>
        )
    }

} 

export default Button;