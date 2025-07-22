import {
    EuiButton,
    EuiFieldText,
    EuiFlexGrid,
    EuiFormRow,
    EuiPageTemplate,
    EuiSpacer,
    EuiText
} from "@elastic/eui";
import { useNavigate } from "react-router";
import ControlPanel from "./ControlPanel";
import add_flashcard from "../assets/add_flashcard.svg";
import { useState } from "react";
import { FlashcardInfo } from "./Flashcard";
import FlashcardSnippet from "./FlashcardSnippet";

export default function CreateFlashcards() {
    const navigate = useNavigate();
    const [flashcards, setFlashcards] = useState<(FlashcardInfo & { id: string })[]>([
        {
            title: "nigga",
            definition: "balls",
            id: "nigga"
        }
    ]);
    const [flashcardsName, setFLashcardsName] = useState<string>('');

    const addFlashcard = () => {
        setFlashcards(flashcards_ => [...flashcards_, {
            definition: "",
            title: "",
            id: crypto.randomUUID()
        }]);
    }

    const saveFlashcards = () => {
        // todo save on disk
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
                    </EuiButton>,
                    <EuiButton
                        onClick={saveFlashcards}
                        fill
                    >
                        Save
                    </EuiButton>
                ]}
            />
            <EuiPageTemplate.Section>
                <EuiFormRow label={
                    <EuiText size="s" style={{ fontWeight: 'bold' }}>
                        Set Name
                    </EuiText>
                }>
                    <EuiFieldText
                        value={flashcardsName}
                        onChange={(e: any) => setFLashcardsName(e.target.value)}
                        placeholder="Enter the Name for a New Flashcards Set"
                    />
                </EuiFormRow>
                <EuiSpacer size='m' />
                <EuiFlexGrid columns={3}>
                    {
                        flashcards.map(flashcard => <FlashcardSnippet
                            key={flashcard.id}
                            title={flashcard.title}
                            definition={flashcard.definition}
                            onDelete={() => setFlashcards(previous => previous.filter(toRemove => toRemove.id !== flashcard.id))}

                            onTitleUpdate={(title: string) => setFlashcards(previous => previous.map(toUpdate => toUpdate.id === flashcard.id ? {
                                ...flashcard,
                                title
                            } : toUpdate))}

                            onDefinitionUpdate={(definition: string) => setFlashcards(previous => previous.map(toUpdate => toUpdate.id === flashcard.id ? {
                                ...flashcard,
                                definition
                            } : toUpdate))} />)
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