import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { descriptionAdd } from "../../shared/forms/initialValues";
import { InputTypes } from "../../shared/types/input-types";
import { useDescription } from "../../hooks/useUsers";
import { ComandTypes, ErrorTypes } from "../../shared/types/user-types";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { formNames } from "../../shared/forms/names";

export default function CreateProfileDescription() {
    const addDescription = useDescription(ComandTypes.Add);
    const { id, isClient, isFreelancer } = useAuthContext();
    const navigate = useNavigate();
    const initialValues = descriptionAdd;

    const addDescriptionHandler = async (data) => {
        try {
            await addDescription(id, data);
            if (isClient) {
                navigate(`/profile/client/${id}`);
            } else if (isFreelancer) {
                navigate(`/profile/freelancer/${id}`);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const { values, errors, changeHandler, submitHandler } = useForm(
        initialValues,
        addDescriptionHandler,
        ErrorTypes.Description
    );
    return (
        <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[29rem] shadow-xl rounded-sm">
            <h1 className="text-2xl font-bold text-center text-white">
                Add description
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                    <label
                        htmlFor="description"
                        className="block mb-2 text-base font-semibold text-main-yellow-color"
                    >
                        Description
                    </label>
                    <Input
                        type={InputTypes.Text}
                        placeholder={"I am a passionate Front-End Developer..."}
                        pb={"pb-[6rem]"}
                        valueName={formNames.description}
                        value={values.description}
                        changeHandler={changeHandler}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.description}
                        </p>
                    )}
                </div>
                <div className="pt-[0.5rem] text-center">
                    <Button label={"Add"} px="px-6" py="py-2" submit={true} />
                </div>
            </form>
        </div>
    );
}
