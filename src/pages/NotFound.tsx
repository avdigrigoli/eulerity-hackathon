import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer.tsx";


const Wrapper = styled.div`
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
`;

const Card = styled.div`
    max-width: 520px;
    width: 100%;

    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 18px;

    box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);

    overflow: hidden;

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 14px;

    padding: 28px;
    text-align: center;

    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.15),
                rgba(255, 255, 255, 0.02)
        );
        pointer-events: none;
    }

    transition: transform 220ms ease, box-shadow 220ms ease;

    &:hover {
        transform: scale(1.02);
        box-shadow:
                0 12px 40px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
`;


const Code = styled.div`
    font-size: 64px;
    font-weight: 700;
    opacity: 0.15;
    line-height: 1;
`;

const Title = styled.h1`
    font-size: 22px;
    margin: 0;
`;

const Subtitle = styled.p`
    color: var(--muted);
    margin: 0;
    line-height: 1.5;
    font-size: 13px;
`;


const ButtonRow = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 8px;
`;

const Button = styled.button<{ $primary?: boolean }>`
    font-size: 12px;
    font-weight: 500;

    display: inline-flex;
    align-items: center;

    padding: 6px 10px;
    border-radius: 8px;

    cursor: pointer;

    width: fit-content;

    border: 1px solid
    ${({ $primary }) =>
            $primary ? "transparent" : "var(--border)"};

    background: ${({ $primary }) =>
            $primary ? "var(--primary)" : "transparent"};

    color: ${({ $primary }) =>
            $primary ? "#fff" : "var(--text)"};

    transition: transform 200ms cubic-bezier(0.4, 0, 1, 1),
    background 200ms ease;

    &:hover {
        background: ${({ $primary }) =>
                $primary ? "var(--primary-hover)" : "var(--card)"};
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.94);
        transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
    }
`;


export default function NotFound({
                                     title = "Not Found",
                                     message = "The page or resource you're looking for doesn’t exist.",
                                     showHome = true,
                                 }: {
    title?: string;
    message?: string;
    showHome?: boolean;
}) {
    const navigate = useNavigate();

    return (
        <PageContainer>
        <Wrapper>
            <Card>
                <Code>404</Code>

                <Title>{title}</Title>

                <Subtitle>{message}</Subtitle>

                <ButtonRow>
                    {showHome && (
                        <Button $primary onClick={() => navigate("/")}>
                            Go Home
                        </Button>
                    )}

                    <Button onClick={() => navigate(-1)}>
                        Go Back
                    </Button>
                </ButtonRow>
            </Card>
        </Wrapper>
        </PageContainer>
    );
}