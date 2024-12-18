import Container from './Container.jsx'
import ColorPicker from './ColorPicker.jsx'
import Counter from './Counter.jsx'

function App() {
  
  return (
    <>
    <Container title="Counter">
      <Counter />
    </Container>
    <Container title="Color Picker">
      <ColorPicker />
    </Container>
     
    </>
  )
}

export default App
