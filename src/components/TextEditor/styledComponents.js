import styled from 'styled-components'

export const TextBackground = styled.div`
  background-color: #25262c;
  background-size: cover;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextEditorCard = styled.div`
  background-color: #1b1c22;
  padding: 18px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  height: 80vh;
`
export const HeadingAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`
export const TextEditorHeading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 24px;
  font-weight: 500;
  margin-top: 0px;
`
export const TextEditorImage = styled.img`
  width: 250px;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  height: 70vh;
  min-height: 50vh;
  min-width: 25vw;
  margin-left: 60px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
`
export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
`
export const BoldButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  background-color: transparent;
  color: ${props => props.color};
`
export const ItalicButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 15px;
  background-color: transparent;
  color: ${props => props.color};
`
export const UnderlineButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.color};
`
export const HrLine = styled.hr`
  color: #f8fafc;
  width: 100%;
  border-radius: 1px;
`
export const TextArea = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 18px;
  color: #f1f5f9;
  font-size: 16px;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
