import { DivLeft, DivRight } from "./style"
import garbageCollector from '../../imagens/garbageSvg.svg'
import LoginIcon from '../../imagens/Login.svg'

export const FirstPage = () => {
  return (
    <>
    <div className="container">
      <DivLeft>
        <h1 className="logo">LOGO</h1>
        <h1>Seu lugar para descarte de resíduos</h1>
        <p>Ajudamos pessoas a encontrarem pontos de coletas de forma eficiente</p>
        <button>
          <div className="btnIcon">
            <img src={LoginIcon} alt="logo"/>
          </div>
          <div><h4>Cadastre-se</h4></div>
        </button>
      </DivLeft>
      <DivRight>
        <div>
          <img src={garbageCollector} alt="logo" />
        </div>
      </DivRight>
    </div>
    </>
  )
}