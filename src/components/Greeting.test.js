import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event"; //onClick :)

//Suite group
describe("greeting component", () => {
  test("renders hola as a text", () => {
    //1 arrange 2act 3Assert
    //Arrange
    render(<Greeting />);
    //Act
    //nothing
    //Assert
    const holaElement = screen.getByText("hola", { exact: true });
    expect(holaElement).toBeInTheDocument();
  });
  test("renders te veo si el boton no es ckickeado ", () => {
    render(<Greeting />);

    const paragraphEl = screen.getByText("te veo", { exact: false });
    expect(paragraphEl).toBeInTheDocument();
  });

  test("Render Changed if the button was clicked!", () => {
    //arrange
    render(<Greeting />);
    //act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    //Assert
    const holaElement = screen.getByText("Changed!");
    expect(holaElement).toBeInTheDocument();
  });

  test("doesn't render good to see you if the button was clicked!", () => {
    //arrange
    render(<Greeting />);
    //act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    //Assert
    const holaElement = screen.queryByText("good to see you", { exact: false });
    expect(holaElement).toBeNull();
  });
});
