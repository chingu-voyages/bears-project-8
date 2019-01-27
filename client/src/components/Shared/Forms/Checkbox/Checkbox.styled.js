import styled from 'styled-components';
import { $greyDark, $greyLightest, $animDuration } from '../../../../assets/styledVars';
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
	${({ active }) => active && `background: ${$greyDark}; color: ${$greyLightest};`}
	text-align: center;
	cursor: pointer;
`;
