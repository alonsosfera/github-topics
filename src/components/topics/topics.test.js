import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Topics } from "./index"

describe("Topics Component", () => {
  it("renders loader", () => {
    render(
      <Topics
        loading={true}
        currentTopic="Test topic" />
    )

    expect(screen.getByTestId("topics")).toBeInTheDocument()
    expect(screen.getByTestId("loader")).toBeInTheDocument()
  })

  it("renders topics", () => {
    render(
      <Topics
        currentTopic="Test topic"
        loading={false}
        data={{
          topic: {
            relatedTopics: [
              { name: "Test 1 ", stargazerCount: 123 },
              { name: "Test 2 ", stargazerCount: 456 },
              { name: "Test 3 ", stargazerCount: 789 }
            ]
          }
        }} />
    )

    expect(screen.getByTestId("topics")).toBeInTheDocument()
    expect(screen.getByText("Test 1")).toBeInTheDocument()
    expect(screen.getByText("Test 2")).toBeInTheDocument()
    expect(screen.getByText("Test 3")).toBeInTheDocument()
  })
})
