import { EuiPanel, EuiFlexGroup, EuiFlexItem, EuiImage, EuiTitle, EuiToolTip } from "@elastic/eui";

interface ControlPanelProps {
    imageSrc: string,
    optionDescr: string,
    onClick: Function,
    tooltipText?: string
}

function ControlPanel({
    imageSrc,
    optionDescr,
    onClick,
    tooltipText
}: ControlPanelProps) {
    return (
        <EuiPanel
            onClick={() => onClick()}
            style={{ minHeight: 280 }}
        >
            <EuiFlexGroup
                justifyContent="flexStart"
                alignItems='center'
                direction='column'
            >
                <EuiFlexItem>
                    <EuiImage
                        size="m"
                        alt="+"
                        src={imageSrc}
                    />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiToolTip
                        position="bottom"
                        content={
                            <p>
                                {tooltipText ? tooltipText : optionDescr}
                            </p>
                        }
                    >
                        <EuiTitle size="s">
                            <h1 style={{ textAlign: "center" }}>{optionDescr}</h1>
                        </EuiTitle>
                    </EuiToolTip>
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiPanel>
    )
}

export default ControlPanel;