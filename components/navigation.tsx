import { ThemeToggle } from "./theme/theme-toggle";
import { Button } from "./ui/button";

const Navigation = () => {
    return (
        <div className="w-2/3 h-10 fixed z-50 top-2 left-1/2 -translate-x-1/2 bg-black/5 dark:bg-white/5 backdrop-blur-[5px] flex items-center justify-between px-6 rounded-md ">
            <h1>Batchmates</h1>
            <div className="flex items-center gap-4" >
                <ThemeToggle />
                {/* <Button className="h-fit py-1 px-4">Login</Button> */}
            </div>
        </div>
    );
};

export default Navigation;
