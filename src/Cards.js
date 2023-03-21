import './Cards.css'
import {IoDesktop} from 'react-icons/io5'
import {RiComputerFill} from 'react-icons/ri'
import {HiCommandLine} from 'react-icons/hi2'
import {SiNintendogamecube} from 'react-icons/si'

function Card(desc){
    if(desc.icon === 1){
        return(
            <div className='card'>
                <IoDesktop size={70} color='#00bd95' fill='#00bd95'/>
                <h2>{desc.title}</h2>
                <p>{desc.intro}</p>
            </div>
        );
    }else if(desc.icon === 2){
        return(
            <div className='card'>
                <SiNintendogamecube size={70} color='#00bd95' fill='#00bd95'/>
                <h2>{desc.title}</h2>
                <p>{desc.intro}</p>
            </div>
        );
    }else{
        return(
            <div className='card'>
                <HiCommandLine size={70} color='#00bd95' fill='#00bd95'/>
                <h2>{desc.title}</h2>
                <p>{desc.intro}</p>
            </div>
        );
    }

    
    
}

export default Card;