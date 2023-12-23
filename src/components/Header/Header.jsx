import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
display: flex;


`

const NavStyle = styled.nav`


`

const UlStyle = styled.ul`
display: flex;
list-style: none;
gap: 5rem;

`

const BtnStyle = styled.button`
border: none;
background: none;
font-size: 2rem;
cursor: pointer;
font-family: 'Nanum Pen Script', cursive;
`
export default function Header({ BtnNames,onBtnNameChange }) {
  return (
    <HeaderStyle>
      <NavStyle>
      <UlStyle>
        {BtnNames.map((value, index) => (
          <li key={index}>
            <BtnStyle onClick={() => onBtnNameChange(value)}>{value}</BtnStyle>
          </li>
        ))}
      </UlStyle>
      </NavStyle>
    </HeaderStyle>
  );
}

