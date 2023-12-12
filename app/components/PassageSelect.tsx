import BookView from "./BookView";
import { Book } from "~/lib/bible_meta"

interface PassageSelectParams {
    bible_meta: Book[]
}

export default function PassageSelect({
    bible_meta
}: PassageSelectParams) {
    return (
        <>
            {bible_meta.map((book) => <BookView key={book.title} book={book}/>)}
        </>
    );
}
