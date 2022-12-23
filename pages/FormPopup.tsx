import React, { useState } from "react"

interface FormValues {
  firstName: number
  lastName: string
  email: string
}

const FormPopup: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: 0,
    lastName: "",
    email: "",
  })

  const [state, setState] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }
  function doubleAndSubtractFive(x: number): number {
    let y = x * 2
    y -= 5
    return y
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log("formValues", formValues)
    // setState((state) => result)
    let denmarkFact: string = generateRandomDenmarkInfo()
    setState((state) => denmarkFact)

    // console.log("result", result)
    // Add your submit logic here
  }

  function generateRandomDenmarkInfo(): string {
    const facts = [
      "Denmark is a country located in Northern Europe.",
      "The capital of Denmark is Copenhagen.",
      "Denmark has a population of approximately 5.8 million people.",
      "The official language of Denmark is Danish.",
      "Denmark is known for its beautiful beaches and picturesque countryside.",
      "Denmark has a rich history and culture, with a strong emphasis on design and innovation.",
      "Denmark is a leader in renewable energy and has some of the highest rates of wind power usage in the world.",
      "Denmark is consistently ranked as one of the happiest countries in the world.",
    ]

    const randomIndex = Math.floor(Math.random() * facts.length)
    return facts[randomIndex]
  }

  return (
    <div
      className="form-popup bg-gray-500"
      style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
    >
      <div className="w-64 bg-blue-200">Test</div>
      <div className="text-3xl">{state}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First name:</label>
        <input
          type="number"
          id="first-name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="last-name">Last name:</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <br />
        <button
          type="submit"
          className="bg-gray-200 rounded border border-cyan-500"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormPopup
