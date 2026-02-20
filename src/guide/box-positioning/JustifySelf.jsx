import profileImg1 from "../../assets/image.png";
import DetailComponent from "../../components/DetailComponent";
import OutputComponent from "../../components/OutputComponent";
import HeaderComponent from "../../components/HeaderComponent";

const code = `justify-self:stretch;
justify-self:center;
justify-self:start;
justify-self:end;
justify-self:auto;`;

export default function JustifySelf() {
    const headerPanel = {
        'title' : 'Using justify-self',
        'author': 'pragya',
        'authorpfp':profileImg1,
        'topics':['grid','justify-self']
    }
    const outputPanel = {
        'title': "CSS Demo: justify-self",
        'buttons': [
            {'name':'justify-self: stretch;','state':'justify-self-stretch'},
            {'name':'justify-self: center;','state':'justify-self-center'},
            {'name':'justify-self: start;','state':'justify-self-start'},
            {'name':'justify-self: end;','state':'justify-self-end'},
            {'name':'justify-self: auto;','state':'justify-self-auto'}
        ],
        'output':(state,shape)=>(
            <div className="h-min grid gap-4 ">
                <div className={`grid h-10 ${state}`}>
                    <span className={`p-2 text-center ${shape.style} h-fit border border-blue-500 `}>one</span>
                </div>
                <div className={`grid h-10 ${state}`}>
                    <span className={`p-2 text-center ${shape.style} h-fit border border-blue-500`}>two</span>
                </div>
                <div className={`grid h-10 ${state}`}>
                    <span className={`p-2 text-center ${shape.style} h-fit border border-blue-500`}>three</span>
                </div>
            </div>
        )
    }
    

    return (
        <div className="min-h-screen w-full space-y-6">
            <HeaderComponent header={headerPanel} />
            <DetailComponent title="justify-self" code={code} />

            <OutputComponent render={outputPanel} />
        </div>


    )
}