import './MyForm.css'
import {useState} from 'react';

const MyForm = ({user}) => {

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email);

        setName("");
        setEmail("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            <label>
                <br />
                <span>E-mail:</span>
                <input type="email" name="email" iplaceholder="digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}

export default MyForm