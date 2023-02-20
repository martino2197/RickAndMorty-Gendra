export interface InfoApi {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null,
}

export interface ResultsApi {
    created: string,
    episode: string[],
    gender: string,
    id: number,
    image: string,
    location: any,
    name: string,
    origin: any,
    species: string,
    status: string
    type: string,
    url: string
}

export interface DataApi {
    info: InfoApi,
    results: ResultsApi[],
}