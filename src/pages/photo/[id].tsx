import { useRouter } from "next/router";
import React from "react";

export default function Photo() {
    const router = useRouter();

    return (
        <>
            Hello world
            <br />
            {router.query.id}
        </>
    );
}