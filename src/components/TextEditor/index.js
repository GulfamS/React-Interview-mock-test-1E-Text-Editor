import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextBackground,
  TextEditorCard,
  HeadingAndImageContainer,
  TextEditorHeading,
  TextEditorImage,
  EditorContainer,
  ButtonContainer,
  HrLine,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {boldText: false, italicText: false, underlineText: false}

  bold = () => {
    this.setState(prevState => ({boldText: !prevState.boldText}))
  }

  italic = () => {
    this.setState(prevState => ({italicText: !prevState.italicText}))
  }

  underline = () => {
    this.setState(prevState => ({underlineText: !prevState.underlineText}))
  }

  render() {
    const {boldText, italicText, underlineText} = this.state

    const boldTextColor = boldText === false ? '#f1f5f9' : '#faff00'

    const italicTextColor = italicText === false ? '#f1f5f9' : '#faff00'

    const underlineTextColor = underlineText === false ? '#f1f5f9' : '#faff00'

    const fontWeight = boldText === false ? 'normal' : 'bold'

    const fontStyle = italicText === false ? 'normal' : 'italic'

    const textDecoration = underlineText === false ? 'normal' : 'underline'

    return (
      <TextBackground>
        <TextEditorCard>
          <HeadingAndImageContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingAndImageContainer>
          <EditorContainer>
            <ButtonContainer>
              <li>
                <BoldButton
                  type="button"
                  onClick={this.bold}
                  data-testid="bold"
                  color={boldTextColor}
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  type="button"
                  onClick={this.italic}
                  data-testid="italic"
                  color={italicTextColor}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  type="button"
                  onClick={this.underline}
                  data-testid="underline"
                  color={underlineTextColor}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ButtonContainer>
            <HrLine />
            <TextArea
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </EditorContainer>
        </TextEditorCard>
      </TextBackground>
    )
  }
}
export default TextEditor
