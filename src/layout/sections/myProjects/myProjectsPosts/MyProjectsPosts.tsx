import { Button } from '../../../../shared/components/Button'
import { PostsImage, PostsWrapper } from './MyProjectsPosts.styles'

type PostsPropsType = {
  src: string
  href?: string
}

export const MyProjectsPosts = (props: PostsPropsType) => {
  return (
    <PostsWrapper>
      <PostsImage src={props.src} alt="" />
      <Button>push me</Button>
    </PostsWrapper>
  )
}
