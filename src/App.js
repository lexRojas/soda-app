import CardsContent from './components/CardsContent';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Pie from './components/Pie';
import './css/styles.css'


function App() {
  return (
    <div className="App">
      <header className="encabezado">
        <div className="logo">
          <Logo/>
        </div>
        <div className="menu">
          <Menu/>
        </div>
      </header>
      <main className="contenedor-principal">
        <CardsContent/>

      </main>
      <footer className="pie">
        <Pie/>
        </footer> 
    </div>
  );
}

export default App;
