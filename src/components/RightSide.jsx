import { Fragment } from 'react'

const RightSide = () => {
  return (
    <Fragment>
      <div className="pt__print-tag__right">
        <div className="pt__right_body1">
          <div className="pt__right_body1_box1">
            <span className="pt__small-text">Nombre</span>
            <span className="pt__normal-text">NOMBRE/RAZON SOCIAL</span>
          </div>
          <div className="pt__right_body1_box2">
            <span className="pt__small-text">Fecha</span>
            <span className="pt__normal-text">12/05/2022</span>
          </div>
        </div>
        <div className="pt__right_body2">
          <div className="pt__right_body2_box1">
            <div className="pt__right_body2_box1_header">
              <div className="pt__right_body2_box1_header_title_cont">
                <span className="pt__small-text">CAUSAL DE DEVOLUCION DEL ENVIO</span>
              </div>
              <span className="pt__small-text">Fecha de Devolución</span>
            </div>
            <div className="pt__right_body2_box1_body">
              <div className="pt__right_body2_box1_body_child">
                <label className="pt__right_body2_box1_container_check">REUSADO
                  <input type="checkbox" />
                  <span className="pt__right_body2_box1_checkmark"></span>
                </label>
                <label className="pt__right_body2_box1_container_check">NO EXISTE
                  <input type="checkbox" />
                  <span className="pt__right_body2_box1_checkmark"></span>
                </label>
                <label className="pt__right_body2_box1_container_check">NO RECIBE
                  <input type="checkbox" />
                  <span className="pt__right_body2_box1_checkmark"></span>
                </label>
                <label className="pt__right_body2_box1_container_check">NO RECLAMADO
                  <input type="checkbox" />
                  <span className="pt__right_body2_box1_checkmark"></span>
                </label>
                <label className="pt__right_body2_box1_container_check">DESCONOCIDO
                  <input type="checkbox" />
                  <span className="pt__right_body2_box1_checkmark"></span>
                </label>
                <label className="pt__right_body2_box1_container_check">DIRECCION ERRADA
                  <input type="checkbox" />
                  <span className="pt__right_body2_box1_checkmark"></span>
                </label>
              </div>
              <div className="pt__right_body2_box1_body_child">
                <div className="pt__right_body2_box1_container_check_double">
                  <label className="pt__right_body2_box1_container_check">
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark"></span>
                  </label>
                  <label className="pt__right_body2_box1_container_check">CERRADO
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark"></span>
                  </label>
                </div>
                <div className="pt__right_body2_box1_container_check_double">
                  <label className="pt__right_body2_box1_container_check">
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark"></span>
                  </label>
                  <label className="pt__right_body2_box1_container_check">NO CONTACTADO
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark"></span>
                  </label>
                </div>
                <div className="pt__right_body2_box1_container_check_double">
                  <label className="pt__right_body2_box1_container_check">
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark"></span>
                  </label>
                  <label className="pt__right_body2_box1_container_check">FALLECIDO
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark pt__visibility_hidden"></span>
                  </label>
                </div>
                <div className="pt__right_body2_box1_container_check_double">
                  <label className="pt__right_body2_box1_container_check">
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark"></span>
                  </label>
                  <label className="pt__right_body2_box1_container_check">CLAUSURADO
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark pt__visibility_hidden"></span>
                  </label>
                </div>
                <div className="pt__right_body2_box1_container_check_double">
                  <label className="pt__right_body2_box1_container_check">
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark"></span>
                  </label>
                  <label className="pt__right_body2_box1_container_check">FUERZA MAYOR
                    <input type="checkbox" />
                    <span className="pt__right_body2_box1_checkmark pt__visibility_hidden"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="pt__right_body2_box2">
            <span className="pt__normal-text">OBSERVACIONES DE DISTRIBUCION</span>
          </div>
          <div className="pt__right_body2_box3">
            <span className="pt__normal-text">DATOS DE LA ENTREGA</span>
            <div className="pt__right_body2_box3_name_cont">
              <span className="pt__normal-text">NOMBRE LEGIBLE Y CEDULA</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pt__print-tag__right {
          width: 260px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
        }
        .pt__right_body1 {
          width: inherit;
          height: 32px;
          border: 1px solid #000;
          border-radius: 5px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3px;
        }
        .pt__right_body1 .pt__right_body1_box1, .pt__right_body1 .pt__right_body1_box2 {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 4px 8px;
          gap: 8px 0;
          text-align: left;
        }
        .pt__right_body1 .pt__right_body1_box1 {
          width: 60%;
          border-right: 1px solid #000;
        }
        .pt__right_body1 .pt__right_body1_box2 {
          width: 40%;
        }
        .pt__right_body2 {
          width: inherit;
          height: 320px;
          border: 1px solid #000;
          border-left: none;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        .pt__right_body2_box1 {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .pt__right_body2_box1_header {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .pt__right_body2_box1_header .pt__small-text:last-child {
          padding-top: 4px;
        }
        .pt__right_body2_box1_header_title_cont {
          padding: 0 8px 5px;
          border-right: 1px solid #000;
          border-bottom: 1px solid #000;
          border-bottom-right-radius: 5px;
          margin-right: 10px;
        }
        .pt__right_body2_box1_body {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .pt__right_body2_box1_body .pt__right_body2_box1_body_child {
          width: 50%;
          display: flex;
          flex-direction: column;
          padding: 5px 0;
        }
        .pt__right_body2_box1_body .pt__right_body2_box1_body_child:first-child {
          border-right: 1px solid #000;
          border-bottom: 1px solid #000;
        }
        .pt__right_body2_box1_body .pt__right_body2_box1_body_child:last-child {
          border-bottom: 1px solid #000;
        }
        .pt__right_body2_box1_container_check {
          display: block;
          position: relative;
          padding-left: 20px;
          margin-left: 8px;
          cursor: pointer;
          font-size: 8px;
        }
        .pt__right_body2_box1_container_check input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .pt__right_body2_box1_checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 10px;
          width: 15px;
          border: 1px solid #000;
        }
        .pt__right_body2_box1_container_check_double {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .pt__right_body2_box1_container_check_double .pt__right_body2_box1_container_check:first-child {
          padding-left: 8px;
        }
        .pt__right_body2_box2 {
          width: 100%;
          height: 90px;
          padding: 0 8px;
          border-bottom: 1px solid #000;
        }
        .pt__right_body2_box3 {
          position: relative;
          width: 100%;
          height: 135px;
          padding: 0 8px
        }
        .pt__right_body2_box3_name_cont {
          position: absolute;
          bottom: 0;
          width: 95%;
          text-align: center;
        }
      `}</style>
    </Fragment>
  )
}

export default RightSide;