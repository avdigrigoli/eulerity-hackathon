import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { usePets } from "../hooks/usePets";
import { useSelection } from "../context/SelectionContext";
import NotFound from "./NotFound.tsx";

const Wrapper = styled.div`
    width: min(900px, 100%);
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 12px;
    overflow: hidden;
    background: var(--card);

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    min-height: 280px;
    object-fit: cover;
`;

const Content = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

const ButtonRow = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

const Button = styled.button<{ $ghost?: boolean }>`
    padding: 10px 14px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid var(--border);
    background: ${({ $ghost }) =>
    $ghost ? "transparent" : "var(--primary)"};
    color: var(--text);

    &:hover {
        opacity: 0.85;
    }
`;

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
            <NotFound title="Pet not found" message="This pet was removed or doesn't exist." />
        );
    }

    return (
        <Wrapper>
            <Button $ghost onClick={() => navigate(-1)}>
                ← Back
            </Button>

            <Card>
                <Image src={pet.url} alt={pet.title} />

                <Content>
                    <h1>{pet.title}</h1>

                    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                        {pet.description}
                    </p>

                    <small style={{ color: "var(--muted)" }}>
                        Created:{" "}
                        {new Date(pet.createdAt).toLocaleDateString()}
                    </small>

                    <ButtonRow>
                        <Button
                            onClick={() => toggleSelection(pet.id)}
                        >
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