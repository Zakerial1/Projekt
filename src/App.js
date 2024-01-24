import axios from 'axios';

import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Plashka from './components/Plashka';

function App() {

  const [a, setA] = useState(0);
  const [nameImage, setNameImage] = useState('');
  const [orderImage, setOrderImage] = useState('');
  const [colorImage, setColorImage] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [res, setRes] = useState([]);
  // Написать форму для регистрации с мгновенной проверкой на валидность данных
  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=38374219-22257c664e975f5f41773f37d&q=${nameImage}&colors=${colorImage}&category=${categoryImage}&order=${orderImage}&image_type=photo`)
      .then((res) => {

        setRes(res.data.hits);
        console.log(res);

      })
  }, [nameImage, orderImage, colorImage, categoryImage])

  function testFunc() {
    console.log(1);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={()=>{parseInt(setA(a+1))}}> сюда</button>
        <h1>{a}</h1> */}
        <Plashka doSomething={testFunc} title="Поиск картинок " />
        <input type='search' onChange={(e) => (setNameImage(e.target.value))} placeholder='название' />
        {/* A URL encoded search term. If omitted, all images are returned. This value may not exceed 100 characters.
Example: "yellow+flower" */}
        <input type='search' onChange={(e) => (setOrderImage(e.target.value))} placeholder='популярность' />
        {/* How the results should be ordered.
Accepted values: "popular", "latest"
Default: "popular" */}
        <input type='search' onChange={(e) => (setColorImage(e.target.value))} placeholder='цвет' />
        {/* color  */}
        <input type='search' onChange={(e) => (setCategoryImage(e.target.value))} placeholder='категория' />
        {/* Filter results by category.
Accepted values: backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music */}
        {
          res.map((item, index) => {
            return <img src={item.largeImageURL
            } key={index} id={index} />

          }
          )

        }
      </header>
    </div>
  );
}

export default App;
