import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import './style.css';

const App = () => {
  return (
    <>
      <div className='container'>
        <Header></Header>
        <TodoItem completed={true} text="Breakfast"></TodoItem>
        <TodoItem text="Ready"></TodoItem>
        <TodoItem text="Lunch"></TodoItem>
        <Button></Button>
      </div>
    </>
  );
}

export default App;
