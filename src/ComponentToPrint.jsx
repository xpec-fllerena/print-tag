import {Fragment, forwardRef} from 'react'
import LeftSide from "./components/LeftSide"
import CenterSide from "./components/CenterSide"
import RightSide from "./components/RightSide"

const ComponentToPrint = forwardRef((props, ref) => {
  return (
    <Fragment>
      <div ref={ref} className="pt__print-tag__container">
        <LeftSide />
        <CenterSide />
        <RightSide />
      </div>
      <style jsx>{`
        .pt__print-tag__container {
          height: 400px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        }
        .pt__flex_column {
          display: flex;
          flex-direction: column;
          gap: 12px 0;
        }
        .pt__flex_row {
          display: flex;
          flex-direction: row;
        }
        .pt__title-text {
          font-size: 16px;
          font-weight: 500;
        }
        .pt__normal-text {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
        }
        .pt__small-text {
          display: inline-block;
          font-size: 8px;
          font-weight: 500;
        }
        .pt__visibility_hidden {
          visibility: hidden;
        }
      `}</style>
    </Fragment>
  )
})

export default ComponentToPrint