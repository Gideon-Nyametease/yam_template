import React from 'react'
import styled from 'styled-components'

const Cardd = ({ children }) => (
  <StyledCardd>
    {children}
  </StyledCardd>
)


const StyledCardd = styled.div`
  border-radius: 30px; 
  box-shadow: 1px 1px 0.9px ${({ theme }) => theme.shadowLight}, inset 1px 1px 0.9px ${({ theme }) => theme.shadowDark} ;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 100px;
  width: 700px;
  margin: 0 auto;
`

  
export default Cardd