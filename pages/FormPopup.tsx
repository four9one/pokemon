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

  const [state, setState] = useState(0)

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

    // console.log("result", result)
    // Add your submit logic here
  }

  return (
    <div
      className="form-popup"
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
