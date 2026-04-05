import { IconStar, IconStarFilled } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

interface FavouriteProps {
    id: number,
    title: string,
    subtitle: string,
    paragraph: string,
    image: string
}

export const FavouriteInfo = ({ param }: { param: FavouriteProps }) => {
    const orderInfo = param.id % 2 == 0 ? "order-1" : "order-2"
    const orderImage = param.id % 2 == 0 ? "order-2" : "order-1"
    return (
        <>
            <div className="grid grid-cols-2 gap-20">
                <div className={`flex flex-col gap-10 text-center ${orderInfo}`}>
                    <h3 className='text-xl font-extrabold'>{param.title}</h3>
                    <h4 className='text-xl font-bold'>{param.subtitle}</h4>
                    <p>
                        {param.paragraph}
                    </p>
                </div>
                <Image src={param.image} width={450} height={300} alt='Football' className={`${orderImage}`} />
            </div>
        </>
    )
}

const Favourites = () => {
    const favourites: FavouriteProps[] = [
        {
            id: 1,
            title: "My Favourite Exercise",
            subtitle: "Swimming",
            paragraph: "Swimming has always been one of the activities I enjoy the most, not just as a form of exercise but as a way to clear my mind and feel refreshed. The moment I enter the water, there’s a sense of calm that washes over me, making everything else fade into the background. I like the rhythm of each stroke, the steady breathing, and the feeling of moving effortlessly through the water. It helps me stay active while also giving me a break from daily stress. Whether it’s a quick swim or a long session, I always come out feeling more energized, focused, and at peace.",
            image: "/assets/images/favourite-swimming.png"
        },
        {
            id: 2,
            title: "My Favourite Adventure",
            subtitle: "Hiking",
            paragraph: "Hiking is something I genuinely enjoy because it gives me a chance to disconnect from the noise of everyday life and reconnect with nature. There’s something incredibly satisfying about walking through trails, feeling the fresh air, and taking in the scenic views along the way. I like the sense of progress with every step, whether it’s a short trail or a challenging climb. It not only keeps me physically active but also helps clear my mind and improve my focus. By the time I reach the top or complete a trail, I always feel refreshed, accomplished, and more grounded.",
            image: "/assets/images/favourite-mountains.png"
        },
        {
            id: 3,
            title: "My Favourite Sport",
            subtitle: "Football",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro laudantium, suscipit ea distinctio beatae, numquam aperiam consequatur libero placeat rem at quasi id consectetur? Nemo magnam iure dolorem commodi!",
            image: "/assets/images/favorite-football.png"
        }
    ]
    return (
        <div className="p-10 grid gap-10 justify-items-center">
            <h2 className='text-2xl flex justify-center items-center'> <IconStar className='m-2' /> Favorites</h2>
            {favourites.map(item => (
                <FavouriteInfo param={item} key={item.id} />
            ))}
        </div>
    )
}

export default Favourites