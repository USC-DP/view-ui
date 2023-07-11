
import React, { startTransition } from "react";
import { VisiblePhotoContext } from "@/contexts/visible-photo-context";
import { FullImageDisplay } from "@/components/photo-display/full-image-display";


import { useTransition, useEffect } from 'react';
import { useRouter as useNextRouter } from 'next/navigation';
import useViewTransitionRouter from "@/transition-lib/use-transition-router";
import { useRouter } from "next/router";


export default function Photo() {

    const { visiblePhotoContent, setVisiblePhotoContent } = React.useContext(VisiblePhotoContext);

    return (
        <>
            {
                visiblePhotoContent.photo &&
                <FullImageDisplay data={visiblePhotoContent} setData={setVisiblePhotoContent}></FullImageDisplay>}

        </>
    );
}