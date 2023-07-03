import PhotoSection from "../shared/photo-section";

export default function PhotoList({isVisible}: {isVisible?: boolean}) {
    return (
        <div style={{display: isVisible ? 'inline' : 'none'}}>
            <PhotoSection></PhotoSection>
        </div>
    )
}