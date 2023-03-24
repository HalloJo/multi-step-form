import FormWrapper from "../FormWrapper/FormWrapper";
import InputWrapper from "../InputWrapper/InputWrapper";

type AddressData = {
  street: string;
  city: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({ street, city, zip, updateFields }: AddressFormProps) => {
  return (
    <FormWrapper title={"Address details"}>
      <div className="inputWrapper">
        <label>Street</label>
        <input
          type="text"
          required
          value={street}
          onChange={(event) => updateFields({ street: event.target.value })}
        />
      </div>
      <div className="inputWrapper">
        <label>City</label>
        <input
          type="text"
          required
          value={city}
          onChange={(event) => updateFields({ city: event.target.value })}
        />
      </div>
      <div className="inputWrapper">
        <label>Zipcode</label>
        <input
          type="text"
          required
          value={zip}
          onChange={(event) => updateFields({ zip: event.target.value })}
        />
      </div>
    </FormWrapper>
  );
};

export default AddressForm;
