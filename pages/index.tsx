import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useReducer, useState } from "react"
import FormPopup from "./FormPopup"
import useInterval from "./hooks/useInterval"

const initialState = { count: 0 }
// An interface for our actions
interface CountAction {
  type: string
}

// An interface for our state
interface CountState {
  count: number
}

function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return { count: 0 }
    default:
      throw new Error()
  }
}

const Home: NextPage = () => {
  const [counter, dispatch] = useReducer(reducer, initialState)
  const [delay, setDelay] = useState<number>(1000)
  // ON/OFF
  const [isPlaying, setPlaying] = useState<boolean>(false)

  useInterval(
    () => {
      // Your custom logic here
      dispatch({ type: "increment" })
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null
  )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Nivili</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormPopup />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <div className="text-blue-600 inline-block">Nivili!</div>
        </h1>

        <p className="mt-3 text-2xl">
          Merged from stars from{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            /nivili.nu
          </code>
        </p>
        <div className="rounded-md bg-blue-600 mt-4 text-zinc-200 p-4 w-44 text-xl">
          {counter.count}
        </div>
        <div className="flex gap-6 [&>*]:cursor-pointer">
          <div
            onClick={() => setPlaying((state) => true)}
            className={`${
              !isPlaying ? "bg-green-600" : "bg-gray-600"
            } rounded-md  mt-4 text-zinc-200 p-4 w-44 text-xl`}
          >
            Start
          </div>
          <div
            onClick={() => setPlaying((state) => false)}
            className={`${
              isPlaying ? "bg-green-600" : "bg-gray-600"
            } rounded-md  mt-4 text-zinc-200 p-4 w-44 text-xl`}
          >
            Stop
          </div>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center hover:[&>*]:cursor-pointer justify-around sm:w-full hover:[&>*]:bg-gray-400 hover:[&>*]:text-white">
          <div
            onClick={() => dispatch({ type: "increment" })}
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Increase &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </div>

          <div
            onClick={() => dispatch({ type: "decrement" })}
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Decrease &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </div>

          <div
            onClick={() => dispatch({ type: "reset" })}
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Reset counter &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </div>

          <div
            onClick={() => {
              // startInterval()
              setPlaying((state) => true)
            }}
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Start timer &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
