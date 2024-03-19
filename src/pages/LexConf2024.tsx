// pages/privacy-policy.tsx
import {GetStaticProps, NextPage} from 'next';
import ReactMarkdown from 'react-markdown';
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import Head from "next/head";
import React from "react";
import {Hero} from "@/components/Hero";


var scheduleJSON = [
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "10:30 AM",
        "Type": "Logistics",
        "Leading": "",
        "What": "Kevan's Flight Arrives"
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "12:15 PM",
        "Type": "Logistics",
        "Leading": "",
        "What": "Michael will meet Kevan [at his hotel](https://maps.app.goo.gl/yrfCqMDSBJ6iB1Ve8)."
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "12:15 PM",
        "Type": "Logistics",
        "Leading": "",
        "What": `All meet at: [St. Johns Terminal, 550 Washington St, New York, NY 10282](https://maps.app.goo.gl/JpUEtUaPwL7ogsRy5)`
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "12:30 PM",
        "Type": "Food",
        "Leading": "",
        "What": "Lunch at Google's newest building, compliments of my [generous wife Amelia](https://www.linkedin.com/in/amelia-sander/)."
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "2:20 PM",
        "Type": "Logistics",
        "Leading": "Michael",
        "What": "Find Room: Booked 2:30-3:30PM"
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "2:15 PM",
        "Type": "Substantive",
        "Leading": "Michael",
        "What": `#### Intro: LexConf 2024 Goals
- current status
- future objectives
- roles of each team member.
        `
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "3:00 PM",
        "Type": "Substantive",
        "Leading": "Yin",
        "What": `
#### Sales Pipeline
 
- Law Firm opportunities
- Sales strategies, objects
`
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "3:30 PM",
        "Type": "Logistics",
        "Leading": "Michael",
        "What": "Move to 12th Floor, check-out roof"
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "3:45 PM",
        "Type": "Substantive",
        "Leading": "Kevan",
        "What": `
        
#### Colab-Session
- Discuss JudyRecords data and technical roadmap
- Brainstorm solutions (AI-enhanced data, SALI codes)
`
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "5:30 PM",
        "Type": "Logistics",
        "Leading": "",
        "What": "Break, rest / refresh"
    },
    {
        "Day": "March 21, 2024",
        "DoW": "Thursday",
        "Time": "7:00 PM",
        "Type": "Food",
        "Leading": "",
        "What": `
Reservations at [O'Neils](https://maps.app.goo.gl/vMYTdyPKVF5Skjft8)

Backup: [Gotham Burger Social Club](https://maps.app.goo.gl/ismzAv4aRSMvfDDYA)`
    },
    {
        "Day": "",
        "DoW": "",
        "Time": "",
        "Type": "",
        "Leading": "",
        "What": ""
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "9:00 AM",
        "Type": "Logistics",
        "Leading": "",
        "What": `
Meet At: Michael's Apartment
[10 Bleecker St. #3C, New York, NY 10012](https://maps.app.goo.gl/eUsj3EqxX3CyRpdq9)`
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "9:00 AM",
        "Type": "Food",
        "Leading": "",
        "What": "Bagel and Lox Breakfast"
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "9:30 AM",
        "Type": "Substantive",
        "Leading": "Mikhail",
        "What": `
### Deep Dive: What are we building
- SDK status 
- integration with Foundation
- Clio, Salesforce, and other platforms.`
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "12:00 PM",
        "Type": "Food",
        "Leading": "",
        "What": "Lunch TBD"
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "1:00 PM",
        "Type": "Substantive",
        "Leading": "Michael",
        "What": `
### AI
- data normalization
- integration

see [Entity Matching book on Amazon](https://www.amazon.com/Hands-Entity-Resolution-Practical-Matching/dp/1098148487/ref=zg_bs_g_10806588011_d_sccl_21/145-8421150-3749324?psc=1)
`
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "2:00 PM",
        "Type": "Logistics",
        "Leading": "",
        "What": "MF leaves, break"
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "2:30 PM",
        "Type": "Substantive",
        "Leading": "All",
        "What": "judyrecords sales pipeline"
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "3:30 PM",
        "Type": "Substantive",
        "Leading": "All",
        "What": `### Q&A and Brainstorming
- Address any questions
- encourage open discussion
- brainstorm innovative approaches`
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "4:00 PM",
        "Type": "Logistics",
        "Leading": "",
        "What": "Break, rest / refresh"
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "6:00 PM",
        "Type": "Food",
        "Leading": "",
        "What": `
Reservation at [Monte's](https://maps.app.goo.gl/yBjNytKeML1uRZ3f8)

Backup at [Frank](https://resy.com/i/aUp4bKBpM4A)
`
    },
    {
        "Day": "March 22, 2024",
        "DoW": "Friday",
        "Time": "8:00 PM",
        "Type": "Entertainment",
        "Leading": "",
        "What": "Village Underground / Comedy Cellar"
    },
    {
        "Day": "",
        "DoW": "",
        "Time": "",
        "Type": "",
        "Leading": "",
        "What": ""
    },
    {
        "Day": "March 23, 2024",
        "DoW": "Saturday",
        "Time": "",
        "Type": "Entertainment",
        "Leading": "",
        "What": "Free Day: Central Park, Museums, ..."
    },
    {
        "Day": "March 23, 2024",
        "DoW": "Saturday",
        "Time": "",
        "Type": "Food",
        "Leading": "",
        "What": "TBD - Szechuan Mountain House Manhattan"
    },
    {
        "Day": "",
        "DoW": "",
        "Time": "",
        "Type": "",
        "Leading": "",
        "What": ""
    },
    {
        "Day": "March 24, 2024",
        "DoW": "Sunday",
        "Time": "",
        "Type": "Entertainment",
        "Leading": "",
        "What": "Free Day: High-Line, Lower East Side, ..."
    },
    {
        "Day": "March 24, 2024",
        "DoW": "Sunday",
        "Time": "5:30 PM",
        "Type": "Logistics",
        "Leading": "",
        "What": "Kevan cab to LGA"
    },
    {
        "Day": "March 24, 2024",
        "DoW": "Sunday",
        "Time": "7:55 PM",
        "Type": "Logistics",
        "Leading": "",
        "What": "Kevan's Flight leaves LGA"
    }
];

// Map above "Type" field to foregrand/background colors
var colorMap = {
    "Logistics": "bg-slate-200 text-slate-900",
    "Food": "bg-primary-200 text-primary-900",
    "Substantive": "bg-indigo-200 text-indigo-900",
    "Entertainment": "bg-primary-200 text-primary-900",
};
var dowColor = {
    "Thursday": "bg-primary-50 text-primary-900",
    "Friday": "bg-primary-100 text-indigo-900",
    "Saturday": "bg-primary-200 text-slate-900",
    "Sunday": "bg-primary-200 text-primary-900",
};

var introMD  = `

### Goals

The goal of this conference is to develop our platform and ensure each team member has a clear understanding 
of **what we are building** and **why it matters**. 
 
Our aim is:

- **Clarity of Vision:** Sharpen our focus, ensure we are aligned with mission. Clarity is crucial to accelerating product development with precision.
- **Enhanced Teamwork:** Open dialogue and collaboration. Success requires collective effort.
- **Strategic Agility:** Refine strategy, SWOT analyses to anticipate potential challenges, ensuring we remain resilient and proactive.

Together, these goals set the stage for success!

### Attendees
Michael; Mikhail; Yin; Kevan; Amelia


# Agenda
`;

const ScheduleCards = () => {
    let lastDay = "";
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {scheduleJSON.map((item, index) => {
                const color = colorMap[item.Type as keyof typeof colorMap] || "text-gray-800 bg-gray-100";
                const dayChanged = item.Day && lastDay !== item.Day;
                if (dayChanged) {
                    lastDay = item.Day;
                }
                return (
                    <React.Fragment key={index}>
                        {dayChanged && (
                            <div className="col-span-full bg-primary-50 text-primary-900 p-4 shadow rounded-lg mb-4">
                                {item.DoW} {item.Day}
                            </div>
                        )}
                        {item.Day && (<div className={`transform transition duration-500 hover:scale-105 ${color} shadow rounded-lg overflow-hidden`}>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.Time} - {item.Type}</h3>
                                <p className="text-md mt-2">{item.Leading}</p>
                            </div>
                            <div className="p-4 border-t">
                                <ReactMarkdown className="prose">{item.What}</ReactMarkdown>
                            </div>
                        </div>)}
                        {// Show an empty row, just a row with all width and padding
                            !item.Day && (<div className="col-span-full bg-transparent py-12"></div>)}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

function LexConfTableHeaderRow() {
    var thClass = "p-4 sticky top-0 border-b border-slate-200 bg-slate-100";
    return (<tr className="text-left">
        <th className={thClass}>Time</th>
        <th className={thClass}>Type</th>
        <th className={thClass}>Leading</th>
        <th className={thClass}>Details</th>
    </tr>)
}

export default function LexConf2024() {
    var lastDay = "";
    return (
        <>
            <Head><title>LexCon2024</title></Head>
            <Header/>
            <Hero title="LexConf" titleUnderline="2024" titleAfterUnderline="" subHeading="LexPipe + Judyrecords Collaboration Conference Schedule"></Hero>
            <div className="max-w-4xl mx-auto">
                <ReactMarkdown className="prose max-w-4xl">{introMD}</ReactMarkdown>
                <div className="mt-5 mb-10">

                    <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
                        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                            <thead><LexConfTableHeaderRow /></thead>
                            <tbody>
                            {
                                // Create a row for each of the above
                                scheduleJSON.map((item, index) => {
                                    var color : string = colorMap[item.Type as keyof typeof colorMap] || "";
                                    var className = item.Day ? "p-2 border-b border-gray-200 transform transition duration-50 hover:bg-indigo-50" : "p-8";
                                    // Add an additional row for the day if it's different from the last
                                    var dayRow = null;
                                    if (item.Day && lastDay != item.Day) {
                                        lastDay = item.Day;
                                        dayRow = (
                                            <tr className="bg-primary-50 text-primary-900">
                                                <td colSpan={4} className="p-4">{item.DoW} {item.Day}</td>
                                            </tr>
                                        );
                                    }
                                    return (
                                        <React.Fragment key={index}>
                                            {dayRow}
                                            <tr className={className}>
                                                <td className={className}>{item.Time}</td>
                                                <td className={className + " " + color}>{item.Type}</td>
                                                <td className={className}>{item.Leading}</td>
                                                <td className={className}>
                                                    <ReactMarkdown className="prose">{item.What}</ReactMarkdown>
                                                </td>
                                            </tr>
                                            {!item.Day && (<LexConfTableHeaderRow/>)}
                                        </React.Fragment>
                                    );

                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {
        },
    };
};
