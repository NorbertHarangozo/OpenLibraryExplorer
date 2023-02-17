import { Author } from "../models/Author";
import { WorkEntry } from "../models/WorkEntry";

export class DataService {    
    public static async getAuthors(author: string): Promise<Array<Author>> {
        const result = await this.getDataFromAPI(`https://openlibrary.org/search/authors.json?q=${author}`);
        const authorList: Author[] = result?.docs?.map((doc: any) => {
            return {
                key: doc.key,
                name: doc.name,
                workCount: doc.work_count,
                topWork: doc.top_work
            };
        });

        return authorList;
    }

    public static async getWorkEntries(authorKey: string): Promise<Array<WorkEntry>> {
        const result = await this.getDataFromAPI(`https://openlibrary.org/authors/${authorKey}/works.json`);
        const entries: WorkEntry[] = result?.entries?.map((entry: WorkEntry) => {
            return {
                ...entry,
                key: entry.key.replace('/works/', '')
            }
        });

        return entries;
    }

    private static async getDataFromAPI(url: string) {
        try {
            const response = await fetch(encodeURI(url));
            const result = await response.text();

            return JSON.parse(result);
        } catch (error) {
            console.error(`Could not fetch data from the API.`);
        }
    }
}