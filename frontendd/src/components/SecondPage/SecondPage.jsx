import { Button, Container, FormCadastro, ImgBack } from "./style"
import front from "../../imagens/Group12.svg"
import LoginIcon from '../../imagens/Login.svg'
import { Link, useHistory } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import api from "../../services/api"
import { HandleLoginLogoutContext } from "../../context/HandleLoginLogoutContext"
import { db } from "../../firebase"




// const createTask = (task) => {
// db
//   .collection("users")
//   .doc(uuid) //user logado
//   .collection("tasks")
//   .doc() //doc() cria um novo doc com um id aleatorio
//   .set({ title: task, done: false, date: Date.now() });

// function InputTask({ createTask }) {
//   const [input, setInput] = useState("");
//   const handleChange = (e) => setInput(e.target.value);
//   const handleCreateTask = (e) => {
//     e.preventDefault()
//     setInput('')
//     createTask(input)}
//   return (
//     <Form>
//       <InputWraper>
//         <Input
//           type="text"
//           placeholder="Crie uma nova tarefa..."
//           value={input}
//           onChange={handleChange}
//         />
//         <SendTaskButton onClick={handleCreateTask}>OK</SendTaskButton>
//       </InputWraper>
//     </Form>
//   );
// }

// export default InputTask;




export const SecondPage = () => {

  const {uuid, handleLogOut} = useContext(HandleLoginLogoutContext)

  const [nome, setnome] = useState('');
  const [email, setemail] = useState('');
  const [whatsapp, setwhatsapp] = useState('');
  const [rua, setrua] = useState('');
  const [numero, setnumero] = useState('');
  const [bairro, setbairro] = useState('');
  const [cidade, setcidade] = useState('');
  const [user, setUser] = useState({});
  const history = useHistory()
  

  const logout = () => {
    handleLogOut();
    history.push('/')

  }
  const createDados = () => {
    db.collection("dadosUsers").doc(uuid).set({
      nome,
      email,
      whatsapp,
      rua,
      numero,
      bairro,
      cidade,
    });

    console.log("Foi");
  };

  const updateTask = async (task, status) => {
    db.collection("dadosUsers")
      .doc(uuid) //user logado
      .update({ nome, email, whatsapp, rua, numero, bairro, cidade }); // dados que quer atualizar
  };

  const getData = async () => {
    if (uuid){
    const caminhoDosDados = db.collection("dadosUsers").doc(uuid); //user logado
    // .collection("dados");
    // .orderBy("date");

    caminhoDosDados
      .get()
      .then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          console.log("Document data:", userData);
          setUser(userData);
          setnome(userData.nome)
          setemail(userData.email)
          setwhatsapp(userData.whatsapp)
          setnumero(userData.numero)
          setbairro(userData.bairro)
          setcidade(userData.cidade)
          setrua(userData.rua)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    }
  };


  

  useEffect(() => {
    getData();
  }, [])


  

  api.get("users/Jean")
  .then((response) => console.log(response.data))
  .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
     });
     

  

  const [usuario, setusuario] = useState(uuid);
     
  async function handleCadastroDados() {
    createDados()
  }




  return (
    <>
      <Container>
        <FormCadastro>
          <div className="containerDados">

            <h3 onClick={logout} className="dados">Dados Pessoais</h3>

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
          {/* <Button onClick={updateTask} type='submit'> */}
          
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