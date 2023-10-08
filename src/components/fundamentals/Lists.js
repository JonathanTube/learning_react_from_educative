const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
]

// if the curly braces are exist, there should have a return idenfication
const ConciseComponent1 = () => {
    return <span>concise component without parentheses 1.</span>
}

// if the curly braces aren't exist, the return keyword don't have to be exist.
const ConciseComponent2 = () => <span>concise component without parentheses 2.</span>

function CustomList() {
    return list.map((item, index) => {
        // do not pass the list index, because if the list changes order, React will not be able to indetify properly
        return <div key={item.objectID}>
            <span>
                <a href={item.url}>{index}.{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </div>
    })
}

export default function Lists() {
    return (
        <div>
            <ConciseComponent1 />
            <ConciseComponent2 />
            <CustomList />
        </div>
    )
}