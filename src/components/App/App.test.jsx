import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("App renders", () => {
    render(<App />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Find course")).toBeInTheDocument();
  });

  it("typing in Searchbox works", () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    userEvent.type(screen.queryByRole("textbox"), "React");
    expect(screen.getByDisplayValue("React")).toBeInTheDocument();
  });

  it("search filter is working", () => {
    render(<App />);
    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();
    userEvent.type(screen.queryByRole("textbox"), "script");
    expect(screen.queryByText(/Vue/)).toBeNull();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();
  });
});
