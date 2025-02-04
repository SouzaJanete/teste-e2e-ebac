class LoginPage {
    visit() {
        cy.visit('https://loja-ebac.vercel.app/minha-conta') // Certifique-se de que essa é a URL correta para login
    }

    preencherLogin(usuario, senha) {
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha, { log: false })
        cy.get('input[name="login"]').click(); 
    }
}

export default new LoginPage();
