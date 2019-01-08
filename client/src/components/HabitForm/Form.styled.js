import styled from 'styled-components';

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
			? 'background: #fff; color: #c4c4c4; border: 1px solid #c4c4c4;'
			: 'background: #e8e8e8; color: #757575; border: none;'}
	min-width: 125px;
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.7rem;

	&:hover {
		cursor: pointer;
	}
`;

export const Input = styled.input`
	background: #f0f0f0;
	border: none;
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.6rem 1rem;
	color: #757575;
	display: inline-block;
	width: 100%;

	&::placeholder {
		color: #c4c4c4;
	}
`;

export const Textarea = styled.textarea`
	background: #f0f0f0;
	border: none;
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.6rem 1rem;
	color: #757575;
	display: inline-block;
	width: 100%;
	height: 6rem;

	&::placeholder {
		color: #c4c4c4;
	}
`;

export const Label = styled.label`
	display: inline-block;
	margin: 0.5rem 0;
`;
