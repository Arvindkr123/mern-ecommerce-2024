import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

/* eslint-disable react/prop-types */
const CommonForm = ({
  formControls,
  formData,
  setFormData,
  buttonText,
  onSubmit,
}) => {
  const types = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
  };

  const renderInputsByComponentType = (controlItem) => {
    let element = null;
    let value = formData[controlItem?.name];
    //console.log(value);

    switch (controlItem.componentType) {
      case types.INPUT:
        element = (
          <Input
            className="border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            type={controlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case types.SELECT:
        element = (
          <Select
            className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          >
            <SelectTrigger className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-blue-500">
              <SelectValue placeholder={controlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {controlItem.options && controlItem.options.length > 0
                ? controlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case types.TEXTAREA:
        element = (
          <Textarea
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.id}
            value={value}
            className="border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          ></Textarea>
        );
        break;
      default:
        element = (
          <Input
            name={controlItem.name}
            className="border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            type={controlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex flex-col gap-4">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-2" key={controlItem.name}>
            <Label className="text-sm font-medium text-gray-700">
              {controlItem.label}
            </Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button
        type="submit"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 text-center"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
