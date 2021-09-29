import './App.css';
import FormComment from './components/FormComment';
import ShowComments from './components/ShowComments';

function App() {
  return (
    <div className="chat">
      <ShowComments />
      <FormComment />
    </div>
  );
}

export default App;
