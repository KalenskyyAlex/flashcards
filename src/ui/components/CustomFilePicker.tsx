import React, { useRef, useState } from 'react';
import {
    EuiButton,
    EuiCallOut,
    EuiFlexGroup,
    EuiFlexItem
} from '@elastic/eui';

const REQUIRED_FILE_FORMAT = "application/json";
const REQUIRED_FILE_SCHEMA = {
    
}

const CustomFileUpload = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string>('');

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.type !== REQUIRED_FILE_FORMAT) {
            setError('Invalid File Format: ' + file.type);
            return;
        }

        // if (file.)

        setError('');
    };

    return (
        <EuiFlexGroup direction="column" gutterSize="s">
            <EuiFlexItem grow={false}>
                <EuiButton onClick={handleButtonClick}>Upload file</EuiButton>
            </EuiFlexItem>
            {
                !!error && <EuiCallOut
                    title="Invalid File Selected"
                >
                    <p>
                        {error}
                    </p>
                </EuiCallOut>
            }
            <EuiFlexItem grow={false}>
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />
            </EuiFlexItem>
        </EuiFlexGroup>
    );
};

export default CustomFileUpload;
