import { Link } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import BibleStudyView from "~/components/BibleStudyView";

export async function loader({
    params,
}: LoaderFunctionArgs) {
    const esvApiKey = process.env.ESV_API_AUTH;

    const query_params = new URLSearchParams({
        'q': params.query ?? "",
        'include-headings': 'false',
        'include-footnotes': 'false',
        'include-verse-numbers': 'true',
        'include-short-copyright': 'false',
        'include-passage-references': 'false',
    });

    const url = `https://api.esv.org/v3/passage/text/?${query_params.toString()}`;

    return fetch(url, {
        method: "GET",
        credentials: "same-origin",
        cache: "no-cache",
        mode: "cors",
        headers: {
            'Authorization': esvApiKey ? esvApiKey : "NO_KEY",
        },
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.error(err);
        return {};
    });
}

export default function Passage() {
    const response = useLoaderData<typeof loader>();

    const get_next_chapter = () => {
        const start = response.passage_meta['0'].next_chapter?.['0'];
        const end = response.passage_meta['0'].next_chapter?.['1'];

        if (!start) {
            return false;
        }

        return start + "-" + end;
    }

    const get_prev_chapter = () => {
        const start = response.passage_meta['0'].prev_chapter?.['0'];
        const end = response.passage_meta['0'].prev_chapter?.['1'];

        if (!start) {
            return false;
        }

        return start + "-" + end;
    }

    return (
        <>
            <Link className="text-xl" to="/">back to book view</Link>
            <br />
            <BibleStudyView query={response.query} passages={response.passages} />
            <div className="flex">
                { get_prev_chapter() && <Link className="mr-6 text-xl" to={"/passage/" + get_prev_chapter() + "/"}>previous</Link>}
                { get_next_chapter() && <Link className="text-xl" to={"/passage/" + get_next_chapter() + "/"}>next</Link> }
            </div>
            <br />
            <a href="/copyright/"><p className="text-xs">ESV Copyright Notice</p></a>
        </>
    )
}
