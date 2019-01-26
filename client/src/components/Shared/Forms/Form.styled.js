import styled from 'styled-components';
import Dropdown from 'react-dropdown';
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

	@media only screen and (max-width: 650px) {
		width: 100%;
		margin-bottom: 2rem;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

export const Button = styled.button`
	${props =>
		props.secondary
			? `background: #fff; color: ${$greyLight}; border: 1px solid ${$greyLight};
				&:hover { background: ${$greyLighter}; border: 1px solid ${$greyLighter}; }`
			: `background: ${$greyLighter}; color: ${$greyDark}; border: none;
				&:hover { background: ${$greyLight}; }`}
	min-width: 125px;
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.7rem;
	transition: ${$animDuration};

	&:hover {
		cursor: pointer;
	}

	@media only screen and (max-width: 960px) {
		position: relative;
		top: 4rem;
	}
`;

const generalInputStyles = `
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

export const Input = styled.input`
	${generalInputStyles}
`;

export const Textarea = styled.textarea`
	${generalInputStyles}
`;

export const StyledDropdown = styled(Dropdown)`
	${generalInputStyles}
	position: relative;

	.Dropdown-control {
		// control options
	}

	.Dropdown-placeholder {
		${({ value }) => (value === '' ? `color: ${$greyLight};` : `color: ${$greyDark}`)}
	}

	.Dropdown-menu {
		position: absolute;
		z-index: 99;
		left: 0;
		${generalInputStyles}
	}

	.Dropdown-option {
		padding: 0.5rem 1rem;
		border-radius: 3px;

		&:hover {
			cursor: pointer;
			background: ${$greyLight};
		}
	}

	.Dropdown-arrow {
		position: absolute;
		top: 1rem;
		right: 1rem;
		height: 50px;
		width: 50px;
	}
`;

export const Label = styled.label`
	display: inline-block;
	margin: 0.5rem 0;
`;

export const StyledTagInput = styled.div`
	${generalInputStyles};

	.ReactTags__tags {
	}
	.ReactTags__tagInput {
	}
	.ReactTags__tagInputField {
	}
	.ReactTags__selected {
		.ReactTags__tag {
		}
		.ReactTags__remove {
		}
	}
	.ReactTags__suggestions {
	}
	ReactTags__activeSuggestion {
	}
`;
