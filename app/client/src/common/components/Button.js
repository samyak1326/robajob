/**
 * @flow
 */

import styled from 'styled-components';
import { colors } from '../../common/theme';
import { lighten, darken } from 'polished';

const Button = styled.button`
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  background-color: transparent;
  color: ${colors.foreground};
  margin: 10px 10px 0 0;
  outline: none;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  user-select: none;

  &:focus:not(:hover) {
    background-color: ${darken(0.1, colors.primary)};
    border-color: ${lighten(0.2, colors.primary)};
    color: ${lighten(0.5, colors.foreground)};
  }

  &:hover {
    background: ${colors.primary};
    color: ${colors.background};
    cursor: pointer;
  }

  i {
    color: ${colors.foreground};
  }

  &:disabled {
    border-color: #ccc;
    color: #ccc;
    background-color: #f0f0f0;

    &:hover {
      background: ${colors.background};
      border-color: #444;
      color: #444;
      cursor: not-allowed;
    }

    i {
      color: #999;
    }
  }

  @media screen and (max-width: 850px) {
    padding: 6px 10px;
    font-size: 0.9em;
  }
`;

export default Button;
