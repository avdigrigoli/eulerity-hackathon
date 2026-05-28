import styled from "styled-components";
import { useNavigate } from "react-router-dom";

/**
 * Full-page fallback UI for missing routes, invalid IDs, or failed lookups.
 * Designed to be reusable across the app (route-level + component-level errors).
 */

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
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 14px;
    box-shadow: var(--shadow-md);
`;

const Title = styled.h1`
    font-size: 28px;
    margin: 0;
`;

const Subtitle = styled.p`
    color: var(--muted);
    margin: 0;
    line-height: 1.5;
`;

const Code = styled.div`
    font-size: 64px;
    font-weight: 700;
    opacity: 0.15;
    line-height: 1;
`;

const ButtonRow = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const Button = styled.button<{ $primary?: boolean }>`
    padding: 10px 14px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid var(--border);
    background: ${({ $primary }) =>
    $primary ? "var(--primary)" : "transparent"};
    color: var(--text);
    transition: 0.2s ease;

    &:hover {
        opacity: 0.85;
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
    );
}