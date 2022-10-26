
//!El motor de javascript hace una lectura rapida del codigo y carga a la pila los llamados a las funciones, 

//? 1 Cuando el código se carga en la memoria, el contexto de ejecución global se inserta en la pila.

//! 2 se llama a la función moto() y el contexto de ejecución de  moto( ) se coloca en la pila.

//? 3 comienza la ejecución de moto() y, durante su ejecución, se llama a la función Carro() dentro de la función moto() . Esto hace que el contexto de ejecución de Carro() se inserte en la pila de llamadas.

//! 4 Ahora la función Carro() comienza a ejecutarse. Un nuevo marco de pila del método console.log() se insertará en la pila.

//? 5 Cuando se ejecuta el método console.log() , imprimirá "Esto es un carro" y luego se extraerá de la pila. El contexto de ejecución volverá a la función y ahora no queda ninguna línea de código en la función Carro() , como resultado, también se extraerá de la pila de llamadas.

//! 6 Esto sucederá de manera similar con el método console.log() que imprime la línea "Esto es una moto" y luego, finalmente, la función moto() terminaría y se eliminaría de la pila.

/*Caso: 4*/     function Carro() {
/*Caso: 5*/         console.log('Esto es un carro');
                }
            
/*Caso: 2*/     function moto() {
/*Caso: 3*/             Carro();
/*Caso: 6*/      console.log('Esto es una moto');
                }
                    
        moto();

//* Caso:1 Se inserta en contexto global de ejecucion