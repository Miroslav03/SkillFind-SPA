import { useParams } from "react-router-dom";

export default function FindAllClientCategory() {
    const { category } = useParams();
    return (
        <>
            <FindClient category={category} />
        </>
    );
}
