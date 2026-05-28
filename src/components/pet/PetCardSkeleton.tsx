import styled from "styled-components";
import SkeletonBox from "../common/Skeleton";

const Card = styled.div`
  background: var(--card);
  border-radius: 16px;
  overflow: hidden;
  padding: 0;
`;

const ImageSkeleton = styled(SkeletonBox)`
  height: 200px;
  width: 100%;
`;

const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function PetCardSkeleton() {
    return (
        <Card>
            <ImageSkeleton />

            <Content>
                <Row>
                    <SkeletonBox height="16px" style={{ width: "60%" }} />
                    <SkeletonBox height="18px" style={{ width: "18px" }} />
                </Row>

                <SkeletonBox height="12px" style={{ width: "90%" }} />
                <SkeletonBox height="12px" style={{ width: "70%" }} />
                <SkeletonBox height="12px" style={{ width: "50%" }} />
            </Content>
        </Card>
    );
}