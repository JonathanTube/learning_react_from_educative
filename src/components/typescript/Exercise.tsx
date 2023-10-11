import * as React from "react"

// TODO
// - Build a strongly-typed function component called `List` that renders a list of strings
// - The consumer needs pass the list of strings into an `items` prop
// - Above the list should be a search input
// - The input should have focus when the component is first rendered
// - Items in the list that match the search text entered should appear in bold.

type Props = {
  items: string[]
}
const List = ({ items }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState<string>()
  const inputRef = React.useRef<HTMLInputElement>(null)
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  React.useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  return (
    <>
      <input ref={inputRef} value={searchTerm} onChange={onInputChange} />
      {items.map((item) => (
        <div style={{ fontWeight: item === searchTerm ? "bold" : undefined }}>
          {item}
        </div>
      ))}
    </>
  )
}

export default function Exercise() {
  return <List items={["Fred", "Bob", "Billy"]} />
}
