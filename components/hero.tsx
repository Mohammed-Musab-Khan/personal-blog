import React from 'react'
import Image from "next/image"

const Hero = () => {
    return (
        <div className="grid grid-rows-2 gap-30">
            <div className="relative flex flex-col items-center">
                <Image src={"/assets/images/hero-background.jpg"} alt="Background Image" className="w-full h-72 object-cover" width={700} height={100} />

                <Image src={"/assets/images/hero-profile.jpg"} alt="Profile Image" className="absolute bottom-0 translate-y-1/2 rounded-full border-8 border-amber-300 w-50 h-50 shadow-2xl" width={600} height={100} />
            </div>
            <p className="p-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, et repellendus rem nobis blanditiis, mollitia, corrupti doloremque quam dicta laboriosam natus corporis dolore dolorem vitae. Modi blanditiis nulla maxime quidem!
                Veritatis doloribus saepe culpa corporis tempore? Cumque voluptas illo quia veritatis doloribus repellat iste nisi accusantium pariatur eum aspernatur quaerat provident non, nesciunt temporibus excepturi quisquam qui nostrum id ut!
            </p>

        </div>
    )
}

export default Hero