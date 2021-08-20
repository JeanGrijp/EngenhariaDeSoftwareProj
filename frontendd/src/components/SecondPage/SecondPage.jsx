import { Container, FormCadastro, ImgBack } from "./style"
import front from "../../imagens/Group12.svg"


export const SecondPage = () => {
  return (
    <>
      <Container>
        <FormCadastro>

          <div className="containerDados">

            <h3 className="dados">Dados Pessoais</h3>

            <div className="inputs">
              <label htmlFor="Nome">Nome da entidade</label>
              <input type="text" name="" id="" />
            </div>
            <div className="inputs">
              <label htmlFor="Email">Email</label>
              <input type="email" name="" id="" />
            </div>
            <div className="inputs">
              <label htmlFor="Whatsapp">Whatsapp</label>
              <input className="tel" type="tel" name="" id="" />
            </div>

          </div>

          <div className="containerAddress">

            <h3 className="address">Endereço</h3>

            <div className="inputs">
              <label htmlFor="rua">Rua</label>
              <input type="text" name="" id="" />
            </div>
            <div className="inputsNumber">
              <label htmlFor="numero">Número</label>
              <input type="number" name="" id="" />
            </div>
            <div className="inputsBairro">
              <label htmlFor="bairro">Bairro</label>
              <input type="text" name="" id="" />
            </div>
            <div className="inputs">
              <label htmlFor="cidade">Cidade</label>
              <input type="text" name="" id="" />
            </div>
          
          </div>

          <button type="submit">Cadastrar</button>

        </FormCadastro>
        <ImgBack>
          <img className="front" src={front} alt="" />
        </ImgBack>
      </Container>
    </>
  )
}