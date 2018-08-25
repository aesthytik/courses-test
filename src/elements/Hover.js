import styled from 'styled-components';
import { darken } from 'polished';

import Button from './Button';

const HoverPrimaryButton = styled(Button)`
  :hover {
    background-color: ${darken(0.2, '#1dbe71')} !important;
    color: ${darken(0.2, '#fff')} !important;
    transition: 0.2s;
`;
const HoverSecondaryButton = styled(Button)`
  :hover {
    background-color: ${darken(0.2, '#48BEFF')} !important;
    color: ${darken(0.2, '#fff')} !important;
    transition: 0.2s;
`;

export { HoverPrimaryButton, HoverSecondaryButton };
