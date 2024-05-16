
export interface CardTypes {
    city?: string,
    county?: string,
    date?: string,
    description?: string,
    display_name?: string,
    display_type?: string
    has_favorite?: boolean,
    how_status?: string,
    main_category_id?: string,
    sub_category_id?: string,
    id?: string,
    photo?: string,
    price?: string,
    title?: string,
    fullname?:string,
    main_category_name?: string,
    sub_category_name?: string,
    user_photo?: {
        url?: string,
        path?:string,
        width?: number,
        height?: number
    },

}
