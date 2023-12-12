import { Link } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import BibleStudyView from "~/components/BibleStudyView";

export async function loader({
    params,
}: LoaderFunctionArgs) {
    const esvApiKey = process.env.ESV_API_AUTH;

    const data = new URLSearchParams({
        'include-headings': 'false',
        'include-footnotes': 'false',
        'include-verse-numbers': 'true',
        'include-short-copyright': 'false',
        'include-passage-references': 'false',
    });

    const url = 'https://api.esv.org/v3/passage/text/?q=' + params.query + data.toString();

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

    return (
        <>
            <Link to="/">back</Link>
            <br />
            <BibleStudyView query={response.query} passages={response.passages} />
            <br />
            <a href="/copyright/"><p className="text-sm">ESV Copyright Notice</p></a>
        </>
    )
}
