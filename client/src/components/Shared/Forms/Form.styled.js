import styled from 'styled-components';
import { darken, lighten } from 'polished';
import Dropdown from 'react-dropdown';
import {
	$animDuration,
	$grey,
	$dangerRed,
	$elfGreen,
	$tomato,
	$white,
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
	width: ${({ width }) => width};
	${({ width }) => width === '100%' && 'margin-bottom: 2rem;'}
	position: relative;

	@media only screen and (max-width: 650px) {
		width: 100%;
		margin-bottom: 2rem;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

// TODO: Refactor this with a global customisable button component
export const Button = styled.button`
	${({ secondary }) =>
		secondary
			? `background: #fff; color: ${$grey}; border: 1px solid ${lighten(0.2, $elfGreen)};
				&:hover { color ${darken(0.2, $grey)}; }`
			: `background: ${$elfGreen}; color: ${$white}; border: 1px solid ${$elfGreen};
				&:hover { background: ${darken(0.1, $elfGreen)}; }`}
	${({ width }) => width && `width: ${width};`}
	min-width: 125px;
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.7rem;
	transition: ${$animDuration};

	&:hover {
		cursor: pointer;
	}
`;

export const generalInputStyles = `
	background: ${lighten(0.5, $grey)};
	border: none;
	border-radius: 3px;
	font-size: 1rem;
	padding: 0.6rem 1rem;
	color: ${darken(0.2, $grey)};
	display: inline-block;
	width: 100%;

	&::placeholder {
		color: ${lighten(0.2, $grey)};
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
		${({ value }) =>
			value === '' ? `color: ${lighten(0.2, $grey)};` : `color: ${darken(0.2, $grey)}`}
	}

	.Dropdown-menu {
		position: absolute;
		z-index: 99;
		left: 0;
		${generalInputStyles}
	}

	.Dropdown-option {
		padding: 0.5rem 1rem;
		&:hover {
			cursor: pointer;
			background: ${lighten(0.2, $grey)};
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
	color: ${darken(0.2, $grey)};
	display: inline-block;
	margin: 0.5rem 0;
`;

export const StyledTagInput = styled.div`
	${generalInputStyles};

	.ReactTags__tags {
		margin: 0;
	}
	.ReactTags__tagInput {
		display: inline-block;
		position: relative;
		width: 100%;
	}
	.ReactTags__tagInputField {
		width: 100%;
		background: transparent;
		border: none;
		inner-shadow: none;
		font-size: 1rem;
		color: ${darken(0.2, $grey)};
		&::placeholder {
			color: ${lighten(0.2, $grey)};
		}

		&:focus {
			outline: none;
		}
	}
	.ReactTags__selected {
		.ReactTags__tag {
			display: inline-block;
			margin: 0 0.2rem 0.2rem 0;
			padding: 0.1rem 0.5rem;
			border-radius: 3px;
			border: 1px solid ${lighten(0.2, $grey)};
			background: #fff;
			color: ${darken(0.2, $grey)};
		}
		.ReactTags__remove {
			padding-left: 0.5rem;
			transition: ${$animDuration};

			&:hover {
				cursor: pointer;
				color: ${$dangerRed};
			}
		}
	}
	.ReactTags__suggestions {
		position: absolute;
		width: 100%;
		background: ${lighten(0.4, $grey)};
		border-radius: 0 0 3px 3px;
		border: 1px solid ${lighten(0.2, $grey)};

		ul {
			list-style: none;
			margin: 0;
			padding: 0;
		}

		li {
			padding: 0.5rem;
			margin: 0;

			mark {
				font-weight: 500;
				background: ${$elfGreen};
			}
		}

		li.ReactTags__activeSuggestion {
			background: ${lighten(0.2, $grey)};
			color: ${darken(0.4, $grey)};
			border-radius: 0 0 3px 3px;
		}
	}
`;

export const ErrorText = styled.div`
	color: ${$tomato};
	font-size: 0.7rem;
	position: absolute;
	bottom: -1.3rem;
`;

export const InputDescription = styled.div`
	color: ${lighten(0.2, $grey)};
	font-size: 0.9rem;
	margin-bottom: 0.5rem;
`;
