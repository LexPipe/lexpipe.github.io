import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUnlockKeyhole, faGavel, faBookOpen, faGlobe} from '@fortawesome/free-solid-svg-icons'

import backgroundImage from "@/images/background-features.jpg";
import Image from "next/image";

const features = [
    {
        name: 'Unlocked Insights',
        description:
            'Break silos and tap rich metadata buried in the public record.',
        icon: (<FontAwesomeIcon icon={faUnlockKeyhole} />),
    },
    {
        name: 'Digital Transformation',
        description:
            'Richer database quality, increases usage of law firm tools.',
        icon: (<FontAwesomeIcon icon={faGlobe} />),
    },
    {
        name: 'Data Governance',
        description: 'No data entry or coding; just high quality data where you want it.',
        icon: (<FontAwesomeIcon icon={faGavel} />),
    },
    {
        name: 'Built on Open Standards',
        description:
            "We're a a strong supporter of open APIs and legal standards, e.g., SALI.",
        icon: (<FontAwesomeIcon icon={faBookOpen} />),
    },
]

export default function ValueProposition() {
    return (
        <section id="value-proposition" className="relative bg-primary-600 overflow-hidden">
            <Image
                className="absolute max-w-none inset-0 "
                src={backgroundImage}
                alt=""
                width={2245}
                height={1636}
                unoptimized
            />

        <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        <span className="text-primary-300">Value prop for the </span> legal sector
                    </h2>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 ">
                        {features.map((feature) => (
                            <div key={feature.name} className="bg-white px-8 py-5 rounded-lg text-lg">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mr-6 align-middle inline-block h-7 w-7 rounded-lg text-primary-700">
                                        {feature.icon}
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-5 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
        </section>
    )
}
