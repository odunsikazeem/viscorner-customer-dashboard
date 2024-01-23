import React from "react";
import styled from 'styled-components';

function Footer() {
    return(

    
        <FooterContainer>
			<div><h5>Group 6 Project</h5></div>
        <div className="text-center p-3 );">
    		© 2024 Copyright:
    	<a className="text-body" href="https://spectacular-dusk-12cad8.netlify.app/">Project-Link</a>
  		</div>
        </FooterContainer>

    )
};

export default Footer;



const FooterContainer = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	background-color: #1E73BE;
	left:0;
	right:0;
	bottom:0;
	width: auto;
	color: white;
	flex-direction: column; 
  	align-items: center; 
	
			
	}
`;






