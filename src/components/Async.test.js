import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  //Fn uses async
  test("render posts if request success mock data", async () => {
    //create mock
    window.fetch = jest.fn();
    //using the mock
    window.fetch.mockResolvedValueOnce({
      //This simulate the real Obj structure returned by the real fetch :)
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    //because is a List
    //use await , now the test Fn is async
    const listItemEls = await screen.findAllByRole("listitem"); //find returns a promise
    expect(listItemEls).not.toHaveLength(0); //If there is a List Array
  });
});
