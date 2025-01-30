class CheckoutPage {
    preencherDados(nome, endereco, cartao) {
      cy.get('#checkout-nome').type(nome)
      cy.get('#checkout-endereco').type(endereco)
      cy.get('#checkout-cartao').type(cartao)
      cy.get('#checkout-pagar').click()
    }
  
    validarPedidoConfirmado() {
      cy.contains('Pedido confirmado').should('be.visible')
    }
  }
  
  export default new CheckoutPage()
  