/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('vehicles').del()
  await knex('vehicles').insert([
    {id: 1, year: 2013, make:'honda', model:'accord', bluetooth: true, aux_port: true, usb_c: 2, usb:2, port_12v: 2},
    {id: 2, year: 2013, make:'bmw', model:'335i', bluetooth: true, aux_port: true, usb_c: 0, usb:2, port_12v: 2},
    {id: 3, year: 2021, make:'chevrolet', model:'silverado', bluetooth: true, aux_port: true, usb_c: 2, usb:3, port_12v: 3}
  ]);
};
