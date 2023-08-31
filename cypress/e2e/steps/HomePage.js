import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BlocPage } from "../../pages/BlocPageAction";

const blocPage = new BlocPage()

When("Aller sur le bloc Programmes exclusives", () => {
    blocPage.bloc()
})
