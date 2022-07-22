import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Passwordlist from '../assets/rsa.png';
import nearNeighbor from '../assets/Nearestneighbor.gif';
import ipv62ipv4 from '../assets/ipv62ipv4.png';
import stegano from '../assets/stega.png';
import BFPasswordCracker from '../assets/upcomm.png';
import { Github } from '@styled-icons/boxicons-logos';


const Container = styled(motion.div)`
	padding-top: 2em;
	color: white;
	overflow: hidden;
	font-family: 'Asap', sans-serif;
	width: 100%;
`;

const Row = styled.div`
	padding: 4em 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media only screen and (max-width: 450px) {
		padding: 2em 0;
		flex-direction: ${(props) => (props.revert ? 'column-reverse' : 'column')};
	}
`;

const LeftRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.text ? 'flex-end' : 'flex-start')};
	width: ${(props) => (props.text ? '50%' : '50%')};
	height: 200px;
	height: ${(props) => (props.text ? '300px' : '250px')};
	border-radius: 5px;
	padding: 15px;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
		justify-content: center;
		padding: 0;
	}
`;

const RightRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.text ? 'flex-start' : 'flex-end')};
	width: ${(props) => (props.text ? '50%' : '50%')};
	height: 200px;
	height: ${(props) => (props.text ? '300px' : '250px')};
	border-radius: 5px;
	padding: 15px;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
		justify-content: center;
	}
`;

const ImgContainer = styled.div`
	width: 500px;
	height: 300px;
	position: relative;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 80%;
	}
`;



const Img = styled.img`
	height: 100%;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
	}
`;

const Card = styled.div`
	width: 85%;
	height: 80%;
	border-radius: 5px;
	padding: 25px 30px;
	background: #ffffff14;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		width: 75%;
		padding: 15px 20px;
	}
`;

const Title = styled.h4`
	font-size: 24px;
	margin: 0;
	padding: 0;
	color: #ffc200;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 20px;
	}
`;

const Description = styled.h4`
	margin: 0;
	padding: 0;
	font-size: 18px;
	font-weight: 300;
	margin: 0;
	padding: 0;
	padding: 10px 0;
	font-family: 'Calibre', sans-serif;
	font-family: 'Roboto', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 16px;
		line-height: 23px;
	}
`;

const Technology = styled.div`
	font-family: 'Roboto';
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;
const TechItems = styled.span`
	padding-right: 10px;
	padding-top: 10px;
	font-size: 18px;
	color: #ffffffbf;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

const Hastag = styled.span`
	color: #ffc200;
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-top: 1em;
	a {
		color: white;
		text-decoration: none;
	}
`;

const Button = styled(motion.div)`
	padding: 0.5em;
	cursor: pointer;
	svg {
		width: 30px;
		@media only screen and (max-width: 450px) {
			width: 27px;
		}
	}
`;

const AdvancedProjects = ({ isMobile }) => {
	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={Passwordlist} alt='rsa.png' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Prime Breaker</Title>
						<Description>
						Program that uses GPGPU to factorize, test if a number is
						prime and, of course, decompose this same
						number into prime factors, we use CUDA to do the parallelism.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>C++
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>GPGPU
							</TechItems>
						</Technology>

						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Linux OS
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>CUDA
							</TechItems>
						</Technology>
						<ButtonContainer>
						    <a href='https://github.com/MonaQuimbamba/Projet-GPU' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -1, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>

						</ButtonContainer>
					</Card>
				</RightRow>
			</Row>



			<Row revert={true}>
				<LeftRow text={true}>
					<Card>
						<Title>IPv6 translation ⟺ IPv4 thrus TCP protocol</Title>
						<Description>
						The goal of this program is to allow a machine using only the TCP/IPv6 stack to communicate with
							machines in IPv4 transparently through the TCP protocol.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Python
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Scapy
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>NetFilter
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Linux OS
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Radvd
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>NFQueue
							</TechItems>
						</Technology>
						<ButtonContainer>
						<a href='https://github.com/MonaQuimbamba/traducteur-IPv6-IPv4-pour-le-protocole-TCP/tree/main' target='_blank' rel='noopener noreferrer'>
						<Button whileHover={{ y: [0, -1, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
							<Github />
						</Button>
					</a>
						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={ipv62ipv4} alt='ipv62ipv4' />
					</ImgContainer>
				</RightRow>
			</Row>




			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={stegano} alt='stegano' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Authentication, Secure Web and Steganography</Title>
						<Description>
						In this project, we are building a web server that acts
						as a CA, it will issue certificates and verify
						the authentication of certificates.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Python
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Openssl
							</TechItems>

							<TechItems>
								<Hastag>#</Hastag>Framework bottle
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Linux OS
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a
								href='https://github.com/MonaQuimbamba/Authentification_Web_securise_Steganographie/tree/main'
								target='_blank'
								rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -1, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>

						</ButtonContainer>
					</Card>
				</RightRow>
			</Row>
			<Row revert={true}>
				<LeftRow text={true}>
					<Card>
						<Title>Genetic algorithm IA </Title>
						<Description>
					 Use genetic algorithm to solve the Travelling salesman problem.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Python
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Jupyter Notebook
							</TechItems>
						</Technology>
						<ButtonContainer>
						<a href='https://github.com/MonaQuimbamba/Projet-IA/blob/Claudio/Algorithme-g%C3%A9n%C3%A9tique.ipynb'
								target='_blank'
								rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -1, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
						</a>

						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={nearNeighbor} alt='nearNeighbor' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={BFPasswordCracker} alt='BFPasswordCracker' />

					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>IPsec-protected L2TPv3 tunnel for VLAN connection operation</Title>
						<Description>
						Description
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Framework
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>OS
							</TechItems>
						</Technology>
					</Card>
				</RightRow>
			</Row>
		</Container>
	);
};

export default AdvancedProjects;
