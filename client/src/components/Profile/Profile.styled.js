import styled from 'styled-components';

import { $gray, $white } from '../../assets/styledVars';

import { ButtonWrapper } from '../Shared/Button/Button.styled';

export const Container = styled.section`
	height: 80vh;
	padding: 0 2.5rem;
`;

export const Breadcrumbs = styled.h1`
	padding: 1.5rem;
	font-weight: 400;
	font-size: 18px;

	& span {
		cursor: pointer;
		color: ${$gray};
	}
`;

export const SectionTitle = styled.h2`
	font-weight: normal;
	line-height: normal;
	font-size: 16px;
	margin-bottom: 10px;
`;

export const ProfileSection = styled.section`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 30% 1fr;
`;

export const Sidebar = styled.aside`
	display: flex;
	flex-direction: column;
	background-color: #f8f8f8;
	/* justify-content: center; */
	/* align-items: center; */
`;

export const UserInfo = styled.div`
	padding: 1.5rem;
	padding-top: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	flex: 1 1 auto;

	& .user__tags {
		display: flex;
		flex-wrap: wrap;
	}

	& .user__info {
		text-align: center;
		font-size: 14px;

		& em {
			font-weight: 300;
			margin-bottom: 1rem;
		}
	}
`;

export const Label = styled.span`
	background-color: ${$gray};
	color: ${$white};
	border-radius: 5px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	margin: 3px;
	font-size: 14px;
	line-height: 0;
`;

export const UserActions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem;
	padding-top: 0;

	${ButtonWrapper} {
		margin-bottom: 0.5rem;
	}
`;

export const Dashboard = styled.div`
	border: 3px solid magenta;
`;
