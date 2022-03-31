import { Card, Grid } from "@nextui-org/react"

export const RelatedTopic = ({ data, onClick }) => {
  return (
    <Grid xs="auto">
      <Card
        bordered
        clickable
        shadow={false}
        onClick={onClick}
        data-testid="related-topic">
        <h4>{data?.name}</h4>
        <h4>Stargazers: {data?.stargazerCount}</h4>
      </Card>
    </Grid>
  )
}
