import React from 'react' ;
import BackgroundBlock from '../components/BackgroundBlock'

import backgroundImage1 from '../assets/Dorime.jpg'

import {Title ,Subtitle} from '../components/Typography'
import styled from 'styled-components'

const Button =  styled.button`

  padding : .5rem 1rem;
  background-color: transparent;
  border : white solid 1px;
  border-radius : 8px;  color : white;
  color : #fff;
  margin : 1rem ;
  cursor : pointer ;
  transition : background-color .3s;

  text-transform : uppercase ;

  &:hover{
    background-color: white;
    color : #000;

  }
  
`
const BackgroundImage1 = styled.div`

  height : 100vh;
  width : auto ;
  background-image : url(${props => props.src});
  background-repeat : no-repeat;
  background-size : cover ;
  background-position : center ;
  background-attachment :fixed ;


  position : relative;

`


function Home () {
  return <>
        <div>
          <BackgroundBlock>
              <Title>Dorime Ameno</Title>
              <Subtitle>You shall not pass</Subtitle>
              <Button as="a" href="#content">Doge Click</Button>      
          </BackgroundBlock>
          <BackgroundImage1  id="content" src={backgroundImage1}></BackgroundImage1>
        </div>
    </>

}

export default Home;