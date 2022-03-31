import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { RelatedTopic } from "./index"

describe("Related Topic Component", () => {
  it("renders related topic", () => {
    render(<RelatedTopic data={{ name: "Test topic", stargazerCount: 123 }} />)

    expect(screen.getByText("Test topic")).toBeInTheDocument()
    expect(screen.getByText("Stargazers: 123")).toBeInTheDocument()
  })
})
