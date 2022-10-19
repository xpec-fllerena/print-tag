import { Fragment, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import ComponentToPrint from './ComponentToPrint'

const pageStyle ="@page { size: letter landscape; }";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle
  });

  return (
    <Fragment>
      <div style={{ display: "block" }}><ComponentToPrint ref={componentRef} /></div>
      <div className="app-container">
        <button onClick={handlePrint}>Imprimir</button>
      </div>
      <style jsx>{`
        .app-container {
          
        }
        .app-container button {
          padding: 1em;
          font-size: 1em;
          width: auto;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </Fragment>
  );
}

export default App;
