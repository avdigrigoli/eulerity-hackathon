import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 60px 0;
  text-align: center;
  color: var(--muted);
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  font-size: 14px;
`;

export function LoadingState() {
    return (
        <Wrapper>
            <Title>Loading pets...</Title>
            <Text>Please wait while we fetch adorable animals 🐾</Text>
        </Wrapper>
    );
}

export function ErrorState({ message }: { message: string }) {
    return (
        <Wrapper>
            <Title>Something went wrong</Title>
            <Text>{message}</Text>
        </Wrapper>
    );
}

export function EmptyState() {
    return (
        <Wrapper>
            <Title>No pets found</Title>
            <Text>Try adjusting your search or filters</Text>
        </Wrapper>
    );
}