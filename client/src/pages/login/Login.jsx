import Button from "../../components/ui/Button";

export default function Login() {
  return (
    <div className="bg-main-background-color flex justify-center items-center h-[50rem]">
        <div className="p-8 sm:w-[23rem] space-y-4 md:space-y-6 sm:p-8 bg-main-text-color w-[25rem] shadow-xl rounded-sm">
                <h1 class="text-2xl font-bold text-center text-white">
                    Log In
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-base font-semibold text-main-yellow-color">Your Email:</label>
                        <input type="email" name="email" id="email" class="bg-main-background-color placeholder-main-text-color  block w-full p-2.5" placeholder="name@gmail.com" required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-base font-semibold text-main-yellow-color">Password:</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-main-background-color placeholder-main-text-color text-sm  focus:ring-main-text-color focus:border-main-text-color block w-full p-2.5" required=""/>
                    </div>
                    <div>
                        <label for="confirm-password" class="block mb-2 text-base font-semibold text-main-yellow-color">Confirm password:</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-main-background-color placeholder-main-text-color text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                    </div>
                    <div className="pt-[0.5rem] text-center">
                    <Button label={'Log In'} style={{ padding:'0.5rem 1rem' }}/>
                    </div>
                    <p class="text-base text-center text-white">
                        Dont't have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500" className="text-main-yellow-color font-semibold">Register here</a>
                    </p>
                </form>
            </div>
    </div>
  );
}
