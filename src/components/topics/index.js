import { Grid, Loading } from "@nextui-org/react"
import { TopicsHeader } from "./header"
import { RelatedTopic } from "./related-topic"

export const Topics = ({ currentTopic, data, loading, setTopic }) => (
  <Grid.Container
    gap={1}
    className="topics"
    justify="center"
    data-testid="topics">
    <TopicsHeader
      currentTopic={currentTopic}
      resetTopic={() => setTopic("react")}
      onSearch={({ target: { value: name } }) => setTopic(name || "react")} />
    {loading ? (
      <Grid>
        <Loading data-testid="loader" type="points" />
      </Grid>
    ) : (
      data?.topic?.relatedTopics.map(topic =>
        <RelatedTopic
          data={topic}
          key={topic.name}
          onClick={() => setTopic(topic.name)} />
      )
    )}
  </Grid.Container>
)
