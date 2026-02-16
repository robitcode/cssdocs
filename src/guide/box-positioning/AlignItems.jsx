import profileImg1 from "../../assets/196452524.png"
import profileImg2 from "../../assets/444b8f92410b3896456551a41f7e08c3.jpg"
import { useState } from "react";
import DetailComponent from "../../components/DetailComponent";
import OutputComponent from "../../components/OutputComponent";
import HeaderComponent from "../../components/HeaderComponent";

const code = `align-items:stretch;
align-items:center;
align-items:start;
align-items:end;`

export default function AlignItems() {
    const headerPanel = {
        'title': 'Using align-items',
        'author': 'robit',
        'authorpfp': profileImg1,
        'topics': ['flexbox', 'align-items']
    }
    const outputPanel = {
        'title': "CSS Demo: align-items",
        'buttons': [
            { 'name': 'align-items: stretch;', 'state': 'items-stretch' },
            { 'name': 'align-items: center;', 'state': 'items-center' },
            { 'name': 'align-items: start;', 'state': 'items-start' },
            { 'name': 'align-items: end;', 'state': 'items-end' }
        ],
        'output': (state,shape) => (
            <div className={`h-min flex flex-col gap-4 relative ${state}`}>
                <span className={`p-2 min-w-10 ${shape.style} border border-blue-500 `}>one</span>
                <span className={`p-2 min-w-10 h-10 ${shape.style} border border-blue-500 `}>two</span>
                <span className={`p-2 min-w-10 h-10 ${shape.style} border border-blue-500 `}>three</span>
            </div>
        )
    }


    return (
        <div className="min-h-screen w-full space-y-6">
            <HeaderComponent header={headerPanel} />
            <DetailComponent title="align-items" code={code} />

            <OutputComponent render={outputPanel} />
        </div>


    )
}