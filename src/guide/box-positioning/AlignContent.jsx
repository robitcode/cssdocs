import profileImg from "../../assets/196452524.png"
import { useState } from "react";
import DetailComponent from "../../components/DetailComponent";
import OutputComponent from "../../components/OutputComponent";
import HeaderComponent from "../../components/HeaderComponent";

const code = `align-content : start;
align-content : around;
align-content : baseline;
align-content : space-between;
align-content : space-around;
align-content : center;
align-content : space-evenly;
align-content : none;
align-content : normal;
align-content : start;
align-content : stretch;`;

export default function AlignContent() {
    const headerPanel = {
        'title': 'Using align-content',
        'author': 'robit',
        'authorpfp': profileImg,
        'topics': ['flexbox','flex-wrap','align-content']
    }
    const outputPanel = {
        'title': "CSS Demo: align-content",
        'buttons': [
            { 'name': 'align-content : around;', 'state': 'content-around' },
            { 'name': 'align-content : baseline;', 'state': 'content-baseline' },
            { 'name': 'align-content : space-between;', 'state': 'content-between' },
            { 'name': 'align-content : center;', 'state': 'content-center' },
            { 'name': 'align-content : space-evenly;', 'state': 'content-evenly' },
            { 'name': 'align-content : none;', 'state': 'content-none' },
            { 'name': 'align-content : normal;', 'state': 'content-normal' },
            { 'name': 'align-content : start;', 'state': 'content-start' },
            { 'name': 'align-content : stretch;', 'state': 'content-stretch' }
        ],
        'output': (state) => (
            <div className={`h-full flex-wrap gap-5 flex w-full ${state}`}>
                <span className="p-2 h-fit border border-blue-500">one</span>
                <span className="p-2 h-fit border border-blue-500">two</span>
                <span className="p-2 h-fit border border-blue-500">three</span>
                <span className="p-2 h-fit border border-blue-500">four</span>
                <span className="p-2 h-fit border border-blue-500">five</span>
                <span className="p-2 h-fit border border-blue-500">six</span>
                <span className="p-2 h-fit border border-blue-500">six</span>
                <span className="p-2 h-fit border border-blue-500">seven</span>
                <span className="p-2 h-fit border border-blue-500">eight</span>
                <span className="p-2 h-fit border border-blue-500">nine</span>
                <span className="p-2 h-fit border border-blue-500">ten</span>
            </div>
        )
    }

    return (
        <div className="min-h-screen w-full space-y-6">
            <HeaderComponent header={headerPanel} />
            <DetailComponent title="align-content " code={code} />

            <OutputComponent render={outputPanel} />
            <hr />
        </div>

    )
}