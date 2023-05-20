export interface RootState{
    main: {
        value: NewsState[];
    };
}

export interface NameState{
    name: {
        value: null | string;
    };
}

export interface PublishState{
    publish: {
        value: NewsState[];
    };
}

export interface SearchState{
    search: {
        value: NewsState[];
    };
}

export interface SearchNameState{
    searchName: {
        value: null | string;
    };
}


export interface NewsState{
    source: { id: null | string | number, name: string };
    author: string;
    title: string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    content: string;
}