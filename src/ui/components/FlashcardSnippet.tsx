import {
    EuiFieldText,
    EuiFlexGroup,
    EuiFlexItem,
    EuiForm,
    EuiFormRow,
    EuiImage,
    EuiPanel,
    EuiTextArea,
} from "@elastic/eui";
import delete_flashcard from '../assets/delete_flashcard.svg'

type EditableFlashcardInfo = {
    title: string,
    definition: string,
    onTitleUpdate: (toUpdate: string) => void,
    onDefinitionUpdate: (toUpdate: string) => void,
    onDelete: () => void
}

function FlashcardSnippet({
    title,
    definition,
    onTitleUpdate,
    onDefinitionUpdate,
    onDelete
}: EditableFlashcardInfo) {
    // todo pick flashcard color
    // const colorOptions: EuiColorPalettePickerProps<'palette'>['palettes'] = [
    //     {
    //         value: 'color1',
    //         title: 'Red',
    //         palette: ['#FF0000'],
    //         type: 'fixed',
    //     },
    //     {
    //         value: 'color2',
    //         title: 'Green',
    //         palette: ['#00FF00'],
    //         type: 'fixed',
    //     },
    //     {
    //         value: 'color3',
    //         title: 'Blue',
    //         palette: ['#0000FF'],
    //         type: 'fixed',
    //     },
    // ];


    return (
        <EuiPanel>
            <EuiFlexGroup
                direction="column"
                gutterSize="s">
                <EuiFlexItem>
                    <EuiFlexGroup>
                        <EuiFlexItem grow={4} />
                        <EuiFlexItem>
                            {/* <EuiColorPalettePicker
                                // palettes={colorOptions}
                                // onChange={setColor}
                                selectionDisplay="palette" // hides titles
                                compressed // optional: compact view
                                palettes={colorOptions}
                            /> */}
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiImage
                                alt="delete"
                                src={delete_flashcard}
                                onClick={onDelete}

                                style={{
                                    cursor: 'pointer',
                                    width: 32,
                                    height: 32
                                }}
                            />
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiForm>
                        <EuiFormRow label="Flashcard Title (Front)">
                            <EuiFieldText
                                value={title}
                                onChange={(e: any) => onTitleUpdate(e.target.value)}
                            />
                        </EuiFormRow>
                        <EuiFormRow label="Flashcard Definition (Back)">
                            <EuiTextArea
                                value={definition}
                                onChange={(e: any) => onDefinitionUpdate(e.target.value)}
                                resize="none"
                            />
                        </EuiFormRow>
                    </EuiForm>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPanel>
    )
}

export default FlashcardSnippet;