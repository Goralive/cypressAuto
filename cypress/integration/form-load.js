describe('Crew form', () => {  // open url for each test
    beforeEach(() => {
        cy.visit('/')
    })
    const typedName = 'Jackson Ford'
    const typedCity = 'Washington'
    it('Type name', () => { // verify name field, and user can add value
    
    cy.get('#name')
        .type(typedName).should('have.value',typedName)    
    })

    it('Type city', () => { // verify city field, and user can add value
    
    cy.get('#city') 
            .type(typedCity).should('have.value',typedCity)
        })

    it('SubmitForm', () => { //user can submit
       
        cy.get('#name')
           .type(typedName).should('have.value',typedName) 
        cy.get('#city') 
            .type(typedCity).should('have.value',typedCity) 
        cy.get('[type="submit"]').click({multiple: true})        
        cy.get('[type="button"]').click({multiple: true})
        cy.get('.CrewMemeber-photo')
            .should('have.length',5)
            })        

    it('Crew member photo', () =>{ // verify elements on the page
        cy.get('.CrewMemeber-photo')
            .should('have.length',5)
    })
    
    it('Applied form', () => { //change one of the member of the crew to applied form
        cy.get(':nth-child(1) > :nth-child(1) > .CrewMember-container' )
            .should('have.length',4)
    })

    it('Move to interviewing form', () => { //change one of the member of the crew to interview form
        cy.get('.App-container > :nth-child(1) > :nth-child(1) > div.CrewMember-container' )
            .should('have.length',4)
        cy.get(':nth-child(2) > .CrewMember-toolbar > .CrewMember-up')
            .click({multiple:true})
        cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container')
            .should('have.length',1)
    })

    it('Move to Hired form', () => { //change one of the member of the crew to hired form
        cy.get('.App-container > :nth-child(1) > :nth-child(1) > div.CrewMember-container' )
            .should('have.length',4)
        cy.get(':nth-child(2) > .CrewMember-toolbar > .CrewMember-up')
            .click({multiple:true})
        cy.get(':nth-child(2) > :nth-child(1) > .CrewMember-container')
            .should('have.length',1)
        cy.get(':nth-child(3) > .CrewMember-toolbar > .CrewMember-up')
            .click({multiple:true})
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > .CrewMember-toolbar > .CrewMember-up')
            .click({multiple:true})
        cy.get(':nth-child(3) > :nth-child(1) > .CrewMember-container')
            .should('have.length',2)
    })

})

