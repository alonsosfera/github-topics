import { Grid } from "@nextui-org/react"
import { Header } from "./header"

export const Layout = ({ children }) => {
  return (
    <Grid.Container className="layout">
      <Grid xs={12}>
        <Header />
      </Grid>
      <Grid className="body" xs={12}>
        {children}
      </Grid>
    </Grid.Container>
  )
}
