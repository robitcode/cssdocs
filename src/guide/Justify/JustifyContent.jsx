import { useState } from "react";
import DetailComponent from "../../components/DetailComponent";
import OutputComponent from "../../components/OutputComponent";

const code = `justify-content : start;
justify-content : center;
justify-content : space-between;
justify-content : space-around;
justify-content : space-evenely`

export default function JustifyContent() {
    const ouputPanel = {
        'title': "CSS Demo: justify-content",
        'buttons': [
            { 'name': 'justify-content : start;', 'state': 'justify-start' },
            { 'name': 'justify-content : center;', 'state': 'justify-center' },
            { 'name': 'justify-content : space-between;', 'state': 'justify-between' },
            { 'name': 'justify-content : space-around;', 'state': 'justify-around' },
            { 'name': 'justify-content : space-evenly;', 'state': 'justify-evenly' }
        ],
        'output': (state) => (
            <div className={`h-fit flex w-full ${state}`}>
                <span className="p-2 h-fit border border-blue-500">one</span>
                <span className="p-2 h-fit border border-blue-500">two</span>
                <span className="p-2 h-fit border border-blue-500">three</span>
            </div>
        )
    }

    return (
        <div className="min-h-screen w-full space-y-6">
            <DetailComponent title="justify-content " code={code} />

            <OutputComponent render={ouputPanel} />
        </div>


    )
}





