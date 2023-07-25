import './App.css';
import { useState } from "react"
import City from "./assets/city.jpeg";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import Title from './components/Title';
import React from 'react';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Red", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "White", newCar: false, km: 13000},
    {id: 3, brand: "Renault", color: "Black", newCar: false, km: 1200}
  ]

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='App'>
      <h1>Avancando em React</h1>
      {/* Imagem em public */}
      <div>
        <Title title="Aula 1 - Imagens"/>
        <img src="/img1.jpeg" alt="paisagem" />
      </div>
      <div>
        <img src={City} alt="cidade" />
      </div>
        <Title title='Aula 2 - UseState'/>
        <ManageData />
        <Title  title="Aula 3 - List Render"/>
        <ListRender />
        <Title title="Aula 4 - Conditionals in JSX"/>
        <ConditionalRender />
        <Title title="Aula 5 - Props"/>
        <ShowUserName name='Vitor' age={22} status='single'/>
        <CarDetails id={1} brand='VW' color='White' km={0} newCar={true}/>
        <CarDetails id={2} brand='Ford' color='Red' km={15000} newCar={false}/>
        <CarDetails id={3} brand='Chevrolet' color='Black' km={0} newCar={true}/>
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
        ))}
        <Fragment PropFragment="test"/>
        <Container>
          <p>Isso é uma children</p>
        </Container>
        <Title title="Aula 6 - Funcao como Prop"/>
        <ExecuteFunction myFunction={showMessage}/>
        <Title title ="Aula 7 - State Lift"/>
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
