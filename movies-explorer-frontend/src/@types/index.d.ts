export interface ISearch {
  query: string,
  isShort: boolean
}

export interface ISizeConfig {
  name: string,
  width: number,
  row: number,
  initial: number,
  adding: number
}

export interface CheckboxProps {
  className: string,
  title: string,
  checked: boolean,
  onToggle: () => void
}

export interface MovieCardProps {
  name: string,
  duration: number,
  thumbnail: string,
  type?: string | undefined
}

export namespace Movie {
  export interface Item {
    id: number;
    nameRU: string;
    nameEN: string;
    director: string;
    country: string;
    year: string;
    duration: number;
    description: string;
    trailerLink: string;
    created_at: string;
    updated_at: string;
    image: Image;
  }

  export interface Image {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: null;
    created_at: string;
    updated_at: string;
  }

  export interface Formats {
    thumbnail: Small;
    small: Small;
  }

  export interface Small {
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: null;
    url: string;
  }
}