import PageContainer from "../components/layout/PageContainer.tsx";
import {EmptyState, ErrorState, LoadingState} from "../components/common/StateViews.tsx";
import PetGrid from "../components/gallery/PetGrid.tsx";
import PetCard from "../components/pet/PetCard.tsx";

export default function Home() {

    const pets = [{
        "id": "test",
        "title": "Tim & Jim",
        "description": "The best buds that anyone could have",
        "url": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?format=tiny",
        "created": "Thu May 28 14:17:00 UTC 2026"
    },]

    return (
        <PageContainer>
            <h1>Pet Gallery</h1>

            {/*{loading && <LoadingState />}*/}
            {/*{error && <ErrorState message={error} />}*/}
            {/*{empty && <EmptyState />}*/}

            <PetGrid>
                {pets.map(pet => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </PetGrid>
        </PageContainer>
    );
}