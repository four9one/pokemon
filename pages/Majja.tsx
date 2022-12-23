import React from "react"

const Form = () => {
  return (
    <form
      style={{
        backgroundColor: "white",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <label>
        Förnamn:
        <input type="text" name="firstname" />
      </label>
      <br />
      <label>
        Ålder:
        <input type="number" name="age" />
      </label>
      <br />
      <label>
        E-postadress:
        <input type="email" name="email" />
      </label>
      <br />
      <button
        type="submit"
        style={{ backgroundColor: "green", borderRadius: "5px" }}
      >
        Skicka
      </button>
    </form>
  )
}

export default Form
