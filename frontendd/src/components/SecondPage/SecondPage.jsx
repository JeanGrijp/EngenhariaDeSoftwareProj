import { Button, Container, FormCadastro, ImgBack } from "./style"
import front from "../../imagens/Group12.svg"
import LoginIcon from '../../imagens/Login.svg'
import { Link } from "react-router-dom"
import { useState } from "react"



export const SecondPage = () => {

  const [nome, setnome] = useState('');
  const [email, setemail] = useState('');
  const [whatsapp, setwhatsapp] = useState('');
  const [rua, setrua] = useState('');
  const [numero, setnumero] = useState('');
  const [bairro, setbairro] = useState('');
  const [cidade, setcidade] = useState('');


  function handleCadastroDados () {
    console.log({
      nome,
      email,
      whatsapp,
      rua,
      numero,
      bairro,
      cidade
    })
  }


  return (
    <>
      <Container>
        <FormCadastro>

          <div className="containerDados">

            <h3 className="dados">Dados Pessoais</h3>

            <div className="inputs">
              <label htmlFor="Nome">Nome da entidade</label>
              <input 
                value={nome}
                onChange={(e) => setnome(e.target.value)} 
                type="text"
              />
            </div>
            <div className="inputs">
              <label htmlFor="Email">Email</label>
              <input                 
                value={email}
                onChange={(e) => setemail(e.target.value)} 
                type="email"
              />
            </div>
            <div className="inputs">
              <label htmlFor="Whatsapp">Whatsapp</label>
              <input
                onChange={(e) => setwhatsapp(e.target.value)} 
                value={whatsapp} 
                className="tel" 
                type="tel"/>
                
            </div>

          </div>

          <div className="containerAddress">

            <h3 className="address">Endereço</h3>

            <div className="inputs">
              <label htmlFor="rua">Rua</label>
              <input 
                onChange={(e) => setrua(e.target.value)} 
                value={rua}
                type="text"/>
            </div>

            <div className="containerNB">

              <div className="inputsNumber">
                <label htmlFor="numero">Número</label>
                <input
                  onChange={(e) => setnumero(e.target.value)} 
                  value={numero}
                  type="number"/>
              </div>
              <div className="inputsBairro">
                <label htmlFor="bairro">Bairro</label>
                <input
                  onChange={(e) => setbairro(e.target.value)} 
                  value={bairro}
                  type="text"/>
              </div>

            </div>


            <div className="inputs">
              <label htmlFor="cidade">Cidade</label>
              <input
                value={cidade}
                onChange={(e) => setcidade(e.target.value)} 
                type="text"/>
            </div>
          
          </div>

          <Button onClick={handleCadastroDados} type='submit'>
            <div className="btnIcon">
              <img src={LoginIcon} alt="logo"/>
            </div>
            <div id="#1"><Link className="link"> <h4> Cadastre-se</h4></Link></div>
          </Button>

        </FormCadastro>
        <ImgBack>
          <img className="front" src={front} alt="" />
        </ImgBack>
      </Container>
    </>
  )
}