// Snackbar
export type snackbarOptionsProps = {
    message?: string,
    type?: string
}

export type snackBarProps = {
    snackbarOptions: snackbarOptionsProps
}
// Form Elements Types
export type customTextFieldProps = {
    type: string,
    label: string,
    name: string,
    value: string,
    placeholder: string,
    hasError?: boolean,
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    [key: string]: any
}

export type customPasswordFieldProps = {
    label: string,
    name: string,
    value: string,
    placeholder: string,
    hasError?: boolean,
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
// AdCard

export type AdCardProps = {
    data: CardTypes[];
    grid: number[];
}

// Favorite
export interface FavoriteTypes {
    id?: string,
    hasFavorite?: boolean,
}