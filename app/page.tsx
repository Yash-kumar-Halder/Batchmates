import Navigation from "@/components/navigation";
import LastdayImages from "@/components/pages/lastday-images-photo-album";
import ScrollIndicator from "@/components/scroll-indicator";
import HeroLandingImageRevelAnimation from "@/components/hero-landing-image-revel-animation";

export default function Home() {
    return (
        <div>
            <Navigation />
            <div className="hero-landing max-h-screen overflow-hidden relative">
                <HeroLandingImageRevelAnimation />
                <ScrollIndicator />
                <div className="absolute">
                    <h3>A Jurney We&apos;ll Always Carry</h3>
                </div>
            </div>
            <LastdayImages />
        </div>
    );
}
