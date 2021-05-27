import { InputAdornment } from "@material-ui/core";
import { TextInput } from "react-admin";

const CustomInput = ({ Icon, label, source, validate, disabled, multiline }) => {
    return (
        <TextInput
            source={source}
            variant='outlined'
            validate={validate}
            disabled={disabled}
            multiline={multiline}
            label={label}
            resettable
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Icon />
                    </InputAdornment>
                ),
            }}

        />
    );
}

export default CustomInput;