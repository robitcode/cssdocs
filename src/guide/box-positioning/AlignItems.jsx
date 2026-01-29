import profileImg from "../../assets/196452524.png"
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
        'title' : 'Using align-items',
        'author': 'robit',
        'authorpfp':profileImg,
        'topics':['flexbox','align-items']
    }
    const outputPanel = {
        'title': "CSS Demo: align-items",
        'buttons': [
            {'name':'align-items: stretch;','state':'items-stretch'},
            {'name':'align-items: center;','state':'items-center'},
            {'name':'align-items: start;','state':'items-start'},
            {'name':'align-items: end;','state':'items-end'}
        ],
        'output':(state)=>(
            <div className="h-min flex flex-col gap-4 ">
                <div className={`flex flex-col h-10 relative ${state}`}>
                    <span className="p-2 h-fit border border-blue-500 ">one</span>
                </div>
                <div className={`flex flex-col h-10 relative ${state}`}>
                    <span className="p-2 h-fit border border-blue-500">two</span>
                </div>
                <div className={`flex flex-col h-10 relative ${state}`}>
                    <span className="p-2 h-fit border border-blue-500">three</span>
                </div>
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