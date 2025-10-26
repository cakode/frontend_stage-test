import CharacterList from "../components/CharacterList";

export default function CharacterListPage() {

    return (
        <div className="flex items-center justify-center">
            {/*<Pagination page={page} setPage={setPage} totalPages={totalPages} />*/}
            <CharacterList />
        </div>
    );
}
