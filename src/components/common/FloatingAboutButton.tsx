import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";


const wiggle = keyframes`
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    50% { transform: rotate(-2deg); }
    75% { transform: rotate(1deg); }
`;


const Wrapper = styled(Link)`
    position: fixed;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);

    z-index: 999;

    display: inline-flex;
    align-items: center;

    padding: 8px 12px;
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    border: 1px solid rgba(255, 255, 255, 0.18);

    color: var(--text);
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;

    box-shadow:
        0 8px 24px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.12);

    transition:
        transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1),
        background 200ms ease;

    animation: ${wiggle} 3.5s ease-in-out infinite;

    &:hover {
        transform: translateY(-50%) scale(1.05);
        background: rgba(255, 255, 255, 0.16);
    }

    &:active {
        transform: translateY(-50%) scale(0.94);
    }
`;


export default function FloatingAboutButton() {
    return <Wrapper to="/about">About Me</Wrapper>;
}