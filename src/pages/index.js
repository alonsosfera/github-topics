import Head from "next/head"
import { withApollo } from "../hoc"
import { Topics } from "../components"

function Home () {
  return (
    <main>
      <Head>
        <title>GitHub Topics</title>
      </Head>
      <Topics />
    </main>
  )
}


export default withApollo(Home)
