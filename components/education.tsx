import { IconCalendar, IconSchool, IconVocabulary } from "@tabler/icons-react";
import { Label } from "./ui/label";

interface EducationProps {
    id: number,
    school: string,
    course: string,
    major: string
    university: string,
    yearStart: number,
    yearEnd: number
}

export const EducationInfo = ({ param }: { param: EducationProps }) => {
    return (
        <>
            <div className="flex gap-20 hover:shadow-2xl hover:shadow-current rounded-3xl p-5 border-2 border-t-purple-500 border-t-6">
                <IconSchool className='w-15 h-15 p-3 bg-purple-700 rounded-2xl' />
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-extrabold">{param.course}</h3>
                    <Label className="text-l text-primary">{param.major}</Label>
                    <Label className="text-sm">{param.university}</Label>
                    <div className="flex gap-2">
                        <IconCalendar />
                        <Label className="text-sm font-bold">
                            {param.yearStart} - {param.yearEnd}
                        </Label>
                    </div>
                </div>
            </div>
        </>
    )
}

const Education = () => {

    const educations: EducationProps[] = [
        {
            id: 1,
            school: "ANJUMAN-E-Islams Allana English",
            course: "SSC",
            major: "General Education",
            university: "Mumbai University",
            yearStart: 2016,
            yearEnd: 2017,
        },
        {
            id: 2,
            school: "St. Xavier College of Science and Commerce",
            course: "HSC",
            major: "Science",
            university: "Mumbai University",
            yearStart: 2017,
            yearEnd: 2019,
        },
        {
            id: 3,
            school: "KJ Somaiya College of Science And Commerce",
            course: "Bsc.IT",
            major: "Information Technology",
            university: "Mumbai University",
            yearStart: 2019,
            yearEnd: 2022,
        }
    ]

    return (
        <div className="lg:p-10 p-5 grid gap-10 justify-items-center">
            <h2 className='text-2xl flex justify-center items-center'>
                <IconVocabulary className='m-2' /> Education
            </h2>
            <div className="grid lg:grid-cols-3 gap-10">
                {educations.map(item => (
                    <EducationInfo param={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Education;