import { useEffect, useState } from 'react'
import { Icon } from '../Icon'
import { StyledGoTopBtn } from './GoTopBtn.styles'
import { animateScroll as scroll } from 'react-scroll'

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    })
  }, [])

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop()
          }}
        >
          <Icon iconId={'goTopBtn'} height={'35px'} width={'35px'} viewBox={'0 0 35 35'} />
        </StyledGoTopBtn>
      )}
    </>
  )
}
