import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
        <div className='Card'>
           <div>
             <div className='Header'>
                <img src={props.brandLogo} alt="nachioooooo" />
                <button>Save <Bookmark size={12}/> </button>
            </div>
            <div className='Center'>
                <h3>{props.companyName}<span>{props.datePosted}</span></h3>
                <h2>{props.post}</h2>
                <div className='tag'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag1}</h4>
                </div>
            </div>
           </div>
            <div className='Footer'>
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card
