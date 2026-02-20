import profileImg1 from "../../assets/image.png"
import DetailComponent from "../../components/DetailComponent";
import OutputComponent from "../../components/OutputComponent";
import HeaderComponent from "../../components/HeaderComponent";

const code = `justify-content:start;
justify-content:center;
justify-content:space-between;
justify-content:space-around;
justify-content:space-evenly;`;

export default function JustifyContent() {
    const headerPanel = {
        'title': 'Using justify-content',
        'author': 'pragya',
        'authorpfp': profileImg1,
        'topics': ['flexbox', 'justify-content']
    }
    const outputPanel = {
        'title': "CSS Demo: justify-content",
        'buttons': [
            { 'name': 'justify-content : start;', 'state': 'justify-start' },
            { 'name': 'justify-content : center;', 'state': 'justify-center' },
            { 'name': 'justify-content : space-between;', 'state': 'justify-between' },
            { 'name': 'justify-content : space-around;', 'state': 'justify-around' },
            { 'name': 'justify-content : space-evenly;', 'state': 'justify-evenly' }
        ],
        'output': (state,shape) => (
            <div className={`h-min flex gap-4 relative ${state}`}>
                <span className={`p-2 min-w-10 ${shape.style} border border-blue-500 `}>one</span>
                <span className={`p-2 min-w-10 ${shape.style} border border-blue-500 `}>two</span>
                <span className={`p-2 min-w-10 ${shape.style} border border-blue-500 `}>three</span>
            </div>
        )
    }

    return (
        <div className="min-h-screen w-full space-y-6">
            <HeaderComponent header={headerPanel} />
            <DetailComponent title="justify-content " code={code} />
            <OutputComponent render={outputPanel} />
        </div>

    )
}