import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { industryCategories } from "../../shared/constants/categories";
import { InputTypes } from "../../shared/types/input-types";

export default function CreateFreelancerOffer() {
    return (
        <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[29rem] shadow-xl rounded-sm">
            <h1 className="text-2xl font-bold text-center text-white">
                Create Offer
            </h1>
            <form className="space-y-4 md:space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-base font-semibold text-main-yellow-color"
                    >
                        Title
                    </label>
                    <Input
                        type={InputTypes.Text}
                        placeholder={"JavaScript Front-End Developer"}
                       /*  valueName={formNames.name}
                        value={values.name}
                        changeHandler={changeHandler} */
                    />
                  {/*   {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                        </p>
                    )} */}
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
                       /*  onChange={changeHandler}
                        value={values.industry} */
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
                    {/* {errors.industry && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.industry}
                        </p>
                    )} */}
                </div>
                <div>
                    <div>
                        <label
                            htmlFor="imgUrl"
                            className="block mb-2 text-base font-semibold text-main-yellow-color"
                        >
                            ImageUrl
                        </label>
                        <Input
                            type={InputTypes.Text}
                            placeholder={"https://"}
                            /* valueName={formNames.imgUrl}
                            value={values.imgUrl}
                            changeHandler={changeHandler} */
                        />
                       {/*  {errors.imgUrl && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.imgUrl}
                            </p>
                        )} */}
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="skills"
                        className="block mb-2 text-base font-semibold text-main-yellow-color"
                    >
                        Description
                    </label>
                    <Input
                        type={InputTypes.Text}
                        placeholder={"I am a passionate Front-End Developer..."}
                        pb={'pb-[6rem]'}
                        /* valueName={formNames.skills}
                        value={values.skills}
                        changeHandler={changeHandler} */
                    />
                   {/*  {errors.skills && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.skills}
                        </p>
                    )} */}
                </div>
                <div className="pt-[0.5rem] text-center">
                    <Button
                        label={"Create"}
                        px="px-6"
                        py="py-2"
                        submit={true}
                    />
                </div>
            </form>
        </div>
    );
}
