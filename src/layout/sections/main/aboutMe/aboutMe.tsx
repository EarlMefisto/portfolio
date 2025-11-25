import {
  ModalTitle,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from './aboutMe.styles'

export const AboutMe = () => {
  return (
    <div>
      <ModalTitle>a little bit about me</ModalTitle>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>my education</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>I graduated from the Belarusian State University</TableCell>
          </TableRow>
        </TableBody>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>my life outside of working hours</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  )
}
