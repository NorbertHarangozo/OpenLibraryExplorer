import { DataService } from "../components/DataService";
import { Author } from "../models/Author";
import { WorkEntry } from "../models/WorkEntry";
import { mockedAuthors, mockedAuthorResponse, mockedWorkEntries, mockedWorkEntriesResponse } from "./TestData";

describe(`AuthorService functions`, () => {
    global.fetch = jest.fn() as jest.Mock;

    describe(`getAuthors - happy path`, () => {
        const authorName: string = `Robert C. Martin`;
    
        beforeEach(async () => {
            jest.mocked(fetch).mockClear();
            jest.mocked(fetch).mockImplementation((): Promise<any> => {
                return Promise.resolve({
                    text() {
                        return Promise.resolve(JSON.stringify(mockedAuthorResponse));
                    }
                })
            });
        });
        
        it(`should fetch authors from the API and map them to an array of Author objects`, async () => {
            const authors: Author[] = await DataService.getAuthors(authorName);

            expect(authors).toBeDefined();
            expect(authors).toEqual(mockedAuthors);
        });
    });

    describe(`getAuthors - 503`, () => {
        const authorName: string = `Robert C. Martin`;
    
        beforeEach(async () => {
            jest.mocked(fetch).mockClear();
            jest.mocked(fetch).mockImplementation((): Promise<any> => {
                return Promise.resolve({
                    text() {
                        return Promise.resolve(JSON.stringify(`<html>503 - Service Unavailable</html>`));
                    }
                })
            });
        });
        
        it(`should try to fetch authors from the API but get a 503 error, so the authors array would remain undefined`, async () => {
            const authors: Author[] = await DataService.getAuthors(authorName);

            expect(authors).toBeUndefined();
        });
    });

    describe(`getWorkEntries - happy path`, () => {
        const authorKey: string = `OL2653686A`;

        beforeEach(async () => {
            jest.mocked(fetch).mockClear();
            jest.mocked(fetch).mockImplementation((): Promise<any> => {
                return Promise.resolve({
                    text() {
                        return Promise.resolve(JSON.stringify(mockedWorkEntriesResponse));
                    }
                })
            });
        });
        
        it(`should fetch work entries from the API and map them to an array of WorkEntry objects`, async () => {
            const workEntries: WorkEntry[] = await DataService.getWorkEntries(authorKey);

            expect(workEntries).toBeDefined();
            expect(workEntries).toEqual(mockedWorkEntries);
        });
    });
    
    describe(`getWorkEntries - 503`, () => {
        const authorKey: string = `OL2653686A`;

        beforeEach(async () => {
            jest.mocked(fetch).mockClear();
            jest.mocked(fetch).mockImplementation((): Promise<any> => {
                return Promise.resolve({
                    text() {
                        return Promise.resolve(JSON.stringify(`<html>503 - Service Unavailable</html>`));
                    }
                })
            });
        });
        
        it(`should fetch work entries from the API but get a 503 error, so the workEntries array would remain undefined`, async () => {
            const workEntries: WorkEntry[] = await DataService.getWorkEntries(authorKey);

            expect(workEntries).toBeUndefined();
        });
    });
})