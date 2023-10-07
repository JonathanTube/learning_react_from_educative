const FirstComponent = () => <div style={{ width: '200px', height: '200px', background: 'red', borderRadius: '100%' }}></div>

// the keyword has to be children
const SecondComponent = ({ children }) => <div style={{ width: '400px', height: '400px', background: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '100%' }}>{children}</div>

const MyComposition = () =>
    <SecondComponent>
        {/* the children components are here */}
        <FirstComponent />
    </SecondComponent>

export default MyComposition