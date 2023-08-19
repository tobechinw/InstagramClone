import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMessage from '../ErrorMessage';

function AppFormField({ name, width, style, ...otherProps }) {
	const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();
	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={name => setFieldValue(name)}
				value={values[name]}
				{...otherProps}
				style={style}
				width={width}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormField;
