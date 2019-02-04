import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	text-align: center;
`;

export const FirstPage = styled.div`
	width: 100%;
	min-height: 100vh;
	background: linear-gradient(15deg, #e8e8e8, #ffffff 80%);
	padding-top: 160px;
`;

export const HomeNav = styled.div`
	position: absolute;
	top: 0;
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 0 2rem;
`;

export const NavContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1024px;
`;

export const Logo = styled.div`
	font-size: 24;
	color: #323232;
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SmallLogo = styled.svg`
	height: 60px;
	padding-right: 1rem;
`;

export const NavLinks = styled.div``;

export const NavLink = styled(Link)`
	transition: 0.3s;
	border-radius: 6px;
	display: inline-block;
	padding: 0.5rem 2rem;
	text-decoration: none;
	background: transparent;
	${({ highlight }) => highlight && 'border: 2px solid #D5F1E7; &:hover{ background: #d5f1e7 }'};
	color: #5e5e5e;
	font-size: 1.125rem;
	margin-left: 2rem;
`;

export const MainTitle = styled.h1`
	color: #5e5e5e;
	font-size: 2.25rem;
	font-weight: 600;
`;

export const LargeLogo = styled.svg`
	width: 274px;
	padding: 3rem 0;
`;

export const MainSubtitle = styled.div`
	font-size: 1.5rem;
	color: #878787;
`;

export const TopRegisterButton = styled.button`
	padding: 1rem 4rem;
	font-size: 1.125rem;
	color: #fff;
	background: #5cbc9a;
	margin-top: 3.5rem;
	border-radius: 6px;
	cursor: pointer;
	border: none;
	transition: 0.3s;
	&:hover {
		background: #bbead9;
		color: #323232;
	}
`;
