import styled from 'styled-components';
import {
	$animDuration,
	$greyLightest,
	$greyLighter,
	$greyLight,
	$greyDark,
} from '../../../assets/styledVars';

export const ButtonGroup = styled.div`
	width: 270px;
	display: flex;
	${props =>
		props.children.length > 1
			? 'justify-content: space-between;'
			: 'justify-content: flex-end;'}
	align-items: center;
`;

export const StyledFormGroup = styled.div`
	width: ${props => props.width};
`;

export const Button = styled.button`
	${props =>
		props.secondary
			? `background: #fff; color: ${$greyLight}; border: 1px solid ${$greyLight}; &:hover { background: ${$greyLighter}; border: 1px solid ${$greyLighter}; }`
			: `background: ${$greyLighter}; color: ${$greyDark}; border: none; &:hover { background: ${$greyLight}; }`}
	min-width: 125px;
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.7rem;
	transition: ${$animDuration};

	&:hover {
		cursor: pointer;
	}
`;

export const Input = styled.input`
	background: ${$greyLightest};
	border: none;
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.6rem 1rem;
	color: ${$greyDark};
	display: inline-block;
	width: 100%;

	&::placeholder {
		color: ${$greyLight};
	}
`;

export const Textarea = styled.textarea`
	background: ${$greyLightest};
	border: none;
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.6rem 1rem;
	color: ${$greyDark};
	display: inline-block;
	width: 100%;
	height: 6rem;

	&::placeholder {
		color: ${$greyLight};
	}
`;

export const Label = styled.label`
	display: inline-block;
	margin: 0.5rem 0;
`;
