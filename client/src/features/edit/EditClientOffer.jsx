import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useOfferEdit, useOfferInfo } from "../../hooks/useOffers";
import { industryCategories } from "../../shared/constants/categories";
import { InputTypes } from "../../shared/types/input-types";
import { ErrorTypes, UserTypes } from "../../shared/types/user-types";
import { clientOfferEdit } from "../../shared/forms/initialValues";
import { useForm } from "../../hooks/useForm";
import { formNames } from "../../shared/forms/names";

export default function EditClientOffer() {
    const edit = useOfferEdit(UserTypes.Client);
    const navigate = useNavigate();
    const { id } = useParams();
    const { offer, loading, error } = useOfferInfo(UserTypes.Client, id);
    const initialValues = clientOfferEdit;

    const EditClientOfferHandler = async (data) => {
        try {
            await edit(id, data);
            navigate(`/details/client/offer/${id}`);
        } catch (error) {}
    };

    const { values, errors, changeHandler, submitHandler } = useForm(
        Object.assign(initialValues, {
            title: offer.title,
            industry: offer.industry,
            salary: offer.salary,
            description: offer.description,
        }),
        EditClientOfferHandler,
        ErrorTypes.ClientOffer
    );

    return (
        <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[29rem] shadow-xl rounded-sm">
            <h1 className="text-2xl font-bold text-center text-white">
                Edit Offer
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                    <label
                        htmlFor="title"
                        className="block mb-2 text-base font-semibold text-main-yellow-color"
                    >
                        Title
                    </label>
                    <Input
                        type={InputTypes.Text}
                        placeholder={"Django Back-End Developer"}
                        valueName={formNames.title}
                        value={values.title}
                        changeHandler={changeHandler}
                    />
                    {errors.title && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.title}
                        </p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="industry"
                        className="block mb-2 text-base font-semibold text-main-yellow-color"
                    >
                        Industry
                    </label>
                    <select
                        name="industry"
                        onChange={changeHandler}
                        value={values.industry}
                        className="bg-white w-full px-[0.5rem] py-3"
                    >
                        <option value="">Select an industry</option>
                        {Object.values(industryCategories).map(
                            (category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            )
                        )}
                    </select>
                    {errors.industry && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.industry}
                        </p>
                    )}
                </div>
                <div>
                    <div>
                        <label
                            htmlFor="salary"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            Salary/hr
                        </label>
                        <Input
                            type={InputTypes.Number}
                            placeholder={"50"}
                            valueName={formNames.salary}
                            value={values.salary}
                            changeHandler={changeHandler}
                        />
                        {errors.salary && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.salary}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="description"
                        className="block mb-2 text-base font-semibold text-main-yellow-color"
                    >
                        Description
                    </label>
                    <Input
                        type={InputTypes.Text}
                        placeholder={
                            "We are looking for a Django Back-End Developer..."
                        }
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
                    <Button label={"Edit"} px="px-6" py="py-2" submit={true} />
                </div>
            </form>
        </div>
    );
}
