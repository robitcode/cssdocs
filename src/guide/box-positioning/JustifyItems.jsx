import profileImg1 from "../../assets/image.png"
import { useState } from "react";
import DetailComponent from "../../components/DetailComponent";
import OutputComponent from "../../components/OutputComponent";
import HeaderComponent from "../../components/HeaderComponent";

const code = `justify-items:stretch;
justify-items:center;
justify-items:start;
justify-items:end;`

export default function JustifyItems() {
    const headerPanel = {
        'title' : 'Using justify-items',
        'author': 'pragya',
        'authorpfp':profileImg1,
        'topics':['grid','justify-items']
    }
    const outputPanel = {
        'title': "CSS Demo: justify-items",
        'buttons': [
            {'name':'justify-items: stretch;','state':'justify-items-stretch'},
            {'name':'justify-items: center;','state':'justify-items-center'},
            {'name':'justify-items: start;','state':'justify-items-start'},
            {'name':'justify-items: end;','state':'justify-items-end'}
        ],
        'output':(state)=>(
            <div className="h-min grid gap-4 ">
                <div className={`grid h-10 ${state}`}>
                    <span className="p-2 h-fit border border-blue-500 ">one</span>
                </div>
                <div className={`grid h-10 ${state}`}>
                    <span className="p-2 h-fit border border-blue-500">two</span>
                </div>
            </div>
        )
    }
    

    return (
        <div className="min-h-screen w-full space-y-6">
            <HeaderComponent header={headerPanel} />
            <DetailComponent title="justify-items" code={code} />

            <OutputComponent render={outputPanel} />
        </div>


    )
}