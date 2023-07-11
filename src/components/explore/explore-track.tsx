import api from "@/api/api";
import { Box, Typography } from "@mui/material";
import React from "react";


export default function ExploreTrack() {

    const data = [
        {
            src: 'afe26bd7-55c7-4ba3-8601-4eb493ac26c7',
            label: 'Ocean'
        },
        {
            src: 'bf66d868-69f7-471a-88d6-3d1dd5d8cb01',
            label: 'Mountains'
        },
        {
            src: '5115c36f-50f1-464c-b9d9-2b514c6f9e9b',
            label: 'Lakes'
        },
        {
            src: 'a4317ca7-e588-4f29-bb27-454d1f2fe0d0',
            label: 'Roads'
        },
        {
            src: 'afe26bd7-55c7-4ba3-8601-4eb493ac26c7',
            label: 'Ocean'
        },
        {
            src: 'bf66d868-69f7-471a-88d6-3d1dd5d8cb01',
            label: 'Mountains'
        },
        {
            src: '5115c36f-50f1-464c-b9d9-2b514c6f9e9b',
            label: 'Lakes'
        },
        {
            src: 'a4317ca7-e588-4f29-bb27-454d1f2fe0d0',
            label: 'Roads'
        }
    ]

    const [visibleItems, setVisibleItems] = React.useState<number>(1);

    const [elementWidth, setElementWidth] = React.useState<number>(0);

    const divRef = React.useRef<HTMLDivElement>(null);

    const handleResize = () => {
        if (divRef.current) {
            
            const containerWidth = divRef.current.offsetWidth;

            const newVisibleItems = Math.floor(containerWidth / (140 + 20));
            if (newVisibleItems > data.length) {
                setElementWidth(140);
                setVisibleItems(data.length);
                return;
            }
            const itemWidth = (containerWidth) / (newVisibleItems);
            setVisibleItems(newVisibleItems);
            setElementWidth(itemWidth - 20);
        }
    };

    React.useEffect(() => {
        handleResize(); // Initial setup

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div style={{ margin: '8px' }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography fontSize={16} pb={'8px'}>Places</Typography>
                <Typography fontWeight={500} color={'rgb(41, 98, 255)'} fontSize={16} pb={'8px'} mr={'20px'}>View All</Typography>
            </Box>
            {<div ref={divRef} style={{ display: 'flex', width: '100%', gap: 20, height: elementWidth, overflow: 'hidden' }}>
                {
                    data.slice(0, visibleItems).map((i, index) => {
                        return <Box key={index}
                            sx={{
                                flex: '0 0 auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'end',
                                cursor: 'pointer',
                                minWidth: elementWidth,
                                backgroundImage: `url(${api.fetchPhotoUrl(i.src)})`,
                                backgroundSize: 'cover',
                                borderRadius: '8px',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <Typography fontWeight={500} textAlign={'center'} color={'white'} pb={'5px'} sx={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.54))', width: '100%', borderRadius: '8px' }}>{i.label}</Typography>
                        </Box>
                    })
                }
            </div>}
        </div>
    );
}