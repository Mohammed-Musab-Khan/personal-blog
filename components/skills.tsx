import React from 'react'
import { Progress } from './ui/progress'
import { IconChalkboardTeacher } from '@tabler/icons-react'

const Skills = () => {
    const skills = [
        {
            id: 1,
            skill: "Painting",
            percent: 50,
            color: "bg-red-600"
        },
        {
            id: 2,
            skill: "Basketball",
            percent: 90,
            color: "bg-yellow-600"
        },
        {
            id: 3,
            skill: "Cricket",
            percent: 80,
            color: "bg-blue-600"
        },
        {
            id: 4,
            skill: "Drawing",
            percent: 50,
            color: "bg-green-600"
        },
        {
            id: 5,
            skill: "Cooking",
            percent: 40,
            color: "bg-indigo-600"
        },
        {
            id: 6,
            skill: "Playing an instrument",
            percent: 70,
            color: "bg-violet-600"
        }
    ]

    return (
        <div className='p-10'>
            <h2 className='text-2xl flex justify-center items-center'> <IconChalkboardTeacher className='m-2' /> Skills</h2>
            <div className='grid grid-cols-2 max-w-11/12 lg:grid-cols-3 lg:min-w-2/3 gap-10 justify-self-center'>
                {
                    skills.map(item => (
                        <div key={item.id}>
                            <h1>{item.skill}</h1>
                            <Progress value={item.percent} color={`${item.color}`} className={`h-10`} />
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Skills   