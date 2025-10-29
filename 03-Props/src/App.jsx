import Card from './Components/Card'

const App = () => {
  return (
    <div className='Parent'>      
      <Card UserName='Santhosh' Age={36} Image='https://images.unsplash.com/photo-1761582286153-03b935a8a41e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500'/>    
      <Card UserName='Jaanvi' Age={6} Image='https://images.unsplash.com/photo-1760341682431-e00a8f9a9b56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500'/>   
      <Card UserName='Saanvi' Age={6} Image='https://images.unsplash.com/photo-1761429944585-6b0e475499cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500'/> 
      <Card UserName='Kruthika' Age={32} Image='https://images.unsplash.com/photo-1761580525127-392880387ca4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500'/> 
    </div>
  )
}

export default App
