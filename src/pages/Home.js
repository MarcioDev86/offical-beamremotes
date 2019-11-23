import React, { Suspense, useState, useEffect } from "react";
import Loader from "react-loader-spinner";

// bootstrap
import {
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledAlert,
  Card,
  CardBody,
  Collapse
} from "reactstrap";

import UserGuide from "../pdf/i580_User_Guide_V1-0_20190521_EN.pdf";

import codes from "../codes/PCL_3.json";
import audiocodes from "../codes/brands/audio.json";
import blucodes from "../codes/brands/blu.json";
import digitalframecodes from "../codes/brands/digitalframe.json";
import dvdcodes from "../codes/brands/dvd.json";
import soundbarcodes from "../codes/brands/soundbar.json";
import stbcodes from "../codes/brands/stb.json";
import streamingcodes from "../codes/brands/streaming.json";
import tvcodes from "../codes/brands/tv.json";
import tvdvdcodes from "../codes/brands/tvdvd.json";
import vcrcodes from "../codes/brands/vcr.json";

const MyCarousel = React.lazy(() => import("../components/MyCarousel"));
const HeroImg = React.lazy(() => import("../components/HeroImage"));

export default function Home() {
  const [device, setDevice] = useState("SELECT YOUR DEVICE");
  const [brand, setBrand] = useState("SELECT YOUR BRAND");
  const [codeState, setCodeState] = useState(false);

  useEffect(() => {
    if (device === "SELECT YOUR DEVICE") {
      setBrand("SELECT YOUR BRAND");
      setCodeState(false);
    }

    if (brand === "SELECT YOUR BRAND") {
      setCodeState(false);
    }

    if (device !== "SELECT YOUR DEVICE" && brand !== "SELECT YOUR BRAND") {
      console.log("show codes...");
      setCodeState(true);
    }
  }, [device, brand]);

  // Dropdown the brands given a device
  function showBrands() {
    switch (device) {
      case "AUDIO":
        return audiocodes.AUDIO.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      case "BLU-RAY":
        return blucodes.BLURAY.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      case "DIGITAL FRAME":
        return digitalframecodes.DIGITALFRAME.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      case "DVD PLAYER":
        console.log("inside dvd player");
        return dvdcodes.DVDPLAYER.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      case "SET-TOP BOX":
        return stbcodes.STB.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      case "STREAMING MEDIA PLAYER":
        return streamingcodes.STREAMING.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      case "TV":
        return tvcodes.TV.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      case "SOUNDBAR":
        return soundbarcodes.SOUNDBARS.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      case "TV/DVD COMBO":
        return tvdvdcodes.TVDVD.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      case "VCR":
        return vcrcodes.VCR.map(t => (
          <DropdownItem className="dpItem" key={t} onClick={() => setBrand(t)}>
            {t}
          </DropdownItem>
        ));

      default:
        return (
          <DropdownItem className="dpItem" key="Error">
            ERROR...
          </DropdownItem>
        );
    }
  }

  // Set device and clear brand dropdown
  function setDeviceHelper(d) {
    setDevice(d);
    setBrand("SELECT YOUR BRAND");
  }

  return (
    <div>
      <section>
        <Suspense
          fallback={
            <div style={{ textAlign: "center" }}>
              <Loader type="Bars" color="#a67eb1" height={200} width={200} />
            </div>
          }
        >
          <HeroImg />
        </Suspense>
      </section>

      <section>
        <Container>
          <Row>
            <div style={{ marginLeft: "2%", marginRight: "2%" }}>
              <h1 style={{ width: "100%", marginTop: "2%" }}>
                Beam Smart Remote i580
              </h1>
              <p className="text">
                We suggest using the Beam app to program your remote. However,
                if you would like to program the remote using the Code List,
                please use the code finder tool below to quickly find compatible
                codes for the different devices in your home. If there are
                several codes available for your device, test each one and
                select the code that is the most compatible with your device.
                <br />
                <br />
                For more information, please refer to “PROGRAMMING USING THE
                CODE LIST” on{" "}
                <a
                  href={`${UserGuide}#page=8`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  page 07 of the user guide.
                </a>
              </p>
            </div>
          </Row>

          <Row>
            <Col sm="6">
              <UncontrolledDropdown>
                <DropdownToggle caret className="dropdowntoggle">
                  {device}
                </DropdownToggle>
                <DropdownMenu className="dropdownMenu">
                  <DropdownItem
                    onClick={() => setDeviceHelper("SELECT YOUR DEVICE")}
                    key="SELECT YOUR DEVICE"
                    className="dpItem"
                  >
                    SELECT YOUR DEVICE
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("TV")}
                    key="TV"
                    className="dpItem"
                  >
                    TV
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("TV/DVD COMBO")}
                    key="TV/DVD COMBO"
                    className="dpItem"
                  >
                    TV/DVD COMBO
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("SET-TOP BOX")}
                    key="SET-TOP BOX"
                    className="dpItem"
                  >
                    SET-TOP BOX
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("STREAMING MEDIA PLAYER")}
                    key="STREAMING MEDIA PLAYER"
                    className="dpItem"
                  >
                    STREAMING MEDIA PLAYER
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("BLU-RAY")}
                    key="BLU-RAY"
                    className="dpItem"
                  >
                    BLU-RAY
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("DIGITAL FRAME")}
                    key="DIGITAL FRAME"
                    className="dpItem"
                  >
                    DIGITAL FRAME
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("AUDIO")}
                    key="AUDIO"
                    className="dpItem"
                  >
                    AUDIO
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("VCR")}
                    key="VCR"
                    className="dpItem"
                  >
                    VCR
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("SOUNDBAR")}
                    key="SOUNDBAR"
                    className="dpItem"
                  >
                    SOUNDBAR
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setDeviceHelper("DVD PLAYER")}
                    key="DVD PLAYER"
                    className="dpItem"
                  >
                    DVD PLAYER
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
            <Col sm="6">
              <UncontrolledDropdown>
                <DropdownToggle caret className="dropdowntoggle">
                  {brand}
                </DropdownToggle>
                <DropdownMenu className="dropdownMenu">
                  {device === "SELECT YOUR DEVICE" ? (
                    <DropdownItem>Please Select A Device First</DropdownItem>
                  ) : (
                    showBrands()
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>

          <Row>
            <Col>
              <Collapse isOpen={codeState}>
                <Card>
                  <CardBody>
                    {codes.map(c =>
                      c.device === device && c.brand === brand ? (
                        <UncontrolledAlert key={c.code} className="code">
                          <h4 style={{ lineHeight: "1.5" }}>{c.code}</h4>
                        </UncontrolledAlert>
                      ) : null
                    )}
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      </section>

      <section>
        <Suspense
          fallback={
            <div style={{ textAlign: "center" }}>
              <Loader type="Bars" color="#a67eb1" height={200} width={200} />
            </div>
          }
        >
          <MyCarousel />
        </Suspense>
      </section>

      <section>
        <Container>
          <Row>
            <div style={{ marginLeft: "2%", marginRight: "2%" }}>
              <h1 style={{ width: "100%", marginTop: "3%" }}>
                Want To Use The App Instead?
              </h1>
              <p className="text">
                The Beam Smart Remote app helps you stay updated with new codes
                that are added to our cloud database so that your remote doesn’t
                become obsolete. The app also makes programming your Beam remote
                quick and simple. Download the app for free by following the
                steps below. Downloading and using the app
                <br />
                <br />
                1. Search for “Beam Smart Remote” on either the Apple or Google
                app stores and then download it.
                <br />
                2. Make sure the Bluetooth on your smartphone is turned on, then
                open the app.
                <br />
                3. Follow the app prompts, to connect with, and program your
                remote.
                <br />
                <br />
              </p>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Suspense
          fallback={
            <div style={{ textAlign: "center" }}>
              <Loader type="Bars" color="#a67eb1" height={200} width={200} />
            </div>
          }
        >
          <HeroImg bot={true} />
        </Suspense>

        <h6 className="footer">
          Beam® is a registered trademark of Southern Telecom, Inc.
        </h6>
      </section>
    </div>
  );
}
