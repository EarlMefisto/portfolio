import React, { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ModalWindow, Outside } from './Modal.styles'
import { Button } from '../Button'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'

type Props = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export const Modal = ({ isOpen, onClose, children, className }: Props) => {
  useBodyScrollLock(isOpen)

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

  const modalRoot = document.getElementById('modal-root') || document.body

  if (!isOpen) return null

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return createPortal(
    <Outside onClick={handleOutsideClick} className={className}>
      <ModalWindow onClick={handleModalClick}>
        {children}
        <Button onClick={onClose}>Close</Button>
      </ModalWindow>
    </Outside>,
    modalRoot
  )
}
