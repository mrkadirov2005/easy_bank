import React from 'react'
import styled from 'styled-components'
import onlineType from "../img/easybank-landing-page (Copy)/online.png"
import simpleType from "../img/easybank-landing-page (Copy)/simple.png"
import fastOnboardding from "../img/easybank-landing-page (Copy)/fast.png"
import openApi from "../img/easybank-landing-page (Copy)/openAPI.png"
import stylesheet from "./styles.css"
const Cards=[
    {title:"Receive money in any currency with no fees",author:"By Claire Robinson",img:onlineType,text:' Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'},
    {title:" Treat yourself without worrying about money",author:"By Wilson Hutton",img:simpleType,text:'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'},
    {title:" Take your Easybank card wherever you go",author:"By Wilson Hutton",img:fastOnboardding,text:'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'},
    {title:" Our invite-only Beta accounts are now live!",author:"By Claire Robinson",img:openApi,text:'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'},

]
function L_articles() {
    const GlobalWrapper=styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 90%;
    height: auto;
    padding-left: 150px;
    background-color: #f2f2f2;
    margin-bottom: 200px;
    `
    const InfoPart=styled.div`  
    display: flex;
    align-items: flex-start;
    justify-content: flex-start ;
    text-align: left;
    flex-direction: column;
    width:90%;
    

    `

const cardWraa=styled.div` 
display: flex;
align-items:center ;
justify-content: space-between;
flex-direction: column;
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
    color: grey;
    `
  
    return (
    <GlobalWrapper>
<InfoPart>
<H1>Latest Articles</H1>

</InfoPart>
<CardsPart>{Cards.map(t=>{ 
    return <div className='L_wrapper' >
    
        <img className='squareShape' src={t.img}  alt={t.type}/>
        <span style={{display:"block"}}>{t.author}</span>
        <h2>{t.title}</h2>
        <p>{t.text}</p>
    </div>
})}</CardsPart>
    </GlobalWrapper>
  )
}

export default L_articles