describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3001/");
  });

  it("A user can arrive at the home page where other's thoughts are displayed on the screen", () => {
    cy.visit("http://127.0.0.1:3001/");
  });
  it("A user goes through the tech quiz", () => {
    cy.visit("http://127.0.0.1:3001/");
    cy.get("button").click();
    cy.get(".mt-3 div button").eq(0).click();
    cy.get(".mt-3 div button").eq(0).click();
    cy.get(".mt-3 div button").eq(0).click();
    cy.get(".mt-3 div button").eq(0).click();
    cy.get(".mt-3 div button").eq(0).click();
    cy.get(".mt-3 div button").eq(0).click();
    cy.get(".mt-3 div button").eq(0).click();
    cy.get(".mt-3 div button").eq(0).click();
    cy.get(".mt-3 div button").eq(0).click();
    cy.get(".mt-3 div button").eq(0).click();
  });
});
