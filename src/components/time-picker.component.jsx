import React, { useState, useRef } from "react";
import { Range, getTrackBackground, useThumbOverlap } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;
const COLORS = ["#ccc", "#9e77ed", "#ccc"];
const THUMB_SIZE = 25;

function ThumbLabel({ rangeRef, values, index }) {
  const [labelValue, labelStyle] = useThumbOverlap(
    rangeRef,
    values,
    index,
    1,
    " - ",
    (value) => `${value}:00 AM`
  );
  return (
    <div
      data-label={index}
      style={{
        display: "block",
        position: "absolute",
        top: "20px",
        color: "#9e77ed",
        fontWeight: "bold",
        fontSize: "12px",
        fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
        padding: "4px",
        borderRadius: "4px",
        backgroundColor: "transparent",
        whiteSpace: "nowrap",
        ...labelStyle,
      }}
    >
      {labelValue}
    </div>
  );
}

const TimePickerComponent = ({ rtl }) => {
  const [values, setValues] = useState([25, 75]);
  const rangeRef = useRef();
  const Thumb = ({ props, index, isDragged }) => (
    <div
      {...props}
      style={{
        ...props.style,
        height: `${THUMB_SIZE}px`,
        width: `${THUMB_SIZE}px`,
        borderRadius: "2rem",
        backgroundColor: "#9e77ed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 2px 6px #AAA",
      }}
    >
      <ThumbLabel rangeRef={rangeRef.current} values={values} index={index} />
      <div
        style={{
          height: "19px",
          width: "19px",
          borderRadius: "2rem",
          backgroundColor: isDragged ? "#00000000" : "#fff",
        }}
      />
    </div>
  );

  const Track = ({ props, children }) => (
    <div
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      style={{
        ...props.style,
        height: "36px",
        display: "flex",
        width: "100%",
      }}
    >
      <div
        ref={props.ref}
        style={{
          height: "8px",
          width: "100%",
          borderRadius: "4px",
          background: getTrackBackground({
            values: values,
            colors: COLORS,
            min: MIN,
            max: MAX,
            rtl,
          }),
          alignSelf: "center",
        }}
      >
        {children}
      </div>
    </div>
  );

  return (
    <Range
      ref={rangeRef}
      values={values}
      onChange={(values) => setValues(values)}
      renderThumb={Thumb}
      renderTrack={Track}
      step={STEP}
      min={MIN}
      max={MAX}
      rtl={rtl}
    />
  );
};

export default TimePickerComponent;
