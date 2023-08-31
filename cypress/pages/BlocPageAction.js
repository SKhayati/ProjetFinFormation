const programExclusivesSelector = '#les-programmes-exclusifs-mytf1 > span'

export class BlocPage {
    bloc() {
        cy.get(programExclusivesSelector).scrollIntoView({ ensureScrollable: false }).should('be.visible')
    }
}
