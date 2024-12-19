import Container from './Container.jsx'
import ColorPicker from './ColorPicker.jsx'
import Counter from './Counter.jsx'
import ToDoList from './ToDoList.jsx'

function App() {
  
  return (
    <>
    <Container title="Counter">
      <Counter />
    </Container>
    <Container title="Color Picker">
      <ColorPicker />
    </Container>
    <Container title="To Do List">
      <ToDoList />
    </Container>
    </>
  )
}

export default App
