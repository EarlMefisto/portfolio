// import styled from 'styled-components'

// export const StyledMyProjects = styled.section``
// export const List = styled.ul``
// export const Item = styled.li``
// export const Link = styled.a``
import styled from 'styled-components'
import { thems } from '../../../styles/Thems'

export const StyledMyProjects = styled.section``

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; // Промежуток 10px
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  // Компенсируем gap для последнего ряда
  margin-bottom: -10px;
`

export const Item = styled.li`
  flex: 0 0 calc(33.333% - 7px); // 3 колонки с учётом gap
  max-width: calc(33.333% - 7px);

  @media ${thems.media.tablet} {
    flex: 0 0 calc(50% - 5px); // 2 колонки на планшетах
    max-width: calc(50% - 5px);
  }

  @media ${thems.media.mobile} {
    flex: 0 0 100%; // 1 колонка на мобильных
    max-width: 100%;
  }
`

export const Link = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;

  // Для корректного отображения изображения
  & > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
