import React from "react"
const Searchbox = () => {
  const [criteria, setCriteria] = React.useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCriteria(e.currentTarget.value)

  return <input type="text" value={criteria} onChange={handleChange} />
}

type Props = {
  onSearch: (criteria: string) => void
}
const Searchbox2 = ({ onSearch }: Props) => {
  const [criteria, setCriteria] = React.useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.currentTarget.value)
    onSearch(e.currentTarget.value)
  }

  return <input type="text" value={criteria} onChange={handleChange} />
}

export default function ReactComponentEvent() {
  const [criteria, setCriteria] = React.useState<string>("nothing")
  return (
    <>
      <Searchbox />
      <br />
      <p>{criteria}</p>
      <Searchbox2 onSearch={(criteria) => setCriteria(criteria)} />
    </>
  )
}
