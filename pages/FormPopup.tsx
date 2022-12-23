import React, { useState } from "react"

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

const FormPopup: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log("event.target", event)
    // Add your submit logic here
  }

  return (
    <div
      className="form-popup"
      style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First name:</label>
        <input
          type="text"
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormPopup
