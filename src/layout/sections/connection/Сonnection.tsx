import styled from 'styled-components'
import { LeaveMessage } from './leaveMessage/LeaveMessage'
import { ContactsAndLocation } from './ContactsAndLocation/ContactsAndLocation'
import { Container } from '../../../shared/components/Container'
import { FlexWrapper } from '../../../shared/components/FlexWrapper'

export const Connection = () => {
  return (
    <StyledConnection>
      <Container>
        <FlexWrapper gap={'10px'}>
          <LeaveMessage />
          <ContactsAndLocation />
        </FlexWrapper>
      </Container>
    </StyledConnection>
  )
}

const StyledConnection = styled.section``
