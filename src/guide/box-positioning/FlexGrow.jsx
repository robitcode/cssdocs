import profileImg1 from "../../assets/image.png"
import { useState } from "react";
import DetailComponent from "../../components/DetailComponent";
import OutputComponent from "../../components/OutputComponent";
import HeaderComponent from "../../components/HeaderComponent";

const code = `flex-grow: 0;
flex-grow: 1;

/* Mixed example */
.item1 { flex-grow: 1; }
.item2 { flex-grow: 2; }
.item3 { flex-grow: 3; }`


export default function FlexGrow() {
    const headerPanel = {
        'title': 'Using flex-grow',
        'author': 'pragya',
        'authorpfp': profileImg1,
        'topics': ['flexbox', 'flex-grow']
    }

    const outputPanel = {
        'title': "CSS Demo: flex-grow",

        'buttons': [
            { 'name': 'flex-grow: 0;', 'state': 'grow-0' },
            { 'name': 'flex-grow: 1;', 'state': 'grow-1' },
            { 'name': 'mixed: 1, 2, 3;', 'state': 'mixed' }
        ],
        output: (state) => {
            if (state == 'mixed') {
                return (
                    <div className="flex w-full gap-2 p-2 h-20">
                        <span className="border border-blue-500 p-2 w-20 grow">one</span>
                        <span className="border border-blue-500 p-2 w-20 grow-[1]">two</span>
                        <span className="border border-blue-500 p-2 w-20 grow-[3]">three</span>
                    </div>
                )
            }

            return (
                <div className="flex w-full gap-2 p-2" >
                    <span className={`border border-blue-500 p-2 w-20 ${state}`}>one</span>
                    <span className={`border border-blue-500 p-2 w-20 ${state}`}>two</span>
                    <span className={`border border-blue-500 p-2 w-20 ${state}`}>three</span>
                </div >
            )
        }
    }

    return (
        <div className="min-h-screen w-full space-y-6" >
            <HeaderComponent header={headerPanel} />
            <DetailComponent title="flex-grow" code={code} />
            <OutputComponent render={outputPanel} />
        </div >
    )
}

