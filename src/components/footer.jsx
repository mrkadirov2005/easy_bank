import React from 'react'
import styled from 'styled-components'
import Easybank from './Easybank'
import facebook from "../img/footer_socials/facebook.svg"
import youtube from "../img/footer_socials/youtube.svg"
import twitter from "../img/footer_socials/twitter.svg"
import instagram from "../img/footer_socials/instagram.svg"
import pinterest from "../img/footer_socials/pinterest.svg"
import Button from './ButtonComp'


const Footer=styled.footer` 
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
height: 191px;
background-color: #2D314D;
color: white;
`
const LeftPart=styled.div` 
display: flex;
align-items: center;
justify-content: flex-start;
width: 70%;
height: 100%;
`
const FirstColumn=styled.div` 
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: column;
height: 50%;
width: 15%;
`
const Socials=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
/* width: ; */
`

const footer = () => {
  
  return (
    <Footer>

        <LeftPart> 
        <FirstColumn>
            <Easybank/>
    <Socials>
<img src={facebook} alt='socials' />
<img src={youtube} alt='socials' />
<img src={twitter} alt='socials' />
<img src={pinterest} alt='socials' />
<img src={instagram} alt='socials' />


    </Socials>
        </FirstColumn>
        <div className='footer--list_div'>
            <ul className='footer--links-ul' >
                <li>About us</li>
                <li>Contact</li>
                <li> Blog</li>

            </ul>
            <ul className='footer--links-ul'>
                <li>Careers</li>
                <li>Support</li>
                <li> Privacy Policy</li>

            </ul>
        </div>
        </LeftPart>

        <div className='right--part'>
            <Button >Require Visit</Button>
            <span>© Easybank. All Rights Reserved</span>
        </div>
    </Footer>
  )
}

export default footer