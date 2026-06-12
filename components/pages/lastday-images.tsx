import { Coiny } from "next/font/google";
import Image from "next/image";
import Arrow from "../arrow";

const coiny = Coiny({
    subsets: ["latin"],
    weight: ["400"],
});
const LastdayImages = () => {
    return (
        <div className="w-full py-14">
            <h1 className={`${coiny.className} text-start pl-[20%] text-6xl`}>
                Last day of college
            </h1>
            <div className="mt-24 py-4 flex items-center justify-center relative ">
                <Image
                    src={"/group-image-1.jpeg"}
                    alt="group-img-1"
                    width={1080}
                    height={720}
                    className="w-300 h-150 rounded-2xl object-cover "
                ></Image>
                <Image
                    src="/keyboard.svg"
                    alt="icon"
                    width={300}
                    height={300}
                    className="absolute -top-14 right-8"
                />
                <Image
                    src="/mouse.svg"
                    alt="icon"
                    width={200}
                    height={200}
                    className="absolute top-64 left-18"
                />
                <Arrow className="w-44 -rotate-20 absolute left-2/5 -top-32" />
            </div>
            <div className="relative mt-4 py-4 px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
                <Image
                    src={"/group-image-2.jpeg"}
                    alt="group-img-1"
                    width={1080}
                    height={720}
                    className="aspect-2/1 rounded-2xl object-cover "
                ></Image>
                <Image
                    src={"/group-image-3.jpeg"}
                    alt="group-img-1"
                    width={1080}
                    height={720}
                    className="aspect-2/1 rounded-2xl object-cover "
                ></Image>
            </div>
        </div>
    );
};

export default LastdayImages;
