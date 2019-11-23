import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <Jumbotron className="jumbo">
      <h1 className="fourzerofour">404</h1>
      <h1 className="display-3" style={{ color: "#A67EB1" }}>
        Page Not Found
      </h1>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Button size="lg" style={{ backgroundColor: "#A67EB1" }}>
          Go Back Home
        </Button>
      </Link>
    </Jumbotron>
  );
}
