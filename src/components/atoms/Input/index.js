import { Search } from "./style";
import { StyledInput } from "./style";
import { Controller } from "react-hook-form";

export const FieldText = ({ name, control, type, errors }) => {
  return (
    <Search>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledInput {...field} type={type} error={errors} />
        )}
      />
    </Search>
  );
};
