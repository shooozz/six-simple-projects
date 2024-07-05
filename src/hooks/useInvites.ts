import { useState } from "react";

export const useInvites = () => {
    const [invites, setInvites] = useState<number[]>([]);
    const [sentSuccess, setSuccess] = useState(false);

    const onClickInvite = (id: number): void => {
        setInvites((prev) =>
            prev.includes(id) ? prev.filter((_id) => _id !== id) : [...prev, id]
        );
    };

    const onClickSendInvites = () => {
        setSuccess(true);
    };

    return {
        invites,
        sentSuccess,
        onClickInvite,
        onClickSendInvites,
    };
};
