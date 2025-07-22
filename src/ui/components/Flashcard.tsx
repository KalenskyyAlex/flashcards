import {
    EuiPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiTitle,
    EuiTextColor,
    EuiText,
} from '@elastic/eui';
import { useState } from 'react';

interface FlashcardProps {
    title: string,
    definition: string,
}

export type FlashcardInfo = {
    title: string,
    definition: string
};

const flip = (side: string, setSide: Function) => {
    if (side === 'title') setSide('definition');
    else setSide('title');
}

export default function Flashcard({
    title,
    definition,
}: FlashcardProps) {
    const [side, setSide] = useState<string>('title');

    return <EuiPanel
        onClick={() => flip(side, setSide)}
        style={{ minHeight: 280 }}
    >
        <EuiFlexGroup
            style={{ height: '100%' }}
            justifyContent='spaceBetween'
            alignItems='center'
            direction='column'
        >
            <EuiFlexItem grow>
                <EuiTitle size='m'>
                    <h1 style={{ textAlign: 'center', margin: 'auto' }}>
                        {side === 'title' ? title : definition}
                    </h1>
                </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
                <EuiText size='m'>
                    <EuiTextColor color='subdued'>
                        <strong>
                            {side}
                        </strong>
                    </EuiTextColor>
                </EuiText>
            </EuiFlexItem>
        </EuiFlexGroup>
    </EuiPanel>
}