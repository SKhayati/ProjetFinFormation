import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ShowPage } from "../../pages/ShowPageAction";

const showPage = new ShowPage()

When("Aller sur le bloc Divertissement", () => {
    showPage.srolltoDevertissement()
})

When("Choisir une vidéo", () => {
    showPage.blocDevertissement()
})

Then("Vérifier le choix de la série a été prise en compte", () => {
    showPage.verifVideo()
})