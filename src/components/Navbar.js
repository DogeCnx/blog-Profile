import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useScroll from '../utils/useScroll'

const Container = styled.div`
  width: 100%;
  position : fixed;
  z-index : 10000;
  background-color : ${props => (props.isScroll ? '#fff' : 'transparent')};
  color :  ${props => (props.isScroll ? '#000' : '#fff')};
  transition : background-color 0.5s;
`
const Wrapper = styled.div`
  display : flex;
  flex :1;
  padding : 1rem;  
  justify-content : flex-end ;  
`

const Logo = styled.div``

const Action = styled.li`
  padding : 0 1rem;  
`

const ActionContainer = styled.ul`
  display :flex;
  flex : 1 ;
  justify-content : flex-end ;
`


function NavBar () {
  const isScroll = useScroll({scrollRange:20})

  return (
  <Container isScroll={isScroll} >
    <Wrapper>
        <Logo>Logo</Logo>
        <ActionContainer>
          <Action><Link to='/' >Home</Link></Action>
          <Action><Link to='/about' >About</Link></Action>
          <Action><Link to='/content' >Action</Link></Action>
          <Action><Link to='/story' >Story</Link></Action>
        </ActionContainer>
    </Wrapper>

  </Container>)
}

export default NavBar;