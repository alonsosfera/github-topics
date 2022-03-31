import { Grid, Input } from "@nextui-org/react"
import { debounce } from "lodash"

export const TopicsHeader = ({ currentTopic, onSearch, resetTopic }) => {
  return (
    <>
      <Grid xs={12} md={10}>
        <h3 data-testid="topic-title" className="reset-topic">
          Current topic: {currentTopic}
          {currentTopic !== "react" ? (
            <>
              &nbsp;
              <a onClick={resetTopic}>
                (reset)
              </a>
            </>
          ) : null}
        </h3>
      </Grid>
      <Grid xs={12} md={2}>
        <Input
          clearable
          aria-label="Search"
          placeholder="Search"
          data-testid="search-input"
          onChange={() => debounce(onSearch, 800)} />
      </Grid>
    </>
  )
}
