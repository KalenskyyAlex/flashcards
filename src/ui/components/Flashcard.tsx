import {
    EuiPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiTitle,
    EuiTextColor,
    EuiText,
    EuiImage,
    EuiFieldText,
    EuiTextArea
} from "@elastic/eui";
import { useState } from "react";
import delete_flashcard from "../assets/delete_flashcard.svg"
import flip_flashcard from "../assets/flip_flashcard.svg"

interface FlashcardProps {
    title: string,
    definition: string,
    editable?: boolean,
    onUpdate?: () => void;
}

export type FlashcardInfo = {
    title: string,
    definition: string
}

export default function Flashcard({
    title,
    definition,
    editable,
    onUpdate
}: FlashcardProps) {
    const [side, setSide] = useState<"title" | "definition">("title");

    const flip = () => {
        if (side === "title") setSide("definition");
        else setSide("title");
    }

    return (
        <EuiPanel
            onClick={editable ? undefined : flip}
            style={{ minHeight: 280 }}
        >
            <EuiFlexGroup
                style={{ height: "100%" }}
                justifyContent="spaceBetween"
                alignItems='center'
                direction='column'
            >
                {
                    editable && <EuiFlexItem
                        style={{ width: "100%" }}
                        grow={false}
                    >
                        <EuiFlexGroup
                            direction="row"
                            justifyContent="flexEnd"
                            gutterSize="s"
                        >
                            <EuiFlexItem grow={false}>
                                <EuiImage
                                    alt="+"
                                    style={{
                                        width: 24,
                                        height: 24,
                                        cursor: "pointer"
                                    }}
                                    src={delete_flashcard}
                                    onClick={() => {
                                        // todo
                                    }}
                                />
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <EuiImage
                                    alt="+"
                                    style={{
                                        width: 24,
                                        height: 24,
                                        cursor: "pointer"
                                    }}
                                    src={flip_flashcard}
                                    onClick={() => flip()}
                                />
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                }
                <EuiFlexItem grow>
                    {
                        editable ? <EuiTextArea
                            style={{
                                background: 'transparent',
                                border: 'none',
                                boxShadow: 'none',
                                padding: 0,
                                textAlign: 'center',
                                margin: 'auto'
                            }}
                            placeholder={`Type ${side}...`}
                            // value={side === "title" ? title : definition}
                            resize="vertical"
                        /> : <EuiTitle size="m">
                            <h1 style={{ textAlign: "center", margin: "auto" }}>
                                {side === "title" ? title : definition}
                            </h1>
                        </EuiTitle>
                    }
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                    <EuiText size="m">
                        <EuiTextColor color="subdued">
                            <strong>
                                {side}
                            </strong>
                        </EuiTextColor>
                    </EuiText>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPanel>
    )
}