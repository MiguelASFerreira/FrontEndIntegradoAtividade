import './App.css';
import UserInfo from './components/UserInfo';

const userInfo = [
  {
      name: 'Teste nome',
      birthday: '10/10/10',
      email: "teste@teste.com"
  },
  {
      name: 'Teste nome 2',
      birthday: '10/10/10',
      email: "teste2@teste.com"
  },
  {
      name: 'Teste nome 3',
      birthday: '10/10/10',
      email: "teste3@teste.com"
  },
]

function App() {
  return (
    <div className="App">
      {userInfo.map(item => {
        return <UserInfo 
          nome={item.name}
          birthday={item.birthday}
          email={item.email}
        />
      })}
    </div>
  );
}

export default App;
