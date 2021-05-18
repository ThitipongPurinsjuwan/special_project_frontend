import React from "react";

function ShowStatus(props) {
  const { data } = props;
  return (
    <>
      <span>{data.order_status_name}</span>
    </>
  );
}

export default ShowStatus;
