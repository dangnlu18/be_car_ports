
 exports.up = async function(knex) {

    await knex.schema.createTable('vehicles', (table)=>{
      table.increments('id')
      table.integer('year').notNullable()
      table.string('make').notNullable()
      table.string('model').notNullable()
      table.boolean('bluetooth')
      table.boolean('aux_port')
      table.integer('usb_c')
      table.integer('usb')
      table.integer('port_12v')

    })
    
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('vehicles')
    
  }
