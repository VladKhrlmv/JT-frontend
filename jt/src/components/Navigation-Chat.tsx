import g from '../icons/globe_white.svg'
import PoMocno from '../icons/PoMOCNO.svg'
import globe from '../icons/globe_white.svg'
import info from '../icons/info_white.svg'

const NavigationChat = () =>  {
  return (
        <div className='Interface'>
        <img src={PoMocno} className='title' alt='Pomocno'/>
        <img src={globe} alt='globe' className='globe' />
        <img src={info} alt='info' className='info' />
    <div className='buttonPosition'>
      
          <a className='new'>
            <img src={g} alt="new" className='new' />
            <span>new</span>
          </a>
          
          <a className='active'>
            <img src="../icons/globe_white.svg" alt ='active' className='active'/>
            <span>active</span>
          </a>

            <a className='archive'>
            <img src="../icons/globe_white.svg" alt ='archive' className='archive'/>
            <span >archives</span>
            </a>   
      </div>
      </div>

  );
}

export default NavigationChat;