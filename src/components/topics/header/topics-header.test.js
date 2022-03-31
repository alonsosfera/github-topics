import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { TopicsHeader } from "./index"

describe("Topics Header Component", () => {
  it("renders topics header", () => {
    render(<TopicsHeader />)

    expect(screen.getByTestId("topic-title")).toBeInTheDocument()
    expect(screen.getByTestId("search-input")).toBeInTheDocument()
  })
})
