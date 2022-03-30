import { useEffect, useState } from "react"
import { Grid, Loading } from "@nextui-org/react"
import { useQuery } from "@apollo/client"
import { queries } from "../../graphql"
import { TopicsHeader } from "./header"
import { RelatedTopic } from "./related-topic"

export const Topics = () => {
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
    <Grid.Container
      gap={1}
      className="topics"
      justify="center">
      <TopicsHeader
        currentTopic={topic}
        resetTopic={() => setTopic("react")}
        onSearch={({ target: { value: name } }) => setTopic(name || "react")} />
      {loading ? (
        <Grid>
          <Loading type="points" />
        </Grid>
      ) : (
        data.topic?.relatedTopics.map(topic =>
          <RelatedTopic
            data={topic}
            key={topic.name}
            onClick={() => setTopic(topic.name)} />
        )
      )}
    </Grid.Container>
  )
}
