export interface Book {
    title: string,
    chapters: Chapter[]
};

export interface Chapter {
    verse_count: number,
    missing_verses?: number[]
};

// OT
const GENESIS: Book = {
    title: "Genesis", chapters: [
        { verse_count: 31, missing_verses: [] }, // 1
        { verse_count: 25, missing_verses: [] }, // 2
        { verse_count: 24, missing_verses: [] }, // 3
        { verse_count: 26, missing_verses: [] }, // 4
        { verse_count: 32, missing_verses: [] }, // 5
        { verse_count: 22, missing_verses: [] }, // 6
        { verse_count: 24, missing_verses: [] }, // 7
        { verse_count: 22, missing_verses: [] }, // 8
        { verse_count: 29, missing_verses: [] }, // 9
        { verse_count: 32, missing_verses: [] }, // 10
        { verse_count: 32, missing_verses: [] }, // 11
        { verse_count: 20, missing_verses: [] }, // 12
        { verse_count: 18, missing_verses: [] }, // 13
        { verse_count: 24, missing_verses: [] }, // 14
        { verse_count: 21, missing_verses: [] }, // 15
        { verse_count: 16, missing_verses: [] }, // 16
        { verse_count: 27, missing_verses: [] }, // 17
        { verse_count: 33, missing_verses: [] }, // 18
        { verse_count: 38, missing_verses: [] }, // 19
        { verse_count: 18, missing_verses: [] }, // 20
        { verse_count: 34, missing_verses: [] }, // 21
        { verse_count: 24, missing_verses: [] }, // 22
        { verse_count: 20, missing_verses: [] }, // 23
        { verse_count: 67, missing_verses: [] }, // 24
        { verse_count: 34, missing_verses: [] }, // 25
        { verse_count: 35, missing_verses: [] }, // 26
        { verse_count: 46, missing_verses: [] }, // 27
        { verse_count: 22, missing_verses: [] }, // 28
        { verse_count: 35, missing_verses: [] }, // 29
        { verse_count: 43, missing_verses: [] }, // 30
        { verse_count: 55, missing_verses: [] }, // 31
        { verse_count: 32, missing_verses: [] }, // 32
        { verse_count: 20, missing_verses: [] }, // 33
        { verse_count: 31, missing_verses: [] }, // 34
        { verse_count: 29, missing_verses: [] }, // 35
        { verse_count: 43, missing_verses: [] }, // 36
        { verse_count: 36, missing_verses: [] }, // 37
        { verse_count: 30, missing_verses: [] }, // 38
        { verse_count: 23, missing_verses: [] }, // 39
        { verse_count: 23, missing_verses: [] }, // 40
        { verse_count: 57, missing_verses: [] }, // 41
        { verse_count: 38, missing_verses: [] }, // 42
        { verse_count: 34, missing_verses: [] }, // 43
        { verse_count: 34, missing_verses: [] }, // 44
        { verse_count: 28, missing_verses: [] }, // 45
        { verse_count: 34, missing_verses: [] }, // 46
        { verse_count: 31, missing_verses: [] }, // 47
        { verse_count: 22, missing_verses: [] }, // 48
        { verse_count: 33, missing_verses: [] }, // 49
        { verse_count: 26, missing_verses: [] }, // 50
    ]
};

const EXODUS: Book = {
    title: "Exodus",
    chapters: [
        { verse_count: 22, missing_verses: [] }, // 1
        { verse_count: 25, missing_verses: [] }, // 2
        { verse_count: 22, missing_verses: [] }, // 3
        { verse_count: 31, missing_verses: [] }, // 4
        { verse_count: 23, missing_verses: [] }, // 5
        { verse_count: 30, missing_verses: [] }, // 6
        { verse_count: 27, missing_verses: [] }, // 7
        { verse_count: 32, missing_verses: [] }, // 8
        { verse_count: 35, missing_verses: [] }, // 9
        { verse_count: 29, missing_verses: [] }, // 10
        { verse_count: 10, missing_verses: [] }, // 11
        { verse_count: 51, missing_verses: [] }, // 12
        { verse_count: 22, missing_verses: [] }, // 13
        { verse_count: 31, missing_verses: [] }, // 14
        { verse_count: 27, missing_verses: [] }, // 15
        { verse_count: 36, missing_verses: [] }, // 16
        { verse_count: 16, missing_verses: [] }, // 17
        { verse_count: 27, missing_verses: [] }, // 18
        { verse_count: 25, missing_verses: [] }, // 19
        { verse_count: 26, missing_verses: [] }, // 20
        { verse_count: 36, missing_verses: [] }, // 21
        { verse_count: 31, missing_verses: [] }, // 22
        { verse_count: 33, missing_verses: [] }, // 23
        { verse_count: 18, missing_verses: [] }, // 24
        { verse_count: 40, missing_verses: [] }, // 25
        { verse_count: 37, missing_verses: [] }, // 26
        { verse_count: 21, missing_verses: [] }, // 27
        { verse_count: 43, missing_verses: [] }, // 28
        { verse_count: 46, missing_verses: [] }, // 29
        { verse_count: 38, missing_verses: [] }, // 30
        { verse_count: 18, missing_verses: [] }, // 31
        { verse_count: 35, missing_verses: [] }, // 32
        { verse_count: 23, missing_verses: [] }, // 33
        { verse_count: 35, missing_verses: [] }, // 34
        { verse_count: 35, missing_verses: [] }, // 35
        { verse_count: 38, missing_verses: [] }, // 36
        { verse_count: 29, missing_verses: [] }, // 37
        { verse_count: 31, missing_verses: [] }, // 38
        { verse_count: 43, missing_verses: [] }, // 39
        { verse_count: 38, missing_verses: [] }, // 40
    ]
};

const LEVITICUS: Book = {
    title: "Leviticus",
    chapters: [
        { verse_count: 17, missing_verses: [] }, // 1
        { verse_count: 16, missing_verses: [] }, // 2
        { verse_count: 17, missing_verses: [] }, // 3
        { verse_count: 35, missing_verses: [] }, // 4
        { verse_count: 19, missing_verses: [] }, // 5
        { verse_count: 30, missing_verses: [] }, // 6
        { verse_count: 38, missing_verses: [] }, // 7
        { verse_count: 36, missing_verses: [] }, // 8
        { verse_count: 24, missing_verses: [] }, // 9
        { verse_count: 20, missing_verses: [] }, // 10
        { verse_count: 47, missing_verses: [] }, // 11
        { verse_count: 8, missing_verses: [] },  // 12
        { verse_count: 59, missing_verses: [] }, // 13
        { verse_count: 57, missing_verses: [] }, // 14
        { verse_count: 33, missing_verses: [] }, // 15
        { verse_count: 34, missing_verses: [] }, // 16
        { verse_count: 16, missing_verses: [] }, // 17
        { verse_count: 30, missing_verses: [] }, // 18
        { verse_count: 37, missing_verses: [] }, // 19
        { verse_count: 27, missing_verses: [] }, // 20
        { verse_count: 24, missing_verses: [] }, // 21
        { verse_count: 33, missing_verses: [] }, // 22
        { verse_count: 44, missing_verses: [] }, // 23
        { verse_count: 23, missing_verses: [] }, // 24
        { verse_count: 55, missing_verses: [] }, // 25
        { verse_count: 46, missing_verses: [] }, // 26
        { verse_count: 34, missing_verses: [] }, // 27
    ]
};

const NUMBERS: Book = {
    title: "Numbers",
    chapters: [
        { verse_count: 54, missing_verses: [] }, // 1
        { verse_count: 34, missing_verses: [] }, // 2
        { verse_count: 51, missing_verses: [] }, // 3
        { verse_count: 49, missing_verses: [] }, // 4
        { verse_count: 41, missing_verses: [] }, // 5
        { verse_count: 27, missing_verses: [] }, // 6
        { verse_count: 89, missing_verses: [] }, // 7
        { verse_count: 26, missing_verses: [] }, // 8
        { verse_count: 23, missing_verses: [] }, // 9
        { verse_count: 36, missing_verses: [] }, // 10
        { verse_count: 35, missing_verses: [] }, // 11
        { verse_count: 16, missing_verses: [] }, // 12
        { verse_count: 33, missing_verses: [] }, // 13
        { verse_count: 45, missing_verses: [] }, // 14
        { verse_count: 41, missing_verses: [] }, // 15
        { verse_count: 50, missing_verses: [] }, // 16
        { verse_count: 13, missing_verses: [] }, // 17
        { verse_count: 32, missing_verses: [] }, // 18
        { verse_count: 22, missing_verses: [] }, // 19
        { verse_count: 29, missing_verses: [] }, // 20
        { verse_count: 35, missing_verses: [] }, // 21
        { verse_count: 41, missing_verses: [] }, // 22
        { verse_count: 30, missing_verses: [] }, // 23
        { verse_count: 25, missing_verses: [] }, // 24
        { verse_count: 18, missing_verses: [] }, // 25
        { verse_count: 65, missing_verses: [] }, // 26
        { verse_count: 23, missing_verses: [] }, // 27
        { verse_count: 31, missing_verses: [] }, // 28
        { verse_count: 40, missing_verses: [] }, // 29
        { verse_count: 16, missing_verses: [] }, // 30
        { verse_count: 54, missing_verses: [] }, // 31
        { verse_count: 42, missing_verses: [] }, // 32
        { verse_count: 56, missing_verses: [] }, // 33
        { verse_count: 29, missing_verses: [] }, // 34
        { verse_count: 34, missing_verses: [] }, // 35
        { verse_count: 13, missing_verses: [] }, // 36
    ]
};

const DEUTERONOMY: Book = {
    title: "Deuteronomy",
    chapters: [
        { verse_count: 46, missing_verses: [] }, // 1
        { verse_count: 37, missing_verses: [] }, // 2
        { verse_count: 29, missing_verses: [] }, // 3
        { verse_count: 49, missing_verses: [] }, // 4
        { verse_count: 33, missing_verses: [] }, // 5
        { verse_count: 25, missing_verses: [] }, // 6
        { verse_count: 26, missing_verses: [] }, // 7
        { verse_count: 20, missing_verses: [] }, // 8
        { verse_count: 29, missing_verses: [] }, // 9
        { verse_count: 22, missing_verses: [] }, // 10
        { verse_count: 32, missing_verses: [] }, // 11
        { verse_count: 32, missing_verses: [] }, // 12
        { verse_count: 18, missing_verses: [] }, // 13
        { verse_count: 29, missing_verses: [] }, // 14
        { verse_count: 23, missing_verses: [] }, // 15
        { verse_count: 22, missing_verses: [] }, // 16
        { verse_count: 20, missing_verses: [] }, // 17
        { verse_count: 22, missing_verses: [] }, // 18
        { verse_count: 21, missing_verses: [] }, // 19
        { verse_count: 20, missing_verses: [] }, // 20
        { verse_count: 23, missing_verses: [] }, // 21
        { verse_count: 30, missing_verses: [] }, // 22
        { verse_count: 25, missing_verses: [] }, // 23
        { verse_count: 22, missing_verses: [] }, // 24
        { verse_count: 19, missing_verses: [] }, // 25
        { verse_count: 19, missing_verses: [] }, // 26
        { verse_count: 26, missing_verses: [] }, // 27
        { verse_count: 68, missing_verses: [] }, // 28
        { verse_count: 29, missing_verses: [] }, // 29
        { verse_count: 20, missing_verses: [] }, // 30
        { verse_count: 30, missing_verses: [] }, // 31
        { verse_count: 52, missing_verses: [] }, // 32
        { verse_count: 29, missing_verses: [] }, // 33
        { verse_count: 12, missing_verses: [] }, // 34
    ]
};

const JOSHUA: Book = {
    title: "Joshua",
    chapters: [
        { verse_count: 18, missing_verses: [] }, // 1
        { verse_count: 24, missing_verses: [] }, // 2
        { verse_count: 17, missing_verses: [] }, // 3
        { verse_count: 24, missing_verses: [] }, // 4
        { verse_count: 15, missing_verses: [] }, // 5
        { verse_count: 27, missing_verses: [] }, // 6
        { verse_count: 26, missing_verses: [] }, // 7
        { verse_count: 35, missing_verses: [] }, // 8
        { verse_count: 27, missing_verses: [] }, // 9
        { verse_count: 43, missing_verses: [] }, // 10
        { verse_count: 23, missing_verses: [] }, // 11
        { verse_count: 24, missing_verses: [] }, // 12
        { verse_count: 33, missing_verses: [] }, // 13
        { verse_count: 15, missing_verses: [] }, // 14
        { verse_count: 63, missing_verses: [] }, // 15
        { verse_count: 10, missing_verses: [] }, // 16
        { verse_count: 18, missing_verses: [] }, // 17
        { verse_count: 28, missing_verses: [] }, // 18
        { verse_count: 51, missing_verses: [] }, // 19
        { verse_count: 9, missing_verses: [] }, // 20
        { verse_count: 45, missing_verses: [] }, // 21
        { verse_count: 34, missing_verses: [] }, // 22
        { verse_count: 16, missing_verses: [] }, // 23
        { verse_count: 33, missing_verses: [] }, // 24
    ]
};

const JUDGES: Book = {
    title: "Judges",
    chapters: [
        { verse_count: 36, missing_verses: [] }, // 1
        { verse_count: 23, missing_verses: [] }, // 2
        { verse_count: 31, missing_verses: [] }, // 3
        { verse_count: 24, missing_verses: [] }, // 4
        { verse_count: 31, missing_verses: [] }, // 5
        { verse_count: 40, missing_verses: [] }, // 6
        { verse_count: 25, missing_verses: [] }, // 7
        { verse_count: 35, missing_verses: [] }, // 8
        { verse_count: 57, missing_verses: [] }, // 9
        { verse_count: 18, missing_verses: [] }, // 10
        { verse_count: 40, missing_verses: [] }, // 11
        { verse_count: 15, missing_verses: [] }, // 12
        { verse_count: 25, missing_verses: [] }, // 13
        { verse_count: 20, missing_verses: [] }, // 14
        { verse_count: 20, missing_verses: [] }, // 15
        { verse_count: 31, missing_verses: [] }, // 16
        { verse_count: 13, missing_verses: [] }, // 17
        { verse_count: 31, missing_verses: [] }, // 18
        { verse_count: 30, missing_verses: [] }, // 19
        { verse_count: 48, missing_verses: [] }, // 20
        { verse_count: 25, missing_verses: [] }, // 21
    ]
};

const RUTH: Book = {
    title: "Ruth",
    chapters: [
        { verse_count: 22, missing_verses: [] }, // 1
        { verse_count: 23, missing_verses: [] }, // 2
        { verse_count: 18, missing_verses: [] }, // 3
        { verse_count: 22, missing_verses: [] }, // 4
    ]
};

const ONE_SAMUEL: Book = {
    title: "1 Samuel",
    chapters: [
        { verse_count: 28, missing_verses: [] }, // 1
        { verse_count: 36, missing_verses: [] }, // 2
        { verse_count: 21, missing_verses: [] }, // 3
        { verse_count: 22, missing_verses: [] }, // 4
        { verse_count: 12, missing_verses: [] }, // 5
        { verse_count: 21, missing_verses: [] }, // 6
        { verse_count: 17, missing_verses: [] }, // 7
        { verse_count: 22, missing_verses: [] }, // 8
        { verse_count: 27, missing_verses: [] }, // 9
        { verse_count: 27, missing_verses: [] }, // 10
        { verse_count: 15, missing_verses: [] }, // 11
        { verse_count: 25, missing_verses: [] }, // 12
        { verse_count: 23, missing_verses: [] }, // 13
        { verse_count: 52, missing_verses: [] }, // 14
        { verse_count: 35, missing_verses: [] }, // 15
        { verse_count: 23, missing_verses: [] }, // 16
        { verse_count: 58, missing_verses: [] }, // 17
        { verse_count: 30, missing_verses: [] }, // 18
        { verse_count: 24, missing_verses: [] }, // 19
        { verse_count: 42, missing_verses: [] }, // 20
        { verse_count: 15, missing_verses: [] }, // 21
        { verse_count: 23, missing_verses: [] }, // 22
        { verse_count: 29, missing_verses: [] }, // 23
        { verse_count: 22, missing_verses: [] }, // 24
        { verse_count: 44, missing_verses: [] }, // 25
        { verse_count: 25, missing_verses: [] }, // 26
        { verse_count: 12, missing_verses: [] }, // 27
        { verse_count: 25, missing_verses: [] }, // 28
        { verse_count: 11, missing_verses: [] }, // 29
        { verse_count: 31, missing_verses: [] }, // 30
        { verse_count: 13, missing_verses: [] }, // 31
    ]
};

const TWO_SAMUEL: Book = {
    title: "2 Samuel",
    chapters: [
        { verse_count: 27, missing_verses: [] }, // 1
        { verse_count: 32, missing_verses: [] }, // 2
        { verse_count: 39, missing_verses: [] }, // 3
        { verse_count: 12, missing_verses: [] }, // 4
        { verse_count: 25, missing_verses: [] }, // 5
        { verse_count: 23, missing_verses: [] }, // 6
        { verse_count: 29, missing_verses: [] }, // 7
        { verse_count: 18, missing_verses: [] }, // 8
        { verse_count: 13, missing_verses: [] }, // 9
        { verse_count: 19, missing_verses: [] }, // 10
        { verse_count: 27, missing_verses: [] }, // 11
        { verse_count: 31, missing_verses: [] }, // 12
        { verse_count: 39, missing_verses: [] }, // 13
        { verse_count: 33, missing_verses: [] }, // 14
        { verse_count: 37, missing_verses: [] }, // 15
        { verse_count: 23, missing_verses: [] }, // 16
        { verse_count: 29, missing_verses: [] }, // 17
        { verse_count: 33, missing_verses: [] }, // 18
        { verse_count: 43, missing_verses: [] }, // 19
        { verse_count: 26, missing_verses: [] }, // 20
        { verse_count: 22, missing_verses: [] }, // 21
        { verse_count: 51, missing_verses: [] }, // 22
        { verse_count: 39, missing_verses: [] }, // 23
        { verse_count: 25, missing_verses: [] }, // 24
    ]
};

const ONE_KINGS: Book = {
    title: "1 Kings",
    chapters: [
        { verse_count: 53, missing_verses: [] }, // 1
        { verse_count: 46, missing_verses: [] }, // 2
        { verse_count: 28, missing_verses: [] }, // 3
        { verse_count: 34, missing_verses: [] }, // 4
        { verse_count: 18, missing_verses: [] }, // 5
        { verse_count: 38, missing_verses: [] }, // 6
        { verse_count: 51, missing_verses: [] }, // 7
        { verse_count: 66, missing_verses: [] }, // 8
        { verse_count: 28, missing_verses: [] }, // 9
        { verse_count: 29, missing_verses: [] }, // 10
        { verse_count: 43, missing_verses: [] }, // 11
        { verse_count: 33, missing_verses: [] }, // 12
        { verse_count: 34, missing_verses: [] }, // 13
        { verse_count: 31, missing_verses: [] }, // 14
        { verse_count: 34, missing_verses: [] }, // 15
        { verse_count: 34, missing_verses: [] }, // 16
        { verse_count: 24, missing_verses: [] }, // 17
        { verse_count: 46, missing_verses: [] }, // 18
        { verse_count: 21, missing_verses: [] }, // 19
        { verse_count: 43, missing_verses: [] }, // 20
        { verse_count: 29, missing_verses: [] }, // 21
        { verse_count: 53, missing_verses: [] }, // 22
    ]
};

const TWO_KINGS: Book = {
    title: "2 Kings",
    chapters: [
        { verse_count: 18, missing_verses: [] }, // 1
        { verse_count: 25, missing_verses: [] }, // 2
        { verse_count: 27, missing_verses: [] }, // 3
        { verse_count: 44, missing_verses: [] }, // 4
        { verse_count: 27, missing_verses: [] }, // 5
        { verse_count: 33, missing_verses: [] }, // 6
        { verse_count: 20, missing_verses: [] }, // 7
        { verse_count: 29, missing_verses: [] }, // 8
        { verse_count: 37, missing_verses: [] }, // 9
        { verse_count: 36, missing_verses: [] }, // 10
        { verse_count: 21, missing_verses: [] }, // 11
        { verse_count: 21, missing_verses: [] }, // 12
        { verse_count: 25, missing_verses: [] }, // 13
        { verse_count: 29, missing_verses: [] }, // 14
        { verse_count: 38, missing_verses: [] }, // 15
        { verse_count: 20, missing_verses: [] }, // 16
        { verse_count: 41, missing_verses: [] }, // 17
        { verse_count: 37, missing_verses: [] }, // 18
        { verse_count: 37, missing_verses: [] }, // 19
        { verse_count: 21, missing_verses: [] }, // 20
        { verse_count: 26, missing_verses: [] }, // 21
        { verse_count: 20, missing_verses: [] }, // 22
        { verse_count: 37, missing_verses: [] }, // 23
        { verse_count: 20, missing_verses: [] }, // 24
        { verse_count: 30, missing_verses: [] }, // 25
    ]
};

const ONE_CHRONICLES: Book = {
    title: "1 Chronicles",
    chapters: [
        { verse_count: 54, missing_verses: [] }, // 1
        { verse_count: 55, missing_verses: [] }, // 2
        { verse_count: 24, missing_verses: [] }, // 3
        { verse_count: 43, missing_verses: [] }, // 4
        { verse_count: 26, missing_verses: [] }, // 5
        { verse_count: 81, missing_verses: [] }, // 6
        { verse_count: 40, missing_verses: [] }, // 7
        { verse_count: 40, missing_verses: [] }, // 8
        { verse_count: 44, missing_verses: [] }, // 9
        { verse_count: 14, missing_verses: [] }, // 10
        { verse_count: 47, missing_verses: [] }, // 11
        { verse_count: 40, missing_verses: [] }, // 12
        { verse_count: 14, missing_verses: [] }, // 13
        { verse_count: 17, missing_verses: [] }, // 14
        { verse_count: 29, missing_verses: [] }, // 15
        { verse_count: 43, missing_verses: [] }, // 16
        { verse_count: 27, missing_verses: [] }, // 17
        { verse_count: 17, missing_verses: [] }, // 18
        { verse_count: 19, missing_verses: [] }, // 19
        { verse_count: 8, missing_verses: [] }, // 20
        { verse_count: 30, missing_verses: [] }, // 21
        { verse_count: 19, missing_verses: [] }, // 22
        { verse_count: 32, missing_verses: [] }, // 23
        { verse_count: 31, missing_verses: [] }, // 24
        { verse_count: 31, missing_verses: [] }, // 25
        { verse_count: 32, missing_verses: [] }, // 26
        { verse_count: 34, missing_verses: [] }, // 27
        { verse_count: 21, missing_verses: [] }, // 28
        { verse_count: 30, missing_verses: [] }, // 29
    ]
};

const TWO_CHRONICLES: Book = {
    title: "2 Chronicles",
    chapters: [
        { verse_count: 17, missing_verses: [] }, // 1
        { verse_count: 18, missing_verses: [] }, // 2
        { verse_count: 17, missing_verses: [] }, // 3
        { verse_count: 22, missing_verses: [] }, // 4
        { verse_count: 14, missing_verses: [] }, // 5
        { verse_count: 42, missing_verses: [] }, // 6
        { verse_count: 22, missing_verses: [] }, // 7
        { verse_count: 18, missing_verses: [] }, // 8
        { verse_count: 31, missing_verses: [] }, // 9
        { verse_count: 19, missing_verses: [] }, // 10
        { verse_count: 23, missing_verses: [] }, // 11
        { verse_count: 16, missing_verses: [] }, // 12
        { verse_count: 22, missing_verses: [] }, // 13
        { verse_count: 15, missing_verses: [] }, // 14
        { verse_count: 19, missing_verses: [] }, // 15
        { verse_count: 14, missing_verses: [] }, // 16
        { verse_count: 19, missing_verses: [] }, // 17
        { verse_count: 34, missing_verses: [] }, // 18
        { verse_count: 11, missing_verses: [] }, // 19
        { verse_count: 37, missing_verses: [] }, // 20
        { verse_count: 20, missing_verses: [] }, // 21
        { verse_count: 12, missing_verses: [] }, // 22
        { verse_count: 21, missing_verses: [] }, // 23
        { verse_count: 27, missing_verses: [] }, // 24
        { verse_count: 28, missing_verses: [] }, // 25
        { verse_count: 23, missing_verses: [] }, // 26
        { verse_count: 9, missing_verses: [] }, // 27
        { verse_count: 27, missing_verses: [] }, // 28
        { verse_count: 36, missing_verses: [] }, // 29
        { verse_count: 27, missing_verses: [] }, // 30
        { verse_count: 21, missing_verses: [] }, // 31
        { verse_count: 33, missing_verses: [] }, // 32
        { verse_count: 25, missing_verses: [] }, // 33
        { verse_count: 33, missing_verses: [] }, // 34
        { verse_count: 27, missing_verses: [] }, // 35
        { verse_count: 23, missing_verses: [] }, // 36
    ]
};

const EZRA: Book = {
    title: "Ezra",
    chapters: [
        { verse_count: 11, missing_verses: [] }, // 1
        { verse_count: 70, missing_verses: [] }, // 2
        { verse_count: 13, missing_verses: [] }, // 3
        { verse_count: 24, missing_verses: [] }, // 4
        { verse_count: 17, missing_verses: [] }, // 5
        { verse_count: 22, missing_verses: [] }, // 6
        { verse_count: 28, missing_verses: [] }, // 7
        { verse_count: 36, missing_verses: [] }, // 8
        { verse_count: 15, missing_verses: [] }, // 9
        { verse_count: 44, missing_verses: [] }, // 10
    ]
};

const NEHEMIAH: Book = {
    title: "Nehemiah",
    chapters: [
        { verse_count: 11, missing_verses: [] }, // 1
        { verse_count: 20, missing_verses: [] }, // 2
        { verse_count: 32, missing_verses: [] }, // 3
        { verse_count: 23, missing_verses: [] }, // 4
        { verse_count: 19, missing_verses: [] }, // 5
        { verse_count: 19, missing_verses: [] }, // 6
        { verse_count: 73, missing_verses: [] }, // 7
        { verse_count: 18, missing_verses: [] }, // 8
        { verse_count: 38, missing_verses: [] }, // 9
        { verse_count: 39, missing_verses: [] }, // 10
        { verse_count: 36, missing_verses: [] }, // 11
        { verse_count: 47, missing_verses: [] }, // 12
        { verse_count: 31, missing_verses: [] }, // 13
    ]
};

const ESTHER: Book = {
    title: "Esther",
    chapters: [
        { verse_count: 22, missing_verses: [] }, // 1
        { verse_count: 23, missing_verses: [] }, // 2
        { verse_count: 15, missing_verses: [] }, // 3
        { verse_count: 17, missing_verses: [] }, // 4
        { verse_count: 14, missing_verses: [] }, // 5
        { verse_count: 14, missing_verses: [] }, // 6
        { verse_count: 10, missing_verses: [] }, // 7
        { verse_count: 17, missing_verses: [] }, // 8
        { verse_count: 32, missing_verses: [] }, // 9
        { verse_count: 3, missing_verses: [] }, // 10
    ]
};

const JOB: Book = {
    title: "Job",
    chapters: [
        { verse_count: 22, missing_verses: [] }, // 1
        { verse_count: 13, missing_verses: [] }, // 2
        { verse_count: 26, missing_verses: [] }, // 3
        { verse_count: 21, missing_verses: [] }, // 4
        { verse_count: 27, missing_verses: [] }, // 5
        { verse_count: 30, missing_verses: [] }, // 6
        { verse_count: 21, missing_verses: [] }, // 7
        { verse_count: 22, missing_verses: [] }, // 8
        { verse_count: 35, missing_verses: [] }, // 9
        { verse_count: 22, missing_verses: [] }, // 10
        { verse_count: 20, missing_verses: [] }, // 11
        { verse_count: 25, missing_verses: [] }, // 12
        { verse_count: 28, missing_verses: [] }, // 13
        { verse_count: 22, missing_verses: [] }, // 14
        { verse_count: 35, missing_verses: [] }, // 15
        { verse_count: 22, missing_verses: [] }, // 16
        { verse_count: 16, missing_verses: [] }, // 17
        { verse_count: 21, missing_verses: [] }, // 18
        { verse_count: 29, missing_verses: [] }, // 19
        { verse_count: 29, missing_verses: [] }, // 20
        { verse_count: 34, missing_verses: [] }, // 21
        { verse_count: 30, missing_verses: [] }, // 22
        { verse_count: 17, missing_verses: [] }, // 23
        { verse_count: 25, missing_verses: [] }, // 24
        { verse_count: 6, missing_verses: [] }, // 25
        { verse_count: 14, missing_verses: [] }, // 26
        { verse_count: 23, missing_verses: [] }, // 27
        { verse_count: 28, missing_verses: [] }, // 28
        { verse_count: 25, missing_verses: [] }, // 29
        { verse_count: 31, missing_verses: [] }, // 30
        { verse_count: 40, missing_verses: [] }, // 31
        { verse_count: 22, missing_verses: [] }, // 32
        { verse_count: 33, missing_verses: [] }, // 33
        { verse_count: 37, missing_verses: [] }, // 34
        { verse_count: 16, missing_verses: [] }, // 35
        { verse_count: 33, missing_verses: [] }, // 36
        { verse_count: 24, missing_verses: [] }, // 37
        { verse_count: 41, missing_verses: [] }, // 38
        { verse_count: 30, missing_verses: [] }, // 39
        { verse_count: 24, missing_verses: [] }, // 40
        { verse_count: 34, missing_verses: [] }, // 41
        { verse_count: 17, missing_verses: [] }, // 42
    ]
};

const PSALM: Book = {
    title: "Psalm",
    chapters: [
        { verse_count: 6, missing_verses: [] }, // 1
        { verse_count: 12, missing_verses: [] }, // 2
        { verse_count: 8, missing_verses: [] }, // 3
        { verse_count: 8, missing_verses: [] }, // 4
        { verse_count: 12, missing_verses: [] }, // 5
        { verse_count: 10, missing_verses: [] }, // 6
        { verse_count: 17, missing_verses: [] }, // 7
        { verse_count: 9, missing_verses: [] }, // 8
        { verse_count: 20, missing_verses: [] }, // 9
        { verse_count: 18, missing_verses: [] }, // 10
        { verse_count: 7, missing_verses: [] }, // 11
        { verse_count: 8, missing_verses: [] }, // 12
        { verse_count: 6, missing_verses: [] }, // 13
        { verse_count: 7, missing_verses: [] }, // 14
        { verse_count: 5, missing_verses: [] }, // 15
        { verse_count: 11, missing_verses: [] }, // 16
        { verse_count: 15, missing_verses: [] }, // 17
        { verse_count: 50, missing_verses: [] }, // 18
        { verse_count: 14, missing_verses: [] }, // 19
        { verse_count: 9, missing_verses: [] }, // 20
        { verse_count: 13, missing_verses: [] }, // 21
        { verse_count: 31, missing_verses: [] }, // 22
        { verse_count: 6, missing_verses: [] }, // 23
        { verse_count: 10, missing_verses: [] }, // 24
        { verse_count: 22, missing_verses: [] }, // 25
        { verse_count: 12, missing_verses: [] }, // 26
        { verse_count: 14, missing_verses: [] }, // 27
        { verse_count: 9, missing_verses: [] }, // 28
        { verse_count: 11, missing_verses: [] }, // 29
        { verse_count: 12, missing_verses: [] }, // 30
        { verse_count: 24, missing_verses: [] }, // 31
        { verse_count: 11, missing_verses: [] }, // 32
        { verse_count: 22, missing_verses: [] }, // 33
        { verse_count: 22, missing_verses: [] }, // 34
        { verse_count: 28, missing_verses: [] }, // 35
        { verse_count: 12, missing_verses: [] }, // 36
        { verse_count: 40, missing_verses: [] }, // 37
        { verse_count: 22, missing_verses: [] }, // 38
        { verse_count: 13, missing_verses: [] }, // 39
        { verse_count: 17, missing_verses: [] }, // 40
        { verse_count: 13, missing_verses: [] }, // 41
        { verse_count: 11, missing_verses: [] }, // 42
        { verse_count: 5, missing_verses: [] }, // 43
        { verse_count: 26, missing_verses: [] }, // 44
        { verse_count: 17, missing_verses: [] }, // 45
        { verse_count: 11, missing_verses: [] }, // 46
        { verse_count: 9, missing_verses: [] }, // 47
        { verse_count: 14, missing_verses: [] }, // 48
        { verse_count: 20, missing_verses: [] }, // 49
        { verse_count: 23, missing_verses: [] }, // 50
        { verse_count: 19, missing_verses: [] }, // 51
        { verse_count: 9, missing_verses: [] }, // 52
        { verse_count: 6, missing_verses: [] }, // 53
        { verse_count: 7, missing_verses: [] }, // 54
        { verse_count: 23, missing_verses: [] }, // 55
        { verse_count: 13, missing_verses: [] }, // 56
        { verse_count: 11, missing_verses: [] }, // 57
        { verse_count: 11, missing_verses: [] }, // 58
        { verse_count: 17, missing_verses: [] }, // 59
        { verse_count: 12, missing_verses: [] }, // 60
        { verse_count: 8, missing_verses: [] }, // 61
        { verse_count: 12, missing_verses: [] }, // 62
        { verse_count: 11, missing_verses: [] }, // 63
        { verse_count: 10, missing_verses: [] }, // 64
        { verse_count: 13, missing_verses: [] }, // 65
        { verse_count: 20, missing_verses: [] }, // 66
        { verse_count: 7, missing_verses: [] }, // 67
        { verse_count: 35, missing_verses: [] }, // 68
        { verse_count: 36, missing_verses: [] }, // 69
        { verse_count: 5, missing_verses: [] }, // 70
        { verse_count: 24, missing_verses: [] }, // 71
        { verse_count: 20, missing_verses: [] }, // 72
        { verse_count: 28, missing_verses: [] }, // 73
        { verse_count: 23, missing_verses: [] }, // 74
        { verse_count: 10, missing_verses: [] }, // 75
        { verse_count: 12, missing_verses: [] }, // 76
        { verse_count: 20, missing_verses: [] }, // 77
        { verse_count: 72, missing_verses: [] }, // 78
        { verse_count: 13, missing_verses: [] }, // 79
        { verse_count: 19, missing_verses: [] }, // 80
        { verse_count: 16, missing_verses: [] }, // 81
        { verse_count: 8, missing_verses: [] }, // 82
        { verse_count: 18, missing_verses: [] }, // 83
        { verse_count: 12, missing_verses: [] }, // 84
        { verse_count: 13, missing_verses: [] }, // 85
        { verse_count: 17, missing_verses: [] }, // 86
        { verse_count: 7, missing_verses: [] }, // 87
        { verse_count: 18, missing_verses: [] }, // 88
        { verse_count: 52, missing_verses: [] }, // 89
        { verse_count: 17, missing_verses: [] }, // 90
        { verse_count: 16, missing_verses: [] }, // 91
        { verse_count: 15, missing_verses: [] }, // 92
        { verse_count: 5, missing_verses: [] }, // 93
        { verse_count: 23, missing_verses: [] }, // 94
        { verse_count: 11, missing_verses: [] }, // 95
        { verse_count: 13, missing_verses: [] }, // 96
        { verse_count: 12, missing_verses: [] }, // 97
        { verse_count: 9, missing_verses: [] }, // 98
        { verse_count: 9, missing_verses: [] }, // 99
        { verse_count: 5, missing_verses: [] }, // 100
        { verse_count: 8, missing_verses: [] }, // 101
        { verse_count: 28, missing_verses: [] }, // 102
        { verse_count: 22, missing_verses: [] }, // 103
        { verse_count: 35, missing_verses: [] }, // 104
        { verse_count: 45, missing_verses: [] }, // 105
        { verse_count: 48, missing_verses: [] }, // 106
        { verse_count: 43, missing_verses: [] }, // 107
        { verse_count: 13, missing_verses: [] }, // 108
        { verse_count: 31, missing_verses: [] }, // 109
        { verse_count: 7, missing_verses: [] }, // 110
        { verse_count: 10, missing_verses: [] }, // 111
        { verse_count: 10, missing_verses: [] }, // 112
        { verse_count: 9, missing_verses: [] }, // 113
        { verse_count: 8, missing_verses: [] }, // 114
        { verse_count: 18, missing_verses: [] }, // 115
        { verse_count: 19, missing_verses: [] }, // 116
        { verse_count: 2, missing_verses: [] }, // 117
        { verse_count: 29, missing_verses: [] }, // 118
        { verse_count: 176, missing_verses: [] }, // 119
        { verse_count: 7, missing_verses: [] }, // 120
        { verse_count: 8, missing_verses: [] }, // 121
        { verse_count: 9, missing_verses: [] }, // 122
        { verse_count: 4, missing_verses: [] }, // 123
        { verse_count: 8, missing_verses: [] }, // 124
        { verse_count: 5, missing_verses: [] }, // 125
        { verse_count: 6, missing_verses: [] }, // 126
        { verse_count: 5, missing_verses: [] }, // 127
        { verse_count: 6, missing_verses: [] }, // 128
        { verse_count: 8, missing_verses: [] }, // 129
        { verse_count: 8, missing_verses: [] }, // 130
        { verse_count: 3, missing_verses: [] }, // 131
        { verse_count: 18, missing_verses: [] }, // 132
        { verse_count: 3, missing_verses: [] }, // 133
        { verse_count: 3, missing_verses: [] }, // 134
        { verse_count: 21, missing_verses: [] }, // 135
        { verse_count: 26, missing_verses: [] }, // 136
        { verse_count: 9, missing_verses: [] }, // 137
        { verse_count: 8, missing_verses: [] }, // 138
        { verse_count: 24, missing_verses: [] }, // 139
        { verse_count: 13, missing_verses: [] }, // 140
        { verse_count: 10, missing_verses: [] }, // 141
        { verse_count: 7, missing_verses: [] }, // 142
        { verse_count: 12, missing_verses: [] }, // 143
        { verse_count: 15, missing_verses: [] }, // 144
        { verse_count: 21, missing_verses: [] }, // 145
        { verse_count: 10, missing_verses: [] }, // 146
        { verse_count: 20, missing_verses: [] }, // 147
        { verse_count: 14, missing_verses: [] }, // 148
        { verse_count: 9, missing_verses: [] }, // 149
        { verse_count: 6, missing_verses: [] }, // 150
    ]
};

const PROVERBS: Book = {
    title: "Proverbs",
    chapters: [
        { verse_count: 33, missing_verses: [] }, // 1
        { verse_count: 22, missing_verses: [] }, // 2
        { verse_count: 35, missing_verses: [] }, // 3
        { verse_count: 27, missing_verses: [] }, // 4
        { verse_count: 23, missing_verses: [] }, // 5
        { verse_count: 35, missing_verses: [] }, // 6
        { verse_count: 27, missing_verses: [] }, // 7
        { verse_count: 36, missing_verses: [] }, // 8
        { verse_count: 18, missing_verses: [] }, // 9
        { verse_count: 32, missing_verses: [] }, // 10
        { verse_count: 31, missing_verses: [] }, // 11
        { verse_count: 28, missing_verses: [] }, // 12
        { verse_count: 25, missing_verses: [] }, // 13
        { verse_count: 35, missing_verses: [] }, // 14
        { verse_count: 33, missing_verses: [] }, // 15
        { verse_count: 33, missing_verses: [] }, // 16
        { verse_count: 28, missing_verses: [] }, // 17
        { verse_count: 24, missing_verses: [] }, // 18
        { verse_count: 29, missing_verses: [] }, // 19
        { verse_count: 30, missing_verses: [] }, // 20
        { verse_count: 31, missing_verses: [] }, // 21
        { verse_count: 29, missing_verses: [] }, // 22
        { verse_count: 35, missing_verses: [] }, // 23
        { verse_count: 34, missing_verses: [] }, // 24
        { verse_count: 28, missing_verses: [] }, // 25
        { verse_count: 28, missing_verses: [] }, // 26
        { verse_count: 27, missing_verses: [] }, // 27
        { verse_count: 28, missing_verses: [] }, // 28
        { verse_count: 27, missing_verses: [] }, // 29
        { verse_count: 33, missing_verses: [] }, // 30
        { verse_count: 31, missing_verses: [] }, // 31
    ]
};

const ECCLESIASTES: Book = {
    title: "Ecclesiastes",
    chapters: [
        { verse_count: 18, missing_verses: [] }, // 1
        { verse_count: 26, missing_verses: [] }, // 2
        { verse_count: 22, missing_verses: [] }, // 3
        { verse_count: 16, missing_verses: [] }, // 4
        { verse_count: 20, missing_verses: [] }, // 5
        { verse_count: 12, missing_verses: [] }, // 6
        { verse_count: 29, missing_verses: [] }, // 7
        { verse_count: 17, missing_verses: [] }, // 8
        { verse_count: 18, missing_verses: [] }, // 9
        { verse_count: 20, missing_verses: [] }, // 10
        { verse_count: 10, missing_verses: [] }, // 11
        { verse_count: 14, missing_verses: [] }, // 12
    ]
};

const SONG_OF_SOLOMON: Book = {
    title: "Song of Solomon",
    chapters: [
        { verse_count: 17, missing_verses: [] }, // 1
        { verse_count: 17, missing_verses: [] }, // 2
        { verse_count: 11, missing_verses: [] }, // 3
        { verse_count: 16, missing_verses: [] }, // 4
        { verse_count: 16, missing_verses: [] }, // 5
        { verse_count: 13, missing_verses: [] }, // 6
        { verse_count: 13, missing_verses: [] }, // 7
        { verse_count: 14, missing_verses: [] }, // 8
    ]
};

const ISAIAH: Book = {
    title: "Isaiah",
    chapters: [
        { verse_count: 31, missing_verses: [] }, // 1
        { verse_count: 22, missing_verses: [] }, // 2
        { verse_count: 26, missing_verses: [] }, // 3
        { verse_count: 6, missing_verses: [] }, // 4
        { verse_count: 30, missing_verses: [] }, // 5
        { verse_count: 13, missing_verses: [] }, // 6
        { verse_count: 25, missing_verses: [] }, // 7
        { verse_count: 22, missing_verses: [] }, // 8
        { verse_count: 21, missing_verses: [] }, // 9
        { verse_count: 34, missing_verses: [] }, // 10
        { verse_count: 16, missing_verses: [] }, // 11
        { verse_count: 6, missing_verses: [] }, // 12
        { verse_count: 22, missing_verses: [] }, // 13
        { verse_count: 32, missing_verses: [] }, // 14
        { verse_count: 9, missing_verses: [] }, // 15
        { verse_count: 14, missing_verses: [] }, // 16
        { verse_count: 14, missing_verses: [] }, // 17
        { verse_count: 7, missing_verses: [] }, // 18
        { verse_count: 25, missing_verses: [] }, // 19
        { verse_count: 6, missing_verses: [] }, // 20
        { verse_count: 17, missing_verses: [] }, // 21
        { verse_count: 25, missing_verses: [] }, // 22
        { verse_count: 18, missing_verses: [] }, // 23
        { verse_count: 23, missing_verses: [] }, // 24
        { verse_count: 12, missing_verses: [] }, // 25
        { verse_count: 21, missing_verses: [] }, // 26
        { verse_count: 13, missing_verses: [] }, // 27
        { verse_count: 29, missing_verses: [] }, // 28
        { verse_count: 24, missing_verses: [] }, // 29
        { verse_count: 33, missing_verses: [] }, // 30
        { verse_count: 9, missing_verses: [] }, // 31
        { verse_count: 20, missing_verses: [] }, // 32
        { verse_count: 24, missing_verses: [] }, // 33
        { verse_count: 17, missing_verses: [] }, // 34
        { verse_count: 10, missing_verses: [] }, // 35
        { verse_count: 22, missing_verses: [] }, // 36
        { verse_count: 38, missing_verses: [] }, // 37
        { verse_count: 22, missing_verses: [] }, // 38
        { verse_count: 8, missing_verses: [] }, // 39
        { verse_count: 31, missing_verses: [] }, // 40
        { verse_count: 29, missing_verses: [] }, // 41
        { verse_count: 25, missing_verses: [] }, // 42
        { verse_count: 28, missing_verses: [] }, // 43
        { verse_count: 28, missing_verses: [] }, // 44
        { verse_count: 25, missing_verses: [] }, // 45
        { verse_count: 13, missing_verses: [] }, // 46
        { verse_count: 15, missing_verses: [] }, // 47
        { verse_count: 22, missing_verses: [] }, // 48
        { verse_count: 26, missing_verses: [] }, // 49
        { verse_count: 11, missing_verses: [] }, // 50
        { verse_count: 23, missing_verses: [] }, // 51
        { verse_count: 15, missing_verses: [] }, // 52
        { verse_count: 12, missing_verses: [] }, // 53
        { verse_count: 17, missing_verses: [] }, // 54
        { verse_count: 13, missing_verses: [] }, // 55
        { verse_count: 12, missing_verses: [] }, // 56
        { verse_count: 21, missing_verses: [] }, // 57
        { verse_count: 14, missing_verses: [] }, // 58
        { verse_count: 21, missing_verses: [] }, // 59
        { verse_count: 22, missing_verses: [] }, // 60
        { verse_count: 11, missing_verses: [] }, // 61
        { verse_count: 12, missing_verses: [] }, // 62
        { verse_count: 19, missing_verses: [] }, // 63
        { verse_count: 12, missing_verses: [] }, // 64
        { verse_count: 25, missing_verses: [] }, // 65
        { verse_count: 24, missing_verses: [] }, // 66
    ]
};

const JEREMIAH: Book = {
    title: "Jeremiah",
    chapters: [
        { verse_count: 19, missing_verses: [] }, // 1
        { verse_count: 37, missing_verses: [] }, // 2
        { verse_count: 25, missing_verses: [] }, // 3
        { verse_count: 31, missing_verses: [] }, // 4
        { verse_count: 31, missing_verses: [] }, // 5
        { verse_count: 30, missing_verses: [] }, // 6
        { verse_count: 34, missing_verses: [] }, // 7
        { verse_count: 22, missing_verses: [] }, // 8
        { verse_count: 26, missing_verses: [] }, // 9
        { verse_count: 25, missing_verses: [] }, // 10
        { verse_count: 23, missing_verses: [] }, // 11
        { verse_count: 17, missing_verses: [] }, // 12
        { verse_count: 27, missing_verses: [] }, // 13
        { verse_count: 22, missing_verses: [] }, // 14
        { verse_count: 21, missing_verses: [] }, // 15
        { verse_count: 21, missing_verses: [] }, // 16
        { verse_count: 27, missing_verses: [] }, // 17
        { verse_count: 23, missing_verses: [] }, // 18
        { verse_count: 15, missing_verses: [] }, // 19
        { verse_count: 18, missing_verses: [] }, // 20
        { verse_count: 14, missing_verses: [] }, // 21
        { verse_count: 30, missing_verses: [] }, // 22
        { verse_count: 40, missing_verses: [] }, // 23
        { verse_count: 10, missing_verses: [] }, // 24
        { verse_count: 38, missing_verses: [] }, // 25
        { verse_count: 24, missing_verses: [] }, // 26
        { verse_count: 22, missing_verses: [] }, // 27
        { verse_count: 17, missing_verses: [] }, // 28
        { verse_count: 32, missing_verses: [] }, // 29
        { verse_count: 24, missing_verses: [] }, // 30
        { verse_count: 40, missing_verses: [] }, // 31
        { verse_count: 44, missing_verses: [] }, // 32
        { verse_count: 26, missing_verses: [] }, // 33
        { verse_count: 22, missing_verses: [] }, // 34
        { verse_count: 19, missing_verses: [] }, // 35
        { verse_count: 32, missing_verses: [] }, // 36
        { verse_count: 21, missing_verses: [] }, // 37
        { verse_count: 28, missing_verses: [] }, // 38
        { verse_count: 18, missing_verses: [] }, // 39
        { verse_count: 16, missing_verses: [] }, // 40
        { verse_count: 18, missing_verses: [] }, // 41
        { verse_count: 22, missing_verses: [] }, // 42
        { verse_count: 13, missing_verses: [] }, // 43
        { verse_count: 30, missing_verses: [] }, // 44
        { verse_count: 5, missing_verses: [] }, // 45
        { verse_count: 28, missing_verses: [] }, // 46
        { verse_count: 7, missing_verses: [] }, // 47
        { verse_count: 47, missing_verses: [] }, // 48
        { verse_count: 39, missing_verses: [] }, // 49
        { verse_count: 46, missing_verses: [] }, // 50
        { verse_count: 64, missing_verses: [] }, // 51
        { verse_count: 34, missing_verses: [] }, // 52
    ]
};

const LAMENTATIONS: Book = {
    title: "Lamentations",
    chapters: [
        { verse_count: 22, missing_verses: [] }, // 1
        { verse_count: 22, missing_verses: [] }, // 2
        { verse_count: 66, missing_verses: [] }, // 3
        { verse_count: 22, missing_verses: [] }, // 4
        { verse_count: 22, missing_verses: [] }, // 5
    ]
};

const EZEKIEL: Book = {
    title: "Ezekiel",
    chapters: [
        { verse_count: 28, missing_verses: [] }, // 1
        { verse_count: 10, missing_verses: [] }, // 2
        { verse_count: 27, missing_verses: [] }, // 3
        { verse_count: 17, missing_verses: [] }, // 4
        { verse_count: 17, missing_verses: [] }, // 5
        { verse_count: 14, missing_verses: [] }, // 6
        { verse_count: 27, missing_verses: [] }, // 7
        { verse_count: 18, missing_verses: [] }, // 8
        { verse_count: 11, missing_verses: [] }, // 9
        { verse_count: 22, missing_verses: [] }, // 10
        { verse_count: 25, missing_verses: [] }, // 11
        { verse_count: 28, missing_verses: [] }, // 12
        { verse_count: 23, missing_verses: [] }, // 13
        { verse_count: 23, missing_verses: [] }, // 14
        { verse_count: 8, missing_verses: [] }, // 15
        { verse_count: 63, missing_verses: [] }, // 16
        { verse_count: 24, missing_verses: [] }, // 17
        { verse_count: 32, missing_verses: [] }, // 18
        { verse_count: 14, missing_verses: [] }, // 19
        { verse_count: 49, missing_verses: [] }, // 20
        { verse_count: 32, missing_verses: [] }, // 21
        { verse_count: 31, missing_verses: [] }, // 22
        { verse_count: 49, missing_verses: [] }, // 23
        { verse_count: 27, missing_verses: [] }, // 24
        { verse_count: 17, missing_verses: [] }, // 25
        { verse_count: 21, missing_verses: [] }, // 26
        { verse_count: 36, missing_verses: [] }, // 27
        { verse_count: 26, missing_verses: [] }, // 28
        { verse_count: 21, missing_verses: [] }, // 29
        { verse_count: 26, missing_verses: [] }, // 30
        { verse_count: 18, missing_verses: [] }, // 31
        { verse_count: 32, missing_verses: [] }, // 32
        { verse_count: 33, missing_verses: [] }, // 33
        { verse_count: 31, missing_verses: [] }, // 34
        { verse_count: 15, missing_verses: [] }, // 35
        { verse_count: 38, missing_verses: [] }, // 36
        { verse_count: 28, missing_verses: [] }, // 37
        { verse_count: 23, missing_verses: [] }, // 38
        { verse_count: 29, missing_verses: [] }, // 39
        { verse_count: 49, missing_verses: [] }, // 40
        { verse_count: 26, missing_verses: [] }, // 41
        { verse_count: 20, missing_verses: [] }, // 42
        { verse_count: 27, missing_verses: [] }, // 43
        { verse_count: 31, missing_verses: [] }, // 44
        { verse_count: 25, missing_verses: [] }, // 45
        { verse_count: 24, missing_verses: [] }, // 46
        { verse_count: 23, missing_verses: [] }, // 47
        { verse_count: 35, missing_verses: [] }, // 48
    ]
};

const DANIEL: Book = {
    title: "Daniel",
    chapters: [
        { verse_count: 21, missing_verses: [] }, // 1
        { verse_count: 49, missing_verses: [] }, // 2
        { verse_count: 30, missing_verses: [] }, // 3
        { verse_count: 37, missing_verses: [] }, // 4
        { verse_count: 31, missing_verses: [] }, // 5
        { verse_count: 28, missing_verses: [] }, // 6
        { verse_count: 28, missing_verses: [] }, // 7
        { verse_count: 27, missing_verses: [] }, // 8
        { verse_count: 27, missing_verses: [] }, // 9
        { verse_count: 21, missing_verses: [] }, // 10
        { verse_count: 45, missing_verses: [] }, // 11
        { verse_count: 13, missing_verses: [] }, // 12
    ]
};

const HOSEA: Book = {
    title: "Hosea",
    chapters: [
        { verse_count: 11, missing_verses: [] }, // 1
        { verse_count: 23, missing_verses: [] }, // 2
        { verse_count: 5, missing_verses: [] }, // 3
        { verse_count: 19, missing_verses: [] }, // 4
        { verse_count: 15, missing_verses: [] }, // 5
        { verse_count: 11, missing_verses: [] }, // 6
        { verse_count: 16, missing_verses: [] }, // 7
        { verse_count: 14, missing_verses: [] }, // 8
        { verse_count: 17, missing_verses: [] }, // 9
        { verse_count: 15, missing_verses: [] }, // 10
        { verse_count: 12, missing_verses: [] }, // 11
        { verse_count: 14, missing_verses: [] }, // 12
        { verse_count: 16, missing_verses: [] }, // 13
        { verse_count: 9, missing_verses: [] }, // 14
    ]
};

const JOEL: Book = {
    title: "Joel",
    chapters: [
        { verse_count: 20, missing_verses: [] }, // 1
        { verse_count: 32, missing_verses: [] }, // 2
        { verse_count: 21, missing_verses: [] }, // 3
    ]
};

const AMOS: Book = {
    title: "Amos",
    chapters: [
        { verse_count: 15, missing_verses: [] }, // 1
        { verse_count: 16, missing_verses: [] }, // 2
        { verse_count: 15, missing_verses: [] }, // 3
        { verse_count: 13, missing_verses: [] }, // 4
        { verse_count: 27, missing_verses: [] }, // 5
        { verse_count: 14, missing_verses: [] }, // 6
        { verse_count: 17, missing_verses: [] }, // 7
        { verse_count: 14, missing_verses: [] }, // 8
        { verse_count: 15, missing_verses: [] }, // 9
    ]
};

const OBADIAH: Book = {
    title: "Obadiah",
    chapters: [
        { verse_count: 21, missing_verses: [] }, // 1
    ]
};

const JONAH: Book = {
    title: "Jonah",
    chapters: [
        { verse_count: 17, missing_verses: [] }, // 1
        { verse_count: 10, missing_verses: [] }, // 2
        { verse_count: 10, missing_verses: [] }, // 3
        { verse_count: 11, missing_verses: [] }, // 4
    ]
};

const MICAH: Book = {
    title: "Micah",
    chapters: [
        { verse_count: 16, missing_verses: [] }, // 1
        { verse_count: 13, missing_verses: [] }, // 2
        { verse_count: 12, missing_verses: [] }, // 3
        { verse_count: 13, missing_verses: [] }, // 4
        { verse_count: 15, missing_verses: [] }, // 5
        { verse_count: 16, missing_verses: [] }, // 6
        { verse_count: 20, missing_verses: [] }, // 7
    ]
};

const NAHUM: Book = {
    title: "Nahum",
    chapters: [
        { verse_count: 15, missing_verses: [] }, // 1
        { verse_count: 13, missing_verses: [] }, // 2
        { verse_count: 19, missing_verses: [] }, // 3
    ]
};

const HABAKKUK: Book = {
    title: "Habakkuk",
    chapters: [
        { verse_count: 17, missing_verses: [] }, // 1
        { verse_count: 20, missing_verses: [] }, // 2
        { verse_count: 19, missing_verses: [] }, // 3
    ]
};

const ZEPHANIAH: Book = {
    title: "Zephaniah",
    chapters: [
        { verse_count: 18, missing_verses: [] }, // 1
        { verse_count: 15, missing_verses: [] }, // 2
        { verse_count: 20, missing_verses: [] }, // 3
    ]
};

const HAGGAI: Book = {
    title: "Haggai",
    chapters: [
        { verse_count: 15, missing_verses: [] }, // 1
        { verse_count: 23, missing_verses: [] }, // 2
    ]
};

const ZECHARIAH: Book = {
    title: "Zechariah",
    chapters: [
        { verse_count: 21, missing_verses: [] }, // 1
        { verse_count: 13, missing_verses: [] }, // 2
        { verse_count: 10, missing_verses: [] }, // 3
        { verse_count: 14, missing_verses: [] }, // 4
        { verse_count: 11, missing_verses: [] }, // 5
        { verse_count: 15, missing_verses: [] }, // 6
        { verse_count: 14, missing_verses: [] }, // 7
        { verse_count: 23, missing_verses: [] }, // 8
        { verse_count: 17, missing_verses: [] }, // 9
        { verse_count: 12, missing_verses: [] }, // 10
        { verse_count: 17, missing_verses: [] }, // 11
        { verse_count: 14, missing_verses: [] }, // 12
        { verse_count: 9, missing_verses: [] }, // 13
        { verse_count: 21, missing_verses: [] }, // 14
    ]
};

const MALACHI: Book = {
    title: "Malachi",
    chapters: [
        { verse_count: 14, missing_verses: [] }, // 1
        { verse_count: 17, missing_verses: [] }, // 2
        { verse_count: 18, missing_verses: [] }, // 3
        { verse_count: 6, missing_verses: [] }, // 4
    ]
};

// NT
const MATTHEW: Book = {
    title: "Matthew",
    chapters: [
        { verse_count: 25, missing_verses: [] }, // 1
        { verse_count: 23, missing_verses: [] }, // 2
        { verse_count: 17, missing_verses: [] }, // 3
        { verse_count: 25, missing_verses: [] }, // 4
        { verse_count: 48, missing_verses: [] }, // 5
        { verse_count: 34, missing_verses: [] }, // 6
        { verse_count: 29, missing_verses: [] }, // 7
        { verse_count: 34, missing_verses: [] }, // 8
        { verse_count: 38, missing_verses: [] }, // 9
        { verse_count: 42, missing_verses: [] }, // 10
        { verse_count: 30, missing_verses: [] }, // 11
        { verse_count: 50, missing_verses: [] }, // 12
        { verse_count: 58, missing_verses: [] }, // 13
        { verse_count: 36, missing_verses: [] }, // 14
        { verse_count: 39, missing_verses: [] }, // 15
        { verse_count: 28, missing_verses: [] }, // 16
        { verse_count: 27, missing_verses: [] }, // 17
        { verse_count: 35, missing_verses: [] }, // 18
        { verse_count: 30, missing_verses: [] }, // 19
        { verse_count: 34, missing_verses: [] }, // 20
        { verse_count: 46, missing_verses: [] }, // 21
        { verse_count: 46, missing_verses: [] }, // 22
        { verse_count: 39, missing_verses: [] }, // 23
        { verse_count: 51, missing_verses: [] }, // 24
        { verse_count: 46, missing_verses: [] }, // 25
        { verse_count: 75, missing_verses: [] }, // 26
        { verse_count: 66, missing_verses: [] }, // 27
        { verse_count: 20, missing_verses: [] }, // 28
    ]
};

const MARK: Book = {
    title: "Mark",
    chapters: [
        { verse_count: 45, missing_verses: [] }, // 1
        { verse_count: 28, missing_verses: [] }, // 2
        { verse_count: 35, missing_verses: [] }, // 3
        { verse_count: 41, missing_verses: [] }, // 4
        { verse_count: 43, missing_verses: [] }, // 5
        { verse_count: 56, missing_verses: [] }, // 6
        { verse_count: 37, missing_verses: [] }, // 7
        { verse_count: 38, missing_verses: [] }, // 8
        { verse_count: 50, missing_verses: [] }, // 9
        { verse_count: 52, missing_verses: [] }, // 10
        { verse_count: 33, missing_verses: [] }, // 11
        { verse_count: 44, missing_verses: [] }, // 12
        { verse_count: 37, missing_verses: [] }, // 13
        { verse_count: 72, missing_verses: [] }, // 14
        { verse_count: 47, missing_verses: [] }, // 15
        { verse_count: 20, missing_verses: [] }, // 16
    ]
};

const LUKE: Book = {
    title: "Luke",
    chapters: [
        { verse_count: 80, missing_verses: [] }, // 1
        { verse_count: 52, missing_verses: [] }, // 2
        { verse_count: 38, missing_verses: [] }, // 3
        { verse_count: 44, missing_verses: [] }, // 4
        { verse_count: 39, missing_verses: [] }, // 5
        { verse_count: 49, missing_verses: [] }, // 6
        { verse_count: 50, missing_verses: [] }, // 7
        { verse_count: 56, missing_verses: [] }, // 8
        { verse_count: 62, missing_verses: [] }, // 9
        { verse_count: 42, missing_verses: [] }, // 10
        { verse_count: 54, missing_verses: [] }, // 11
        { verse_count: 59, missing_verses: [] }, // 12
        { verse_count: 35, missing_verses: [] }, // 13
        { verse_count: 35, missing_verses: [] }, // 14
        { verse_count: 32, missing_verses: [] }, // 15
        { verse_count: 31, missing_verses: [] }, // 16
        { verse_count: 37, missing_verses: [] }, // 17
        { verse_count: 43, missing_verses: [] }, // 18
        { verse_count: 48, missing_verses: [] }, // 19
        { verse_count: 47, missing_verses: [] }, // 20
        { verse_count: 38, missing_verses: [] }, // 21
        { verse_count: 71, missing_verses: [] }, // 22
        { verse_count: 56, missing_verses: [] }, // 23
        { verse_count: 53, missing_verses: [] }, // 24
    ]
};

const JOHN: Book = {
    title: "John",
    chapters: [
        { verse_count: 51, missing_verses: [] }, // 1
        { verse_count: 25, missing_verses: [] }, // 2
        { verse_count: 36, missing_verses: [] }, // 3
        { verse_count: 54, missing_verses: [] }, // 4
        { verse_count: 47, missing_verses: [] }, // 5
        { verse_count: 71, missing_verses: [] }, // 6
        { verse_count: 53, missing_verses: [] }, // 7
        { verse_count: 59, missing_verses: [] }, // 8
        { verse_count: 41, missing_verses: [] }, // 9
        { verse_count: 42, missing_verses: [] }, // 10
        { verse_count: 57, missing_verses: [] }, // 11
        { verse_count: 50, missing_verses: [] }, // 12
        { verse_count: 38, missing_verses: [] }, // 13
        { verse_count: 31, missing_verses: [] }, // 14
        { verse_count: 27, missing_verses: [] }, // 15
        { verse_count: 33, missing_verses: [] }, // 16
        { verse_count: 26, missing_verses: [] }, // 17
        { verse_count: 40, missing_verses: [] }, // 18
        { verse_count: 42, missing_verses: [] }, // 19
        { verse_count: 31, missing_verses: [] }, // 20
        { verse_count: 25, missing_verses: [] }, // 21
    ]
};

const ACTS: Book = {
    title: "Acts",
    chapters: [
        { verse_count: 26, missing_verses: [] }, // 1
        { verse_count: 47, missing_verses: [] }, // 2
        { verse_count: 26, missing_verses: [] }, // 3
        { verse_count: 37, missing_verses: [] }, // 4
        { verse_count: 42, missing_verses: [] }, // 5
        { verse_count: 15, missing_verses: [] }, // 6
        { verse_count: 60, missing_verses: [] }, // 7
        { verse_count: 40, missing_verses: [] }, // 8
        { verse_count: 43, missing_verses: [] }, // 9
        { verse_count: 48, missing_verses: [] }, // 10
        { verse_count: 30, missing_verses: [] }, // 11
        { verse_count: 25, missing_verses: [] }, // 12
        { verse_count: 52, missing_verses: [] }, // 13
        { verse_count: 28, missing_verses: [] }, // 14
        { verse_count: 41, missing_verses: [] }, // 15
        { verse_count: 40, missing_verses: [] }, // 16
        { verse_count: 34, missing_verses: [] }, // 17
        { verse_count: 28, missing_verses: [] }, // 18
        { verse_count: 41, missing_verses: [] }, // 19
        { verse_count: 38, missing_verses: [] }, // 20
        { verse_count: 40, missing_verses: [] }, // 21
        { verse_count: 30, missing_verses: [] }, // 22
        { verse_count: 35, missing_verses: [] }, // 23
        { verse_count: 27, missing_verses: [] }, // 24
        { verse_count: 27, missing_verses: [] }, // 25
        { verse_count: 32, missing_verses: [] }, // 26
        { verse_count: 44, missing_verses: [] }, // 27
        { verse_count: 31, missing_verses: [] }, // 28
    ]
};

const ROMANS: Book = {
    title: "Romans",
    chapters: [
        { verse_count: 32, missing_verses: [] }, // 1
        { verse_count: 29, missing_verses: [] }, // 2
        { verse_count: 31, missing_verses: [] }, // 3
        { verse_count: 25, missing_verses: [] }, // 4
        { verse_count: 21, missing_verses: [] }, // 5
        { verse_count: 23, missing_verses: [] }, // 6
        { verse_count: 25, missing_verses: [] }, // 7
        { verse_count: 39, missing_verses: [] }, // 8
        { verse_count: 33, missing_verses: [] }, // 9
        { verse_count: 21, missing_verses: [] }, // 10
        { verse_count: 36, missing_verses: [] }, // 11
        { verse_count: 21, missing_verses: [] }, // 12
        { verse_count: 14, missing_verses: [] }, // 13
        { verse_count: 23, missing_verses: [] }, // 14
        { verse_count: 33, missing_verses: [] }, // 15
        { verse_count: 27, missing_verses: [] }, // 16
    ]
};

const ONE_CORINTHIANS: Book = {
    title: "1 Corinthians",
    chapters: [
        { verse_count: 31, missing_verses: [] }, // 1
        { verse_count: 16, missing_verses: [] }, // 2
        { verse_count: 23, missing_verses: [] }, // 3
        { verse_count: 21, missing_verses: [] }, // 4
        { verse_count: 13, missing_verses: [] }, // 5
        { verse_count: 20, missing_verses: [] }, // 6
        { verse_count: 40, missing_verses: [] }, // 7
        { verse_count: 13, missing_verses: [] }, // 8
        { verse_count: 27, missing_verses: [] }, // 9
        { verse_count: 33, missing_verses: [] }, // 10
        { verse_count: 34, missing_verses: [] }, // 11
        { verse_count: 31, missing_verses: [] }, // 12
        { verse_count: 13, missing_verses: [] }, // 13
        { verse_count: 40, missing_verses: [] }, // 14
        { verse_count: 58, missing_verses: [] }, // 15
        { verse_count: 24, missing_verses: [] }, // 16
    ]
};

const TWO_CORINTHIANS: Book = {
    title: "2 Corinthians",
    chapters: [
        { verse_count: 24, missing_verses: [] }, // 1
        { verse_count: 17, missing_verses: [] }, // 2
        { verse_count: 18, missing_verses: [] }, // 3
        { verse_count: 18, missing_verses: [] }, // 4
        { verse_count: 21, missing_verses: [] }, // 5
        { verse_count: 18, missing_verses: [] }, // 6
        { verse_count: 16, missing_verses: [] }, // 7
        { verse_count: 24, missing_verses: [] }, // 8
        { verse_count: 15, missing_verses: [] }, // 9
        { verse_count: 18, missing_verses: [] }, // 10
        { verse_count: 33, missing_verses: [] }, // 11
        { verse_count: 21, missing_verses: [] }, // 12
        { verse_count: 14, missing_verses: [] }, // 13
    ]
};

const GALATIANS: Book = {
    title: "Galatians",
    chapters: [
        { verse_count: 24, missing_verses: [] }, // 1
        { verse_count: 21, missing_verses: [] }, // 2
        { verse_count: 29, missing_verses: [] }, // 3
        { verse_count: 31, missing_verses: [] }, // 4
        { verse_count: 26, missing_verses: [] }, // 5
        { verse_count: 18, missing_verses: [] }, // 6
    ]
};

const EPHESIANS: Book = {
    title: "Ephesians",
    chapters: [
        { verse_count: 23, missing_verses: [] }, // 1
        { verse_count: 22, missing_verses: [] }, // 2
        { verse_count: 21, missing_verses: [] }, // 3
        { verse_count: 32, missing_verses: [] }, // 4
        { verse_count: 33, missing_verses: [] }, // 5
        { verse_count: 24, missing_verses: [] }, // 6
    ]
};

const PHILIPPIANS: Book = {
    title: "Philippians",
    chapters: [
        { verse_count: 30, missing_verses: [] }, // 1
        { verse_count: 30, missing_verses: [] }, // 2
        { verse_count: 21, missing_verses: [] }, // 3
        { verse_count: 23, missing_verses: [] }, // 4
    ]
};

const COLOSSIANS: Book = {
    title: "Colossians",
    chapters: [
        { verse_count: 29, missing_verses: [] }, // 1
        { verse_count: 23, missing_verses: [] }, // 2
        { verse_count: 25, missing_verses: [] }, // 3
        { verse_count: 18, missing_verses: [] }, // 4
    ]
};

const ONE_THESSALONIANS: Book = {
    title: "1 Thessalonians",
    chapters: [
        { verse_count: 10, missing_verses: [] }, // 1
        { verse_count: 20, missing_verses: [] }, // 2
        { verse_count: 13, missing_verses: [] }, // 3
        { verse_count: 18, missing_verses: [] }, // 4
        { verse_count: 28, missing_verses: [] }, // 5
    ]
};

const TWO_THESSALONIANS: Book = {
    title: "2 Thessalonians",
    chapters: [
        { verse_count: 12, missing_verses: [] }, // 1
        { verse_count: 17, missing_verses: [] }, // 2
        { verse_count: 18, missing_verses: [] }, // 3
    ]
};

const ONE_TIMOTHY: Book = {
    title: "1 Timothy",
    chapters: [
        { verse_count: 20, missing_verses: [] }, // 1
        { verse_count: 15, missing_verses: [] }, // 2
        { verse_count: 16, missing_verses: [] }, // 3
        { verse_count: 16, missing_verses: [] }, // 4
        { verse_count: 25, missing_verses: [] }, // 5
        { verse_count: 21, missing_verses: [] }, // 6
    ]
};

const TWO_TIMOTHY: Book = {
    title: "2 Timothy",
    chapters: [
        { verse_count: 18, missing_verses: [] }, // 1
        { verse_count: 26, missing_verses: [] }, // 2
        { verse_count: 17, missing_verses: [] }, // 3
        { verse_count: 22, missing_verses: [] }, // 4
    ]
};

const TITUS: Book = {
    title: "Titus",
    chapters: [
        { verse_count: 16, missing_verses: [] }, // 1
        { verse_count: 15, missing_verses: [] }, // 2
        { verse_count: 15, missing_verses: [] }, // 3
    ]
};

const PHILEMON: Book = {
    title: "Philemon",
    chapters: [
        { verse_count: 25, missing_verses: [] }, // 1
    ]
};

const HEBREWS: Book = {
    title: "Hebrews",
    chapters: [
        { verse_count: 14, missing_verses: [] }, // 1
        { verse_count: 18, missing_verses: [] }, // 2
        { verse_count: 19, missing_verses: [] }, // 3
        { verse_count: 16, missing_verses: [] }, // 4
        { verse_count: 14, missing_verses: [] }, // 5
        { verse_count: 20, missing_verses: [] }, // 6
        { verse_count: 28, missing_verses: [] }, // 7
        { verse_count: 13, missing_verses: [] }, // 8
        { verse_count: 28, missing_verses: [] }, // 9
        { verse_count: 39, missing_verses: [] }, // 10
        { verse_count: 40, missing_verses: [] }, // 11
        { verse_count: 29, missing_verses: [] }, // 12 
        { verse_count: 25, missing_verses: [] }, // 13
    ]
};

const JAMES: Book = {
    title: "James",
    chapters: [
        { verse_count: 27, missing_verses: [] }, // 1
        { verse_count: 26, missing_verses: [] }, // 2
        { verse_count: 18, missing_verses: [] }, // 3
        { verse_count: 17, missing_verses: [] }, // 4
        { verse_count: 20, missing_verses: [] }, // 5
    ]
};

const ONE_PETER: Book = {
    title: "1 Peter",
    chapters: [
        { verse_count: 25, missing_verses: [] }, // 1
        { verse_count: 25, missing_verses: [] }, // 2
        { verse_count: 22, missing_verses: [] }, // 3
        { verse_count: 19, missing_verses: [] }, // 4
        { verse_count: 14, missing_verses: [] }, // 5
    ]
};

const TWO_PETER: Book = {
    title: "2 Peter",
    chapters: [
        { verse_count: 21, missing_verses: [] }, // 1
        { verse_count: 22, missing_verses: [] }, // 2
        { verse_count: 18, missing_verses: [] }, // 3
    ]
};

const ONE_JOHN: Book = {
    title: "1 John",
    chapters: [
        { verse_count: 10, missing_verses: [] }, // 1
        { verse_count: 29, missing_verses: [] }, // 2
        { verse_count: 24, missing_verses: [] }, // 3
        { verse_count: 21, missing_verses: [] }, // 4
        { verse_count: 21, missing_verses: [] }, // 5
    ]
};

const TWO_JOHN: Book = {
    title: "2 John",
    chapters: [
        { verse_count: 13, missing_verses: [] }, // 1
    ]
};

const THREE_JOHN: Book = {
    title: "3 John",
    chapters: [
        { verse_count: 15, missing_verses: [] }, // 1
    ]
};

const JUDE: Book = {
    title: "Jude",
    chapters: [
        { verse_count: 25, missing_verses: [] }, // 1
    ]
};

const REVELATION: Book = {
    title: "Revelation",
    chapters: [
        { verse_count: 20, missing_verses: [] }, // 1
        { verse_count: 29, missing_verses: [] }, // 2
        { verse_count: 22, missing_verses: [] }, // 3
        { verse_count: 11, missing_verses: [] }, // 4
        { verse_count: 14, missing_verses: [] }, // 5
        { verse_count: 17, missing_verses: [] }, // 6
        { verse_count: 17, missing_verses: [] }, // 7
        { verse_count: 13, missing_verses: [] }, // 8
        { verse_count: 21, missing_verses: [] }, // 9
        { verse_count: 11, missing_verses: [] }, // 10
        { verse_count: 19, missing_verses: [] }, // 11
        { verse_count: 17, missing_verses: [] }, // 12
        { verse_count: 18, missing_verses: [] }, // 13
        { verse_count: 20, missing_verses: [] }, // 14
        { verse_count: 8, missing_verses: [] }, // 15
        { verse_count: 21, missing_verses: [] }, // 16
        { verse_count: 18, missing_verses: [] }, // 17
        { verse_count: 24, missing_verses: [] }, // 18
        { verse_count: 21, missing_verses: [] }, // 19
        { verse_count: 15, missing_verses: [] }, // 20
        { verse_count: 27, missing_verses: [] }, // 21
        { verse_count: 21, missing_verses: [] }, // 22
    ]
};

export const BibleMeta: Array<Book> = [
    GENESIS,
    EXODUS,
    LEVITICUS,
    NUMBERS,
    DEUTERONOMY,
    JOSHUA,
    JUDGES,
    RUTH,
    ONE_SAMUEL,
    TWO_SAMUEL,
    ONE_KINGS,
    TWO_KINGS,
    ONE_CHRONICLES,
    TWO_CHRONICLES,
    EZRA,
    NEHEMIAH,
    ESTHER,
    JOB,
    PSALM,
    PROVERBS,
    ECCLESIASTES,
    SONG_OF_SOLOMON,
    ISAIAH,
    JEREMIAH,
    LAMENTATIONS,
    EZEKIEL,
    DANIEL,
    HOSEA,
    JOEL,
    AMOS,
    OBADIAH,
    JONAH,
    MICAH,
    NAHUM,
    HABAKKUK,
    ZEPHANIAH,
    HAGGAI,
    ZECHARIAH,
    MALACHI,
    MATTHEW,
    MARK,
    LUKE,
    JOHN,
    ACTS,
    ROMANS,
    ONE_CORINTHIANS,
    TWO_CORINTHIANS,
    GALATIANS,
    EPHESIANS,
    PHILIPPIANS,
    COLOSSIANS,
    ONE_THESSALONIANS,
    TWO_THESSALONIANS,
    ONE_TIMOTHY,
    TWO_TIMOTHY,
    TITUS,
    PHILEMON,
    HEBREWS,
    JAMES,
    ONE_PETER,
    TWO_PETER,
    ONE_JOHN,
    TWO_JOHN,
    THREE_JOHN,
    JUDE,
    REVELATION
];
