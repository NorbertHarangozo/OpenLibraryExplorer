type WorkAuthors = {
    author: {
        key: string
    },
    type: {
        key: string
    }
}

type TypeAndValue = {
    type: string,
    value: string
}

export type WorkEntry = {
    key: string,
    title: string,
    description?: TypeAndValue | string,
    subjects?: string[],
    authors: WorkAuthors[],
    covers?: number[],
    type: {
        key: string
    },
    subject_places?: string[],
    latest_revision?: number,
    revision: number,
    created?: TypeAndValue,
    last_modified: TypeAndValue,
    subtitle?: string,
    first_publish_date?: string,
    lc_classifications?: string[],
    dewey_number?: string[],
    first_sentence?: TypeAndValue,
    excerpts?: Array<{
        excerpt: string
    }>
}