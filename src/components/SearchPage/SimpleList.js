import React, { useState } from "react";
import * as S from './SearchPageStyle';

export default function SimpleList(props) {
  const [selected, setSelected] = useState(false);

  let handleSelect = (index) => {
    if (selected) {
      props.deselect(index);
      setSelected(false);
    }
    else {
      props.select(index);
      setSelected(true);
    }

  }
  return (
    <S.List>
      {props.locations && props.locations.map((x, index) => (
        <S.ListItem
          key={x.name}
          onClick={() => handleSelect(index)}
        >
          {x.name}
        </S.ListItem>
      ))}
    </S.List>
  )
}
