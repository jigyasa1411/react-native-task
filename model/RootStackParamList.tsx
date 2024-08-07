import { Book } from "./Book";

type RootStackParamList = {
    BookList: undefined;
    BookDetail: { book: Book };
    Profile: { userId: string };
    TestScreen: { test: string }
};

export default RootStackParamList;