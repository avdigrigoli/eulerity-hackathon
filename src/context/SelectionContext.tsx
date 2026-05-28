import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import type { Pet } from "../types/pet";

interface SelectionContextValue {
    selectedIds: string[];

    toggleSelection: (id: string) => void;
    clearSelection: () => void;
    selectAll: (ids: string[]) => void;
    getSelectedPets: (pets: Pet[]) => Pet[];
}

const SelectionContext = createContext<SelectionContextValue | null>(null);

export function SelectionProvider({
                                      children,
                                  }: {
    children: React.ReactNode;
}) {
    const [selectedIds, setSelectedIds] = useState<string[]>(() => {
        const saved = localStorage.getItem("selectedPets");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("selectedPets", JSON.stringify(selectedIds));
    }, [selectedIds]);

    function toggleSelection(id: string) {
        setSelectedIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    }

    function clearSelection() {
        setSelectedIds([]);
    }

    function selectAll(ids: string[]) {
        setSelectedIds(ids);
    }

    function getSelectedPets(pets: Pet[]) {
        return pets.filter((pet) => selectedIds.includes(pet.id));
    }

    const value = useMemo(
        () => ({
            selectedIds,
            toggleSelection,
            clearSelection,
            selectAll,
            getSelectedPets,
        }),
        [selectedIds]
    );

    return (
        <SelectionContext.Provider value={value}>
            {children}
        </SelectionContext.Provider>
    );
}

export function useSelection() {
    const context = useContext(SelectionContext);

    if (!context) {
        throw new Error("useSelection must be used within provider");
    }

    return context;
}