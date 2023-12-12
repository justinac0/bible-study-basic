interface Verse {
    index: number,
    content: string
};

enum TextType {
    VERSE,
    FOOTNOTE,
    HEADING,
    BOOK_TITLE,
    NO_HANDLED,
}

export function esv_passages_to_array(passages: string): Verse[] {
    if (!passages) {
        return [{index: 404, content: "Chapter not found... An Error Occurred!"}];
    }

    let fmt_passages: Verse[] = [];

    const re = /\[\d+\]/;
    const splits: string[] = passages.toString().split(re);
    let index = 0;

    splits.map((line: string) => {
        if (index > 0) {
            const cleaned = line.replace(re, "");
            fmt_passages.push({ index: index, content: cleaned });
        }

        index++;
    });

    return fmt_passages;
}
