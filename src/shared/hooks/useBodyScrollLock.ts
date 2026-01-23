import { useEffect, useRef } from 'react'

export const useBodyScrollLock = (isLocked: boolean): void => {
  const scrollPosition = useRef<number>(0)
  const scrollbarWidth = useRef<number>(0)

  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    if (isLocked) {
      // Сохраняем текущую позицию скролла
      scrollPosition.current = window.pageYOffset || html.scrollTop

      // Вычисляем ширину скроллбара
      scrollbarWidth.current = window.innerWidth - html.clientWidth

      // Блокируем скролл
      body.style.position = 'fixed'
      body.style.top = `-${scrollPosition.current}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.overflow = 'hidden'

      // Компенсируем исчезновение скроллбара
      if (scrollbarWidth.current > 0) {
        body.style.paddingRight = `${scrollbarWidth.current}px`
      }

      html.style.overflow = 'hidden'
    }

    return () => {
      if (isLocked) {
        // Восстанавливаем стили
        body.style.position = ''
        body.style.top = ''
        body.style.left = ''
        body.style.right = ''
        body.style.overflow = ''
        body.style.paddingRight = ''

        html.style.overflow = ''

        // Восстанавливаем позицию скролла
        window.scrollTo(0, scrollPosition.current)
      }
    }
  }, [isLocked])
}
