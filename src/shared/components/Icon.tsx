import iconsSprite from '../../assets/icons/icons-sprite.svg'
import { thems } from '../../styles/Thems'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
 
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      fill={thems.colors.title}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
