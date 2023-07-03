import { fetchPhoto } from "@/hooks/fetch-photo";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { flushSync } from "react-dom";

export default function Test() {

    const [wtf, setWTF] = React.useState<boolean>(true);

    function onClick() {
        //@ts-ignore
        document.startViewTransition(() => {
            flushSync(() => {
                setWTF((i) => !i);
            })
        })
    }

    return (
        <>
            <Button onClick={() => onClick()}>Test</Button>

            {wtf && <div
                style={{
                    backgroundImage: `url(${fetchPhoto("421d99a7-b4c8-46e7-940b-1020f4c3fc9b")})`,
                    width: 500,
                    height: 500,
                    position: 'absolute',
                    backgroundSize: 'contain',
                    backgroundRepeat: "no-repeat",
                    top: 100,
                    left: 100,
                    contain: 'paint',
                    viewTransitionName: 'qq'
                }}>

            </div>}
            {!wtf &&
                <div
                style={{
                    backgroundImage: `url(${fetchPhoto("421d99a7-b4c8-46e7-940b-1020f4c3fc9b")})`,
                    width: 200,
                    height: 100,
                    position: 'absolute',
                    backgroundSize: 'contain',
                    backgroundRepeat: "no-repeat",
                    top: 500,
                        left: 800,
                    contain: 'paint',
                    viewTransitionName: 'qq'
                }}></div>}
        </>
    )
}