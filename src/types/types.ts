// types/types.ts
export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface UsersResponse {
    data: User[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    support: {
        url: string;
        text: string;
    };
}

export interface UserListProps {
    itemsUsers: User[];
    searchValue: string;
    onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    invites: number[];
    onClickInvite: (id: number) => void;
    onClickSendInvites: () => void;
}

export interface FullUserProps {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    onClickInvite: (id: number) => void;
    isInvite: boolean;
}

export interface SuccessProps {
    count: number;
}
