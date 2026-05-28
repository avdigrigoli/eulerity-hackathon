import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { usePets } from "../hooks/usePets";
import { useSelection } from "../context/SelectionContext";
import NotFound from "./NotFound.tsx";

// -------------------- WRAPPER --------------------

const Wrapper = styled.div`
    width: min(900px, 100%);
    margin: 0 auto;
    padding: 24px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

// -------------------- GLASS CARD (STATIC) --------------------

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 16px;
    overflow: hidden;

    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    border: 1px solid rgba(255, 255, 255, 0.14);

    box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

// -------------------- IMAGE --------------------

const Image = styled.img`
    width: 100%;
    height: 100%;
    min-height: 320px;
    object-fit: cover;
`;

// -------------------- CONTENT --------------------

const Content = styled.div`
    padding: 22px;

    display: flex;
    flex-direction: column;
    gap: 14px;

    h1 {
        font-size: 22px;
        font-weight: 600;
        color: var(--text);
        margin: 0;
    }

    p {
        color: var(--muted);
        line-height: 1.6;
        font-size: 14px;
    }

    small {
        color: var(--muted);
        font-size: 12px;
        opacity: 0.8;
    }
`;

// -------------------- BUTTONS (APPLE PRESS FEEL ONLY) --------------------

const ButtonRow = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 6px;
`;

const Button = styled.button<{ $ghost?: boolean }>`
    padding: 8px 12px;
    border-radius: 10px;

    cursor: pointer;
    border: 1px solid
    ${({ $ghost }) => ($ghost ? "var(--border)" : "transparent")};

    background: ${({ $ghost }) =>
            $ghost ? "transparent" : "var(--primary)"};

    color: ${({ $ghost }) =>
            $ghost ? "var(--text)" : "#fff"};

    font-size: 12px;
    font-weight: 500;

    width: fit-content;

    transition:
            transform 120ms cubic-bezier(0.2, 0.8, 0.2, 1),
            opacity 160ms ease;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.94);
    }
`;

// -------------------- BACK BUTTON --------------------

const BackButton = styled.button`
    width: fit-content;

    padding: 8px 12px;
    border-radius: 10px;

    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);

    color: var(--text);

    cursor: pointer;

    transition:
            transform 120ms cubic-bezier(0.2, 0.8, 0.2, 1),
            opacity 160ms ease;

    &:active {
        transform: scale(0.94);
    }
`;

// -------------------- COMPONENT --------------------

export default function PetDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { pets, loading } = usePets();
    const { selectedIds, toggleSelection } = useSelection();

    const petMap = useMemo(() => {
        return new Map(pets.map((p) => [p.id, p]));
    }, [pets]);

    const pet = id ? petMap.get(id) : undefined;

    const isSelected = id ? selectedIds.includes(id) : false;

    if (loading) {
        return (
            <Wrapper>
                <p>Loading...</p>
            </Wrapper>
        );
    }

    if (!pet) {
        return (
            <NotFound
                title="Pet not found"
                message="This pet was removed or doesn't exist."
            />
        );
    }

    return (
        <Wrapper>
            <BackButton onClick={() => navigate(-1)}>
                ← Back
            </BackButton>

            <Card>
                <Image src={pet.url} alt={pet.title} />

                <Content>
                    <h1>{pet.title}</h1>

                    <p>{pet.description}</p>

                    <small>
                        Created:{" "}
                        {new Date(pet.createdAt).toLocaleDateString()}
                    </small>

                    <ButtonRow>
                        <Button onClick={() => toggleSelection(pet.id)}>
                            {isSelected
                                ? "Remove from Selection"
                                : "Select Pet"}
                        </Button>

                        <Button $ghost onClick={() => navigate("/")}>
                            Back to Gallery
                        </Button>
                    </ButtonRow>
                </Content>
            </Card>
        </Wrapper>
    );
}