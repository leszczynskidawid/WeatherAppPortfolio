import { Search } from "./style";
import { StyledInput } from "./style";
import { Controller } from "react-hook-form";

export const FieldText = ({ name, control, type }) => {
  return (
    <Search>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledInput style={{ color: "white" }} {...field} type={type} />
        )}
      />
    </Search>
  );
};
