import { LibraryService } from './components/LibraryService';

(async () => {
    const author: string = await LibraryService.getInput();
    LibraryService.printAuthorsAndWorks(author);
})();
