import { FlexWrapper } from '../../../../shared/components/FlexWrapper'
import { Icon } from '../../../../shared/components/Icon'
import { IconWrapper, StyledSkills, Titile } from './Skills.styles'

type ServicePropsType = {
  iconId?: string
  title?: string
  width?: string
  height?: string
  viewBox?: string
  fill?: string
}

// const skills = [
//   "Java Script",
//   "TypeScript",
//   "HTML",
//   "CRA",
//   "Vite",
//   "Yarn",
//   "pnpm",
//   "Next.js",
//   "React",
//   "Redux",
//   "RTK Query",
//   "CSS",
//   "CSS Modules",
//   "Styled Components",
//   "MUI",
//   "Radix UI",
//   "Storybook",
//   "Git/GitHub",
//   "Axios",
//   "Prettier",
//   "Zod"
// ];

export const Skills = (props: ServicePropsType) => {
  return (
    <StyledSkills>
      <FlexWrapper direction={'column'}>
        <IconWrapper>
          <Icon
            iconId={props.iconId || 'none'}
            width={props.width || '80px'}
            height={props.height || '80px'}
            viewBox={props.viewBox || '0 0 50 50'}
          />
        </IconWrapper>
        <Titile>{props.title}</Titile>
      </FlexWrapper>
    </StyledSkills>
  )
}
