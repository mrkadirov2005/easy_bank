import React from 'react'
import styled from 'styled-components'
import Button from './ButtonComp'
import Easybank from './Easybank'
const headerLists=[
    {one:"Home"},
    {one: "About"},
    {one:"Contact"},
    {one:"Blog"},
    {one:"careers"},


]


function header() {
    const WrapperDiv=styled.section`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
    background-color: white;
    padding-bottom: 10px;
    `

const ListContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 30%;
`
const Lists=styled.li`
display: flex;
align-items: center;
justify-content: center;
color: grey;
text-transform: uppercase;

`


  return (
    <WrapperDiv>
    <Easybank/>
    <ListContainer>
        {headerLists.map(t=> {
            return <Lists>{t.one}</Lists>
        })}
    </ListContainer>
    <Button type='button'>Request Invite</Button>
    </WrapperDiv>
  )
}

export default header