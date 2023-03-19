import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
display: flex;
  margin-left: 3px;
  margin-bottom: 5px;
  color: #0d253f;
  font-weight: 500;

  &.active {
    color: #058bf8;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;