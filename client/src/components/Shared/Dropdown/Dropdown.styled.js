import styled from 'styled-components';

import { $midGray, $gray } from '../../../assets/styledVars';

export const Wrapper = styled.div`
	user-select: none;
	position: relative;
	width: 150px;
	margin-right: -15px;
`;

export const Header = styled.div`
	display: flex;
	color: inherit;
	align-items: center;
	justify-content: flex-end;
	cursor: default;
	position: relative;
	background-color: ${$midGray};
	/* border: 1px solid black; */

	& span {
		padding-right: 20px;
	}
`;

export const HeaderTitle = styled.div`
	margin: 2px 20px;
	margin-right: 30px;
`;

export const List = styled.ul`
	z-index: 10;
	position: absolute;
	width: 100%;
	/* margin: 0; */
	border: 1px solid ${$gray};
	border-top: none;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
	background-color: ${$midGray};
	padding: 15px 0;
	max-height: 215px;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
`;

export const ListItem = styled.li`
	width: 100%;
	cursor: pointer;
	padding: 8px 10px;
	line-height: 1.6rem;
	display: inline-block;
	white-space: nowrap;
	text-overflow: ellipsis;

	&.selected {
		color: #fff;
		background-color: ${$gray};
	}

	&:hover {
		color: #fff;
		background-color: ${$gray};
	}
`;
