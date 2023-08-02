import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';

function AppFormField({name, width, style, ...otherProps}) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

    return (
        <>
            <AppTextInput onBlur ={ () => setFieldTouched(name) }
                onChangeText={handleChange(name)}
                {...otherProps}
                style={style}
                width={width}
            />
        </>
    );
}

export default AppFormField;