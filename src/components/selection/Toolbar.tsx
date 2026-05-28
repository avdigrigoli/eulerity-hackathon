import styled from "styled-components";

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
    position: sticky;
    top: 0;
    z-index: 50;

    background: rgba(17, 24, 39, 0.8);
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
`;

const Input = styled.input`
    min-width: 220px;
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

    transition: all var(--transition);

    &:hover {
        background: ${({ $variant }) =>
    $variant === "ghost"
        ? "var(--surface)"
        : "var(--primary-hover)"};
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

// simple progress bar
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

    return (
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

            {/* RIGHT SIDE */}
            <Right>
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
            </Right>
        </Bar>
    );
}