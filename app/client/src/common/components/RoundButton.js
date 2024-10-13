/**
 * @flow
 */

import Button from './Button';
import { colors } from '../theme';

const RoundButton = Button.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 5px;
  border-radius: 50%;
  width: 40px; // Increased size for better usability
  height: 40px;
  padding: 0;
  background: ${colors.background};
  border: 2px solid ${colors.primary}; // Added border for definition

  i {
    transition: all 0.4s ease;
  }

  &:disabled {
    &:hover {
      background: ${colors.background};
      border-color: #ccc;
      color: #ccc;
      cursor: default;
    }
  }

  &:hover {
    background: ${colors.primary}; // Change background on hover
    color: ${colors.background}; // Change text color on hover

    i {
      color: ${colors.background};
    }
  }

  &:focus {
    outline-color: ${colors.primary};
    border-color: ${colors.primary};
  }
`;

export default RoundButton;
