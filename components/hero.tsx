import React from 'react'
import Image from "next/image"

const Hero = () => {
    return (
        <div className="grid gap-30">
            <div className="relative flex flex-col items-center">
                <Image src={"/assets/images/hero-background.jpg"} alt="Background Image" className="w-full h-72 object-cover" width={700} height={100} />

                <Image src={"/assets/images/hero-profile.jpg"} alt="Profile Image" className="absolute bottom-0 translate-y-1/2 rounded-full border-8 border-amber-300 w-50 h-50 shadow-2xl hover:shadow-amber-600" width={600} height={100} />
            </div>
            <div>
                <h1 className='justify-self-center gap-0 text-3xl font-extrabold'>Mohammed Musab Khan</h1>
                <p className="lg:p-8 lg:px-10 p-5">
                    Mohammed Musab Khan is a Senior Software Engineer based in Mumbai with over 5 years of experience in building scalable web applications using .NET technologies, including ASP.NET Core and Blazor, along with modern frameworks like React.js. He has worked across development and testing roles, giving him a strong understanding of full software lifecycles, API development, and backend systems. A graduate in Information Technology from Mumbai University, he actively shares insights on software architecture and engineering practices, and is engaged in hiring, referrals, and exploring new opportunities in tech.
                </p>
            </div>

        </div>
    )
}

export default Hero