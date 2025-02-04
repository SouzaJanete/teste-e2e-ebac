import LoginPage from "../../testes-e2e-ebac-shop/cypress/support/page_objects/LoginPage";
import CheckoutPage from "../../testes-e2e-ebac-shop/cypress/support/page_objects/CheckoutPage";



/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

      beforeEach(() => {
        LoginPage.visit()
      });
    
      it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        // Login sem usar fixture
        cy.login('usuario_teste', 'senha_teste');
    
        // Selecionar 4 produtos (alterado para pegar os primeiros 4 produtos)
        cy.get('.products .product').each(($produto, index) => {
          if (index < 4) {
            cy.wrap($produto).find('a.button').click();
            cy.wait(1000);
          }
        });
    
        // Finalizar compra
        cy.get('#finalizar-compra').click();
        cy.get('.checkout-button').click();
        // Checkout sem usar fixture

        
        CheckoutPage.preencherDados('João Teste', 'Rua Teste, 123', '4111111111111111');
        CheckoutPage.validarPedidoConfirmado();
      });
    });