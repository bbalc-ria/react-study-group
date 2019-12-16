import React, { useState } from "react";
import ReviewReadOnly from "./ReviewReadOnly";
import ReviewEdit from "./ReviewEdit";

export default function Review(props) {
  const [edit, setedit] = useState(false);

  return (
    <>
      {edit ? (
        <ReviewEdit review={props.review} handleClose={() => setedit(false)} />
      ) : (
        <ReviewReadOnly
          review={props.review}
          toggleEdit={() => setedit(true)}
        />
      )}
    </>
  );
}
