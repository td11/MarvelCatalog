// src/types/marvelTypes.ts

export interface Comic {
    id: number;
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }

  export interface MarvelResponse {
    data: {
      results: Comic[];
    };
  }
