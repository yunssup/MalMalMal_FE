import styled from "styled-components";
/*페이지 전환될 때 근데 적용 안되는듯;;*/
export const FadeContainer = styled.div`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 1000ms ease-out;
  }
`;
