import {
    Coiny,
    Kaushan_Script,
    Story_Script,
    DynaPuff,
} from "next/font/google";
import Image from "next/image";

const coiny = Coiny({
    subsets: ["latin"],
    weight: ["400"],
});
const kaushanScript = Kaushan_Script({
    subsets: ["latin"],
    weight: ["400"],
});
const storyScript = Story_Script({
    subsets: ["latin"],
    weight: ["400"],
});
const dynaPuff = DynaPuff({
    subsets: ["latin"],
    weight: ["400"],
});

const LastdayImages = () => {
    return (
        <div>
            <div className="w-full min-h-screen py-14 flex flex-col lg:flex-row px-10">
                <div className="w-full lg:w-2/5 bg-[#f3d7d7fd] rounded-2xl shadow-md shadow-[#b67272c1] py-14 p-4 sm:px-6 md:px-10 lg:px-14">
                    <h1
                        className={`${storyScript.className} text-center md:text-start text-3xl sm:text-2xl md:text-3xl lg:text-6xl text-[#f56666] `}
                    >
                        Last day of our college
                    </h1>
                    <p
                        className={`${dynaPuff.className} mt-12 text-xs md:text-2xl md:leading-12 text-center md:text-start text-black`}
                    >
                        3 years flew by faster than expected. <br /> Countless
                        memories, endless laughter, <br /> and incredible
                        friends. <br /> A few days of college life remain,{" "}
                        <br /> but these moments and <br /> friendships will
                        stay with me forever. ❤️✨
                    </p>
                    <h1
                        className={`${storyScript.className} text-center md:text-start text-3xl sm:text-2xl md:text-3xl lg:text-6xl mt-12 text-[#f56666]`}
                    >
                        Last day of our college
                    </h1>
                    <p
                        className={`${dynaPuff.className} mt-6 text-xs md:text-2xl md:leading-12 text-center md:text-start text-black`}
                    >
                        Not just photos, <br /> but memories we&apos;ll carry
                        for a lifetime. <br />
                        Thankful for the friends, <br /> teachers, and moments{" "}
                        <br /> that made these 3 years so special and
                        unforgettable. ❤️📸✨
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex-1 flex justify-center items-center relative aspect-square">
                    <div className="absolute z-9 w-[40%] md:w-[40%] lg:w-[40%] -rotate-15 right-[40%] top-[10%]">
                        {/* Pin */}
                        <div className="w-8 h-8 rounded-full bg-purple-300 absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-purple-400" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#e0d4fd] p-4 pb-6 lg:p-6 lg:pb-12 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-2.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            <p
                                className={`${kaushanScript.className} py-5 text-center text-md text-xs lg:text-base text-black hidden md:block`}
                            >
                                Years may pass, but these memories will always
                                stay fresh. ✨
                            </p>
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-2 translate-y-3 rotate-0 bg-[#615974]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-8 w-[40%] md:w-[40%] lg:w-[40%] rotate-5 right-[30%] top-[60%] md:top-[50%]">
                        {/* Pin */}
                        <div className="w-8 h-8 rounded-full bg-teal-300 absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-teal-400" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#c5fbff] p-4 pb-6 md:p-6 lg:pb-12 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-1.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            <p
                                className={`${kaushanScript.className} py-5 text-center text-xs lg:text-base text-black hidden md:block`}
                            >
                                Years may pass, but these memories will always
                                stay fresh. ✨
                            </p>
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-9 translate-x-2 translate-y-3 rotate-0 bg-[#62878a]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-6 w-[30%] md:w-[30%] lg:w-[30%] rotate-10 right-[0%] md:right-[7%] top-[25%]">
                        {/* Pin */}
                        <div className="w-8 h-8 rounded-full bg-[#fff8aa] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#c3c07d]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#fdf2d4] p-4 pb-6 lg:p-6 lg:pb-12 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-3.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            <p
                                className={`${kaushanScript.className} py-5 text-center text-xs lg:text-base text-black hidden md:block`}
                            >
                                Years may pass, but these memories will always
                                stay fresh. ✨
                            </p>
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-2 translate-y-3 rotate-0 bg-[#9b8f6d]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-5 w-[20%] md:w-[20%] lg:w-[20%] -rotate-1 right-[20%] top-[10%]">
                        {/* Pin */}
                        <div className="w-6 h-6 rounded-full bg-[#ffaaaa] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#ffaaaa]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#ffaaaa] p-2 pb-3 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-4.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            {/* <p
                            className={`${kaushanScript.className} py-5 text-center text-md`}
                        >
                            Years may pass, but these memories will always stay
                            fresh. ✨
                        </p> */}
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-1 translate-y-1 rotate-0 bg-[#9e6969]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-10 w-[20%] md:w-[20%] lg:w-[20%] rotate-6 right-[75%] top-[40%]">
                        {/* Pin */}
                        <div className="w-6 h-6 rounded-full bg-[#adffaa] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#adffaa]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#adffaa] p-2 pb-3 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-6.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            {/* <p
                            className={`${kaushanScript.className} py-5 text-center text-md`}
                        >
                            Years may pass, but these memories will always stay
                            fresh. ✨
                        </p> */}
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-1 translate-y-1.5 rotate-0 bg-[#6c946b]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-10 w-[20%] md:w-[20%] lg:w-[20%] -rotate-10 right-[70%] top-[60%]">
                        {/* Pin */}
                        <div className="w-6 h-6 rounded-full bg-[#aabbff] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#aabbff]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#aabbff] p-2 pb-3 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-5.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            {/* <p
                            className={`${kaushanScript.className} py-5 text-center text-md`}
                        >
                            Years may pass, but these memories will always stay
                            fresh. ✨
                        </p> */}
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-1 translate-y-1.5 rotate-0 bg-[#57618e]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-10 w-[20%] md:w-[20%] lg:w-[20%] -rotate-4 right-[10%] top-[65%]">
                        {/* Pin */}
                        <div className="w-6 h-6 rounded-full bg-[#ffaaee] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#ffaaee]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#ffaaee] p-2 pb-3 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-7.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            {/* <p
                            className={`${kaushanScript.className} py-5 text-center text-md`}
                        >
                            Years may pass, but these memories will always stay
                            fresh. ✨
                        </p> */}
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-1 translate-y-1.5 rotate-0 bg-[#9b6c92]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>

                    {/* <div className="w-[80%] md:w-[50%] lg:w-[40%] p-6 pb-12 border shadow-md shadow-neutral-500 rounded-md absolute -rotate-4 md:right-[40%] top-[0%] bg-white dark:bg-black ">
                    <div
                        className="w-8 h-8 rounded-2xl bg-amber-200 absolute -top-1 left-1/2 -translate-1/2
                                                shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border-amber-300/50 border"
                    ></div>
                    <Image
                        src={"/group-image-1.jpeg"}
                        alt="Group Image"
                        width={400}
                        height={250}
                        className="rounded-md object-cover"
                    />
                    <p
                        className={`${kaushanScript.className} py-5 text-center text-md`}
                    >
                        Years may pass, but these memories will always stay
                        fresh. ✨
                    </p>
                </div> */}
                </div>
            </div>
            <div className="w-full min-h-screen py-14 flex flex-col lg:flex-row-reverse px-10">
                <div className="w-full lg:w-2/5 bg-[#ebdaff] rounded-2xl shadow-md shadow-[#9f8bb6] py-14 p-4 sm:px-6 md:px-10 lg:px-14">
                    <h1
                        className={`${storyScript.className} text-center md:text-start text-3xl sm:text-2xl md:text-3xl lg:text-6xl text-[#9366f5]`}
                    >
                        Last day of our college
                    </h1>
                    <p
                        className={`${dynaPuff.className} mt-12 text-xs md:text-2xl md:leading-12 text-center md:text-start text-black`}
                    >
                        3 years flew by faster than expected. <br /> Countless
                        memories, endless laughter, <br /> and incredible
                        friends. <br /> A few days of college life remain,{" "}
                        <br /> but these moments and <br /> friendships will
                        stay with me forever. ❤️✨
                    </p>
                    <h1
                        className={`${storyScript.className} text-center md:text-start text-3xl sm:text-2xl md:text-3xl lg:text-6xl mt-12 text-[#9366f5]`}
                    >
                        Last day of our college
                    </h1>
                    <p
                        className={`${dynaPuff.className} mt-6 text-xs md:text-2xl md:leading-12 text-center md:text-start text-black`}
                    >
                        Not just photos, <br /> but memories we&apos;ll carry
                        for a lifetime. <br />
                        Thankful for the friends, <br /> teachers, and moments{" "}
                        <br /> that made these 3 years so special and
                        unforgettable. ❤️📸✨
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex-1 flex justify-center items-center relative aspect-square">
                    <div className="absolute z-9 w-[40%] md:w-[40%] lg:w-[40%] -rotate-15 right-[40%] top-[10%]">
                        {/* Pin */}
                        <div className="w-8 h-8 rounded-full bg-purple-300 absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-purple-400" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#e0d4fd] p-4 pb-6 lg:p-6 lg:pb-12 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-2.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            <p
                                className={`${kaushanScript.className} py-5 text-center text-md text-xs lg:text-base text-black hidden md:block `}
                            >
                                Years may pass, but these memories will always
                                stay fresh. ✨
                            </p>
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-2 translate-y-3 rotate-0 bg-[#615974]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-8 w-[40%] md:w-[40%] lg:w-[40%] rotate-5 right-[30%] top-[55%] md:top-[50%]">
                        {/* Pin */}
                        <div className="w-8 h-8 rounded-full bg-teal-300 absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-teal-400" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#c5fbff] p-4 pb-6 lg:p-6 lg:pb-12 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-1.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            <p
                                className={`${kaushanScript.className} py-5 text-center text-xs lg:text-base text-black hidden md:block`}
                            >
                                Years may pass, but these memories will always
                                stay fresh. ✨
                            </p>
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-9 translate-x-2 translate-y-3 rotate-0 bg-[#62878a]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-6 w-[30%] md:w-[30%] lg:w-[30%] rotate-10 right-[0%] md:right-[7%] top-[25%]">
                        {/* Pin */}
                        <div className="w-8 h-8 rounded-full bg-[#fff8aa] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#c3c07d]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#fdf2d4] p-4 pb-6 lg:p-6 lg:pb-12 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-3.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            <p
                                className={`${kaushanScript.className} py-5 text-center text-xs lg:text-base text-black hidden md:block`}
                            >
                                Years may pass, but these memories will always
                                stay fresh. ✨
                            </p>
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-2 translate-y-3 rotate-0 bg-[#9b8f6d]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-5 w-[20%] md:w-[20%] lg:w-[20%] -rotate-1 right-[20%] top-[10%]">
                        {/* Pin */}
                        <div className="w-6 h-6 rounded-full bg-[#ffaaaa] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#ffaaaa]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#ffaaaa] p-2 pb-3 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-4.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            {/* <p
                            className={`${kaushanScript.className} py-5 text-center text-md`}
                        >
                            Years may pass, but these memories will always stay
                            fresh. ✨
                        </p> */}
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-1 translate-y-1 rotate-0 bg-[#9e6969]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-10 w-[20%] md:w-[20%] lg:w-[20%] rotate-6 right-[75%] top-[40%]">
                        {/* Pin */}
                        <div className="w-6 h-6 rounded-full bg-[#adffaa] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#adffaa]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#adffaa] p-2 pb-3 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-6.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            {/* <p
                            className={`${kaushanScript.className} py-5 text-center text-md`}
                        >
                            Years may pass, but these memories will always stay
                            fresh. ✨
                        </p> */}
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-1 translate-y-1.5 rotate-0 bg-[#6c946b]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-10 w-[20%] md:w-[20%] lg:w-[20%] -rotate-10 right-[70%] top-[60%]">
                        {/* Pin */}
                        <div className="w-6 h-6 rounded-full bg-[#aabbff] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#aabbff]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#aabbff] p-2 pb-3 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-5.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            {/* <p
                            className={`${kaushanScript.className} py-5 text-center text-md`}
                        >
                            Years may pass, but these memories will always stay
                            fresh. ✨
                        </p> */}
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-1 translate-y-1.5 rotate-0 bg-[#57618e]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute z-10 w-[20%] md:w-[20%] lg:w-[20%] -rotate-4 right-[10%] top-[65%]">
                        {/* Pin */}
                        <div className="w-6 h-6 rounded-full bg-[#ffaaee] absolute z-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border border-[#ffaaee]" />

                        {/* Paper */}
                        <div
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                            className="bg-[#ffaaee] p-2 pb-3 border border-black/20 dark:border-white/10"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <Image
                                    src="/group-image-7.jpeg"
                                    alt="Group Image"
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-110"
                                />
                            </div>

                            {/* <p
                            className={`${kaushanScript.className} py-5 text-center text-md`}
                        >
                            Years may pass, but these memories will always stay
                            fresh. ✨
                        </p> */}
                        </div>

                        {/* Extra paper shadow layer */}
                        <div
                            className="absolute inset-0 -z-10 translate-x-1 translate-y-1.5 rotate-0 bg-[#9b6c92]"
                            style={{
                                clipPath:
                                    "polygon(0% 2%, 3% 0%, 8% 3%, 15% 1%, 22% 4%, 30% 1%, 38% 3%, 45% 0%, 52% 2%, 60% 0%, 68% 3%, 75% 1%, 82% 4%, 90% 2%, 97% 3%, 100% 0%, 100% 98%, 96% 100%, 88% 98%, 80% 100%, 72% 97%, 64% 100%, 56% 98%, 48% 100%, 40% 97%, 32% 100%, 24% 98%, 16% 100%, 8% 97%, 0% 100%)",
                            }}
                        />
                    </div>

                    {/* <div className="w-[80%] md:w-[50%] lg:w-[40%] p-6 pb-12 border shadow-md shadow-neutral-500 rounded-md absolute -rotate-4 md:right-[40%] top-[0%] bg-white dark:bg-black ">
                    <div
                        className="w-8 h-8 rounded-2xl bg-amber-200 absolute -top-1 left-1/2 -translate-1/2
                                                shadow-[0_4px_6px_rgba(0,0,0,0.55),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-3px_4px_rgba(0,0,0,0.4)] border-amber-300/50 border"
                    ></div>
                    <Image
                        src={"/group-image-1.jpeg"}
                        alt="Group Image"
                        width={400}
                        height={250}
                        className="rounded-md object-cover"
                    />
                    <p
                        className={`${kaushanScript.className} py-5 text-center text-md`}
                    >
                        Years may pass, but these memories will always stay
                        fresh. ✨
                    </p>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default LastdayImages;
