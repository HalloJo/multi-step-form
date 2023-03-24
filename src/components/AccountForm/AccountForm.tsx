import FormWrapper from "../FormWrapper/FormWrapper";
import InputWrapper from "../InputWrapper/InputWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title={"Account details"}>
      <div className="inputWrapper">
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => updateFields({ email: event.target.value })}
        />
      </div>
      <div className="inputWrapper">
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(event) => updateFields({ password: event.target.value })}
        />
      </div>
    </FormWrapper>
  );
};

export default AccountForm;
