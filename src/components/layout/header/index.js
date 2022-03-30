import { Card, Grid } from "@nextui-org/react"

export const Header = () => {
  return (
    <Card className="navbar" color="gradient">
      <Grid.Container alignItems="center" justify="space-between">
        <Grid>
          <h4>GitHub Topics</h4>
        </Grid>
        <Grid>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/alonsosfera/github-topics">
            <img
              alt="Github"
              className="github-logo"
              src="/static/github-logo.webp" />
          </a>
        </Grid>
      </Grid.Container>
    </Card>
  )
}
