import styled from 'styled-components'
import { thems } from '../../../../styles/Thems'

export const ModalTitle = styled.h2`
  text-align: center;
  text-transform: capitalize;
  color: ${thems.colors.title};

  margin: 10px 10px 25px;
`

export const Table = styled.table`
  width: 100%;
  border: none;
  margin-bottom: 20px;
`

export const TableHeader = styled.thead``

export const TableHeaderCell = styled.th`
  text-align: center;
  text-transform: capitalize;
  color: ${thems.colors.title};

  border: none;
  border-radius: 8px;

  background: ${thems.colors.accent};

  padding: 8px;

  font-weight: bold;
  font-size: 14px;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f3f3f3;
  }
`

export const TableCell = styled.td`
  text-align: justify;
  vertical-align: top;

  border: none;
  border-radius: 8px;

  padding: 10px 15px 25px;

  font-size: 14px;
`
