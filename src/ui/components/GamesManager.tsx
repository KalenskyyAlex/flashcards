import { EuiFlexGrid, EuiFlexItem } from "@elastic/eui";
import ControlPanel from "./ControlPanel";
import match_flashcards from "../assets/match_flashcards.svg";
import enter_flashcards from "../assets/enter_flashcards.svg";
import sort_flashcards from "../assets/sort_flashcards.svg";

export default function GamesManager() {
    return (
        <EuiFlexGrid columns={3} gutterSize='xl'>
            <EuiFlexItem>
                <ControlPanel
                    imageSrc={match_flashcards}
                    optionDescr='Match Definitions'
                    onClick={() => { }}
                />
            </EuiFlexItem>
            <EuiFlexItem>
                <ControlPanel
                    imageSrc={enter_flashcards}
                    optionDescr='Enter Definitions Manually'
                    onClick={() => { }}
                />
            </EuiFlexItem>
            <EuiFlexItem>
                <ControlPanel
                    imageSrc={sort_flashcards}
                    optionDescr='Sort Flashcards'
                    onClick={() => { }}
                />
            </EuiFlexItem>
        </EuiFlexGrid>
    )
}