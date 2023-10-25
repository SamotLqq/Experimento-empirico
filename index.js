import { Estado } from './estado.js';
import { alta } from './operaciones/alta.js';
import { carga } from './operaciones/carga.js';
import { clave } from './operaciones/clave.js';
import { extraccion } from './operaciones/extraccion.js';
import { movimientos } from './operaciones/movimientos.js';
import { saldo } from './operaciones/saldo.js';


function main(args) {
  let e = Estado.cargar()
  let usuarios = e.usuarios;
  if (args.length === 0) {
    console.log("Sin argumentos.");
    process.exit(1);
  }
  switch (args[0]) {
    case "extraccion":
      // [extraccion dni clave monto]
      // TODO: Completar.
      e = extraccion(e, args[1], args[2], args[3])
      break;
    case "clave":
      // args = [clave dni actual nueva]
      // TODO: Completar.
      e = clave(e, args[1], args[2], args[3])
      break;
    case "saldo":
      //args = [ saldo dni clave]
      // TODO: Completar.
      saldo(e, args[1], args[2])
      break;
    case "alta":
      //args = [ alta dni_administrador clave_administrador dni clave nombre sueldo saldo ]
      e = alta(e, args[1], args[2], args[3], args[4], args[5], args[6], args[7])
      break;
    case "carga":
      // args = [carga dni_admin clave_admin monto]
      e = carga(e, args[1], args[2], args[3])
      break;
    case "movimientos":
      // args = [movimientos dni_admin clave_admin dni_consulta desde hasta]
      // TODO: Completar.
      movimientos(e, args[1], args[2], args[3], args[4], args[5])
      break;
    default:
      console.log("Operación inválida.");
      process.exit(1);
  }
  e.guardar()
}

main(process.argv.slice(2));