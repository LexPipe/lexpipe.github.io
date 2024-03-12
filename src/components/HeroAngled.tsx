// import { useState } from 'react'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { EmailSignupForm } from '@/components/EmailSubmit'
import LexPipeHeroImage from '@/images/lexpipe-hero.png'
import LexPipeLogo from '@/images/LexPipe-Trans-Rect-300.png'


export function HeroAngled() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="bg-white">
            <div className="relative">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 lg:w-full lg:max-w-2xl">
                        <div className="relative px-6 py-16 sm:py-40 lg:px-8 lg:py-36 lg:pr-0">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <h1 className="text-4xl font-bold lg:whitespace-nowrap tracking-tight text-gray-900 sm:text-6xl">
                                    <div className="relative lg:inline-block">AI&nbsp;enabled</div>{' '}
                                    <span className="relative lg:whitespace-nowrap text-primary-600">
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 418 42"
                                            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary-300/70"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"/>
                                        </svg>
                                        <span className="relative">legal data</span>
                                    </span>{' '}<span className="relative block pt-8 text-[1.6rem] text-gray-700 sm:text-gray-900 leading-8 drop-shadow-white drop-shadow-lg">for business development and matter management</span>
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 drop-shadow-white drop-shadow-lg sm:text-gray-900">
                                    LexPipe transforms the way law firms and corporates use legal
                                    data to develop new business and manage matters.
                                </p>

                                <div className="pt-4">
                                    <p className="mt-4 text-sm tracking-tight text-gray-800 pb-2">
                                        Signup for our waitlist for exclusive updates.
                                    </p>
                                    <EmailSignupForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 absolute inset-y-0 right-0">
                    <div className="lg:hidden absolute inset-0 bg-white opacity-70 md:opacity-50"/>
                    <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-gray-50"/>
                    <Image
                        className="aspect-auto h-full w-full object-cover"
                        src={LexPipeHeroImage}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
