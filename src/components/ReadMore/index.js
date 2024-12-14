import {useState} from 'react'
import {
  BgContainer,
  ReactHeading,
  ReactParagraph,
  Img,
  Message,
  Button,
} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const [read, setRead] = useState(false)
  console.log(reactHooksDescription.slice())

  return (
    <BgContainer>
      <ReactHeading>React Hooks</ReactHeading>
      <ReactParagraph>Hooks are a new addition to React</ReactParagraph>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Message>
        {read ? reactHooksDescription : reactHooksDescription.slice(0, 170)}
      </Message>
      <Button
        onClick={() => {
          setRead(preRead => !preRead)
        }}
      >
        {`Read ${read ? 'Less' : 'More'}`}
      </Button>
    </BgContainer>
  )
}

export default ReadMore
