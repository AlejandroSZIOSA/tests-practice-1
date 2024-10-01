import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  //Fn uses async
  test("render posts if request success", async () => {
    render(<Async />);
    //because is a List
    //use await , now the test Fn is async
    const listItemEls = await screen.findAllByRole("listitem"); //find returns a promise
    expect(listItemEls).not.toHaveLength(0); //If there is a List Array
  });
});
