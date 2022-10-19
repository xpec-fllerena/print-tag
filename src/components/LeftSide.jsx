import {Fragment} from 'react'
import logo_shiperto from "./../images/logo_shiperto.svg"

const LeftSide = () => {
  return (
    <Fragment>
      <div className="print-tag__left">
        <div className="tag__left-first">
          <img className="logo" src={logo_shiperto} alt="X" />
          <div className="flex_column info-shiperto">
            <span>www.omnixcorp.com</span>
            <span>NIT 78.984.XXX</span>
          </div>
        </div>
        <div className="tag__left-last">
          <span className="number-guide">Guia N° 303470</span>
          <br/>
          <div className="flex_column">
            <span className="title-text">REMITENTE</span>
            <span className="normal-text">NOMBRE/RAZON SOCIAL</span>
            <span className="normal-text">SYS TALENTOS COMPETITIVO</span>
          </div>
          <br/> 
          
          <div className="flex_column">
            <span className="normal-text">CIUDAD <span>Cartagena</span></span>
            <span className="normal-text">DIRECCION</span>
            <span className="normal-text">CRA 13 # 56-33 B2 2 Y 3</span>
          </div>
          <br/> 
          <div className="flex_column">
            <span className="normal-text">DEPARTAMENTO <span>Bolivar</span></span>
            <span className="normal-text">TELEFONO <span>6767xxx</span></span>
            <span className="normal-text">CODIGO POSTAL <span>15623</span></span>
          </div>
          <br/>
          <div className="flex_column">
            <span className="title-text">DESTINATARIO</span>
            <span className="normal-text">DIRECCION</span>
            <span className="normal-text">758</span>
          </div>
          <br/>
          <div className="flex_column">
            <span className="normal-text">NOMBRE RAZON SOCIAL</span>
            <span className="normal-text">Pedro</span>
          </div>
          <br/>
          <div className="flex_column">
            <span className="normal-text">CODIGO POSTAL <span>001205</span></span>
            <span className="normal-text">DEPARTAMENTO <span>Santander</span></span>
            <span className="normal-text">CIUDAD <span>Bucaramanga</span></span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flex_column {
          display: flex;
          flex-direction: column;
          gap: 10px 0;
        }
        .print-tag__left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .tag__left-first {
          margin-bottom: 16px;
        }
        .tag__left-first .logo {
          width: 140px;
        }
        .tag__left-first .info-shiperto {
          gap: 0;
        }
        .tag__left-first span {
          font-size: 8px;
          font-weight: 500;
          padding-left: 10px;
        }
        .tag__left-last {
          width: 170px;
          height: 320px;
          padding: 8px;
          border: 1px solid #000;
          border-radius: 5px;
        }
        .number-guide {
          font-size: 14px;
          font-weight: 600;
        }
        .title-text {
          font-size: 16px;
          font-weight: 500;
        }
        .normal-text {
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