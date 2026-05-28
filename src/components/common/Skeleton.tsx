import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const SkeletonBox = styled.div<{ height?: string }>`
  background: #1f2937;
  border-radius: var(--radius-md);
  width: 100%;
  height: ${({ height }) => height || "16px"};
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export default SkeletonBox;