import {Fragment} from 'react'
import logo_shiperto from "./../images/logo_shiperto.svg"

const LeftSide = () => {
  return (
    <Fragment>
      <div className="pt__print-tag__left">
        <div className="pt__tag__left-first">
          <img className="pt__logo" src={logo_shiperto} alt="X" />
          <div className="pt__flex_column pt__info-shiperto">
            <span>www.omnixcorp.com</span>
            <span>NIT 78.984.XXX</span>
          </div>
        </div>
        <div className="pt__tag__left-last">
          <span className="pt__number-guide">Guia N° 303470</span>
          <br/>
          <div className="pt__flex_column">
            <span className="pt__title-text">REMITENTE</span>
            <span className="pt__normal-text">NOMBRE/RAZON SOCIAL</span>
            <span className="pt__normal-text">SYS TALENTOS COMPETITIVO</span>
          </div>
          <br/> 
          
          <div className="pt__flex_column">
            <span className="pt__normal-text">CIUDAD <span>Cartagena</span></span>
            <span className="pt__normal-text">DIRECCION</span>
            <span className="pt__normal-text">CRA 13 # 56-33 B2 2 Y 3</span>
          </div>
          <br/> 
          <div className="pt__flex_column">
            <span className="pt__normal-text">DEPARTAMENTO <span>Bolivar</span></span>
            <span className="pt__normal-text">TELEFONO <span>6767xxx</span></span>
            <span className="pt__normal-text">CODIGO POSTAL <span>15623</span></span>
          </div>
          <br/>
          <div className="pt__flex_column">
            <span className="pt__title-text">DESTINATARIO</span>
            <span className="pt__normal-text">DIRECCION</span>
            <span className="pt__normal-text">758</span>
          </div>
          <br/>
          <div className="pt__flex_column">
            <span className="pt__normal-text">NOMBRE RAZON SOCIAL</span>
            <span className="pt__normal-text">Pedro</span>
          </div>
          <br/>
          <div className="pt__flex_column">
            <span className="pt__normal-text">CODIGO POSTAL <span>001205</span></span>
            <span className="pt__normal-text">DEPARTAMENTO <span>Santander</span></span>
            <span className="pt__normal-text">CIUDAD <span>Bucaramanga</span></span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pt__flex_column {
          display: flex;
          flex-direction: column;
          gap: 10px 0;
        }
        .pt__print-tag__left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .pt__tag__left-first {
          margin-bottom: 16px;
        }
        .pt__tag__left-first .pt__logo {
          width: 140px;
        }
        .pt__tag__left-first .pt__info-shiperto {
          gap: 0;
        }
        .pt__tag__left-first span {
          font-size: 8px;
          font-weight: 500;
          padding-left: 10px;
        }
        .pt__tag__left-last {
          width: 170px;
          height: 320px;
          padding: 8px;
          border: 1px solid #000;
          border-radius: 5px;
        }
        .pt__number-guide {
          font-size: 14px;
          font-weight: 600;
        }
        .pt__title-text {
          font-size: 16px;
          font-weight: 500;
        }
        .pt__normal-text {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          line-height: 0px;
        }
      `}</style>
    </Fragment>
  )
}

export default LeftSide