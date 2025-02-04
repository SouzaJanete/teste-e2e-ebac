class CheckoutPage {
    preencherDados(nome, endereco, cartao) {
        cy.get('#billing_first_name').type(nome);
        cy.get('#billing_address_1').type(endereco);
        cy.get('#payment_method_cod').click(); // Simulando pagamento
        cy.get('#place_order').click(); // Finaliza o pedido
    }

    validarPedidoConfirmado() {
        cy.get('.woocommerce-thankyou-order-received').should('contain', 'Obrigado. Seu pedido foi recebido.');
    }
}

export default new CheckoutPage();
