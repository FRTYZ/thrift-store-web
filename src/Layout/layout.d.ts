export interface LayoutProps {
    children: ReactNode;
}

export interface NavbarAreaProps {
    isLogin: boolean
}

export interface SubNavbarAreaProps {
    categories: Category[],
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}