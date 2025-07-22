import {
    EuiOverlayMask,
    EuiPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiText,
    EuiButtonIcon,
    EuiSpacer,
} from '@elastic/eui';
import React from 'react';

export const CustomModal = ({
    onClose,
    children,
    title,
    width = 600,
}: {
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    width?: number;
}) => {
    return (
        <EuiOverlayMask>
            <EuiPanel
                paddingSize="l"
                style={{
                    width,
                    maxWidth: '90%',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    position: 'relative',
                }}
                hasShadow
                borderRadius="m"
            >
                <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
                    <EuiFlexItem>
                        {title && (
                            <EuiText>
                                <h2>{title}</h2>
                            </EuiText>
                        )}
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                        <EuiButtonIcon
                            iconType={() => (
                                <span style={{ fontWeight: 'bold', fontSize: 16 }}>×</span>
                            )}
                            aria-label="Close modal"
                            onClick={onClose}
                        />
                    </EuiFlexItem>
                </EuiFlexGroup>

                <EuiSpacer size="m" />

                {children}
            </EuiPanel>
        </EuiOverlayMask>
    );
};
