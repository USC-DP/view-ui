import api from "@/api/api";
import { Typography } from "@mui/material";


export default function ExploreTrack() {

    const data = [
        {
            src: 'afe26bd7-55c7-4ba3-8601-4eb493ac26c7',
            label: 'Ocean'
        },
        {
            src: 'afe26bd7-55c7-4ba3-8601-4eb493ac26c7',
            label: 'Ocean'
        },
        {
            src: 'afe26bd7-55c7-4ba3-8601-4eb493ac26c7',
            label: 'Ocean'
        },
        {
            src: 'afe26bd7-55c7-4ba3-8601-4eb493ac26c7',
            label: 'Ocean'
        },
    ]

    return (
        <>
            <Typography fontSize={16} pb={'8px'}>Places</Typography>
            <div style={{ display: 'flex', gap: 20 }}>
                {
                    data.map((i) => {
                        return <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'end',
                                cursor: 'pointer',
                                width: 150,
                                height: 150,
                                backgroundImage: `url(${api.fetchPhotoUrl(i.src)})`,
                                backgroundSize: 'contain',
                                borderRadius: 5
                            }}>
                            <Typography color={'white'} mb={'5px'}>{i.label}</Typography>
                        </div>
                    })
                }
            </div>
        </>
    );
}