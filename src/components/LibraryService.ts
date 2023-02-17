import * as NodeReadLine from 'node:readline/promises';
import { Author } from "../models/Author";
import { WorkEntry } from "../models/WorkEntry";
import { DataService } from './DataService';

export class LibraryService {

    public static async getInput(): Promise<string> {
        const readLine = NodeReadLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const userInput = await readLine.question('Please enter the name of the author: ');

        readLine.close();

        // Print an empty line to separate the input from the output.
        console.log();

        return userInput;
    }

    public static async printAuthorsAndWorks(author: string): Promise<void> {
        try {
            const authors: Author[] = await DataService.getAuthors(author);

            if (!authors || authors.length === 0) {
                console.log(`Could not find any authors with the following name: ${author}`);
                return;
            }
    
            authors.forEach(async (author: Author) => {
                const workEntries: WorkEntry[] = await DataService.getWorkEntries(author.key);

                // When workEntries is undefined, that means that we got an error during the fetch request.
                // I ran into this issue during development, I got a 503 error from the server.
                if (workEntries === undefined) {
                    return;
                }

                // We are counting the amount of work entries because the work_count reported by the API
                // may not be correct (the value of work_count and the number of entries may be different).
                console.log(`${author.name} (${author.key})\nNumber of works: ${workEntries.length}`);
    
                if (workEntries.length > 0) {
                    console.log(`Works:`);
        
                    workEntries.forEach((workEntry: WorkEntry) => {
                        console.log(`- ${workEntry.title} (${workEntry.key})`);
                    }); 
                }
                // Print an empty line to separate the authors.
                console.log();
            });
        }
        catch (err) {
            console.error("Fail", err);
        }
    }
}