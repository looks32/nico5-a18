import React from "react";
import { Link } from "react-router-dom";
import { ErrorWrap } from "../style/commonStyled";

export default function NotFound() {
  return (
    <>
      <ErrorWrap>
        Not Found !
        <Link to="/">back to home</Link>
      </ErrorWrap>
    </>
  );
}
