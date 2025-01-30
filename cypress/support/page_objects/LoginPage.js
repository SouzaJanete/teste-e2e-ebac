class LoginPage {
    visit() {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/' , { failOnStatusCode: false })
    }
   
    preencherLogin(usuario, senha) {
      cy.get('#username').type(usuario)
      cy.get('#password').type(senha)
      cy.get('#login').click()
    }
  }
  
  export default new LoginPage()
  