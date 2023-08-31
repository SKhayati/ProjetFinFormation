const divertissementSpanSelector = '#divertissement > a > span'
const divertissementBlocSelector = '[data-testid="Bloc Divertissement"] > .relative > .content-visibility-slider > .Slider_scrollContainer_tEi0O > [data-testid="slider-items-container"] > :nth-child(2) > [data-testid="ProgramCard"] > .ProgramCard_titleContainer_JD92f > .line-clamp-1'
const showPageVideo = '.font-bold > picture > .h-4'
export class ShowPage {

    srolltoDevertissement() {
        cy.get(divertissementSpanSelector).scrollIntoView({ ensureScrollable: false })
    }

    blocDevertissement() {
        cy.get(divertissementBlocSelector).click()
    }

    verifVideo() {
        cy.get(showPageVideo).should('be.visible')
    }
}