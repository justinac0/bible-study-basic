import { Link } from "@remix-run/react";
import { useState } from "react";
import { Book } from "~/lib/bible_meta";

interface BookViewParams {
    book: Book
};

export default function BookView({
    book
}: BookViewParams) {
    const [isHidden, setIsHidden] = useState<Boolean>(true);

    const select_book = () => {
        setIsHidden(!isHidden);
    }

    return (
        <div className="mb-6">
            <h1 className="text-2xl mb-4 book-title bg-gray-200 p-4 rounded-md" onClick={select_book}>{book.title}</h1>
            <ul className={"grid gap-4 lg:grid-cols-12 md:grid-cols-8 grid-cols-5" + (isHidden ? " hidden" : "")}>
                {book.chapters.map((chapter, index) => {
                    const location = "/passage/" + book.title + " " + (index + 1).toString() + ":" + "1" + "-" + chapter.verse_count + "/";
                    return <Link key={index} className="chapter text-black/70 bg-gray-100 rounded-md aspect-square flex items-center justify-center" to={location}>{index + 1}</Link>;
                })}
            </ul>
        </div>
    );
}