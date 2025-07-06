import { EuiButton, EuiFlexGrid, EuiPageTemplate } from "@elastic/eui";
import { useNavigate } from "react-router";
import ControlPanel from "./ControlPanel";
import add_flashcard from "../assets/add_flashcard.svg";
import { useState } from "react";
import Flashcard, { FlashcardInfo } from "./Flashcard";

export default function CreateFlashcards() {
    const navigate = useNavigate();
    const [flashcards, setFlashcards] = useState<FlashcardInfo[]>([
        {
            title: "nigga",
            definition: "balls"
        }
    ]);

    const addFlashcard = () => {
        setFlashcards(flashcards_ => [...flashcards_, {
            definition: "",
            title: ""
        }])
    }

    return (
        <EuiPageTemplate
            restrictWidth={"1200px"}
        >
            <EuiPageTemplate.Header
                paddingSize='l'
                pageTitle="Create New Flashcards"
                rightSideItems={[
                    <EuiButton onClick={() => navigate("/")}>
                        Cancel
                    </EuiButton>
                ]}
            />
            <EuiPageTemplate.Section>
                <EuiFlexGrid columns={3}>
                    {
                        flashcards.map(flashcard => <Flashcard
                            key={crypto.randomUUID()} 
                            title={flashcard.title}
                            definition={flashcard.definition}
                            editable
                        />)
                    }
                    <ControlPanel
                        imageSrc={add_flashcard}
                        optionDescr={"Add Flashcard"}
                        onClick={addFlashcard}
                    />
                </EuiFlexGrid>
            </EuiPageTemplate.Section>
        </EuiPageTemplate>
    )
}