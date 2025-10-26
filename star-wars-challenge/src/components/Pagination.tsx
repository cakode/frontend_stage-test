interface PaginationProps {
    page: number;
    totalPages: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    //className?: string;
}

export default function Pagination({ setPage, page, totalPages }: PaginationProps) {
    <div className="mt-6 flex items-center justify-center gap-2">
        <button
            className="rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-800 disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
        >Previous</button>
        <span className="text-sm text-neutral-400">Page {page} / {totalPages}</span>
        <button
            className="rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-800 disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
        >Next</button>
    </div>
};