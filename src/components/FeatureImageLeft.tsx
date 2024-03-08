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
    title: 'Default title',
    title_tag: 'Default title tag',
    description: 'Default description',
    image: '/path/to/default/image',
    features: default_FeaturesList
}

const feature_Today: FeatureImageProps = {
    title: 'Legal Data in Firms Today',
    title_tag: 'Many-to-Many',
    description: 'Default description',
    image: diagramManyToMany.src,
    features: [{
        name: 'Numerous legal data sources and firm databases.',
        description:
            'Today law firms are inundated with data, public data being particularly difficult to manage.',
        icon: CloudArrowUpIcon,
    }, {
        name: 'Time-consuming data entry.',
        description: 'Few firms have the resources to manually copy/paste data from various vendor tools. The volume makes manual data entry cost prohibitive.',
        icon: LockClosedIcon,
    }, {
        name: 'Empty databases; knowledge gaps; unused tech.',
        description: 'Firms have invested in tech, but the data is not being used to its full potential.',
        icon: ServerIcon,
    }]
}

const feature_HubSpoke: FeatureImageProps = {
    title: 'The LexPipe Solution',
    title_tag: 'Hub-Spoke',
    description: 'A Platform to Connect Legal Data',
    image: diagramHubSpoke.src,
    features: [{
        name: 'Sync Platform.',
        description: 'multiple data sources  up-to-date and secure firm records',
        icon: CloudArrowUpIcon,
    }, {
        name: 'Discover and Enrich.',
        description: 'case status, type, judge, parties, motions, …',
        icon: LockClosedIcon,
    }, {
        name: 'Observability Dashboard.',
        description: 'Data fields, feed coverage, and latency',
        icon: ServerIcon,
    }]
}

export function FeatureImageManyToMany() {
    return <FeatureImageTemplate {...feature_Today} />
}
export function FeatureImageHubSpoke() {
    return <FeatureImageTemplate {...feature_HubSpoke} />
}


export function FeatureImageTemplate({ features = default_FeaturesList, title, title_tag, description, image }: FeatureImageProps) {
    return (
        <div className="overflow-hidden bg-white py-5 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">{title_tag}</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-first">
                        <img
                            src={image}
                            alt="Product screenshot"
                            className="pt-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
