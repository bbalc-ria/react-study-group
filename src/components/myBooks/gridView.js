import React from "react";
import * as S from "../../styles";

function GridView(props) {
  return (
    <S.ColumnFlex width={props.width}>
      <S.BookTable>
        <thead>
          <th>cover</th>
          <th>title</th>
          <th>authors</th>
        </thead>
        {props.books.map((book, index) => (
          <tr>
            <td>
              <S.StyledLink to={"/book/detail/" + book.id}>
                <S.SmallBookImage
                  key={index}
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.smallThumbnail
                      : ""
                  }
                  title={book.volumeInfo.title + " - " + book.volumeInfo.authors}
                />
              </S.StyledLink>
            </td>
            <td><S.StyledLink to={"/book/detail/" + book.id}>{book.volumeInfo.title}</S.StyledLink></td>
            <td>{book.volumeInfo.authors}</td>
          </tr>  
        ))}
        
      </S.BookTable>
    </S.ColumnFlex>
  );
}

export default GridView;
