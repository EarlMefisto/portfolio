import React, { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ModalWindow, Outside } from './Modal.styles'
import { Button } from '../Button'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const modalRoot = document.getElementById('modal-root') || document.body

  if (!isOpen) return null

  return createPortal(
    <Outside onClick={handleOutsideClick}>
      <ModalWindow>
        {children}
        <Button onClick={onClose}>Close</Button>
      </ModalWindow>
    </Outside>,
    modalRoot
  )
}
