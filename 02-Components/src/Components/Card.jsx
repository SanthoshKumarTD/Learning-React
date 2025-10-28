
const Card = () => {
    const age=30
    const Name='Jaanvi'
    let lastName = 'Patil'
    let phoneNumber = 9591146342
    
  return (    
    <div>
        <div className="card">
            <h1>My Name is {Name} {lastName}</h1>
            <h2>I am {age} years old</h2>
            <h2>And my phone number is {phoneNumber}</h2>
        </div>      
    </div>
  )
}

export default Card
