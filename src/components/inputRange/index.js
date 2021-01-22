import * as React from "react"
import { Range, getTrackBackground } from "react-range"
import "./rangeSlider.scss"

const STEP = 5000
const MIN = 0
const MAX = 300000

class Labeled extends React.Component {
  state = {
    values: [100000],
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={values => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "88%",
                paddingTop: "6rem",
              }}
            >
              <div
                ref={props.ref}
                className="range-btn"
                style={{
                  height: "10px",
                  width: "100%",
                  borderRadius: "6px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#fff", "#0544E0"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              className="range-btn"
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "50px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-28px",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              >
                {this.state.values[0].toFixed(1)}
              </div>
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC",
                }}
              />
            </div>
          )}
        />
      </div>
    )
  }
}

export default Labeled
