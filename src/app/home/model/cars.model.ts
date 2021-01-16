export interface Cars {
    id: string
    name: string
    type: string
    url_foto: string
    token: string
}

export interface Page {
    content: Array<Cars>;
    pageable: Pageable;
    totalElements: number;
    totalPages: number;
    last: boolean;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    empty: boolean;
};

export interface Pageable {
    sort: Sort;
    pageSize: number;
    pageNumber: number;
    offset: number;
    unpaged: boolean;
    paged: boolean;
};

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
};