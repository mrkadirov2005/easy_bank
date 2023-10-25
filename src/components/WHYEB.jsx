import React from 'react'
import styled from 'styled-components'
import onlineType from "../img/WHYEB_icons/onlines.svg"
import simpleType from "../img/WHYEB_icons/simple.svg"
import fastOnboardding from "../img/WHYEB_icons/fast.svg"
import openApi from "../img/WHYEB_icons/openAPI.svg"

const Cards=[
    {type:"Online Banking",img:onlineType,text:' Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'},
    {type:"Simple Budgeting",img:simpleType,text:'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'},
    {type:"Fast Onboarding",img:fastOnboardding,text:'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'},
    {type:"Open API",img:openApi,text:'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'},

]
function WHYEB() {
    const GlobalWrapper=styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 90%;
    height: auto;
    padding-left: 150px;
    background-color: #F4F5F7;
    padding-bottom: 100px;
    `
    const InfoPart=styled.div`  
    display: flex;
    align-items: flex-start;
    justify-content: flex-start ;
    text-align: left;
    flex-direction: column;
    width:90%;
    

    `
    const H1=styled.h1`
    font-size: 40px;
    color: grey;
    text-align: left;
    `
    const P=styled.p`
    color: grey;
    font-size: 18px;
    `
    const CardsPart=styled.div` 
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;
    color: grey !important;
    `
  
    const cardImg=styled.img` 
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
    margin-right: auto;
    `
    return (
    <GlobalWrapper>
<InfoPart>
<H1>Why choose Easybank?</H1>
<P>We leverage Open Banking to turn your bank account into your financial hub. <br/> Control your finances like never before.</P>
</InfoPart>
<CardsPart>{Cards.map(t=>{ 
    return <div style={{textAlign:"left", width:"250px"}}>
        <img src={t.img}  alt={t.type}/>
        <h2>{t.type}</h2>
        <p>{t.text}</p>
    </div>
})}</CardsPart>
    </GlobalWrapper>
  )
}

export default WHYEB