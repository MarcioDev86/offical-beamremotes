import React from "react";
import { Container, Row, Col } from "reactstrap";
import Trouble from "../components/Trouble";

function Troubleshooting() {
  return (
    <div>
      <h1 className="trouble-bar">
        <p className="trouble-bar-text">Troubleshooting</p>
      </h1>

      <h3 className="trouble-bar-text-tips">
        The Troubleshooting tips below can help you solve problems and answer
        questions you may have with your Beam remote control.
      </h3>

      <Container fluid>
        <Row>
          <Col>
            <Trouble
              toggler="t1"
              question="The remote can't be programmed to operate my device"
              answer=" If you're using the app and having trouble programming your
                    remote, try using the included printed code list or the
                    manual programming method explained in the Programming
                    section of the user guide."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t2"
              question="Some of the buttons of the remote are not supported or
                      working properly on my device"
              answer={
                <p>
                  It's possible the code that you programmed is not fully
                  compatible with your device. Try selecting the next code from
                  the options available for the category and brand of your
                  device. If you are unsuccessful at finding a better matching
                  code, it may be that there are some buttons from your device's
                  original remote that are not supported. You can easily copy
                  them using the <b>Custom Buttons</b> or{" "}
                  <b>Programming Manually</b> methods explained in this user
                  guide.
                </p>
              }
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t3"
              question="My device does not match any of the DEVICE CATEGORIES on
              the remote"
              answer={
                <p>
                  If you have a device such as an air conditioner, heater, or
                  anything else that is controlled by an IR remote and does not
                  fit one of the remote’s Device Category options, on the app
                  select <b>OTHER</b> and use <b>SMART SEARCH</b> to try and
                  find a matching code from our cloud database or copy all the
                  buttons of the original remote and store it under <b>OTHER</b>{" "}
                  in Device Categories of the remote.
                </p>
              }
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t4"
              question="My device’s menu or app hub does not appear"
              answer={
                <p>
                  Menu and app hub access isn’t supported for all brands. You
                  can copy that button from your original remote to the Beam
                  remote using the <b>Custom Buttons</b> or{" "}
                  <b>Program Manually</b> method.
                </p>
              }
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t5"
              question="The remote will not adjust the volume or channel on my
              device"
              answer={
                <p>
                  Make sure the remote is in the correct Device Category mode
                  (TV, SAT/CBL, AUDIO, B-RAY/DVD, STREAM, OTHER) that controls
                  the volume and channel of your device.
                </p>
              }
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t6"
              question="How do I know what Device Category or Activity mode the
              remote is in?"
              answer="When you press any button on the remote, the current Device
              Category or tivity mode is lit in red."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t7"
              question="I copied a button from my original remote but it’s not
              working"
              answer="Beam is capable of copying any IR remote control button.
              However, sometimes it is necessary to repeat the copying
              procedure to get the button working properly sometimes
              several attempts are required. Please make sure that when
              copying, the two remotes are held closely together with
              their fronts pointing at each other."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t8"
              question="I can’t change the Activity settings on the app or on the
              remote"
              answer="To use the Activity buttons to control combo devices like
              TV+STB/CBL or TV+DVD, you must program the individual
              corresponding devices. Please refer to the Activity section
              in the user guide for more information."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t9"
              question="When I press the POWER button in Activity mode, some of my
              devices do simultaneously turn on or off"
              answer="For this feature to work, prior to pressing the POWER
              button, all the devices must be either on or off."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t10"
              question="My remote isn’t working properly"
              answer="Try changing the batteries and make sure they are properly
              installed. If possible, use alkaline batteries."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Trouble
              toggler="t11"
              question="I cannot find my remote"
              answer="Open the app and on the home screen press “FIND MY REMOTE”.
              If the remote doesn’t beep, try walking around to the areas
              where you believe the remote was lost."
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <h6 className="footer">
              Beam® is a registered trademark of Southern Telecom, Inc.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Troubleshooting;
