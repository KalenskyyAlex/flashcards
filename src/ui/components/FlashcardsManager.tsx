import { EuiBasicTable, EuiButton, EuiContextMenu, EuiFilePicker, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiTitle } from "@elastic/eui";
import ControlPanel from "./ControlPanel";
import create_flashcards from '../assets/create_flashcards.svg';
import import_flashcards from '../assets/import_flashcards.svg';
import manage_flashcards from '../assets/manage_flashcards.svg';
import { useNavigate } from "react-router";
import { CustomModal } from "./CustomModal";
import { useState } from "react";
import CustomFileUpload from "./CustomFilePicker";

export default function FlashcardsManager() {
    const navigate = useNavigate();
    const [showImport, setShowImport] = useState<boolean>(false);

    return (
        <EuiFlexGroup direction="column" gutterSize="xl">
            {
                showImport && <CustomModal
                    onClose={() => setShowImport(false)}
                    title="Select File To Import From"
                >
                    <CustomFileUpload />
                </CustomModal>
            }
            <EuiFlexItem>
                <EuiContextMenu>
                    <EuiButton></EuiButton>
                </EuiContextMenu>
                <EuiFlexGrid columns={3} gutterSize='xl'>
                    <EuiFlexItem>
                        <ControlPanel
                            imageSrc={create_flashcards}
                            optionDescr='Create New Flashcards'
                            onClick={() => navigate("/create")}
                        />
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <ControlPanel
                            imageSrc={import_flashcards}
                            optionDescr='Import From File'
                            onClick={() => setShowImport(true)}
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
                <EuiSpacer size='m' />
                <EuiBasicTable
                    items={[ /* todo */]}
                    columns={[ /* todo */]}
                />
            </EuiFlexItem>
        </EuiFlexGroup>
    )
}