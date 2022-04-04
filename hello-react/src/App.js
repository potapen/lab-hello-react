// src/App.js
import './App.css';
import Cadre from './components/Cadre';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';


function App() {
  const inputsArray = [
    {
      img: icon1, //ne pas mettre {icon1} car on est en dehors de JSX. Dans JSX on met des {} pour indiquer du JS
      title: 'declarative',
      article: 'react makes it painless to create interactive UIs'
    },
    {
      img: icon2,
      title: 'Components',
      article: 'Build encapsulated'
    },
    {
      img: icon3,
      title: 'Single-Way',
      article: 'a set of immutable'
    },
    {
      img: icon4,
      title: 'JSX',
      article: 'statically typed'
    }
  ];
  return (
    <div className="App">
      <section className="section1">
        <nav>
          <img src={logo} alt="logo"></img>
          <img src={menu} alt="menu"></img>
        </nav>
        <div className="mainMessage">
          <h1>Say Hello to ReactJS</h1>
          <article> You will learn how to use the most popular frontend library, and become a super Ninja developer</article>
          <button>Awsome!</button>
        </div>
      </section>
      <section className="section2">
        {inputsArray.map(input=>{
          return <Cadre
          title= {input.title}
          article={input.article}
          img={input.img}
          />
        })}
      </section>

    </div>
  );
}
export default App;