import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import PassageSelect from "~/components/PassageSelect";
import { BibleMeta } from "~/lib/bible_meta";

export const meta: MetaFunction = () => {
  return [
    { title: "bible-study-basic" },
    { name: "description", content: "Basic daily bible study progressive web app" },
  ];
};


export async function loader() {
  return BibleMeta;
}


export default function Index() {
  const response = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className="text-3xl">bible-study-basic (ESV)</h1>
      <br />
      <PassageSelect bible_meta={response} />
      <br />
      <a href="/copyright/"><p className="text-sm">ESV Copyright Notice</p></a>
    </>
  );
}
