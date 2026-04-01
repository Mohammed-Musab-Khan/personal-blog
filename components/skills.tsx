import React from 'react'
import { Progress } from './ui/progress'

const Skills = () => {
    const skills = [
        {
            id: 1,
            skill: "Painting",
            percent: 50,
            color: "red"
        },
        {
            id: 2,
            skill: "Basketball",
            percent: 90,
            color: "yellow"
        },
        {
            id: 3,
            skill: "Cricket",
            percent: 80,
            color: "blue"
        },
        {
            id: 4,
            skill: "Drawing",
            percent: 50,
            color: "green"
        },
        {
            id: 5,
            skill: "Cooking",
            percent: 40,
            color: "indigo"
        },
        {
            id: 6,
            skill: "Playing an instrument",
            percent: 70,
            color: "violet"
        }
    ]

    return (
        <div className='p-10 grid grid-cols-2 gap-10'>
            {/* <Progress value={30} className={"h-10 bg-gray-200"} color='red-600' /> */}
            {
                skills.map(item => (
                    <div key={item.id}>
                        <h1>{item.skill}</h1>
                        <Progress value={item.percent} color={`${item.color}-600`} className={`h-10`} />
                    </div>
                ))
            }
        </div>
    )
}

export default Skills   