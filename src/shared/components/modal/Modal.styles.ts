import styled from 'styled-components'
import { thems } from '../../../styles/Thems'

export const Outside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 22, 36, 0.72);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  overflow: hidden;
`

export const ModalWindow = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  background-color: ${thems.colors.secondaryBg};
  border-radius: 2px;
  padding: 25px;
  overflow-y: auto;
  animation: appear 0.5s ease-out forwards;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(-50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  & button {
    width: 130px;
  }
`
