import React from 'react'
import * as S from './CommentStyle';

function Comment(props) {
  return (
    <S.Container>
      <S.CommentContaier>
        <S.Avatar src="https://picsum.photos/id/272/200/200" />

        <S.Details>
          <S.Author>
            Istvan Borwinmingerr
        </S.Author>
          <S.Date>
            {let x=Date.now();
            return (x => x.getDate() + "/" + x.getMonth() + "/" + x.getFullYear}
          </S.Date>
        </S.Details>

        <S.Content>
          This place was awesome I'dd really want to visit it very soon, I hope it will happen GREAT!
        </S.Content>

      </S.CommentContaier>
      <S.GalleryContaier>

      </S.GalleryContaier>

    </S.Container>
  )
}

export default Comment
