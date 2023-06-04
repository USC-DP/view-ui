import PhotoSection from "../shared/section";

export default function PhotoList({isVisible}: {isVisible?: boolean}) {
    return (
        <div style={{display: isVisible? 'block' : 'none'}}>
            <PhotoSection></PhotoSection>
            <PhotoSection></PhotoSection>
            <PhotoSection></PhotoSection>
        </div>
    )
}