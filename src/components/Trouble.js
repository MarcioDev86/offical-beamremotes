import React, { useState } from "react";
import { Card, CardHeader, CardBody, UncontrolledCollapse } from "reactstrap";
import Plus from "../images/plus.png";
import Minus from "../images/minus.png";
import Fade from "react-reveal/Fade";

export default function Trouble(props) {
  const [state, setState] = useState(true);

  console.log(props.question, props.answer);

  return (
    <Fade top>
      <Card className="trouble-card">
        <CardHeader style={{ backgroundColor: "ghostwhite" }}>
          <div className="trouble-btn">
            <input
              src={state === true ? Plus : Minus}
              height="2%"
              type="image"
              id={props.toggler}
              alt="img-button"
              onClick={() => setState(!state)}
              onTouchStart={() => setState(!state)}
            />
            <h3 className="trouble-answer">{props.question}</h3>
          </div>
        </CardHeader>
        <UncontrolledCollapse toggler={`#${props.toggler}`}>
          <CardBody className="trouble-body">{props.answer}</CardBody>
        </UncontrolledCollapse>
      </Card>
    </Fade>
  );
}
