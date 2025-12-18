import { Button } from '../../../../shared/components/Button'
import { PostsImage, PostsWrapper } from './MyProjectsPosts.styles'

type PostsPropsType = {
  src?: string
}

export const MyProjectsPosts = (props: PostsPropsType) => {
  return (
    <PostsWrapper>
      <PostsImage src={props.src} alt="image" />
      <Button>push me</Button>
    </PostsWrapper>
  )
}