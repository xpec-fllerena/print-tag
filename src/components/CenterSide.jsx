import {Fragment} from 'react'

const CenterSide = () => {
  return (
    <Fragment>
      <div className="print-tag__center">
        <div className="center_body1">
          <div className="print-tag__center_body1_os">
            <span className="title-text">OS 21103</span>
          </div>
        </div>
        <div className="center_body2">
          <div className="body2_box">
            <div className="body2_box1_header">
              <span className="title-text">REMITENTE</span>
              <div className="body2_box1_header_cont_zipcode">
                <p className="normal-text">CODIGO POSTAL</p>
                <div className="code">
                  <p className="normal-text">680006</p>
                </div>
              </div>
            </div>
            <div className="body2_box1_body">
              <div className="body2_box_align">
                <div className="flex_column">
                  <span className="normal-text">NOMBRE/RAZON SOCIAL</span>
                  <span className="normal-text">CIUDAD</span>
                  <span className="normal-text">DIRECCION</span>
                  <span className="normal-text">DEPARTAMENTO</span>
                  <span className="normal-text">PAIS</span>
                </div>
                <div className="flex_column">
                  <span className="normal-text">SYS TALENTOS COMPETITIVO</span>
                  <span className="normal-text">CARA 10 # 55-53</span>
                  <span className="normal-text">GIRON</span>
                  <span className="normal-text">SANTANDER</span>
                  <span className="normal-text">COLOMBIA</span>
                </div>
                <div className="flex_row other_info_cont">
                  <div className="flex_column">
                    <span className="normal-text">NIT</span>
                    <span className="normal-text">TEL</span>
                    <span className="normal-text">REF</span>
                  </div>
                  <div className="flex_column">
                    <span className="normal-text">901157740</span>
                    <span className="normal-text">3006365092</span>
                    <span className="normal-text"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body2_box">
            <div className="body2_box1_header">
              <span className="title-text">DESTINATARIO</span>
              <div className="body2_box1_header_cont_zipcode">
                <p className="normal-text">CODIGO POSTAL</p>
                <div className="code">
                  <p className="normal-text">680006</p>
                </div>
              </div>
            </div>
            <div className="body2_box1_body">
              <div className="body2_box_align">
                <div className="flex_column">
                  <span className="normal-text">NOMBRE/RAZON SOCIAL</span>
                  <span className="normal-text">CIUDAD</span>
                  <span className="normal-text">DIRECCION</span>
                  <span className="normal-text">DEPARTAMENTO</span>
                  <span className="normal-text">PAIS</span>
                </div>
                <div className="flex_column">
                  <span className="normal-text">Felipe</span>
                  <span className="normal-text">CARA 10 # 55-53</span>
                  <span className="normal-text">BUCARAMANGA</span>
                  <span className="normal-text">SANTANDER</span>
                  <span className="normal-text">COLOMBIA</span>
                </div>
                <div className="flex_row other_info_cont">
                  <div className="flex_column">
                    <span className="normal-text">TEL</span>
                    <span className="normal-text">CANTIDAD</span>
                  </div>
                  <div className="flex_column">
                    <span className="normal-text">3006365092</span>
                    <span className="normal-text">1</span>
                  </div>
                </div>
              </div>
              <div className="zone-container">
                <span className="normal-text">ZONA</span>
              </div>
            </div>
          </div>
          <div className="body2_box">
            <div className="last_center_div">
              <div className="last_center_div_column last_column1">
                <div>
                  <span className="small-text">Valor</span>
                </div>
                <div>
                  <span className="small-text">V Declarado</span>
                </div>
                <div>
                  <span className="small-text">Peso (gr)</span>
                </div>
                <div>
                  <span className="small-text">P Volumetrico (Kg)</span>
                </div>
              </div>
              <div className="last_center_div_column last_column2">
                <span className="small-text">Observaciones</span>
              </div>
              <div className="last_center_div_column last_column3">
                <div>
                  <span className="small-text">Fecha de entrega - Hora</span>
                </div>
                <div>
                  <span className="small-text">NOMBRE COMPLETO DEL DISTRIBUIDOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .print-tag__center {
          width: 570px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          margin-left: 10px;
        }
        .center_body1 {
          width: inherit;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-end;
        }
        .print-tag__center_body1_os {
          text-align: left;
          width: 100px;
        }
        .center_body2 {
          width: inherit;
          height: 320px;
          display: flex;
          flex-direction: column;
        }
        .body2_box {
          width: inherit;
          height: 106.6px;
          border: 1px solid #000;
          display: flex;
          flex-direction: column;
        }
        .body2_box:first-child {
          border-top-left-radius: 5px;
          border-bottom: none;
        }
        .body2_box:last-child {
          border-bottom-left-radius: 5px;
          border-top: none;
        }
        .body2_box1_header {
          padding: 8px 0 0 8px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .body2_box1_header_cont_zipcode {
          width: 200px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: -13px;
        }
        .body2_box1_header_cont_zipcode .code {
          width: 100px;
          border-bottom: 1px solid #000;
          border-left: 1px solid #000;
          border-bottom-left-radius: 5px;
          margin-left: 10px;
          padding-left: 8px;
        }
        .body2_box1_body {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 8px 8px;
        }
        .body2_box_align {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .body2_box1_body .body2_box_align .flex_column {
          width: 33%;
          height: 100%;
          text-align: left;
        }
        .body2_box1_body .flex_column .normal-text {
          display: inline-block;
          text-overflow: ellipsis;
          white-space:nowrap;
        }
        .body2_box1_body .flex_column:nth-child(2) {
          width: 50%;
          height: 100%;
        }
        .other_info_cont {
          width: 220px;
          height: 100%;
        }
        .zone-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          padding-right: 50px;
        }
        .last_center_div {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .last_center_div_column {
          height: 100%;
          text-align: left;
        }
        .last_center_div_column:nth-child(1) {
          width: 38%;
        }
        .last_center_div_column:nth-child(2) {
          width: 30%;
        }
        .last_center_div_column:nth-child(3) {
          width: 36%;
        }
        .last_column1 {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .last_column1 div {
          width: 50%;
          height: 50%;
          padding: 0 8px;
        }
        .last_column1 div:nth-child(1) {
          border-bottom: 1px solid #000;
          border-right: 1px solid #000;
        }
        .last_column1 div:nth-child(2) {
          border-bottom: 1px solid #000;
        }
        .last_column1 div:nth-child(3) {
          border-right: 1px solid #000;
        }
        .last_column2 {
          border-left: 1px solid #000;
          border-right: 1px solid #000;
          text-align: center;
        }
        .last_column3 {
          display: flex;
          flex-direction: column;
        }
        .last_column3 div {
          width: 100%;
          height: 50%;
          padding: 0 8px;
        }
        .last_column3 div:nth-child(1) {
          border-bottom: 1px solid #000;
        }
      `}</style>
    </Fragment>
  )
}

export default CenterSide