import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  //use async
  test("render posts if request success", async () => {
    render(<Async />);
    //because is a List
    //find returns a promise
    //use await , now the test FN is async
    const listItemEls = await screen.findAllByRole("listitem");
    expect(listItemEls).not.toHaveLength(0);
  });
});
