describe('MercadoLibre - Publicación básica', () => {
  it('Login en el sistema', () => {
    cy.visit('https://ml.clientedemo.mastersoft.com.ar/MKPClienteWebFront/Account/Login')  //Ingreso a la web 

    cy.get('#Usuario').type('julio.morales@mastersoft.com.ar')                 //Usuario
    cy.get('#Password').type('drowssap')                                       //Contraseña 

    cy.get('#butAceptar').click()                                              //Presionar Enter 


    // ✅ Check post-login (seleccion Mercadolibre)
    cy.get('i.fa-shopping-cart[onclick="InvokeFromTile(4)"]', { timeout: 20000 })
  .should('be.visible')
  .click()

    // ✅ Check post-login (seleccion Publicaciones)
    cy.get('i.fa-upload[onclick="InvokeFromTile(5)"]', { timeout: 20000 })
  .should('be.visible')
  .click()


  })
})
