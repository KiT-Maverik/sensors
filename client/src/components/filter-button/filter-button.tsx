/** @jsxImportSource @emotion/react */
// TODO: resolve

// MODULES
import {useCallback, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "src/store/hooks";

//COMPONENTS
import {ReactComponent as EnabledIcon} from "src/resources/filter_enabled.svg";
import {ReactComponent as DisabledIcon} from "src/resources/filter_disabled.svg";

// RESOURCES
import {enable, disable, selectFilterState} from "src/store/filter/filter.slice";

// STYLE
import {style} from 'src/components/filter-button/filter-button.style';

/**
 *
 */
export const FilterButton = () => {
    const filterEnabled = useAppSelector(selectFilterState);
    const dispatch = useAppDispatch();

    const handleEnableFilter = useCallback(() => {
        dispatch(enable());
        console.log('Filter enabled');
    }, []);

    const handleDisableFilter = useCallback(() => {
        dispatch(disable());
        console.log('Filter disabled');
    }, []);

    const renderIcon = useMemo(() => {
        return (
            <button css={style} onClick={(filterEnabled) ? handleDisableFilter : handleEnableFilter}>
                {(filterEnabled) ? <EnabledIcon/> : <DisabledIcon/>}
            </button>
        )
    }, [filterEnabled]);

    return renderIcon;
};
