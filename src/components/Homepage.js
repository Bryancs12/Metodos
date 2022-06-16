import React from 'react'
import {Card} from "./cards/Card";
import {IsaacCard} from "./cards/IsaacCard";
import {JosephCard} from "./cards/JosephCard";


export const Homepage = () => {

  
  return (    

<div className='container mx-auto p-4  border-neutral-200 rounded-lg'>
  <div className='md: grid md:grid-cols-2'>

      <IsaacCard content={"Isaac Newton nació en las primeras horas del 25 de diciembre de 1642\n" +
          "                            (4 de enero de 1643, según el calendario gregoriano),\n" +
          "                            en la pequeña aldea de Woolsthorpe, en el condado de Lincolnshire."

      } />
         
      <JosephCard content={"Joseph Raphson estudió en el Jesus College de Cambridge y se graduó en ciencias exactas en 1692.\n" +
          "                        El método de Newton-Raphson es llamado así debido a que en 1691 lo publica en su\n" +
          "                        libro Aequationum Universalis"}
      />

  </div>

    <Card title={"Fundamento Historico"}
          content={"El método numérico de Newton-Raphson fue descrito por Sir Isaac Newton \n" +
              "          en “Sobre el análisis mediante ecuaciones con un número infinito de términos”, \n" +
              "          escrito en 1669, publicado en 1711 por William Jones y en “De metodis fluxionum \n" +
              "          et serierum infinitarum” escrito en 1671, traducido y publicado como Método de las \n" +
              "          fluxiones en 1736 por John Colson. Sin embargo, su descripción difiere en forma \n" +
              "          sustancial de la descripción moderna: Newton aplicaba el método solo a polinomios, \n" +
              "          y no consideraba las aproximaciones sucesivas Xn, sino que calculaba una \n" +
              "          secuencia de polinomios para llegar a la aproximación de la raíz x. Finalmente, \n" +
              "          Newton ve el método como puramente algebraico y falla al no ver la conexión con \n" +
              "          el cálculo."}
    />

      <br/>

    <Card title={"Fundamento Teórico"}
          content={"El método de Newton-Raphson es un método abierto, en el sentido de que \n" +
              "          su convergencia global no está garantizada. La única manera de alcanzar la \n" +
              "          convergencia es seleccionar un valor inicial lo suficientemente cercano a la raíz \n" +
              "          buscada. Así, se ha de comenzar la iteración con un valor razonablemente cercano \n" +
              "          al cero (denominado punto de arranque o valor supuesto). La relativa cercanía del \n" +
              "          punto inicial a la raíz depende mucho de la naturaleza de la propia función; si ésta \n" +
              "          presenta múltiples puntos de inflexión o pendientes grandes en el entorno de la raíz, \n" +
              "          entonces las probabilidades de que el algoritmo diverja aumentan, lo cual exige \n" +
              "          seleccionar un valor supuesto cercano a la raíz.\n" +
              "          el cálculo."}
    />

      <br/>

    <Card title={"Uso del método en la cotidianidad"}
          content={"En análisis numérico, el método de Newton-Raphson es un algoritmo para \n" +
              "          encontrar aproximaciones de los ceros o raíces de una función real. También puede \n" +
              "          ser usado para encontrar el máximo o mínimo de una función, encontrando los ceros \n" +
              "          de su primera derivada"}
    />

      </div>
          
  )
}
