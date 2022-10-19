import {Fragment} from 'react'

const CenterSide = () => {
  return (
    <Fragment>
      <div className="pt__print-tag__center">
        <div className="pt__center_body1">
          <div className="pt__print-tag__center_body1_os">
            <span className="pt__title-text">OS 21103</span>
          </div>
        </div>
        <div className="pt__center_body2">
          <div className="pt__body2_box">
            <div className="pt__body2_box1_header">
              <span className="pt__title-text">REMITENTE</span>
              <div className="pt__body2_box1_header_cont_zipcode">
                <p className="pt__normal-text">CODIGO POSTAL</p>
                <div className="pt__code">
                  <p className="pt__normal-text">680006</p>
                </div>
              </div>
            </div>
            <div className="pt__body2_box1_body">
              <div className="pt__body2_box_align">
                <div className="pt__flex_column">
                  <span className="pt__normal-text">NOMBRE/RAZON SOCIAL</span>
                  <span className="pt__normal-text">CIUDAD</span>
                  <span className="pt__normal-text">DIRECCION</span>
                  <span className="pt__normal-text">DEPARTAMENTO</span>
                  <span className="pt__normal-text">PAIS</span>
                </div>
                <div className="pt__flex_column">
                  <span className="pt__normal-text">SYS TALENTOS COMPETITIVO</span>
                  <span className="pt__normal-text">CARA 10 # 55-53</span>
                  <span className="pt__normal-text">GIRON</span>
                  <span className="pt__normal-text">SANTANDER</span>
                  <span className="pt__normal-text">COLOMBIA</span>
                </div>
                <div className="pt__flex_row pt__other_info_cont">
                  <div className="pt__flex_column">
                    <span className="pt__normal-text">NIT</span>
                    <span className="pt__normal-text">TEL</span>
                    <span className="pt__normal-text">REF</span>
                  </div>
                  <div className="pt__flex_column">
                    <span className="pt__normal-text">901157740</span>
                    <span className="pt__normal-text">3006365092</span>
                    <span className="pt__normal-text"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt__body2_box">
            <div className="pt__body2_box1_header">
              <span className="pt__title-text">DESTINATARIO</span>
              <div className="pt__body2_box1_header_cont_zipcode">
                <p className="pt__normal-text">CODIGO POSTAL</p>
                <div className="pt__code">
                  <p className="pt__normal-text">680006</p>
                </div>
              </div>
            </div>
            <div className="pt__body2_box1_body">
              <div className="pt__body2_box_align">
                <div className="pt__flex_column">
                  <span className="pt__normal-text">NOMBRE/RAZON SOCIAL</span>
                  <span className="pt__normal-text">CIUDAD</span>
                  <span className="pt__normal-text">DIRECCION</span>
                  <span className="pt__normal-text">DEPARTAMENTO</span>
                  <span className="pt__normal-text">PAIS</span>
                </div>
                <div className="pt__flex_column">
                  <span className="pt__normal-text">Felipe</span>
                  <span className="pt__normal-text">CARA 10 # 55-53</span>
                  <span className="pt__normal-text">BUCARAMANGA</span>
                  <span className="pt__normal-text">SANTANDER</span>
                  <span className="pt__normal-text">COLOMBIA</span>
                </div>
                <div className="pt__flex_row pt__other_info_cont">
                  <div className="pt__flex_column">
                    <span className="pt__normal-text">TEL</span>
                    <span className="pt__normal-text">CANTIDAD</span>
                  </div>
                  <div className="pt__flex_column">
                    <span className="pt__normal-text">3006365092</span>
                    <span className="pt__normal-text">1</span>
                  </div>
                </div>
              </div>
              <div className="pt__zone-container">
                <span className="pt__normal-text">ZONA</span>
              </div>
            </div>
          </div>
          <div className="pt__body2_box">
            <div className="pt__last_center_div">
              <div className="pt__last_center_div_column pt__last_column1">
                <div>
                  <span className="pt__small-text">Valor</span>
                </div>
                <div>
                  <span className="pt__small-text">V Declarado</span>
                </div>
                <div>
                  <span className="pt__small-text">Peso (gr)</span>
                </div>
                <div>
                  <span className="pt__small-text">P Volumetrico (Kg)</span>
                </div>
              </div>
              <div className="pt__last_center_div_column pt__last_column2">
                <span className="pt__small-text">Observaciones</span>
              </div>
              <div className="pt__last_center_div_column pt__last_column3">
                <div>
                  <span className="pt__small-text">Fecha de entrega - Hora</span>
                </div>
                <div>
                  <span className="pt__small-text">NOMBRE COMPLETO DEL DISTRIBUIDOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pt__print-tag__center {
          width: 570px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          margin-left: 10px;
        }
        .pt__center_body1 {
          width: inherit;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-end;
        }
        .pt__print-tag__center_body1_os {
          text-align: left;
          width: 100px;
        }
        .pt__center_body2 {
          width: inherit;
          height: 320px;
          display: flex;
          flex-direction: column;
        }
        .pt__body2_box {
          width: inherit;
          height: 106.6px;
          border: 1px solid #000;
          display: flex;
          flex-direction: column;
        }
        .pt__body2_box:first-child {
          border-top-left-radius: 5px;
          border-bottom: none;
        }
        .pt__body2_box:last-child {
          border-bottom-left-radius: 5px;
          border-top: none;
        }
        .pt__body2_box1_header {
          padding: 8px 0 0 8px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .pt__body2_box1_header_cont_zipcode {
          width: 200px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: -13px;
        }
        .pt__body2_box1_header_cont_zipcode .pt__code {
          width: 100px;
          border-bottom: 1px solid #000;
          border-left: 1px solid #000;
          border-bottom-left-radius: 5px;
          margin-left: 10px;
          padding-left: 8px;
        }
        .pt__body2_box1_body {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 8px 8px;
        }
        .pt__body2_box_align {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .pt__body2_box1_body .pt__body2_box_align .pt__flex_column {
          width: 33%;
          height: 100%;
          text-align: left;
        }
        .pt__body2_box1_body .pt__flex_column .pt__normal-text {
          display: inline-block;
          text-overflow: ellipsis;
          white-space:nowrap;
        }
        .pt__body2_box1_body .pt__flex_column:nth-child(2) {
          width: 50%;
          height: 100%;
        }
        .pt__other_info_cont {
          width: 220px;
          height: 100%;
        }
        .pt__zone-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          padding-right: 50px;
        }
        .pt__last_center_div {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .pt__last_center_div_column {
          height: 100%;
          text-align: left;
        }
        .pt__last_center_div_column:nth-child(1) {
          width: 38%;
        }
        .pt__last_center_div_column:nth-child(2) {
          width: 30%;
        }
        .pt__last_center_div_column:nth-child(3) {
          width: 36%;
        }
        .pt__last_column1 {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .pt__last_column1 div {
          width: 50%;
          height: 50%;
          padding: 0 8px;
        }
        .pt__last_column1 div:nth-child(1) {
          border-bottom: 1px solid #000;
          border-right: 1px solid #000;
        }
        .pt__last_column1 div:nth-child(2) {
          border-bottom: 1px solid #000;
        }
        .pt__last_column1 div:nth-child(3) {
          border-right: 1px solid #000;
        }
        .pt__last_column2 {
          border-left: 1px solid #000;
          border-right: 1px solid #000;
          text-align: center;
        }
        .pt__last_column3 {
          display: flex;
          flex-direction: column;
        }
        .pt__last_column3 div {
          width: 100%;
          height: 50%;
          padding: 0 8px;
        }
        .pt__last_column3 div:nth-child(1) {
          border-bottom: 1px solid #000;
        }
      `}</style>
    </Fragment>
  )
}

export default CenterSide