import {
    EuiButton,
    EuiPageTemplate,
    EuiPageTemplateProps
} from '@elastic/eui';
import { EuiPageHeaderContentTabs } from '@elastic/eui/src/components/page/page_header/page_header_content';
import { useState } from 'react';
import FlashcardsManager from './components/FlashcardsManager';
import GamesManager from './components/GamesManager';


const panelled: EuiPageTemplateProps['panelled'] = undefined;
const restrictWidth: EuiPageTemplateProps['restrictWidth'] = false;
const bottomBorder: EuiPageTemplateProps['bottomBorder'] = "extended";


export default () => {
    const [tabIndex, setTabIndex] = useState<number>(0);

    const tabs: EuiPageHeaderContentTabs['tabs'] = [
        {
            label: "Flashcards",
            isSelected: tabIndex === 0,
            onClick: () => setTabIndex(0),
        },
        {
            label: "Games",
            isSelected: tabIndex === 1,
            onClick: () => setTabIndex(1)
        }
    ]

    return (
        <EuiPageTemplate
            panelled={panelled}
            restrictWidth="1200px"
            bottomBorder={bottomBorder}
            offset={0}
            grow={false}
        >
            <EuiPageTemplate.Header
                paddingSize='l'
                pageTitle="Home"
                rightSideItems={[
                    <EuiButton>Import Flashcards</EuiButton>
                ]}
                tabs={tabs}
            />
           <EuiPageTemplate.Section>
                {tabIndex === 0 && <FlashcardsManager/>}
                {tabIndex === 1 && <GamesManager/>}
            </EuiPageTemplate.Section>
        </EuiPageTemplate>
    );
};
