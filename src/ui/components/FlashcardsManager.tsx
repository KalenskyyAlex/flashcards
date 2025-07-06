import { EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiTitle } from "@elastic/eui";
import ControlPanel from "./ControlPanel";
import create_flashcards from '../assets/create_flashcards.svg';
import import_flashcards from '../assets/import_flashcards.svg';
import manage_flashcards from '../assets/manage_flashcards.svg';
import { useNavigate } from "react-router";

export default function FlashcardsManager() {
    const navigate = useNavigate();

    return (
        <EuiFlexGroup direction="column" gutterSize="xl">
            <EuiFlexItem>
                <EuiFlexGrid columns={3} gutterSize='xl'>
                    <EuiFlexItem>
                        <ControlPanel
                            imageSrc={create_flashcards}
                            optionDescr='Create New Flashcards'
                            onClick={() => {navigate("/create")}}
                        />
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <ControlPanel
                            imageSrc={import_flashcards}
                            optionDescr='Import From File'
                            onClick={() => { }}
                        />
                    </EuiFlexItem>
                    <EuiFlexGrid>
                        <ControlPanel
                            imageSrc={manage_flashcards}
                            optionDescr='Manage Your Flashcards'
                            onClick={() => { }}
                        />
                    </EuiFlexGrid>
                </EuiFlexGrid>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiTitle>
                    <h1>Recent Flashcards</h1>
                </EuiTitle>
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}