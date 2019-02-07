import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { $grey, $animDuration } from '../../../../assets/styledVars';
import { generalInputStyles } from '../Form.styled';

export const CheckboxContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const StyledCheckbox = styled.div`
  ${generalInputStyles}
  transition: ${$animDuration};
	${({ active }) => active && `background: ${darken(0.2, $grey)}; color: ${lighten(0.6, $grey)};`}
	text-align: center;
	cursor: pointer;
`;
