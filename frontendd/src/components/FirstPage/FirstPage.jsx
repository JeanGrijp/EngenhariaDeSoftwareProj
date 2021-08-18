import { DivContainer, DivLeft, DivRight } from "./style"
import garbageCollector from '../../imagens/garbageSvg.svg'
import LoginIcon from '../../imagens/Login.svg'

export const FirstPage = () => {
  


  return (
    <>
    <DivContainer>

      <DivLeft>
        {/* <h1 className="logo">Recoleta</h1> */}
        <h1 className="text">Seu lugar para descarte de resíduos</h1>
        <p>Ajudamos pessoas a encontrarem pontos de coletas de forma eficiente</p>
        <button className="btn">
          <div className="btnIcon">
            <img src={LoginIcon} alt="logo"/>
          </div>
          <div id="#1"><h4>Cadastre-se</h4></div>
        </button>

      </DivLeft>
      <DivRight>
      <div className="garbage">
        <img src={garbageCollector} alt="" />
      </div>
      </DivRight>

    </DivContainer>
    </>
  )
}