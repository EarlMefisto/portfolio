import { Button } from '../../../../shared/components/Button'
import { PostsImage, PostsPlaceholder, PostsWrapper } from './MyProjectsPosts.styles'

type PostsPropsType = {
  src?: string
}

export const MyProjectsPosts = (props: PostsPropsType) => {
  return (
    <PostsWrapper>
      {props.src ? (
        <PostsImage src={props.src} alt="project preview" loading="lazy" />
      ) : (
        <PostsPlaceholder aria-hidden />
      )}
      <Button>push me</Button>
    </PostsWrapper>
  )
}