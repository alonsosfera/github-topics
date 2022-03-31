import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Header } from "./index"

describe("Header Component", () => {
  it("renders header",  () => {
    render(<Header />)

    expect(screen.getByTestId("navbar-header")).toBeInTheDocument()
    expect(screen.getByText("GitHub Topics")).toBeInTheDocument()
    expect(screen.getByAltText("Github")).toBeDefined()
  })
})
