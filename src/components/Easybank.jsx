import React from 'react'
import EasyBank from "../img/easyBank.svg"
import styled from 'styled-components'


const Easybank = () => {
    const ImgContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* width: 5%; */
    
`
  return (
    <ImgContainer> <img src={EasyBank}  alt='easybank icon svg'/> EasyBank</ImgContainer>

  )
}

export default Easybank