import FormWrapper from "../FormWrapper/FormWrapper";
import InputWrapper from "../InputWrapper/InputWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title={"User details"}>
      <div className="inputWrapper">
        <label>First name</label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(event) => updateFields({ firstName: event.target.value })}
        />
      </div>
      <div className="inputWrapper">
        <label>Last name</label>
        <input
          type="text"
          required
          value={lastName}
          onChange={(event) => updateFields({ lastName: event.target.value })}
        />
      </div>
      <div className="inputWrapper">
        <label>Age</label>
        <input
          type="number"
          required
          value={age}
          onChange={(event) => updateFields({ age: event.target.value })}
        />
      </div>
    </FormWrapper>
  );
};

export default UserForm;
