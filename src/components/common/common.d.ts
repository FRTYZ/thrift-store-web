// Snackbar
export type snackbarOptionsProps = {
    message?: string,
    type?: string
}

export type snackBarProps = {
    snackbarOptions: snackbarOptionsProps
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
    type?: string
}

// NoResult
export type NoResultProps = {
    page: string;
}

// Breadcrumb
export type BreadcrumbProps = {
    breadcrumbItems?: { 
        title?: string,
        link?: string
    }[]
}

// Form Elements Types
export type customTextFieldProps = {
    type: string,
    label: string,
    name: string,
    value?: string,
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

export type SelectFieldProps = {
    label?: string, 
    name?: string, 
    value?: string, 
    selectItems: {
        id?: string,
        value?: string
    }[], 
    hasError?: boolean, 
    handleFormik?: any, 
    [key: string]: any
}

export type FileViewSectionProps = {
    file: any[],
    type: string,
    removeFunc: (param: number, param: number) => void,
    isOld: boolean,
}


export type FileUploadInputProps = {
    label: string,
    name: string,
    oldFileName: string,
    type: string,
    setAlert: React.Dispatch<React.SetStateAction<snackbarOptionsProps>>,
    handleFormik: any,
    [key: string]: any
}

export type FileProps = {
    url?: string,
    path?: string,
    image_id?: number,
    is_cover_image?: boolean
}

export type OldFileInputProps = {
    name: string,
    value: any[],
    type: string,
    handleFormik: any,
    setDeleteState: any,
    currentValue: any[]
}
