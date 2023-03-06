/** @jsxImportSource @emotion/react */
// TODO: resolve

//COMPONENTS
import {ReactComponent as EnabledIcon} from "src/resources/filter_enabled.svg";
import {ReactComponent as DisabledIcon} from "src/resources/filter_disabled.svg";

// STYLE
import {style} from 'src/components/filter-button/filter-button.style';
import {useCallback, useMemo, useState} from "react";

/**
 *
 */
export const FilterButton = () => {
    const [enabled, setEnabled] = useState(false);

    const handleEnableFilter = useCallback(() => {
        setEnabled(true);
        console.log('Filter enabled');
    }, []);

    const handleDisableFilter = useCallback(() => {
        setEnabled(false);
        console.log('Filter disabled');
    }, []);

    const renderIcon = useMemo(() => {
        return (
            <button css={style} onClick={(enabled) ? handleDisableFilter : handleEnableFilter}>
                {(enabled) ? <EnabledIcon/> : <DisabledIcon/>}
            </button>
        )
    }, [enabled]);

    return renderIcon;
};
