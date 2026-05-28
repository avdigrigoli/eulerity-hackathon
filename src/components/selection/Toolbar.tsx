import styled from "styled-components";
import { useState } from "react";

type SortType =
    | "name-asc"
    | "name-desc"
    | "date-newest"
    | "date-oldest";

type Props = {
    search: string;
    sort: SortType;

    onSearch: (value: string) => void;
    onSort: (value: SortType) => void;

    total: number;

    selectedIds: string[];

    onSelectAll: () => void;
    onClear: () => void;
    onDownload: () => void;

    isDownloading: boolean;
    progress: number;
    estimatedSizeMB: string;
};

const Bar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;

    width: 100vw;
    margin-left: calc(50% - 50vw);

    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(12px);

    border-bottom: 1px solid var(--border);

    padding: var(--space-4);

    display: flex;
    flex-direction: column;
    gap: var(--space-3);

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-3);

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-3);
    flex-wrap: wrap;

    @media (max-width: 767px) {
        display: none;
    }
`;

const Input = styled.input`
    min-width: 220px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

const Select = styled.select`
    min-width: 180px;
`;

const Button = styled.button<{ $variant?: "ghost" | "danger" }>`
    background: ${({ $variant }) =>
            $variant === "ghost" ? "transparent" : "var(--primary)"};

    border: 1px solid
    ${({ $variant }) =>
            $variant === "ghost" ? "var(--border)" : "transparent"};

    color: var(--text);

    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius-md);

    cursor: pointer;

    transition: all 200ms ease;
    
    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.94);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const Counter = styled.div`
    font-size: var(--text-sm);
    color: var(--muted);
    white-space: nowrap;
`;

const ProgressBar = styled.div`
    width: 120px;
    height: 6px;
    background: var(--surface);
    border-radius: 999px;
    overflow: hidden;
`;

const ProgressFill = styled.div<{ $progress: number }>`
    height: 100%;
    width: ${({ $progress }) => `${$progress}%`};
    background: var(--primary);
    transition: width 0.2s ease;
`;

// -------------------- MOBILE DRAWER --------------------

const MobileFilterButton = styled.button`
    display: none;

    @media (max-width: 767px) {
        display: inline-flex;
        padding: var(--space-3) var(--space-4);
        border-radius: var(--radius-md);
        border: 1px solid var(--border);
        background: var(--card);
        cursor: pointer;
    }
`;

const DrawerOverlay = styled.div<{ $open: boolean }>`
    display: ${({ $open }) => ($open ? "block" : "none")};

    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 100;
`;

const Drawer = styled.div<{ $open: boolean }>`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    background: var(--card);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    padding: var(--space-4);
    z-index: 101;

    transform: translateY(${({ $open }) => ($open ? "0%" : "100%")});
    transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
`;

// -------------------- COMPONENT --------------------

export default function Toolbar({
                                    search,
                                    sort,
                                    onSearch,
                                    onSort,
                                    total,
                                    selectedIds,
                                    onSelectAll,
                                    onClear,
                                    onDownload,
                                    isDownloading,
                                    progress,
                                    estimatedSizeMB,
                                }: Props) {
    const selectedCount = selectedIds.length;
    const [open, setOpen] = useState(false);

    const Controls = () => (
        <>
            <Counter>
                Selected: {selectedCount} / {total}
            </Counter>

            <Counter>
                Size: {estimatedSizeMB} MB
            </Counter>

            {isDownloading && (
                <>
                    <Counter>{progress}%</Counter>
                    <ProgressBar>
                        <ProgressFill $progress={progress} />
                    </ProgressBar>
                </>
            )}

            <Button $variant="ghost" onClick={onSelectAll}>
                Select All
            </Button>

            <Button $variant="ghost" onClick={onClear}>
                Clear
            </Button>

            <Button
                onClick={onDownload}
                disabled={isDownloading || selectedCount === 0}
            >
                {isDownloading
                    ? "Downloading..."
                    : `Download (${selectedCount})`}
            </Button>
        </>
    );

    return (
        <>
            <Bar>
                {/* LEFT SIDE */}
                <Left>
                    <Input
                        value={search}
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="Search pets..."
                    />

                    <Select
                        value={sort}
                        onChange={(e) =>
                            onSort(e.target.value as SortType)
                        }
                    >
                        <option value="name-asc">Name A-Z</option>
                        <option value="name-desc">Name Z-A</option>
                        <option value="date-newest">Newest First</option>
                        <option value="date-oldest">Oldest First</option>
                    </Select>
                </Left>

                {/* DESKTOP CONTROLS */}
                <Right>
                    <Controls />
                </Right>

                {/* MOBILE BUTTON */}
                <MobileFilterButton onClick={() => setOpen(true)}>
                    Filters
                </MobileFilterButton>
            </Bar>

            {/* DRAWER */}
            <DrawerOverlay $open={open} onClick={() => setOpen(false)} />

            <Drawer $open={open}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    <Controls />
                </div>
            </Drawer>
        </>
    );
}