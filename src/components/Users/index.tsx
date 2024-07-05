import React from "react";
import { FullUser } from "./FullUser";
import { Success } from "../Success";
import { useSearch } from "../../hooks/useSearch";
import { useInvites } from "../../hooks/useInvites";
import { useUsers } from "../../hooks/useUsers";

export const Users: React.FC = () => {
    const { searchValue, onChangeSearchValue } = useSearch();
    const { invites, onClickInvite, onClickSendInvites, sentSuccess } =
        useInvites();
    const { data } = useUsers();

    return (
        <>
            {sentSuccess ? (
                <Success countInviteUsers={invites.length} />
            ) : (
                <>
                    <div className="search">
                        <svg
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                        </svg>
                        <input
                            value={searchValue}
                            onChange={onChangeSearchValue}
                            type="text"
                            placeholder="Найти пользователя..."
                        />
                    </div>
                    <ul className="users-list">
                        {data?.data
                            .filter((obj) => {
                                const fullName = `
                            ${obj.first_name} ${obj.last_name}
                        `.toLowerCase();
                                return (
                                    fullName.includes(
                                        searchValue.toLowerCase()
                                    ) ||
                                    obj.email
                                        .toLowerCase()
                                        .includes(searchValue.toLowerCase())
                                );
                            })
                            .map((user) => (
                                <FullUser
                                    key={user.id}
                                    {...user}
                                    isInvite={invites.includes(user.id)}
                                    onClickInvite={onClickInvite}
                                />
                            ))}
                    </ul>
                    {invites.length > 0 && (
                        <button
                            onClick={onClickSendInvites}
                            className="send-invite-btn"
                        >
                            Отправить приглашение
                        </button>
                    )}
                </>
            )}
        </>
    );
};
