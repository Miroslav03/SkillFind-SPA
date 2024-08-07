import { InputTypes } from "../../shared/types/input-types";
import person1 from "../../assets/person-1.jpg";
import detailsImg from "../../assets/Details-test.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteOffer, useOfferInfo } from "../../hooks/useOffers";
import { UserTypes } from "../../shared/types/user-types";
import { useEffect } from "react";

export default function FreelancerOfferDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { offer, loading, error } = useOfferInfo(UserTypes.Freelancer, id);
    const {
        deleteOffer,
        loading: deleting,
        error: deleteError,
    } = useDeleteOffer(UserTypes.Freelancer);

    const handleDelete = async () => {
        try {
            await deleteOffer(id);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    if (loading)
        return (
            <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-main-text-color via-main-yellow-color to-white md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
                <div className="rounded-full h-full w-full bg-slate-100 dark:bg-main-background-color background-blur-md"></div>
            </div>
        );
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div className="flex gap-[3rem] sm:flex-col sm:items-center px-[30%] sm:px-[5%]">
            <div className="flex flex-col gap-6 basis-8/12 sm:justify-center sm:items-center">
                <div className="flex ">
                    <h1 className="text-3xl text-main-text-color font-bold sm:text-center sm:text-2xl sm:px-4">
                        {offer.title}
                    </h1>
                </div>
                <div className="flex items-center gap-5">
                    <img
                        src={offer.owner.imgUrl}
                        alt="person-img"
                        className="h-[5rem] w-[5rem] rounded-[50%] border-4 border-main-yellow-color"
                    />
                    <div className="flex flex-col">
                        <h2 className="text-main-text-color text-xl font-semibold">
                            {offer.owner.name}
                        </h2>
                        <p className="text-main-yellow-color font-semibold">
                            {offer.owner.hourRate}/hr
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link to={`/edit/freelancer/offer/${offer._id}`}>
                            <Button label={"Edit"} px="px-6" py="py-2" />
                        </Link>
                        <Button
                            label={"Delete"}
                            px="px-6"
                            py="py-2"
                            onClick={handleDelete}
                            disabled={deleting}
                        />
                    </div>
                </div>
                <div className="h-[25rem] w-[90%] bg-main-text-color bg-center bg-cover border-main-text-color sm:h-[15rem]">
                    <img src={offer.imgUrl} alt="" className="h-full w-full" />
                </div>
                <div className="flex flex-col gap-2 sm:items-center">
                    <h2 className="font-bold text-main-text-color sm:text-center">
                        About
                    </h2>
                    <p className="text-main-text-color  font-medium sm:px-4">
                        {offer.description}
                    </p>
                </div>
            </div>
            <div className="h-[18rem] w-[50rem] basis-4/12 bg-main-text-color p-[1rem] flex flex-col rounded-sm shadow-xl sm:w-4/5 ">
                <h2 className="text-center font-bold text-white text-xl mb-1 mt-2">
                    Contact me
                </h2>
                <form className="flex flex-col items-center gap-4">
                    <Input
                        type={InputTypes.Text}
                        placeholder={"Write me"}
                        pb={"pb-[7rem]"}
                    />
                    <Button label={"Send"} px="px-6" py="py-2" />
                </form>
            </div>
        </div>
    );
}
