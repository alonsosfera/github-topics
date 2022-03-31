import Head from "next/head"
import { withApollo } from "../hoc"
import { Topics } from "../components"
import { useQuery } from "@apollo/client"
import { queries } from "../graphql"
import { useEffect, useState } from "react"

function Home () {
  const [topic, setTopic] = useState("react")

  const { data, loading, refetch } = useQuery(queries.topic.getTopics, {
    variables: { name: topic }
  })

  useEffect(() => {
    if (!topic || topic === "") {
      refetch({ name: "react" }).then()
    } else {
      refetch({ name: topic }).then()
    }
  }, [refetch, topic])

  return (
    <main>
      <Head>
        <title>GitHub Topics</title>
      </Head>
      <Topics
        data={data}
        loading={loading}
        setTopic={setTopic}
        currentTopic={topic} />
    </main>
  )
}

export default withApollo(Home)
