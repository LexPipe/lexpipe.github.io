import Image from 'next/image'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import diagramManyToMany from "@/images/diagram-many_to_many.png";
import diagramHubSpoke from "@/images/diagram-hub_spoke.png";

// Define an interface for the feature object
interface Feature {
    name: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Define an interface for the component props
export interface FeatureImageProps {
    features?: Feature[];
    title: string;
    title_tag?: string; // Assuming title_tag is optional
    description: string;
    image: string; // Assuming image is a path to the image
    right: boolean,
}

const default_FeaturesList : Feature[] = [{
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    }, {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    }, {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    }
]
const default_FeatureImageProps: FeatureImageProps = {
    title: '',
    title_tag: '',
    description: '',
    image: '',
    features: default_FeaturesList,
    right: false,
}

const feature_Today: FeatureImageProps = {
    title: 'Legal Data in Firms Today',
    title_tag: 'Many-to-Many',
    description: '',
    right: false,
    image: diagramManyToMany.src,
    features: [{
        name: 'Numerous legal data sources and firm databases.',
        description:
            'Today law firms are inundated with data. Complex internal system and numerous external public ' +
            'data sources are managed by dedicated knowledge management teams.',
        icon: CloudArrowUpIcon,
    }, {
        name: 'Time-consuming data entry, complex setup.',
        description: 'Few firms have the resources to manually copy/paste data or setup complex APIs from multiple vendors.',
        icon: LockClosedIcon,
    }, {
        name: 'Empty databases; knowledge gaps; unused tech.',
        description: 'Firms have invested in underlying tech, but without data, it is not being used to its full potential.',
        icon: ServerIcon,
    }]
}

const feature_HubSpoke: FeatureImageProps = {
    title: 'The LexPipe Solution',
    title_tag: 'A Platform to Connect Legal Data',
    image: diagramHubSpoke.src,
    description : '',
    right: true,
    features: [{
        name: 'Unified Sync Platform',
        description: 'Connect to multiple data sources, keep firm records up-to-date.',
        icon: CloudArrowUpIcon,
    }, {
        name: 'Discover and Enrich',
        description: 'Over 50 fields kept up-to-date including case status, type, judge, parties, motions, and more.',
        icon: LockClosedIcon,
    }, {
        name: 'Observability Dashboard.',
        description: 'Generative AI audit trail; data source feed coverage and latency validations.',
        icon: ServerIcon,
    }]
}

export function FeatureImageManyToMany() {
    return <FeatureImageTemplate {...feature_Today} />
}
export function FeatureImageHubSpoke() {
    return <FeatureImageTemplate {...feature_HubSpoke} />
}


export function FeatureImageTemplate({ features = default_FeaturesList, title, title_tag, description, image, right }: FeatureImageProps) {
    return (
            <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-hidden bg-white py-16 sm:py-10 mb-10">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:mr-auto lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">{title_tag}</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-14">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-10 w-10 text-primary-600"
                                                          aria-hidden="true"/>
                                            {feature.name}
                                        </dt>
                                        {' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className={"flex items-start justify-end " + (right ? "lg:order-first" : "lg:order-last")}>
                        <div className="relative w-full lg:h-[400px] lg:pt-[100px] md:h-[250px] md:pt-0 sm:pt-0 h-[200px]"> {/* Padding is applied here */}
                            <div className="relative h-full"> {/* New div that respects padding */}
                                <Image
                                    src={image}
                                    alt={"Diagram of " + title}
                                    layout="fill"
                                    objectFit="contain" // or 'cover', depending on your need
                                    className="object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}
