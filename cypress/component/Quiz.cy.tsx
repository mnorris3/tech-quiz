import Quiz from "../../client/src/components/Quiz";

describe("<Quiz />", () => {
  it("should render the start quiz button on the screen", () => {
    cy.mount(<Quiz />);
  });

  it("should render a list of questions when the quiz is started", () => {
    cy.mount(<Quiz />);

    cy.get("button").click();

    cy.get(".mt-3").children().should("have.length", 4);
  });
});
