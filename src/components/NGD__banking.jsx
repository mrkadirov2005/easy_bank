import React from "react";
import styled from "styled-components";
import Button from "./ButtonComp";
import background  from "../img/NGDB-bg-desktop.png"
import PhonesIMGS from "../img/NGDB-phones-desktop.svg"

function NGD__banking() {
  const NGDBankingContainer = styled.section`
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: space-between;
    width: 90%;
    padding-left: 150px;
    background-color: #F2F2F2;
    color:black !important;
  `;
  const NGDBinfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 40%;
  `;
  const NGDBinfoHeading = styled.h1`
    font-size: 56px;
    font-weight: 400;
    /* color: grey; */
  `;
  const NGDBinfoP = styled.p`
    font-size: 18px;
    font-weight: normal;
    color: grey;
  `;
  const NGDBIMG=styled.div`
  width: 70%;
  height: 1000px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  `
  const Phones=styled.img`
  position: absolute;
  `

  return (
    <NGDBankingContainer>
      <NGDBinfo>
        <NGDBinfoHeading> Next generation digital banking</NGDBinfoHeading>
        <NGDBinfoP>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </NGDBinfoP>

      <Button>Request Invite</Button>
      </NGDBinfo>

     <NGDBIMG>
     <img  src={background}  alt="background" />
     <Phones src={PhonesIMGS}   alt="image of phones" />
     
     </NGDBIMG>
    </NGDBankingContainer>
  );
}

export default NGD__banking;
