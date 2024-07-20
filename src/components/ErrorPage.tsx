import React from "react";
import { Link } from "react-router-dom";
import { ErrorWrap } from "../style/commonStyled";

export default function ErrorComponent() {
  return (
    <>
      <ErrorWrap>
        Error Component !
        <Link to="/">back to home</Link>
      </ErrorWrap>
    </>
  );
}

