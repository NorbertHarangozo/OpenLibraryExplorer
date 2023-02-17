export type Author = {
    key: string,
    name: string,
    workCount: number,
    topWork?: string,
    birthDate?: string,
    deathDate?: string,
    alternateNames?: string[],
    topSubjects?: string[]
}