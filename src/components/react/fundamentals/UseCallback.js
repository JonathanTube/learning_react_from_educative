// 参考blog：https://www.cnblogs.com/tommymarc/p/16166393.html
import { useState, useMemo, useCallback } from 'react'
const Inner6 = (props) => {
    console.log("sub component render");
    return <input type="text" onChange={props.onChange} />
};

const Test6 = () => {
    console.log("-- render --");

    const [value, setValue] = useState('')
    // useCallback 的作用在于保留相同的函数，其本身并不干涉组件更新的机制；
    // 这里返回同一个函数的引用，后面作为props传入子组件
    const handleChange = useCallback((e) => setValue(e.target.value), [])

    return (
        <div>
            <h2>Test 6: useMemo 实现局部刷新</h2>
            <h3>name: {value}</h3>
            {
                // react.memo 或是 useMemo 等方法联用时，才会获得保留相同组件示例的传入使局部片段能够进行复用而不会完全更新的优化好处
                // 这里应为用到了同一个函数的引用，所以props相同，也就是子组件不会被再次渲染
                useMemo(() => <Inner6 onChange={handleChange} />, [handleChange])
            }
        </div>
    )
}
export default Test6