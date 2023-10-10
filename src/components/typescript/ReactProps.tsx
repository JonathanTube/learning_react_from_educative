import React from "react" // this should be imported

// using type alias
type Props = { who: string }

const Sample0 = (props: Props) => {
    return (<div>hello, {props.who}</div>)
}

const Sample1 = ({ who }: Props) => {
    return (<div>hello, {who}</div>)
}


// Sample way
const Sample2 = (props: { who: string }) => <div>hello, {props.who}</div>



// confusing with FC
const Sample3: React.FC<Props> = ({ who }) => <div>hello, {who}</div>



// age is optional
const Sample4 = (props: { who: string, age?: number }) => <div>hello, {props.who} {props.age && `, your age is ${props.age}`}</div>



// default value with component defaultProps
const Sample5 = (props: Props) => <div>hello {props.who}</div>
Sample5.defaultProps = {
    who: 'nobody',
    // age: 11 // won't get an error.
}

// default value with inline
const Sample6 = ({ who = 'No one' }: { who?: string }) => <div>hello {who}</div>


// object props
type Who = {
    name: string
    friend: boolean
}
type Sample6_Props = {
    who: Who,
    message: string
}
const Sample7 = ({ who, message = 'hello' }: Sample6_Props) => <div><span>{message}</span>&nbsp;<span>{who.name}</span></div>

// function props
type Sample8_Props = {
    sayHello: () => React.ReactNode // be careful of the returning type.
}
const Sample8 = ({ sayHello }: Sample8_Props) => <div>{sayHello()}</div>

export default function ReactProps() {
    return (
        <>
            <Sample0 who={'King'} />
            <Sample1 who={"Jonathan"} />
            {/* It's ok also */}
            <Sample2 who="Jack" />
            <Sample3 who={"Rose"} />

            <Sample4 who={"Mick"} age={11} />
            <Sample4 who={"AI"} />
            <Sample5 />
            <Sample6 />
            <Sample7 who={{ name: 'Siri', friend: false }} message={'hello'} />
            <Sample8 sayHello={() => <div>hello world</div>} />
        </>
    )
}