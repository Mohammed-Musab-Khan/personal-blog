import { IconLibraryPhoto } from "@tabler/icons-react";
import Image from "next/image";

const Portfolio = () => {

    const images: string[] = [
        "/assets/images/sad-boy.png",
        "/assets/images/happy-boy.svg",
        "/assets/images/favourite-swimming.png",
        "/assets/images/favourite-mountains.png",
        "/assets/images/favorite-football.png",
        "/assets/images/hero-profile.jpg",
    ]

    return (
        <div className='lg:p-10 p-5 grid gap-10'>
            <h2 className='text-2xl flex justify-center items-center'> <IconLibraryPhoto className='m-2' /> Portfolio</h2>
            <div className='grid lg:grid-cols-3 lg:min-w-2/3 gap-10 justify-self-center'>
                {
                    images.map(item => (
                        <Image src={item} width={300} height={100} alt="Image" key={images.indexOf(item)} className="max-w-200 max-h-200" />
                    ))
                }
            </div>
        </div>
    );
}

export default Portfolio;