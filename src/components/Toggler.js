import React from 'react'
import { func, string } from 'prop-types'
import { ReactComponent as MoonIcon } from './images/moon.svg'
import { ReactComponent as SunIcon } from './images/sunn.svg'
import styled from "styled-components"



const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 5rem;
  height: 2.2rem;

  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
            <SunIcon />
            <MoonIcon />
        </ToggleContainer>
    );
  };
  
  Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
  }
  
export default Toggle;
