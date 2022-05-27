import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	font-size: 16px;
	color: white;
	padding: 1rem 0;
	font-family: monospace;
	@media only screen and (max-width: 450px) {
		font-size: 12px;
	}
`;

const Text = styled.p`
	text-align: center;
`;

const Footer = () => {
	return (
		<Container>
			<Text>
				'...'
			</Text>
		</Container>
	);
};

export default Footer;
