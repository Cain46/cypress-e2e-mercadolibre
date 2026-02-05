describe('MercadoLibre - Publicación básica', () => {

  it('Login en el sistema', () => {
    cy.visit('https://ml.clientedemo.mastersoft.com.ar/MKPClienteWebFront/Account/Login')

    cy.get('#Usuario').type('julio.morales@mastersoft.com.ar')
    cy.get('#Password').type('drowssap')
    cy.get('#butAceptar').click()

    cy.get('i.fa-shopping-cart[onclick="InvokeFromTile(4)"]', { timeout: 20000 })
      .should('be.visible')
      .click()

    cy.get('i.fa-upload[onclick="InvokeFromTile(5)"]', { timeout: 20000 })
      .should('be.visible')
      .click()
  })
it('Alta: abrir desde butAgregar y seleccionar usuario ML', () => {

  cy.visit('https://ml.clientedemo.mastersoft.com.ar/MKPClienteWebFront/Account/Login')

  cy.get('#Usuario').type('julio.morales@mastersoft.com.ar')
  cy.get('#Password').type('drowssap')
  cy.get('#butAceptar').click()

  cy.get('i.fa-shopping-cart[onclick="InvokeFromTile(4)"]', { timeout: 20000 })
    .should('be.visible')
    .click()

  cy.get('i.fa-upload[onclick="InvokeFromTile(5)"]', { timeout: 3000 })
    .should('be.visible')
    .click()

  // ✅ Check: estoy en Publicaciones (antes de buscar #butAgregar)
  cy.get('#butAgregar', { timeout: 3000 })
    .should('exist')
    .and('be.visible')
    .and('be.enabled')
    .click()

  cy.contains('Principal').should('be.visible')

  // Usuario de Mercadolibre (combo custom)
cy.contains('label', 'Usuario de Mercadolibre')
  .parent()
  .find('span.k-dropdown, span.k-select, .k-select, .dropdown-toggle, [role="combobox"]')
  .first()
  .should('be.visible')
  .click({ force: true })

// Elegir opción
cy.contains('.k-list .k-item, .dropdown-menu li, [role="option"]', 'fpappacena', { timeout: 20000 })
  .should('be.visible')
  .click()

// Assert: quedó seleccionado (en el mismo contenedor del campo)
cy.contains('label', 'Usuario de Mercadolibre')
  .parent()
  .should('contain.text', 'fpappacena')

// Título: solo ingresar texto (sin disparar lógica extra)
cy.get('#Titulo')
  .should('be.visible')
  .and('be.enabled')
  .clear()
  .type('Taladro electrico 13mm')

// Assert simple
// Título
cy.get('#Titulo')
  .should('be.visible')
  .and('be.enabled')
  .clear()
  .type('Taladro electrico 13mm')

cy.wait(2000)

// Categoría (doble click + espera)
cy.contains('label', 'Categoría')
  .parent()
  .find('[role="combobox"], .k-select, .dropdown-toggle')
  .first()
  .click({ force: true })

cy.wait(3000)

cy.contains('label', 'Categoría')
  .parent()
  .find('[role="combobox"], .k-select, .dropdown-toggle')
  .first()
  .click({ force: true })

cy.contains('.k-list .k-item, .dropdown-menu li, [role="option"]', 'Taladros eléctricos', { timeout: 20000 })
  .click()

cy.contains('label', 'Categoría')
  .parent()
  .should('contain.text', 'Taladros eléctricos')

// Tipo Envío (Kendo API: SIN click en <li>)
// Post selección de Categoría: esperar a que el sistema se estabilice
cy.wait(3000)

// Tipo Envío: abrir dropdown y esperar que carguen opciones
cy.contains('label', 'Tipo Envio')
  .parent()
  .find('[role="combobox"], .k-select, .dropdown-toggle')
  .first()
  .should('be.visible')
  .click({ force: true })

cy.wait(3000)

// Seleccionar "Mercado Envíos 2"
cy.contains('.k-list .k-item, .dropdown-menu li, [role="option"]', 'Mercado Envíos 2', { timeout: 20000 })
  .click({ force: true })

// Assert: quedó seleccionado
cy.contains('label', 'Tipo Envio')
  .parent()
  .should('contain.text', 'Mercado Envíos 2')

// Espera funcional antes de tocar Tipo Logistica
cy.wait(2000)

// Abrir dropdown Tipo Logistica
cy.contains('label', 'Tipo Logistica')
  .parent()
  .find('[role="combobox"], .k-select, .dropdown-toggle')
  .first()
  .should('be.visible')
  .click({ force: true })

// Espera para que carguen opciones
cy.wait(2000)

// Seleccionar FLEX
cy.contains(
  '.k-list .k-item, .dropdown-menu li, [role="option"]',
  'Flex',
  { timeout: 20000 }
)
  .click({ force: true })

// Assert
cy.contains('label', 'Tipo Logistica')
  .parent()
  .should('contain.text', 'Flex')

// Espera funcional antes de switches
cy.wait(1000)

// 1) Permitir retiro -> SI
cy.contains('Permitir retiro')
  .parent()
  .within(() => {
    cy.get('span.km-switch-label-on').click({ force: true })
    cy.get('input[type="checkbox"]').should('be.checked')
  })

// Espera funcional entre switches
cy.wait(1000)

// 2) Ofrecer envío gratis -> SI
cy.contains('Ofrecer envío gratis')
  .parent()
  .within(() => {
    cy.get('span.km-switch-label-on').click({ force: true })
    cy.get('input[type="checkbox"]').should('be.checked')
  })

// Espera funcional a que abra el modal de búsqueda
cy.wait(2000)

    cy.get('#btnAddProduct', { timeout: 20000 })
      .should('be.visible')
      .click({ force: true })

// Bloque hasta "intentar ingresar el SKU" dentro del popup visible
cy.wait(2000)

// Campo Código / SKU
cy.contains('label', 'Código/SKU')
  .parent()
  .find('input')
  .should('be.visible')
  .clear()
  .type('APGHVVA00000018')

// Espera antes de buscar
cy.wait(2000)

// Click en Buscar (botón real del modal)
cy.get('#butLlenarGrillaBusArticulos', { timeout: 3000 })
  .should('exist')
  .click({ force: true })

// Esperar a que la grilla tenga al menos 1 registro
cy.contains('1 Registro.', { timeout: 3000 })
  .should('be.visible')

// Seleccionar el artículo en la grilla (por Codart)
cy.contains('td', 'APGHVVA00000018')
  .should('be.visible')
  .click({ force: true })

// Espera corta para estabilidad visual
cy.wait(1000)

// Click en Aceptar
cy.get('#butBusArticulosAceptar', { timeout: 3000 })
  .should('exist')
  .click({ force: true })

  // Espera a que la grilla esté estable
cy.wait(2000)

// Editar "Precio S/Dto" (data-field = PrecioSinDescuento)
cy.get('td[data-field="PrecioSinDescuento"]', { timeout: 3000 })
  .first()
  .scrollIntoView()
  .click({ force: true })

// Kendo suele inyectar un input dentro de la celda al entrar en modo edición
cy.get('td[data-field="PrecioSinDescuento"]')
  .first()
  .find('input:visible')
  .should('exist')
  .clear({ force: true })
  .type('46000{enter}', { force: true })

// Cantidad a publicar = 1 (Kendo way)
cy.window().then((win) => {
  const $ = win.$
  const numeric = $('#CantidadAPublicar').data('kendoNumericTextBox')

  if (!numeric) {
    throw new Error('Kendo NumericTextBox CantidadAPublicar no encontrado')
  }

  numeric.value(1)
  numeric.trigger('change')
})
cy.window().then((win) => {
  const $ = win.$
  const ddl = $('#TipoPublicacion').data('kendoDropDownList')
  if (!ddl) throw new Error('Kendo DropDownList no encontrado en #TipoPublicacion')

  const view = ddl.dataSource.view()
  const data = Array.from(view)   // ✅ ahora sí es Array posta

  const idx = data.findIndex(x => {
    const t = (x.text ?? x.Text ?? x.name ?? x.Nombre ?? '').toString().trim().toLowerCase()
    return t === 'clásica' || t === 'clasica'
  })

  if (idx < 0) throw new Error('No se encontró "Clásica" en TipoPublicacion')

  ddl.select(idx)
  ddl.trigger('change')
})
// =======================
// Fecha Publicación = HOY
// =======================
cy.wait(2000)

cy.contains('label', 'Fecha Publicacion')
  .parent()
  .within(() => {
    // 1) agarramos el input visible (Kendo pinta uno y el real suele estar display:none)
    cy.get('input.k-input:visible, input[type="text"]:visible')
      .first()
      .scrollIntoView()
      .click({ force: true })
      .type('{selectall}30/01/2026', { force: true })
      .type('{enter}', { force: true })
      .blur({ force: true })
  })

// =======================
// Fecha Finalización = 31/01/2026 (simple, estilo Fecha Publicación)
// =======================
cy.wait(2000)

cy.get('#FechaFinalizacion')
  .should('exist')
  .invoke('removeAttr', 'disabled')   // desbloqueo mínimo
  .scrollIntoView()
  .click({ force: true })
  .type('{selectall}31/01/2026{enter}', { force: true })
  .blur({ force: true })

cy.wait(1000)

// Abrir solapa Atributos
// Abrir solapa Atributos
cy.contains('a', 'Atributos')
  .should('be.visible')
  .click()


// Código universal de producto → ingresar 1
cy.get('#attrib-value')
  .should('be.visible')
  .clear()
  .type('1')

// Atributos - Modelo
cy.contains('label', 'Modelo')
  .parent()
  .find('input')
  .type('Prueba')

// Atributos - Marca
cy.contains('label', 'Marca')
  .parent()
  .find('input')
  .type('Generica')


})
});
