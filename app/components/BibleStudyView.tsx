import { esv_passages_to_array } from "~/lib/util";

interface BibleStudyViewParams {
    query: string,
    passages: string,
}

export default function BibleStudyView({
    query, passages,
}: BibleStudyViewParams) {
    const fmt_passages = esv_passages_to_array(passages);

    return (
        <div className="content">
            <h2 className="text-3xl">{query}</h2>
            <br />
            <ul className="max-w-2xl">
            {fmt_passages.map((passage) => {
                return <li key={passage.index} className="grid grid-cols-[48px_auto] gap-2">
                {/* TODO: take notes by interacting with verse */}
                <h4 className="chapter flex justify-center items-center mr-4 aspect-square rounded-md text-lg bg-gray-200">{passage.index}</h4>
                <p className="text-lg">{passage.content}</p>
                <br />
                </li>
            })}
            </ul>
        </div>
    )
}
