const sedenaData = {
    'Álgebra': {
        // TEMA: Conceptos Fundamentales (Basado en Cap. 1)
        'Conceptos Fundamentales - Notación y Términos': {
            preguntas: [
                { q: "¿Qué es la 'notación algebraica'?", a: "Consiste en representar las cantidades por medio de símbolos, que pueden ser letras y números.", options: ["Consiste en representar las cantidades por medio de símbolos, que pueden ser letras y números.", "El uso exclusivo de números en matemáticas.", "La forma de escribir las ecuaciones."]},
                { q: "¿Qué es una 'expresión algebraica'?", a: "La representación de un símbolo algebraico o de una o más operaciones algebraicas.", options: ["La representación de un símbolo algebraico o de una o más operaciones algebraicas.", "Una ecuación con números y letras.", "Un sinónimo de 'fórmula matemática'."]},
                { q: "¿Qué es un 'término' algebraico?", a: "Una expresión algebraica que consta de un solo símbolo o de varios símbolos no separados por el signo + o -.", options: ["Una expresión algebraica que consta de un solo símbolo o de varios símbolos no separados por el signo + o -.", "Cada letra individual en una ecuación.", "El resultado de una operación."]},
                { q: "¿Un término que no va precedido por ningún signo se considera...?", a: "Positivo.", options: ["Positivo.", "Negativo.", "Neutro.", "Inválido."]},
                { q: "Las cantidades conocidas se suelen expresar por...", a: "Las primeras letras del alfabeto (a, b, c, d...).", options: ["Las primeras letras del alfabeto (a, b, c, d...).", "Las últimas letras del alfabeto (x, y, z...).", "Números romanos."]},
                { q: "Las cantidades desconocidas (incógnitas) se suelen expresar por...", a: "Las últimas letras del alfabeto (x, y, z...).", options: ["Las últimas letras del alfabeto (x, y, z...).", "Las primeras letras del alfabeto (a, b, c, d...).", "Letras griegas."]},
                { q: "¿Qué es el 'coeficiente' de un término?", a: "El primer factor del término; es el valor numérico o literal que multiplica al resto.", options: ["El primer factor del término; es el valor numérico o literal que multiplica al resto.", "El exponente más grande del término.", "La letra principal del término."]},
                { q: "En el término $3a$, el coeficiente de $a$ es:", a: "3", options: ["3", "1", "a"]},
                { q: "En el término $ax$, ¿cuál es el coeficiente (literal) de $x$?", a: "a", options: ["a", "1", "x"]},
                { q: "Cuando un término (como $x$) no tiene coeficiente numérico escrito, ¿cuál se sobreentiende?", a: "1", options: ["1", "0", "-1"]}
            ]
        },
        'Conceptos Fundamentales - Grado y Elementos': {
            preguntas: [
                { q: "¿Cuáles son los cuatro elementos de un término?", a: "Signo, coeficiente, parte literal y grado.", options: ["Signo, coeficiente, parte literal y grado.", "Número, letra, exponente y paréntesis.", "Variable, constante, operador y resultado."]},
                { q: "¿Qué es el 'grado absoluto' de un término?", a: "La suma de los exponentes de sus factores literales.", options: ["La suma de los exponentes de sus factores literales.", "El exponente más grande de la variable.", "El número de letras que tiene el término."]},
                { q: "¿Qué es el 'grado relativo' (o con relación a una letra)?", a: "El exponente de dicha letra.", options: ["El exponente de dicha letra.", "La suma de todos los exponentes.", "El coeficiente de la letra."]},
                { q: "¿Cuál es el grado absoluto del término $4a^4b^3c$?", a: "8 (resultado de 4+3+1)", options: ["8 (resultado de 4+3+1)", "4", "3", "7"]},
                { q: "¿Cuál es el grado relativo con relación a $b$ en el término $4a^4b^3c$?", a: "3", options: ["3", "4", "1", "8"]},
                { q: "Un término que no tiene parte literal (solo numérico, ej. 5) es de grado...", a: "Cero.", options: ["Cero.", "Uno.", "Indefinido.", "Igual al número."]},
                { q: "¿Qué es la 'parte literal' de un término?", a: "Las letras que hay en el término con sus exponentes.", options: ["Las letras que hay en el término con sus exponentes.", "El coeficiente.", "El signo."]},
                { q: "¿Qué indica el 'signo' de un término?", a: "Indica si la cantidad es positiva (+) o negativa (-).", options: ["Indica si la cantidad es positiva (+) o negativa (-).", "Indica el grado del término.", "Indica si es un monomio o polinomio."]},
                { q: "En el término $-ab^2$, el coeficiente numérico es:", a: "-1", options: ["-1", "1", "0", "2"]},
                { q: "El término $5x^3y^2z$ es de grado absoluto:", a: "6", options: ["6", "5", "3", "2"]}
            ]
        },
        'Conceptos Fundamentales - Clasificación de Expresiones': {
            preguntas: [
                { q: "Una expresión de un solo término se llama:", a: "Monomio", options: ["Monomio", "Binomio", "Polinomio"]},
                { q: "Una expresión de dos términos se llama:", a: "Binomio", options: ["Binomio", "Monomio", "Trinomio"]},
                { q: "Una expresión de tres términos se llama:", a: "Trinomio", options: ["Trinomio", "Monomio", "Polinomio"]},
                { q: "¿Cómo se define un 'Polinomio'?", a: "Una expresión algebraica que consta de más de un término.", options: ["Una expresión algebraica que consta de más de un término.", "Una expresión con exactamente cinco términos.", "Cualquier expresión con exponentes."]},
                { q: "¿Qué es el 'grado' de un polinomio?", a: "El grado de su término de mayor grado absoluto.", options: ["El grado de su término de mayor grado absoluto.", "La suma de los grados de todos sus términos.", "El número de términos que posee."]},
                { q: "¿Cuándo se dice que un polinomio es 'completo' con relación a una letra?", a: "Cuando contiene todos los exponentes sucesivos de dicha letra, desde el más alto al más bajo.", options: ["Cuando contiene todos los exponentes sucesivos de dicha letra, desde el más alto al más bajo.", "Cuando no le falta ningún término.", "Cuando tiene más de 5 términos."]},
                { q: "¿Cuándo se dice que un polinomio es 'ordenado'?", a: "Cuando los exponentes de una letra escogida (letra ordenatriz) van aumentando o disminuyendo.", options: ["Cuando los exponentes de una letra escogida (letra ordenatriz) van aumentando o disminuyendo.", "Cuando está escrito en orden alfabético.", "Cuando todos sus términos son positivos."]},
                { q: "El polinomio $x^4 + x^3 - x^2 + 5x - 1$ está ordenado de forma:", a: "Descendente (con relación a x).", options: ["Descendente (con relación a x).", "Ascendente (con relación a x).", "Alfabética."]},
                { q: "¿Qué es un 'polinomio homogéneo'?", a: "Aquel en que todos sus términos son del mismo grado absoluto.", options: ["Aquel en que todos sus términos son del mismo grado absoluto.", "Aquel que tiene los mismos coeficientes.", "Aquel que está ordenado."]},
                { q: "¿Qué es un 'polinomio heterogéneo'?", a: "Aquel cuyos términos no son todos del mismo grado absoluto.", options: ["Aquel cuyos términos no son todos del mismo grado absoluto.", "Aquel que tiene variables diferentes.", "Aquel que tiene signos mixtos."]}
            ]
        },
        'Conceptos Fundamentales - Términos Semejantes': {
            preguntas: [
                { q: "¿Qué son 'términos semejantes'?", a: "Los que tienen la misma parte literal, afectadas por iguales exponentes.", options: ["Los que tienen la misma parte literal, afectadas por iguales exponentes.", "Los que tienen el mismo coeficiente numérico.", "Los que tienen el mismo signo."]},
                { q: "Los términos $4x^2y$ y $-3x^2y$ son...", a: "Semejantes.", options: ["Semejantes.", "No semejantes.", "Opuestos.", "Iguales."]},
                { q: "Los términos $4x^2y$ y $4xy^2$ son...", a: "No semejantes (los exponentes de las letras no coinciden).", options: ["No semejantes (los exponentes de las letras no coinciden).", "Semejantes.", "Iguales.", "Coeficientes literales."]},
                { q: "¿Qué es 'reducir términos semejantes'?", a: "Convertir todos los términos semejantes en un solo término.", options: ["Convertir todos los términos semejantes en un solo término.", "Eliminar los términos que son semejantes.", "Ordenar los términos por su grado."]},
                { q: "¿Cuál es la regla para reducir términos semejantes del mismo signo?", a: "Se suman los coeficientes, poniendo delante de esta suma el mismo signo que tienen todos.", options: ["Se suman los coeficientes, poniendo delante de esta suma el mismo signo que tienen todos.", "Se restan los coeficientes y se pone el signo del mayor.", "Se multiplican los coeficientes."]},
                { q: "¿Cuál es la regla para reducir dos términos semejantes de distinto signo?", a: "Se restan los coeficientes, poniendo delante de esta diferencia el signo del mayor.", options: ["Se restan los coeficientes, poniendo delante de esta diferencia el signo del mayor.", "Se suman los coeficientes y se pone el signo negativo.", "Se eliminan ambos términos."]},
                { q: "¿Qué pasa si dos términos semejantes de signo opuesto tienen el mismo coeficiente numérico (ej. $2a$ y $-2a$)?", a: "Se anulan (el resultado es 0).", options: ["Se anulan (el resultado es 0).", "Se suman (dando $4a$).", "Se mantiene el término literal ($a$)."]},
                { q: "¿Importa el orden de las letras en la parte literal para que sean semejantes?", a: "No, $xy$ es semejante a $yx$ (por la ley conmutativa de la multiplicación).", options: ["No, $xy$ es semejante a $yx$ (por la ley conmutativa de la multiplicación).", "Sí, deben estar en el mismo orden alfabético.", "Solo si los coeficientes son iguales."]},
                { q: "Para reducir un polinomio con *varios* términos semejantes de signos distintos...", a: "Se reducen por separado todos los positivos, se reducen por separado todos los negativos, y se restan los resultados.", options: ["Se reducen por separado todos los positivos, se reducen por separado todos los negativos, y se restan los resultados.", "Se suman todos los coeficientes sin importar el signo.", "Se eliminan todos menos el primero."]},
                { q: "¿Se pueden reducir términos no semejantes (ej. $2a + 3b$)?", a: "No, la operación solo se deja indicada ($2a + 3b$).", options: ["No, la operación solo se deja indicada ($2a + 3b$).", "Sí, sumando los coeficientes ($5ab$).", "Sí, convirtiéndolos a grado cero."]}
            ]
        },

        // TEMA: I. Suma
        'I. Suma - Definición y Leyes': {
            preguntas: [
                { q: "¿Qué es la 'Suma o Adición' algebraica?", a: "Una operación que tiene por objeto reunir dos o más expresiones algebraicas (sumandos) en una sola (suma).", options: ["Una operación que tiene por objeto reunir dos o más expresiones algebraicas (sumandos) en una sola (suma).", "Encontrar el valor numérico de una expresión.", "Aumentar el valor de una cantidad."]},
                { q: "La ley de la suma que establece que 'el orden de los sumandos no altera la suma' (a+b = b+a) se llama:", a: "Ley Conmutativa.", options: ["Ley Conmutativa.", "Ley Asociativa.", "Ley Distributiva.", "Carácter de la suma."]},
                { q: "La ley de la suma que establece que '(a+b)+c = a+(b+c)' se llama:", a: "Ley Asociativa.", options: ["Ley Asociativa.", "Ley Conmutativa.", "Ley de los Signos.", "Propiedad de Identidad."]},
                { q: "¿Qué establece el 'carácter' de la suma algebraica?", a: "Que la suma algebraica de varias cantidades puede ser positiva o negativa, y no necesariamente un aumento.", options: ["Que la suma algebraica de varias cantidades puede ser positiva o negativa, y no necesariamente un aumento.", "Que solo se pueden sumar términos positivos.", "Que la suma siempre debe ser mayor que los sumandos."]},
                { q: "Según la regla para sumar cantidades con signos iguales...", a: "Se suman los valores absolutos y al resultado se le antepone el signo común.", options: ["Se suman los valores absolutos y al resultado se le antepone el signo común.", "Se restan los valores absolutos y se pone el signo del mayor.", "Se suman los valores y se pone siempre el signo +."]},
                { q: "Según la regla para sumar dos cantidades con signos diferentes...", a: "Se restan los valores absolutos y al resultado se le antepone el signo de la cantidad con mayor valor absoluto.", options: ["Se restan los valores absolutos y al resultado se le antepone el signo de la cantidad con mayor valor absoluto.", "Se suman los valores absolutos y se pone el signo del menor.", "Se restan los valores y se pone siempre el signo -."]},
                { q: "¿Cuál es el resultado de sumar algebraicamente $+8a$ y $-10a$?", a: "-2a", options: ["-2a", "2a", "18a", "-18a"]},
                { q: "¿Cuál es el resultado de sumar algebraicamente $-7b$ y $-5b$?", a: "-12b", options: ["-12b", "-2b", "12b", "35b"]},
                { q: "La suma de $a-b$ y $b-c$ es:", a: "$a-c$", options: ["$a-c$", "$a+b-c$", "$a-2b-c$"]},
                { q: "¿Cuál es el elemento neutro (o identidad) de la suma algebraica?", a: "0 (Cero)", options: ["0 (Cero)", "1", "a", "-1"]}
            ]
        },
        'I. Suma - Suma de Monomios y Polinomios': {
            preguntas: [
                { q: "¿Cuál es la regla para sumar monomios semejantes?", a: "Se suman algebraicamente sus coeficientes y a continuación se escribe la parte literal.", options: ["Se suman algebraicamente sus coeficientes y a continuación se escribe la parte literal.", "Se suman los exponentes.", "Se multiplican los coeficientes."]},
                { q: "Para sumar monomios no semejantes (ej. $a + b$), ¿qué se hace?", a: "Se dejan indicados con sus propios signos (ej. $a+b$).", options: ["Se dejan indicados con sus propios signos (ej. $a+b$).", "No se pueden sumar.", "Se suman los coeficientes (1+1=2).", "Se multiplican (ab)."]},
                { q: "¿Cuál es la regla general para sumar polinomios?", a: "Se escriben unos a continuación de otros con sus propios signos y se reducen los términos semejantes.", options: ["Se escriben unos a continuación de otros con sus propios signos y se reducen los términos semejantes.", "Se suman solo los coeficientes del primer término de cada polinomio.", "Se multiplican los términos entre sí."]},
                { q: "Para sumar polinomios, ¿cuál es el método más conveniente para agrupar términos semejantes?", a: "Escribir los polinomios unos debajo de otros de modo que los términos semejantes queden en columna.", options: ["Escribir los polinomios unos debajo de otros de modo que los términos semejantes queden en columna.", "Escribir todos los términos en una sola línea horizontal.", "Sumar solo los términos con signo positivo."]},
                { q: "¿Qué se hace con los términos no semejantes al sumar polinomios en columnas?", a: "Se escriben en la columna que les corresponde, o en una columna separada si no tienen semejante.", options: ["Se escriben en la columna que les corresponde, o en una columna separada si no tienen semejante.", "Se eliminan de la suma.", "Se suman al primer término."]},
                { q: "Al sumar $x^2+y^2$ con $2x^2-3y^2+z$, el coeficiente del término $y^2$ en la suma es:", a: "-2", options: ["-2", "1", "3", "-4"]},
                { q: "Al sumar $a+b-c$ con $a-b+c$, el resultado es:", a: "$2a$", options: ["$2a$", "$2a-2b+2c$", "0", "$2a+2b-2c$"]},
                { q: "¿Cuál es el primer paso recomendado antes de sumar polinomios en columnas?", a: "Ordenar ambos polinomios con relación a una misma letra.", options: ["Ordenar ambos polinomios con relación a una misma letra.", "Sacar el factor común.", "Eliminar los términos negativos."]},
                { q: "Si sumas $a-b$ y $b-c$ y $c-a$, ¿cuál es el resultado?", a: "0", options: ["0", "$a+b+c$", "$a-b-c$", "$2a+2b+2c$"]},
                { q: "La suma de $x^2-1$ y $x+1$ es:", a: "$x^2+x$", options: ["$x^2+x$", "$x^2$", "$x^3$", "$x^2-x-2$"]}
            ]
        },
        'I. Suma - Prueba de la Suma': {
            preguntas: [
                { q: "¿En qué consiste la 'prueba de la suma por valor numérico'?", a: "En hallar el valor numérico de los sumandos y de la suma por separado; la suma de los valores de los sumandos debe ser igual al valor de la suma total.", options: ["En hallar el valor numérico de los sumandos y de la suma por separado; la suma de los valores de los sumandos debe ser igual al valor de la suma total.", "En sumar todos los números de la expresión.", "En reemplazar todas las letras por el número 1."]},
                { q: "En la prueba de la suma, ¿qué valor se le suele dar a las letras?", a: "Un valor arbitrario, usualmente pequeño (ej. 1, 2, 3), evitando el 0 si hay divisiones.", options: ["Un valor arbitrario, usualmente pequeño (ej. 1, 2, 3), evitando el 0 si hay divisiones.", "Siempre se debe usar el 0.", "Siempre se debe usar el 10."]},
                { q: "Si al hacer la prueba de la suma, la suma de los valores de los sumandos NO es igual al valor de la suma, ¿qué indica?", a: "Que la operación (la suma de polinomios) está incorrecta.", options: ["Que la operación (la suma de polinomios) está incorrecta.", "Que el valor numérico elegido fue incorrecto.", "Que el polinomio no se puede sumar."]},
                { q: "¿La prueba de la suma por valor numérico garantiza al 100% que la operación está correcta?", a: "No, es una verificación de alta probabilidad, pero no infalible (errores podrían cancelarse).", options: ["No, es una verificación de alta probabilidad, pero no infalible (errores podrían cancelarse).", "Sí, es una prueba absoluta y 100% segura.", "Sí, pero solo si se usa el valor 1."]},
                { q: "Si un polinomio no está completo (ej. $x^3+x-1$), ¿qué se hace al sumar en columnas?", a: "Se deja el espacio vacío del término que falta (el de $x^2$).", options: ["Se deja el espacio vacío del término que falta (el de $x^2$).", "Se rellena con un cero.", "No se puede sumar en columnas."]},
                { q: "Prueba de la suma: Si Sumando1=$a+1$ y Sumando2=$a-1$, la Suma es $2a$. Si $a=2$, ¿cuál es el valor de Sumando1?", a: "3", options: ["3", "2", "1"]},
                { q: "Prueba de la suma: Si Sumando1=$a+1$ y Sumando2=$a-1$, la Suma es $2a$. Si $a=2$, ¿cuál es el valor de Sumando2?", a: "1", options: ["1", "2", "3"]},
                { q: "Prueba de la suma: Si Sumando1=$a+1$ y Sumando2=$a-1$, la Suma es $2a$. Si $a=2$, ¿cuál es el valor de la Suma ($2a$)?", a: "4", options: ["4", "2", "3"]},
                { q: "Prueba de la suma: Si Sumando1 vale 3 y Sumando2 vale 1, y la Suma total vale 4. ¿Se comprueba la operación?", a: "Sí, porque 3 + 1 = 4.", options: ["Sí, porque 3 + 1 = 4.", "No, porque 3 - 1 = 2.", "No, porque 3 x 1 = 3."]},
                { q: "¿Por qué generalmente no se usa el valor $x=1$ para la prueba?", a: "Porque $x^2$, $x^3$, $x^4$ valdrían todos 1, y no se detectarían errores en los exponentes.", options: ["Porque $x^2$, $x^3$, $x^4$ valdrían todos 1, y no se detectarían errores en los exponentes.", "Porque es un número muy pequeño.", "Porque la suma daría 1."]}
            ]
        },

        // TEMA: II. Resta
        'II. Resta - Definiciones y Regla General': {
            preguntas: [
                { q: "¿Qué es la 'Resta o Sustracción'?", a: "Una operación que tiene por objeto, dada una suma de dos sumandos (minuendo) y uno de ellos (sustraendo), hallar el otro sumando (resta o diferencia).", options: ["Una operación que tiene por objeto, dada una suma de dos sumandos (minuendo) y uno de ellos (sustraendo), hallar el otro sumando (resta o diferencia).", "Quitar una cantidad menor a una mayor.", "Encontrar la diferencia entre dos números cualesquiera."]},
                { q: "¿Cómo se llama la cantidad de la que se resta?", a: "Minuendo.", options: ["Minuendo.", "Sustraendo.", "Diferencia.", "Dividendo."]},
                { q: "¿Cómo se llama la cantidad que se resta?", a: "Sustraendo.", options: ["Sustraendo.", "Minuendo.", "Resta.", "Factor."]},
                { q: "¿Cómo se llama el resultado de la resta?", a: "Diferencia.", options: ["Diferencia.", "Cociente.", "Producto.", "Suma."]},
                { q: "¿Cuál es la regla general para restar un polinomio de otro?", a: "Se escribe el minuendo y a continuación el sustraendo cambiándole el signo a cada uno de sus términos, y se reducen términos semejantes.", options: ["Se escribe el minuendo y a continuación el sustraendo cambiándole el signo a cada uno de sus términos, y se reducen términos semejantes.", "Se restan los coeficientes del minuendo con los del sustraendo.", "Se escribe el minuendo y el sustraendo y se suman los términos semejantes."]},
                { q: "En un problema de resta, la expresión 'Restar A de B' significa que:", a: "B es el minuendo y A es el sustraendo (B - A).", options: ["B es el minuendo y A es el sustraendo (B - A).", "A es el minuendo y B es el sustraendo (A - B).", "A y B se deben sumar."]},
                { q: "En un problema de resta, la expresión 'De B restar A' significa que:", a: "B es el minuendo y A es el sustraendo (B - A).", options: ["B es el minuendo y A es el sustraendo (B - A).", "A es el minuendo y B es el sustraendo (A - B).", "A y B se deben sumar."]},
                { q: "¿Cuál es el 'carácter' de la resta algebraica, a diferencia de la aritmética?", a: "La resta algebraica puede dar un resultado positivo o negativo, y el sustraendo puede ser mayor que el minuendo.", options: ["La resta algebraica puede dar un resultado positivo o negativo, y el sustraendo puede ser mayor que el minuendo.", "La resta algebraica siempre da un resultado negativo.", "La resta algebraica no permite restar letras."]},
                { q: "Al restar $-3a$ de $2a$, ¿cuál es el resultado?", a: "$5a$ (porque es $2a - (-3a)$ = $2a + 3a$).", options: ["$5a$ (porque es $2a - (-3a)$ = $2a + 3a$).", "$-5a$", "$-a$", "$a$"]},
                { q: "Al restar $5b$ de $-2b$, ¿cuál es el resultado?", a: "$-7b$ (porque es $-2b - (5b)$ = $-2b - 5b$).", options: ["$-7b$ (porque es $-2b - (5b)$ = $-2b - 5b$).", "$-3b$", "$3b$", "$7b$"]}
            ]
        },
        'II. Resta - Resta de Polinomios (Método)': {
            preguntas: [
                { q: "Para restar polinomios en columnas, ¿qué se hace con el sustraendo?", a: "Se escribe debajo del minuendo, con los signos de todos sus términos cambiados, y se reducen términos semejantes (como en la suma).", options: ["Se escribe debajo del minuendo, con los signos de todos sus términos cambiados, y se reducen términos semejantes (como en la suma).", "Se escribe con sus mismos signos y se resta.", "Se multiplican sus términos por -1."]},
                { q: "Al restar $x^2-3x$ (sustraendo) de $3x^2+5x$ (minuendo), ¿qué se suma realmente?", a: "Se suma $( -x^2+3x )$ al minuendo.", options: ["Se suma $( -x^2+3x )$ al minuendo.", "Se suma $( x^2-3x )$ al minuendo.", "Se resta $-x^2$ y se suma $-3x$."]},
                { q: "¿Qué se hace con los términos no semejantes del sustraendo al restar en columnas?", a: "Se escriben en la columna correspondiente con el signo cambiado.", options: ["Se escriben en la columna correspondiente con el signo cambiado.", "Se eliminan.", "Se dejan con el mismo signo."]},
                { q: "¿Qué es la 'Ley Conmutativa de la Resta' ($a-b = b-a$)?", a: "No existe; la resta no es conmutativa.", options: ["No existe; la resta no es conmutativa.", "Sí existe, y establece que el orden no importa.", "Sí existe, pero solo para números positivos."]},
                { q: "¿Qué es la 'Ley Asociativa de la Resta' ($(a-b)-c = a-(b-c)$)?", a: "No existe; la resta no es asociativa.", options: ["No existe; la resta no es asociativa.", "Sí existe, y permite agrupar de cualquier modo.", "Sí existe, pero $(a-b)-c = a-b-c$."]},
                { q: "Al restar $(a-b)$ de $(2a+b)$, ¿cuál es el resultado?", a: "$a+2b$ (porque es $(2a+b) - (a-b)$ = $2a+b-a+b$).", options: ["$a+2b$ (porque es $(2a+b) - (a-b)$ = $2a+b-a+b$).", "$a$", "$3a$"]},
                { q: "En la resta, ¿es importante ordenar los polinomios?", a: "Sí, generalmente se ordenan (descendentemente) para facilitar la resta en columnas.", options: ["Sí, generalmente se ordenan (descendentemente) para facilitar la resta en columnas.", "No, el orden no afecta el resultado.", "Solo se ordena el minuendo."]},
                { q: "Si el sustraendo es $x^2+5$, ¿qué se escribe debajo del minuendo en el método de columnas?", a: "$-x^2-5$", options: ["$-x^2-5$", "$x^2+5$", "$x^2-5$"]},
                { q: "Restar $0$ de $a$ ($a-0$) es igual a:", a: "$a$", options: ["$a$", "0", "$-a$"]},
                { q: "Restar $a$ de $0$ ($0-a$) es igual a:", a: "$-a$", options: ["$-a$", "0", "$a$"]}
            ]
        },
        'II. Resta - Prueba y Suma/Resta Combinadas': {
            preguntas: [
                { q: "¿Cuál es la prueba de la resta?", a: "La suma del sustraendo (con su signo original) con la diferencia debe ser igual al minuendo.", options: ["La suma del sustraendo (con su signo original) con la diferencia debe ser igual al minuendo.", "La suma del minuendo y el sustraendo debe dar la diferencia.", "El valor numérico de la diferencia debe ser cero."]},
                { q: "Si Minuendo=10, Sustraendo=7, Diferencia=3. ¿Cuál es la prueba?", a: "$7 + 3 = 10$", options: ["$7 + 3 = 10$", "$10 + 7 = 17$", "$10 - 3 = 7$"]},
                { q: "Para resolver operaciones de suma y resta combinadas (ej. $a - (b + c)$), ¿qué se hace primero?", a: "Se eliminan (suprimen) los signos de agrupación.", options: ["Se eliminan (suprimen) los signos de agrupación.", "Se suma todo.", "Se resta todo."]},
                { q: "¿Qué significa hallar la 'suma de' A y B, 'y restar' de esa suma el polinomio C?", a: "Significa que (A+B) es el minuendo y C es el sustraendo.", options: ["Significa que (A+B) es el minuendo y C es el sustraendo.", "Significa que A+B+C se debe sumar.", "Significa que C es el minuendo."]},
                { q: "Si el sustraendo es $-(a-b)$, ¿qué se escribe realmente al restarlo (cambiarle el signo)?", a: "$+(a-b)$ (o simplemente $a-b$).", options: ["$+(a-b)$ (o simplemente $a-b$).", "$0$", "$-(a-b)$"]},
                { q: "¿Qué se obtiene al simplificar $a - (a - b)$?", a: "$b$ (porque $a - a + b$).", options: ["$b$ (porque $a - a + b$).", "$2a - b$", "$-b$"]},
                { q: "¿Qué se obtiene al simplificar $2x + [ - (x+y) ]$?", a: "$x - y$ (porque $2x - x - y$).", options: ["$x - y$ (porque $2x - x - y$).", "$3x + y$", "$x + y$"]},
                { q: "La expresión 'De la suma de A con B restar C' se escribe:", a: "$A + B - C$", options: ["$A + B - C$", "$A - B + C$", "$C - (A+B)$"]},
                { q: "La expresión 'Restar C de la suma de A con B' se escribe:", a: "$A + B - C$", options: ["$A + B - C$", "$C - A - B$", "$C - (A+B)$"]},
                { q: "¿Cuál es el primer paso para simplificar $a + (b - c) + d - (e + f)$?", a: "Suprimir los paréntesis: $a + b - c + d - e - f$.", options: ["Suprimir los paréntesis: $a + b - c + d - e - f$.", "Agrupar $a+b+d$ y $c+e+f$.", "Sumar $c+d$."]}
            ]
        },

        // TEMA: III. Signos de Agrupación
        'III. Signos de Agrupación - Supresión': {
            preguntas: [
                { q: "¿Cuáles son los signos de agrupación más usados en álgebra?", a: "Paréntesis, corchetes, llaves y barra o vínculo.", options: ["Paréntesis, corchetes, llaves y barra o vínculo.", "Signo más, signo menos y signo por.", "Comas, puntos y punto y coma."]},
                { q: "¿Qué es un 'vínculo' o 'barra'?", a: "Un signo de agrupación que se escribe horizontalmente arriba de los términos.", options: ["Un signo de agrupación que se escribe horizontalmente arriba de los términos.", "Una línea para indicar una fracción.", "Un sinónimo de 'paréntesis'."]},
                { q: "¿Cuál es la regla para suprimir (eliminar) un signo de agrupación precedido por el signo MÁS (+)?", a: "Se deja el mismo signo que tengan cada uno de los términos que están dentro de él.", options: ["Se deja el mismo signo que tengan cada uno de los términos que están dentro de él.", "Se cambia el signo a todos los términos que están dentro.", "Se eliminan todos los términos que están dentro."]},
                { q: "¿Cuál es la regla para suprimir (eliminar) un signo de agrupación precedido por el signo MENOS (-)?", a: "Se cambia el signo a cada uno de los términos que están dentro de él.", options: ["Se cambia el signo a cada uno de los términos que están dentro de él.", "Se deja el mismo signo a todos los términos que están dentro.", "Se multiplica por -1 solo al primer término."]},
                { q: "La expresión $a - (b - c)$ es equivalente a:", a: "$a - b + c$", options: ["$a - b + c$", "$a + b - c$", "$a - b - c$"]},
                { q: "La expresión $a + (b - c)$ es equivalente a:", a: "$a + b - c$", options: ["$a + b - c$", "$a - b + c$", "$a + b + c$"]},
                { q: "La expresión $x - \overline{y - z}$ (con vínculo) es equivalente a:", a: "$x - y + z$", options: ["$x - y + z$", "$x + y - z$", "$x - y - z$"]},
                { q: "Al suprimir un signo de agrupación precedido por (-), ¿qué operación se está realizando teóricamente?", a: "Multiplicar todos los términos internos por -1.", options: ["Multiplicar todos los términos internos por -1.", "Restar 1 a cada término.", "Dividir cada término por -1."]},
                { q: "Cuando existen signos de agrupación anidados (unos dentro de otros), ¿cuál es la regla general para suprimirlos?", a: "Se suprimen de adentro hacia afuera.", options: ["Se suprimen de adentro hacia afuera.", "Se suprimen de afuera hacia adentro.", "El orden no importa."]},
                { q: "Al simplificar $a - [b + (c - d)]$ el primer paso es $a - [b + c - d]$. ¿Cuál es el segundo?", a: "$a - b - c + d$", options: ["$a - b - c + d$", "$a - b + c - d$", "$a + b + c - d$"]}
            ]
        },
        'III. Signos de Agrupación - Introducción': {
            preguntas: [
                { q: "¿Cuál es la regla para introducir términos en un signo de agrupación precedido por el signo MÁS (+)?", a: "Se deben introducir conservando cada término su propio signo.", options: ["Se deben introducir conservando cada término su propio signo.", "Se deben introducir cambiándoles el signo a todos.", "No se pueden introducir términos si el signo es (+)."]},
                { q: "¿Cuál es la regla para introducir términos en un signo de agrupación precedido por el signo MENOS (-)?", a: "Se deben introducir cambiándoles el signo a cada uno de los términos.", options: ["Se deben introducir cambiándoles el signo a cada uno de los términos.", "Se deben introducir con el mismo signo.", "Solo se puede introducir si todos los términos son negativos."]},
                { q: "La expresión $x + y - z$ es equivalente a:", a: "$x + (y - z)$", options: ["$x + (y - z)$", "$x - (y + z)$", "$x - (y - z)$"]},
                { q: "La expresión $a - b + c - d$ es equivalente a:", a: "$a - (b - c + d)$", options: ["$a - (b - c + d)$", "$a - (b + c - d)$", "$a + (b - c + d)$"]},
                { q: "Para introducir los últimos dos términos de $x+y-z$ en un paréntesis precedido de (+), el resultado es:", a: "$x + (y - z)$", options: ["$x + (y - z)$", "$x - (y - z)$", "$x - (y + z)$"]},
                { q: "Para introducir los últimos dos términos de $x-y-z$ en un paréntesis precedido de (-), el resultado es:", a: "$x - (y + z)$", options: ["$x - (y + z)$", "$x - (y - z)$", "$x + (y + z)$"]},
                { q: "Para introducir los últimos tres términos de $a-b+c-d$ en un paréntesis precedido de (-), el resultado es:", a: "$a - (b - c + d)$", options: ["$a - (b - c + d)$", "$a - (b + c - d)$", "$a + (b + c - d)$"]},
                { q: "La expresión $x - y + z$ es equivalente a:", a: "$x - (y - z)$", options: ["$x - (y - z)$", "$x - (y + z)$", "$x + (y - z)$"]},
                { q: "¿Qué significa la expresión $-(a-b)$?", a: "Que el resultado de $a-b$ debe cambiar de signo (equivale a $-a+b$).", options: ["Que el resultado de $a-b$ debe cambiar de signo (equivale a $-a+b$).", "Que solo $a$ es negativa.", "Que $a$ y $b$ son negativos."]},
                { q: "¿Qué significa la expresión $+ (a-b)$?", a: "Que el resultado de $a-b$ conserva su signo (equivale a $a-b$).", options: ["Que el resultado de $a-b$ conserva su signo (equivale a $a-b$).", "Que $a$ y $b$ son positivos.", "Que solo $a$ es positiva."]}
            ]
        },

        // TEMA: IV. Multiplicación
        'IV. Multiplicación - Leyes Fundamentales (Signos, Coeficientes, Exponentes)': {
            preguntas: [
                { q: "¿Qué es la 'Multiplicación' algebraica?", a: "Una operación que tiene por objeto hallar una tercera cantidad llamada producto, dadas dos cantidades llamadas multiplicando y multiplicador.", options: ["Una operación que tiene por objeto hallar una tercera cantidad llamada producto, dadas dos cantidades llamadas multiplicando y multiplicador.", "Sumar una cantidad varias veces.", "Aumentar el exponente de una variable."]},
                { q: "¿Qué establece la 'Ley de los Signos' para la multiplicación?", a: "Signos iguales dan MÁS (+) y signos diferentes dan MENOS (-).", options: ["Signos iguales dan MÁS (+) y signos diferentes dan MENOS (-).", "Signos iguales dan MENOS (-) y signos diferentes dan MÁS (+).", "El resultado siempre es positivo."]},
                { q: "¿Cuál es la regla de 'menos por menos'?", a: "(-) x (-) = (+)", options: ["(-) x (-) = (+)", "(-) x (-) = (-)", "(-) x (-) = 0"]},
                { q: "¿Cuál es la regla de 'más por menos'?", a: "(+) x (-) = (-)", options: ["(+) x (-) = (-)", "(+) x (-) = (+)", "(+) x (-) = 0"]},
                { q: "¿Qué establece la 'Ley de los Coeficientes'?", a: "El coeficiente del producto es el producto de los coeficientes de los factores.", options: ["El coeficiente del producto es el producto de los coeficientes de los factores.", "El coeficiente del producto es la suma de los coeficientes.", "El coeficiente del producto es siempre 1."]},
                { q: "¿Qué establece la 'Ley de los Exponentes' para la multiplicación?", a: "Para multiplicar potencias de la misma base, se escribe la misma base y se le pone por exponente la suma de los exponents de los factores.", options: ["Para multiplicar potencias de la misma base, se escribe la misma base y se le pone por exponente la suma de los exponents de los factores.", "Se multiplican los exponentes.", "Se deja el exponente mayor."]},
                { q: "El resultado de $a^2$ multiplicado por $a^3$ es:", a: "$a^5$", options: ["$a^5$", "$a^6$", "$a^1$"]},
                { q: "El resultado de $x^m$ multiplicado por $x^n$ es:", a: "$x^{m+n}$", options: ["$x^{m+n}$", "$x^{mn}$", "$x^{m-n}$"]},
                { q: "El resultado de $(-2a)$ multiplicado por $(3b)$ es:", a: "$-6ab$", options: ["$-6ab$", "$6ab$", "$-5ab$"]},
                { q: "El resultado de $(-4x^2)$ multiplicado por $(-2x)$ es:", a: "$8x^3$", options: ["$8x^3$", "$-8x^3$", "$8x^2$"]}
            ]
        },
        'IV. Multiplicación - Leyes de la Operación (Conmutativa, Asociativa, Distributiva)': {
            preguntas: [
                { q: "La ley que establece que 'el orden de los factores no altera el producto' (ab = ba) se llama:", a: "Ley Conmutativa.", options: ["Ley Conmutativa.", "Ley Asociativa.", "Ley Distributiva.", "Ley de Exponentes."]},
                { q: "La ley que establece que 'los factores de un producto pueden agruparse de cualquier modo' ((ab)c = a(bc)) se llama:", a: "Ley Asociativa.", options: ["Ley Asociativa.", "Ley Conmutativa.", "Ley de los Signos.", "Propiedad de Identidad."]},
                { q: "¿Cuál es la 'Ley Distributiva' de la multiplicación (respecto a la suma)?", a: "Establece que a(b + c) = ab + ac.", options: ["Establece que a(b + c) = ab + ac.", "Establece que a + (b x c) = (a + b) x (a + c).", "Establece que a(b + c) = a + b + c."]},
                { q: "El 'Teorema' para multiplicar un polinomio por un monomio es una consecuencia directa de la...", a: "Ley Distributiva.", options: ["Ley Distributiva.", "Ley Conmutativa.", "Ley de Exponentes.", "Ley Asociativa."]},
                { q: "¿Cómo se llaman las cantidades que se multiplican entre sí?", a: "Factores.", options: ["Factores.", "Sumandos.", "Dividendos.", "Términos."]},
                { q: "La expresión $a(b-c)$ es igual a:", a: "$ab - ac$", options: ["$ab - ac$", "$ab - c$", "$ab + ac$"]},
                { q: "Según la Ley Distributiva, $x(y+z-w)$ es igual a:", a: "$xy + xz - xw$", options: ["$xy + xz - xw$", "$x(y+z) - w$", "$xy+z-w$"]},
                { q: "¿Qué es la 'multiplicación por cero'?", a: "Un axioma que establece que toda cantidad multiplicada por cero da cero (a x 0 = 0).", options: ["Un axioma que establece que toda cantidad multiplicada por cero da cero (a x 0 = 0).", "Un error en la operación.", "Una indeterminación."]},
                { q: "¿Cuál es el 'elemento neutro' (o identidad) de la multiplicación?", a: "1 (Uno)", options: ["1 (Uno)", "0", "a", "-1"]},
                { q: "El producto de 'a' por 'b' por 'c' se representa como:", a: "abc", options: ["abc", "a+b+c", "a(b-c)", "c(a+b)"]}
            ]
        },
        'IV. Multiplicación - Casos (Monomios y Polinomio por Monomio)': {
            preguntas: [
                { q: "¿Cuál es la regla para multiplicar dos monomios?", a: "Se multiplican los coeficientes y a continuación se escriben las letras de los factores en orden alfabético, sumando sus exponentes.", options: ["Se multiplican los coeficientes y a continuación se escriben las letras de los factores en orden alfabético, sumando sus exponentes.", "Se suman los coeficientes y se multiplican los exponentes.", "Se multiplican solo las partes literales."]},
                { q: "¿Cuál es la regla para multiplicar un polinomio por un monomio?", a: "Se multiplica el monomio por cada uno de los términos del polinomio, teniendo en cuenta la regla de los signos, y se suman los productos parciales.", options: ["Se multiplica el monomio por cada uno de los términos del polinomio, teniendo en cuenta la regla de los signos, y se suman los productos parciales.", "Se multiplica el monomio solo por el primer término del polinomio.", "Se suman los exponentes del monomio y el polinomio."]},
                { q: "¿Qué es un 'coeficiente literal'?", a: "Cuando el coeficiente de un término es una o más letras (ej. en 'ax', 'a' es el coeficiente literal de 'x').", options: ["Cuando el coeficiente de un término es una o más letras (ej. en 'ax', 'a' es el coeficiente literal de 'x').", "El exponente de una letra.", "Una letra que no tiene coeficiente."]},
                { q: "Al multiplicar $(a-b)$ por $2$, el resultado es:", a: "$2a - 2b$", options: ["$2a - 2b$", "$2a - b$", "$a - 2b$"]},
                { q: "Al multiplicar $(x^2 - 3x + 5)$ por $2x$, el resultado del segundo término es:", a: "$-6x^2$", options: ["$-6x^2$", "$-3x$", "$2x^3$"]},
                { q: "El producto de $ab$ por $-a^2b$ es:", a: "$-a^3b^2$", options: ["$-a^3b^2$", "$-a^2b$", "$-a^2b^2$"]},
                { q: "El producto de $-5x^2y$ por $xy^2$ es:", a: "$-5x^3y^3$", options: ["$-5x^3y^3$", "$-5x^2y^2$", "$x^3y^3$"]},
                { q: "La expresión $-3(a-b)$ es equivalente a:", a: "$-3a + 3b$", options: ["$-3a + 3b$", "$-3a - 3b$", "$-3a - b$"]},
                { q: "¿Qué significa que la multiplicación 'cumple' respecto a la suma?", a: "Que es distributiva ( $a(b+c) = ab + ac$ ).", options: ["Que es distributiva ( $a(b+c) = ab + ac$ ).", "Que es conmutativa.", "Que es asociativa."]},
                { q: "El producto de tres factores $(a)(b)(c)$ es positivo si:", a: "Los tres son positivos, o si dos son negativos y uno positivo.", options: ["Los tres son positivos, o si dos son negativos y uno positivo.", "Si al menos uno es positivo.", "Si los tres son negativos."]}
            ]
        },
        'IV. Multiplicación - Multiplicación de Polinomios': {
            preguntas: [
                { q: "¿Cuál es la regla general para multiplicar dos polinomios?", a: "Se multiplican todos los términos del multiplicando por cada uno de los términos del multiplicador, y se reducen los términos semejantes.", options: ["Se multiplican todos los términos del multiplicando por cada uno de los términos del multiplicador, y se reducen los términos semejantes.", "Se multiplican solo el primer término de cada uno.", "Se suman los términos semejantes de ambos polinomios."]},
                { q: "¿Cuál es el primer paso recomendado para multiplicar polinomios por el método de columnas?", a: "Ordenar ambos polinomios con relación a una misma letra.", options: ["Ordenar ambos polinomios con relación a una misma letra.", "Eliminar los términos semejantes de cada polinomio.", "Multiplicar los primeros términos."]},
                { q: "Al multiplicar polinomios en columnas, ¿cómo se disponen los productos parciales?", a: "Se escriben unos debajo de otros de modo que los términos semejantes queden en columna para facilitar la reducción.", options: ["Se escriben unos debajo de otros de modo que los términos semejantes queden en columna para facilitar la reducción.", "Se escriben todos en una sola línea horizontal.", "Se escriben en orden alfabético."]},
                { q: "Teóricamente, ¿a qué es igual el grado del producto de dos polinomios?", a: "A la suma de los grados de los polinomios factores.", options: ["A la suma de los grados de los polinomios factores.", "Al producto de los grados de los polinomios factores.", "Al grado del polinomio mayor."]},
                { q: "¿Qué es un 'polinomio homogéneo'?", a: "Aquel en que todos sus términos son del mismo grado absoluto.", options: ["Aquel en que todos sus términos son del mismo grado absoluto.", "Aquel que tiene los mismos coeficientes.", "Aquel que está ordenado."]},
                { q: "El producto de $(a+b)$ por $(a-b)$ es:", a: "$a^2 - b^2$", options: ["$a^2 - b^2$", "$a^2 + b^2$", "$a^2 - 2ab + b^2$"]},
                { q: "El producto de $(x+1)$ por $(x+2)$ es:", a: "$x^2 + 3x + 2$", options: ["$x^2 + 3x + 2$", "$x^2 + 2$", "$x^2 + 2x + 2$"]},
                { q: "Al multiplicar $(a+b)$ por $(c+d)$, ¿cuántos términos tiene el producto antes de reducir?", a: "4 (ac, ad, bc, bd)", options: ["4 (ac, ad, bc, bd)", "2", "3"]},
                { q: "¿Qué es la 'prueba por valor numérico' de la multiplicación?", a: "El valor numérico del producto debe ser igual al producto de los valores numéricos del multiplicando y el multiplicador.", options: ["El valor numérico del producto debe ser igual al producto de los valores numéricos del multiplicando y el multiplicador.", "El valor numérico del producto debe ser 0.", "El valor del producto debe ser igual a la suma de los valores de los factores."]},
                { q: "Si el Multiplicando vale 3 y el Multiplicador vale 4, ¿cuánto debe valer el Producto en la prueba?", a: "12", options: ["12", "7", "1"]}
            ]
        },

        // TEMA: V. División
        'V. División - Leyes Fundamentales (Signos, Coeficientes, Exponentes)': {
            preguntas: [
                { q: "¿Qué es la 'División' algebraica?", a: "Una operación que tiene por objeto, dado el producto de dos factores (dividendo) y uno de los factores (divisor), hallar el otro factor (cociente).", options: ["Una operación que tiene por objeto, dado el producto de dos factores (dividendo) y uno de los factores (divisor), hallar el otro factor (cociente).", "Repartir una cantidad en partes iguales.", "Reducir el exponente de una variable."]},
                { q: "¿Qué establece la 'Ley de los Signos' para la división?", a: "Signos iguales dan MÁS (+) y signos diferentes dan MENOS (-).", options: ["Signos iguales dan MÁS (+) y signos diferentes dan MENOS (-).", "Signos iguales dan MENOS (-) y signos diferentes dan MÁS (+).", "El resultado siempre es positivo."]},
                { q: "¿Cuál es la regla de 'menos entre más'?", a: "(-) / (+) = (-)", options: ["(-) / (+) = (-)", "(-) / (+) = (+)", "(-) / (+) = 0"]},
                { q: "¿Cuál es la regla de 'menos entre menos'?", a: "(-) / (-) = (+)", options: ["(-) / (-) = (+)", "(-) / (-) = (-)", "(-) / (-) = 0"]},
                { q: "¿Qué establece la 'Ley de los Coeficientes' para la división?", a: "El coeficiente del cociente es el cociente de dividir el coeficiente del dividendo entre el coeficiente del divisor.", options: ["El coeficiente del cociente es el cociente de dividir el coeficiente del dividendo entre el coeficiente del divisor.", "Se restan los coeficientes.", "Se suman los coeficientes."]},
                { q: "¿Qué establece la 'Ley de los Exponentes' para la división?", a: "Para dividir potencias de la misma base, se escribe la misma base y se le pone por exponente la diferencia entre el exponente del dividendo y el del divisor.", options: ["Para dividir potencias de la misma base, se escribe la misma base y se le pone por exponente la diferencia entre el exponente del dividendo y el del divisor.", "Se dividen los exponentes.", "Se suman los exponentes."]},
                { q: "El resultado de $a^5$ dividido entre $a^2$ es:", a: "$a^3$", options: ["$a^3$", "$a^{2.5}$", "$a^7$"]},
                { q: "El resultado de $x^m$ dividido entre $x^n$ es:", a: "$x^{m-n}$", options: ["$x^{m-n}$", "$x^{m/n}$", "$x^{m+n}$"]},
                { q: "El resultado de $6x^4$ dividido entre $-2x$ es:", a: "$-3x^3$", options: ["$-3x^3$", "$3x^3$", "$-3x^4$"]},
                { q: "¿Qué es la 'prueba' de la división?", a: "El Divisor multiplicado por el Cociente debe dar el Dividendo (si es exacta).", options: ["El Divisor multiplicado por el Cociente debe dar el Dividendo (si es exacta).", "Dividendo + Divisor = Cociente.", "Dividendo - Cociente = Divisor."]}
            ]
        },
        'V. División - Casos (Monomios y Polinomio por Monomio)': {
            preguntas: [
                { q: "¿Cuál es la regla para dividir dos monomios?", a: "Se divide el coeficiente del dividendo entre el del divisor y se escriben las letras en orden alfabético, restando sus exponentes.", options: ["Se divide el coeficiente del dividendo entre el del divisor y se escriben las letras en orden alfabético, restando sus exponentes.", "Se restan los coeficientes y se suman los exponentes.", "Se dividen los exponentes."]},
                { q: "Toda cantidad elevada a la potencia cero ($a^0$) es equivalente a...", a: "1", options: ["1", "0", "a", "-1"]},
                { q: "¿De dónde surge $a^0 = 1$?", a: "De dividir una cantidad por sí misma ($a^n / a^n = a^{n-n} = a^0$), lo cual es 1.", options: ["De dividir una cantidad por sí misma ($a^n / a^n = a^{n-n} = a^0$), lo cual es 1.", "Es una definición arbitraria.", "De multiplicar $a$ por 0."]},
                { q: "¿Qué representa un exponente negativo (ej. $a^{-n}$)?", a: "Un quebrado cuyo numerador es 1 y cuyo denominador es la misma cantidad con exponente positivo ($1/a^n$).", options: ["Un quebrado cuyo numerador es 1 y cuyo denominador es la misma cantidad con exponente positivo ($1/a^n$).", "Un número negativo.", "Un error en la operación."]},
                { q: "¿De dónde surge $a^{-n}$?", a: "De dividir una potencia menor entre una mayor (ej. $a^2 / a^5 = a^{2-5} = a^{-3}$).", options: ["De dividir una potencia menor entre una mayor (ej. $a^2 / a^5 = a^{2-5} = a^{-3}$).", "De una raíz negativa.", "De multiplicar por -n."]},
                { q: "¿Cuál es la regla para dividir un polinomio por un monomio?", a: "Se divide cada uno de los términos del polinomio por el monomio, separando los cocientes parciales con sus propios signos.", options: ["Se divide cada uno de los términos del polinomio por el monomio, separando los cocientes parciales con sus propios signos.", "Se divide solo el primer término del polinomio entre el monomio.", "Se resta el monomio de cada término del polinomio."]},
                { q: "La división de un polinomio por un monomio es una aplicación de la...", a: "Ley Distributiva.", options: ["Ley Distributiva.", "Ley Asociativa.", "Ley Conmutativa."]},
                { q: "El resultado de $(4x^4 - 2x^2) / (2x)$ es:", a: "$2x^3 - x$", options: ["$2x^3 - x$", "$2x^4 - x^2$", "$4x^3 - 2x$"]},
                { q: "¿Qué es la 'División por Cero'?", a: "Una operación indefinida, no tiene solución.", options: ["Una operación indefinida, no tiene solución.", "Siempre da 0.", "Siempre da 1."]},
                { q: "¿A qué es igual $0 / a$ (cero dividido entre cualquier cantidad distinta de cero)?", a: "0", options: ["0", "1", "a", "Indefinido"]}
            ]
        },
        'V. División - División de Polinomios': {
            preguntas: [
                { q: "¿Cuál es el primer paso fundamental para dividir dos polinomios?", a: "Ordenar ambos polinomios (dividendo y divisor) en relación a la misma letra, usualmente en orden descendente.", options: ["Ordenar ambos polinomios (dividendo y divisor) en relación a la misma letra, usualmente en orden descendente.", "Eliminar los términos semejantes del divisor.", "Multiplicar el dividendo por el divisor."]},
                { q: "En la división de polinomios, ¿cómo se obtiene el primer término del cociente?", a: "Dividiendo el primer término del dividendo entre el primer término del divisor.", options: ["Dividiendo el primer término del dividendo entre el primer término del divisor.", "Multiplicando el primer término del dividendo por el primero del divisor.", "Restando el primer término del divisor al del dividendo."]},
                { q: "Después de obtener un término del cociente, ¿cuál es el siguiente paso?", a: "Multiplicar este término por *todo* el divisor, cambiar el signo al producto y restarlo del dividendo.", options: ["Multiplicar este término por *todo* el divisor, cambiar el signo al producto y restarlo del dividendo.", "Sumarlo al dividendo.", "Multiplicarlo solo por el primer término del divisor."]},
                { q: "¿Cuándo se termina la operación de dividir polinomios?", a: "Cuando el residuo es cero, o cuando el primer término del residuo es de grado inferior al primer término del divisor.", options: ["Cuando el residuo es cero, o cuando el primer término del residuo es de grado inferior al primer término del divisor.", "Cuando el cociente tiene el mismo número de términos que el divisor.", "Cuando todos los coeficientes son 1."]},
                { q: "Una división es 'exacta' cuando...", a: "El residuo es cero.", options: ["El residuo es cero.", "El cociente es 1.", "El dividendo y el divisor son iguales."]},
                { q: "Una división es 'inexacta' cuando...", a: "El residuo es distinto de cero.", options: ["El residuo es distinto de cero.", "El cociente es 0.", "El divisor es negativo."]},
                { q: "En una división inexacta, ¿a qué es igual el Dividendo?", a: "Al producto del Divisor por el Cociente, más el Residuo. (D = d*q + r)", options: ["Al producto del Divisor por el Cociente, más el Residuo. (D = d*q + r)", "Al Divisor menos el Residuo.", "Al Cociente más el Residuo."]},
                { q: "Si el dividendo es $x^2+2x+1$ y el divisor es $x+1$, ¿cuál es el cociente?", a: "$x+1$", options: ["$x+1$", "$x-1$", "$x$"]},
                { q: "¿Qué se hace si el dividendo está incompleto (ej. $x^3-1$)?", a: "Se dejan los espacios de los términos que faltan (ej. $x^2$, $x$).", options: ["Se dejan los espacios de los términos que faltan (ej. $x^2$, $x$).", "No se puede dividir.", "Se rellena con 1."]},
                { q: "El grado del cociente de dos polinomios es igual a:", a: "El grado del dividendo MENOS el grado del divisor.", options: ["El grado del dividendo MENOS el grado del divisor.", "El grado del dividendo MÁS el grado del divisor.", "El grado del dividendo."]}
            ]
        },

        // TEMA: VIII. Ecuaciones Enteras de Primer Grado
        'VIII. Ecuaciones - Definiciones (Ecuación, Identidad, Grado)': {
            preguntas: [
                { q: "¿Qué es una 'ecuación'?", a: "Una igualdad en la que hay una o varias cantidades desconocidas (incógnitas) y que solo se verifica para determinados valores de ellas.", options: ["Una igualdad en la que hay una o varias cantidades desconocidas (incógnitas) y que solo se verifica para determinados valores de ellas.", "Cualquier expresión algebraica con un signo de igual.", "Una fórmula matemática universal."]},
                { q: "¿Qué es una 'identidad'?", a: "Una igualdad que se verifica para cualesquiera valores de las letras que entran en ella (ej. $(a+b)^2 = a^2+2ab+b^2$).", options: ["Una igualdad que se verifica para cualesquiera valores de las letras que entran en ella (ej. $(a+b)^2 = a^2+2ab+b^2$).", "Una ecuación que no tiene solución.", "El resultado de una ecuación."]},
                { q: "¿Cuál es la diferencia entre ecuación e identidad?", a: "La identidad es cierta para *todos* los valores; la ecuación solo para *algunos* (las raíces).", options: ["La identidad es cierta para *todos* los valores; la ecuación solo para *algunos* (las raíces).", "No hay diferencia.", "La identidad usa letras y la ecuación números."]},
                { q: "¿Cómo se llaman los dos lados de una ecuación separados por el signo '='?", a: "Miembros (primer miembro y segundo miembro).", options: ["Miembros (primer miembro y segundo miembro).", "Términos y factores.", "Incógnitas y constantes."]},
                { q: "¿Qué es el 'grado' de una ecuación con una sola incógnita?", a: "El mayor exponente que tiene la incógnita en la ecuación.", options: ["El mayor exponente que tiene la incógnita en la ecuación.", "El número de términos de la ecuación.", "El coeficiente más grande."]},
                { q: "Una ecuación de primer grado también se conoce como:", a: "Ecuación lineal.", options: ["Ecuación lineal.", "Ecuación cuadrática.", "Ecuación idéntica."]},
                { q: "Una ecuación de segundo grado también se conoce como:", a: "Ecuación cuadrática.", options: ["Ecuación cuadrática.", "Ecuación lineal.", "Ecuación cúbica."]},
                { q: "¿Qué son 'términos' en una ecuación?", a: "Las cantidades que están conectadas con otras por el signo + o -, o las cantidades que están solas en un miembro.", options: ["Las cantidades que están conectadas con otras por el signo + o -, o las cantidades que están solas en un miembro.", "Solo las incógnitas.", "Solo los números."]},
                { q: "La ecuación $5x+2=17$ es una ecuación:", a: "Numérica y de primer grado.", options: ["Numérica y de primer grado.", "Literal y de segundo grado.", "Una identidad."]},
                { q: "La ecuación $ax+b=c$ es una ecuación:", a: "Literal y de primer grado.", options: ["Literal y de primer grado.", "Numérica y de primer grado.", "Una identidad."]}
            ]
        },
        'VIII. Ecuaciones - Soluciones y Axiomas': {
            preguntas: [
                { q: "¿Qué son las 'raíces' o 'soluciones' de una ecuación?", a: "Los valores de las incógnitas que verifican o satisfacen la ecuación.", options: ["Los valores de las incógnitas que verifican o satisfacen la ecuación.", "Los coeficientes de la ecuación.", "Los dos miembros de la ecuación."]},
                { q: "¿Qué es un 'axioma'?", a: "Una verdad evidente que no necesita demostración.", options: ["Una verdad evidente que no necesita demostración.", "Una regla que necesita ser probada.", "Una incógnita en una ecuación."]},
                { q: "¿Cuál es el axioma fundamental de las ecuaciones?", a: "Si con cantidades iguales se verifican operaciones iguales, los resultados serán iguales.", options: ["Si con cantidades iguales se verifican operaciones iguales, los resultados serán iguales.", "El orden de los factores no altera el producto.", "Toda cantidad es igual a sí misma."]},
                { q: "Axioma: 'Si a cantidades iguales se suma una misma cantidad...'", a: "La igualdad subsiste.", options: ["La igualdad subsiste.", "La igualdad se invierte.", "La ecuación se anula."]},
                { q: "Axioma: 'Si de cantidades iguales se resta una misma cantidad...'", a: "La igualdad subsiste.", options: ["La igualdad subsiste.", "La igualdad se invierte.", "La ecuación se anula."]},
                { q: "Axioma: 'Si cantidades iguales se multiplican por una misma cantidad...'", a: "La igualdad subsiste.", options: ["La igualdad subsiste.", "La igualdad se invierte.", "La ecuación se anula."]},
                { q: "Axioma: 'Si cantidades iguales se dividen por una misma cantidad (distinta de cero)...'", a: "La igualdad subsiste.", options: ["La igualdad subsiste.", "La igualdad se invierte.", "La ecuación se anula."]},
                { q: "Axioma: 'Si dos cantidades son iguales, sus potencias (iguales) son iguales.'", a: "Verdadero (ej. si x=2, $x^2=2^2$).", options: ["Verdadero (ej. si x=2, $x^2=2^2$).", "Falso, solo aplica a la suma.", "Falso, solo aplica a la multiplicación."]},
                { q: "Axioma: 'Si dos cantidades son iguales, sus raíces (iguales) son iguales.'", a: "Verdadero (ej. si x=9, $\\sqrt{x}=\\sqrt{9}$).", options: ["Verdadero (ej. si x=9, $\\sqrt{x}=\\sqrt{9}$).", "Falso, solo aplica a la suma.", "Falso, solo aplica a la multiplicación."]},
                { q: "¿Qué es 'resolver' una ecuación?", a: "Hallar sus raíces, es decir, los valores que la hacen verdadera.", options: ["Hallar sus raíces, es decir, los valores que la hacen verdadera.", "Simplificarla al máximo.", "Graficar la ecuación."]}
            ]
        },
        'VIII. Ecuaciones - Transposición y Reglas de Despeje': {
            preguntas: [
                { q: "¿Qué es la 'transposición de términos'?", a: "La regla que permite pasar un término de un miembro a otro de la ecuación realizando la operación inversa.", options: ["La regla que permite pasar un término de un miembro a otro de la ecuación realizando la operación inversa.", "Cambiar el orden de los términos en un mismo miembro.", "Eliminar un término de la ecuación."]},
                { q: "¿En qué axioma se basa la transposición de términos que están sumando o restando?", a: "En el axioma de sumar o restar la misma cantidad a ambos miembros.", options: ["En el axioma de sumar o restar la misma cantidad a ambos miembros.", "En el axioma de multiplicar o dividir.", "En la ley conmutativa."]},
                { q: "Si un término está sumando en un miembro, ¿cómo pasa al otro miembro?", a: "Restando.", options: ["Restando.", "Sumando.", "Multiplicando."]},
                { q: "Si un término está restando en un miembro, ¿cómo pasa al otro miembro?", a: "Sumando.", options: ["Sumando.", "Restando.", "Dividiendo."]},
                { q: "Si un factor está multiplicando a todo un miembro, ¿cómo pasa al otro miembro?", a: "Dividiendo a todo el otro miembro.", options: ["Dividiendo a todo el otro miembro.", "Multiplicando", "Restando."]},
                { q: "Si un factor está dividiendo a todo un miembro, ¿cómo pasa al otro miembro?", a: "Multiplicando a todo el otro miembro.", options: ["Multiplicando a todo el otro miembro.", "Dividiendo", "Sumando."]},
                { q: "La regla 'se pueden cambiar los signos a todos los términos de una ecuación' equivale a...", a: "Multiplicar (o dividir) ambos miembros por -1.", options: ["Multiplicar (o dividir) ambos miembros por -1.", "Sumar -1 a ambos miembros.", "Invertir la ecuación."]},
                { q: "¿Qué es 'despejar' la incógnita?", a: "Dejarla sola en el primer miembro de la ecuación.", options: ["Dejarla sola en el primer miembro de la ecuación.", "Encontrar su valor numérico.", "Eliminarla de la ecuación."]},
                { q: "En $5x=10$, ¿cómo se despeja $x$?", a: "Pasando el 5 (que multiplica) a dividir: $x=10/5$.", options: ["Pasando el 5 (que multiplica) a dividir: $x=10/5$.", "Pasando el 5 a restar: $x=10-5$.", "Cambiando el signo: $-5x=-10$."]},
                { q: "En $x/2=3$, ¿cómo se despeja $x$?", a: "Pasando el 2 (que divide) a multiplicar: $x=3*2$.", options: ["Pasando el 2 (que divide) a multiplicar: $x=3*2$.", "Pasando el 2 a restar: $x=3-2$.", "Multiplicando por -1."]}
            ]
        },

        // TEMA: X. Descomposición Factorial
        'X. Factorial - Conceptos y Caso I (Factor Común Monomio)': {
            preguntas: [
                { q: "¿Qué es 'factorar' o 'descomponer en factores' una expresión algebraica?", a: "Convertirla en el producto indicado de sus factores.", options: ["Convertirla en el producto indicado de sus factores.", "Resolver la expresión para un valor dado.", "Reducir sus términos semejantes."]},
                { q: "¿Qué son los 'factores primos'?", a: "Las expresiones que solo son divisibles por ellas mismas y por la unidad.", options: ["Las expresiones que solo son divisibles por ellas mismas y por la unidad.", "Los factores que tienen signo positivo.", "Los primeros dos factores de un producto."]},
                { q: "Caso I: ¿Cuándo todos los términos de un polinomio tienen un 'factor común'?", a: "Cuando una misma cantidad (número o letra) se halla contenida en todos los términos.", options: ["Cuando una misma cantidad (número o letra) se halla contenida en todos los términos.", "Cuando el polinomio es un trinomio.", "Cuando todos los coeficientes son iguales."]},
                { q: "Para sacar el factor común monomio, ¿qué se hace con la parte literal?", a: "Se escogen las letras comunes a todos los términos, elevadas al *menor* exponente con que aparezcan.", options: ["Se escogen las letras comunes a todos los términos, elevadas al *menor* exponente con que aparezcan.", "Se escogen todas las letras, elevadas al *mayor* exponente.", "Se suman todos los exponentes."]},
                { q: "Para sacar el factor común monomio, ¿qué se hace con los coeficientes?", a: "Se halla el Máximo Común Divisor (MCD) de todos los coeficientes numéricos.", options: ["Se halla el Máximo Común Divisor (MCD) de todos los coeficientes numéricos.", "Se suman todos los coeficientes.", "Se multiplican los coeficientes."]},
                { q: "¿Cuál es el factor común en $10a^2 + 5a$?", a: "$5a$", options: ["$5a$", "$5a^2$", "$10a$"]},
                { q: "¿Cuál es el factor común en $6x^3y - 12x^2y^2 + 18x^4$?", a: "$6x^2$", options: ["$6x^2$", "$6x^4y^2$", "$18x^4$"]},
                { q: "Al factorizar $a(x+1) + b(x+1)$, ¿cuál es el factor común?", a: "$(x+1)$ (Factor Común Polinomio)", options: ["$(x+1)$ (Factor Común Polinomio)", "$a+b$", "$x$"]},
                { q: "Factorizar $5a(a-b) - b(a-b)$ da como resultado:", a: "$(a-b)(5a-b)$", options: ["$(a-b)(5a-b)$", "$5a-b$", "$(a-b)^2$"]},
                { q: "Descomponer $x^2+x$ es:", a: "$x(x+1)$", options: ["$x(x+1)$", "$x^3$", "$2x^2$"]}
            ]
        },
        'X. Factorial - Caso II (Factor Común por Agrupación)': {
            preguntas: [
                { q: "Caso II: ¿Cuándo se aplica el factor común por agrupación de términos?", a: "Cuando los términos del polinomio no tienen un factor común a todos, pero pueden agruparse en binomios o trinomios que sí lo tienen.", options: ["Cuando los términos del polinomio no tienen un factor común a todos, pero pueden agruparse en binomios o trinomios que sí lo tienen.", "Cuando el polinomio es un trinomio cuadrado perfecto.", "Cuando es una diferencia de cuadrados."]},
                { q: "¿Cuál es el objetivo de agrupar términos en el Caso II?", a: "Lograr que, al factorizar cada grupo, aparezca un nuevo factor común (que es un polinomio).", options: ["Lograr que, al factorizar cada grupo, aparezca un nuevo factor común (que es un polinomio).", "Reducir el número de términos a la mitad.", "Convertir la expresión en una suma."]},
                { q: "Un polinomio que se factoriza por agrupamiento usualmente tiene...", a: "Un número par de términos (4, 6, 8...).", options: ["Un número par de términos (4, 6, 8...).", "Un número impar de términos (3, 5...).", "Exactamente dos términos."]},
                { q: "Al factorizar $am + bm + an + bn$, ¿cuál es el factor común polinomio que aparece?", a: "$(a + b)$ o $(m + n)$ (dependiendo de la agrupación).", options: ["$(a + b)$ o $(m + n)$ (dependiendo de la agrupación).", "$(a - b)$", "$(m - n)$", "$abm$"]},
                { q: "Al agrupar $ax - bx + ay - by$, una agrupación correcta es:", a: "$(ax - bx) + (ay - by)$", options: ["$(ax - bx) + (ay - by)$", "$(ax + ay) - (bx - by)$ (Incorrecto por signo)", "No se puede agrupar."]},
                { q: "La factorización de $ax - bx + ay - by$ es:", a: "$(a-b)(x+y)$", options: ["$(a-b)(x+y)$", "$(a+b)(x-y)$", "$(a-x)(b-y)$"]},
                { q: "Al agrupar $a^2 + ab - ac - bc$, ¿qué agrupación revela el factor común?", a: "$a(a+b) - c(a+b)$", options: ["$a(a+b) - c(a+b)$", "$a^2-ac + ab-bc$", "$a(a+c) - b(a+c)$"]},
                { q: "Al agrupar, ¿qué es crucial si se introduce un grupo en un paréntesis precedido del signo MENOS?", a: "Se deben cambiar los signos de los términos introducidos.", options: ["Se deben cambiar los signos de los términos introducidos.", "Se deben dejar los mismos signos.", "Se debe sumar 1 al grupo."]},
                { q: "La expresión $3m - 2n - 2nx^4 + 3mx^4$ se factoriza agrupando:", a: "$(3m+3mx^4) - (2n+2nx^4)$", options: ["$(3m+3mx^4) - (2n+2nx^4)$", "$(3m-2n) + (3mx^4-2nx^4)$", "No se puede factorizar."]},
                { q: "La factorización final de $3m - 2n - 2nx^4 + 3mx^4$ es:", a: "$(3m-2n)(1+x^4)$", options: ["$(3m-2n)(1+x^4)$", "$(3m+2n)(1-x^4)$", "$(3m-2n)$"]}
            ]
        },
        'X. Factorial - Caso III (Trinomio Cuadrado Perfecto - TCP)': {
            preguntas: [
                { q: "Caso III: ¿Cuál es la primera regla para que un trinomio sea 'cuadrado perfecto'?", a: "Que el primer y tercer término sean cuadrados perfectos (y positivos).", options: ["Que el primer y tercer término sean cuadrados perfectos (y positivos).", "Que todos los términos sean positivos.", "Que el segundo término sea un cuadrado perfecto."]},
                { q: "Caso III: ¿Cuál es la segunda regla para que un trinomio sea 'cuadrado perfecto'?", a: "Que el segundo término sea el doble producto de las raíces cuadradas del primer y tercer término.", options: ["Que el segundo término sea el doble producto de las raíces cuadradas del primer y tercer término.", "Que el segundo término sea la mitad de la suma de los otros dos.", "Que todos los exponentes sean pares."]},
                { q: "¿Cómo se factoriza un Trinomio Cuadrado Perfecto (TCP)?", a: "Se extrae la raíz cuadrada del primer y tercer término, y se separan estas raíces por el signo del segundo término, elevando el binomio al cuadrado.", options: ["Se extrae la raíz cuadrada del primer y tercer término, y se separan estas raíces por el signo del segundo término, elevando el binomio al cuadrado.", "Se buscan dos números que multiplicados den el tercero.", "Se saca el factor común de los tres términos."]},
                { q: "La expresión $(a + b)^2$ es el desarrollo de un...", a: "Binomio al cuadrado (y da un TCP).", options: ["Binomio al cuadrado (y da un TCP).", "Binomio conjugado.", "Diferencia de cuadrados."]},
                { q: "El trinomio $4x^2 - 12xy + 9y^2$ es un TCP porque...", a: "Sus raíces son $2x$, $3y$, y $2(2x)(3y) = 12xy$.", options: ["Sus raíces son $2x$, $3y$, y $2(2x)(3y) = 12xy$.", "Todos sus coeficientes son múltiplos de 2.", "Tiene tres términos."]},
                { q: "¿Cuál es la factorización de $a^2 + 2ab + b^2$?", a: "$(a+b)^2$", options: ["$(a+b)^2$", "$(a-b)^2$", "$(a+b)(a-b)$"]},
                { q: "¿Cuál es la factorización de $x^2 - 2x + 1$?", a: "$(x-1)^2$", options: ["$(x-1)^2$", "$(x+1)^2$", "$x(x-2)+1$"]},
                { q: "¿Es $x^2 + 5x + 4$ un TCP?", a: "No, porque el doble producto de las raíces (2 * x * 2) es 4x, no 5x.", options: ["No, porque el doble producto de las raíces (2 * x * 2) es 4x, no 5x.", "Sí, porque sus raíces son $x$ y $2$.", "Sí, porque todos son positivos."]},
                { q: "¿Qué es 'completar' un Trinomio Cuadrado Perfecto?", a: "Sumar y restar la cantidad necesaria para que el trinomio cumpla la regla del segundo término.", options: ["Sumar y restar la cantidad necesaria para que el trinomio cumpla la regla del segundo término.", "Eliminar el segundo término.", "Añadir un cuarto término."]},
                { q: "La raíz cuadrada de $36x^4$ es:", a: "$6x^2$", options: ["$6x^2$", "$6x$", "$18x^2$"]}
            ]
        },
        'X. Factorial - Caso IV (Diferencia de Cuadrados Perfectos)': {
            preguntas: [
                { q: "Caso IV: ¿Cómo se identifica una 'diferencia de cuadrados perfectos'?", a: "Es un binomio formado por dos términos que tienen raíz cuadrada exacta, separados por el signo MENOS.", options: ["Es un binomio formado por dos términos que tienen raíz cuadrada exacta, separados por el signo MENOS.", "Un binomio donde ambos términos son negativos.", "Un trinomio que no es cuadrado perfecto."]},
                { q: "¿Cómo se factoriza una diferencia de cuadrados ($a^2 - b^2$)?", a: "Como el producto de la suma por la diferencia de sus raíces cuadradas: $(a + b)(a - b)$.", options: ["Como el producto de la suma por la diferencia de sus raíces cuadradas: $(a + b)(a - b)$.", "Como $(a - b)^2$.", "Como $(a + b)^2$."]},
                { q: "El producto $(a + b)(a - b)$ se llama...", a: "Producto de binomios conjugados.", options: ["Producto de binomios conjugados.", "Binomio al cuadrado.", "Producto de binomios con término común."]},
                { q: "¿Se puede factorizar una 'suma de cuadrados' ($a^2 + b^2$) con las reglas de Baldor?", a: "No, la suma de dos cuadrados perfectos se considera prima en este contexto (no se descompone en factores reales).", options: ["No, la suma de dos cuadrados perfectos se considera prima en este contexto (no se descompone en factores reales).", "Sí, se factoriza como $(a + b)^2$.", "Sí, se factoriza como $(a - b)^2$."]},
                { q: "¿Cuál es la factorización de $1 - 9a^2$?", a: "$(1 + 3a)(1 - 3a)$", options: ["$(1 + 3a)(1 - 3a)$", "$(1 - 3a)^2$", "$(1 + 3a)^2$"]},
                { q: "¿Cuál es la factorización de $x^4 - 16$?", a: "$(x^2+4)(x+2)(x-2)$ (Se factoriza dos veces)", options: ["$(x^2+4)(x+2)(x-2)$ (Se factoriza dos veces)", "$(x^2-4)(x^2+4)$", "$(x-2)^2 (x+2)^2$"]},
                { q: "La raíz cuadrada de $25a^2b^4$ es:", a: "$5ab^2$", options: ["$5ab^2$", "$5a^2b^2$", "$25ab^2$"]},
                { q: "La factorización de $(a+b)^2 - c^2$ es:", a: "$(a+b+c)(a+b-c)$", options: ["$(a+b+c)(a+b-c)$", "$(a+b-c)^2$", "$(a+b)(a-b) - c^2$"]},
                { q: "¿Por qué $a^2 - b$ no es una diferencia de cuadrados (generalmente)?", a: "Porque $b$ no tiene (generalmente) raíz cuadrada exacta.", options: ["Porque $b$ no tiene (generalmente) raíz cuadrada exacta.", "Porque $a$ es positiva.", "Porque falta un tercer término."]},
                { q: "El producto de $(x-y)$ por $(x+y)$ da:", a: "$x^2 - y^2$", options: ["$x^2 - y^2$", "$x^2 + y^2$", "$x^2 - xy + y^2$"]}
            ]
        },
        'X. Factorial - Casos IX y X (Suma y Diferencia de Cubos Perfectos)': {
            preguntas: [
                { q: "¿Cómo se identifica una 'suma de cubos perfectos'?", a: "Un binomio con dos términos que tienen raíz cúbica exacta, separados por el signo MÁS.", options: ["Un binomio con dos términos que tienen raíz cúbica exacta, separados por el signo MÁS.", "Un binomio con exponentes 3.", "Un trinomio."]},
                { q: "Caso IX: ¿Cómo se factoriza una 'suma de cubos perfectos' ($a^3 + b^3$)?", a: "Como el producto de un binomio $(a + b)$ por un trinomio $(a^2 - ab + b^2)$.", options: ["Como el producto de un binomio $(a + b)$ por un trinomio $(a^2 - ab + b^2)$.", "Como $(a + b)^3$.", "Como $(a - b)(a^2 + ab + b^2)$."]},
                { q: "En la factorización de $a^3 + b^3$, ¿cuál es la regla del trinomio factor?", a: "El cuadrado de la primera raíz, MENOS el producto de las dos raíces, MÁS el cuadrado de la segunda raíz.", options: ["El cuadrado de la primera raíz, MENOS el producto de las dos raíces, MÁS el cuadrado de la segunda raíz.", "El cuadrado de la primera raíz, MÁS el producto de las dos raíces, MÁS el cuadrado de la segunda raíz.", "Es un trinomio cuadrado perfecto."]},
                { q: "Caso X: ¿Cómo se factoriza una 'diferencia de cubos perfectos' ($a^3 - b^3$)?", a: "Como el producto de un binomio $(a - b)$ por un trinomio $(a^2 + ab + b^2)$.", options: ["Como el producto de un binomio $(a - b)$ por un trinomio $(a^2 + ab + b^2)$.", "Como $(a - b)^3$.", "Como $(a + b)(a^2 - ab + b^2)$."]},
                { q: "En la factorización de $a^3 - b^3$, ¿cuál es la regla del trinomio factor?", a: "El cuadrado de la primera raíz, MÁS el producto de las dos raíces, MÁS el cuadrado de la segunda raíz.", options: ["El cuadrado de la primera raíz, MÁS el producto de las dos raíces, MÁS el cuadrado de la segunda raíz.", "El cuadrado de la primera raíz, MENOS el producto de las dos raíces, MÁS el cuadrado de la segunda raíz.", "Es un trinomio cuadrado perfecto."]},
                { q: "El trinomio $a^2 + ab + b^2$ (factor de una diferencia de cubos) ¿se puede factorizar más?", a: "No, se considera primo.", options: ["No, se considera primo.", "Sí, como $(a+b)^2$.", "Sí, sacando factor común $a$."]},
                { q: "La raíz cúbica de $8x^3$ es:", a: "$2x$", options: ["$2x$", "$2x^3$", "$4x$"]},
                { q: "La factorización de $x^3 - 1$ es:", a: "$(x-1)(x^2+x+1)$", options: ["$(x-1)(x^2+x+1)$", "$(x-1)^3$", "$(x+1)(x^2-x+1)$"]},
                { q: "La factorización de $y^3 + 8$ es:", a: "$(y+2)(y^2-2y+4)$", options: ["$(y+2)(y^2-2y+4)$", "$(y+2)^3$", "$(y-2)(y^2+2y+4)$"]},
                { q: "¿Es el trinomio $a^2 - ab + b^2$ un Trinomio Cuadrado Perfecto?", a: "No, porque el término medio debería ser $2ab$.", options: ["No, porque el término medio debería ser $2ab$.", "Sí, es el cuadrado de $(a-b)$.", "Sí, porque todos sus términos son positivos."]}
            ]
        },
        // Nota: Se omiten Casos V, VI, VII, VIII de factorización (trinomios) ya que no están explícitamente en el temario de la guía EMI.

        // TEMA: XVIII. Fórmulas
        'XVIII. Fórmulas - Definición y Aplicación': {
            preguntas: [
                { q: "¿Qué es una 'fórmula'?", a: "Una regla general o principio, expresada por medio de símbolos o letras.", options: ["Una regla general o principio, expresada por medio de símbolos o letras.", "Un tipo de ecuación que no tiene solución.", "Una expresión algebraica sin signo de igual."]},
                { q: "¿Cuál es la principal utilidad de una fórmula?", a: "Permite hallar un valor desconocido operando con los valores conocidos de las demás variables.", options: ["Permite hallar un valor desconocido operando con los valores conocidos de las demás variables.", "Demostrar leyes matemáticas.", "Memorizar reglas."]},
                { q: "¿Cuál es la diferencia entre una fórmula y una ecuación?", a: "Una fórmula es una regla general (identidad), mientras que una ecuación es una igualdad que es cierta solo para valores específicos.", options: ["Una fórmula es una regla general (identidad), mientras que una ecuación es una igualdad que es cierta solo para valores específicos.", "No hay diferencia, son sinónimos.", "Las fórmulas usan letras mayúsculas y las ecuaciones minúsculas."]},
                { q: "¿Qué significa 'evaluar' una fórmula?", a: "Sustituir los valores conocidos de las variables (literales) para encontrar el valor de la incógnita.", options: ["Sustituir los valores conocidos de las variables (literales) para encontrar el valor de la incógnita.", "Despejar una variable.", "Simplificar la fórmula."]},
                { q: "La fórmula $A = \\pi r^2$ expresa...", a: "El área de un círculo en función de su radio.", options: ["El área de un círculo en función de su radio.", "El volumen de una esfera.", "El perímetro de un círculo."]},
                { q: "En la fórmula $V = e^3$ (Volumen de un cubo), ¿cuál es la variable dependiente?", a: "$V$", options: ["$V$", "$e$", "3"]},
                { q: "En la fórmula $V = e^3$ (Volumen de un cubo), ¿cuál es la variable independiente?", a: "$e$", options: ["$e$", "$V$", "3"]},
                { q: "En la fórmula de interés $I = C \\cdot r \cdot t$, $I$ es el interés, $C$ es el capital, $r$ es la tasa y $t$ es el tiempo. ¿Qué representa la fórmula?", a: "Una regla para calcular el interés simple.", options: ["Una regla para calcular el interés simple.", "Una ecuación cuadrática.", "El área de un triángulo."]},
                { q: "Si $A=b \cdot h$ (área de un rectángulo), y $b=5$, $h=3$, ¿cuál es el valor de A?", a: "15", options: ["15", "8", "2"]},
                { q: "¿El uso de fórmulas se basa en qué principio?", a: "En el principio de sustitución.", options: ["En el principio de sustitución.", "En la factorización.", "En la división sintética."]}
            ]
        },
        'XVIII. Fórmulas - Despeje de Variables': {
            preguntas: [
                { q: "¿Qué es 'despejar' una variable en una fórmula?", a: "Es el proceso de modificar la fórmula de manera que la variable buscada quede sola en el primer miembro (o aislada en un miembro).", options: ["Es el proceso de modificar la fórmula de manera que la variable buscada quede sola en el primer miembro (o aislada en un miembro).", "Asignarle un valor numérico a esa variable.", "Eliminar esa variable de la fórmula."]},
                { q: "El 'despeje' de variables en una fórmula se basa en los principios (axiomas) de:", a: "Las ecuaciones (transposición de términos).", options: ["Las ecuaciones (transposición de términos).", "La factorización.", "La potenciación."]},
                { q: "Para despejar un término que está SUMANDO en un miembro, este pasa al otro miembro...", a: "Restando.", options: ["Restando.", "Sumando.", "Multiplicando."]},
                { q: "Para despejar un factor que está MULTIPLICANDO a una variable, este pasa al otro miembro...", a: "Dividiendo.", options: ["Dividiendo.", "Multiplicando.", "Restando."]},
                { q: "Para eliminar una RAÍZ CUADRADA que afecta a un miembro, ¿qué operación se aplica al otro miembro?", a: "Se eleva al cuadrado.", options: ["Se eleva al cuadrado.", "Se saca raíz cuadrada.", "Se multiplica por 2."]},
                { q: "Para eliminar un EXPONENTE (potencia) que afecta a una variable, ¿qué operación se aplica al otro miembro?", a: "Se extrae la raíz correspondiente.", options: ["Se extrae la raíz correspondiente.", "Se eleva a la misma potencia.", "Se divide por el exponente."]},
                { q: "En la fórmula $A = b \cdot h$, ¿cómo se despeja $b$?", a: "$b = A / h$", options: ["$b = A / h$", "$b = A - h$", "$b = A \cdot h$"]},
                { q: "En la fórmula $V = e^3$, ¿cómo se despeja $e$?", a: "$e = \\sqrt[3]{V}$", options: ["$e = \\sqrt[3]{V}$", "$e = V / 3$", "$e = V - 3$"]},
                { q: "En la fórmula $A = \\pi r^2$, ¿cómo se despeja $r$?", a: "$r = \\sqrt{A / \\pi}$", options: ["$r = \\sqrt{A / \\pi}$", "$r = A / 2\\pi$", "$r = A - \\pi$"]},
                { q: "En la fórmula $C = 2\\pi r$, ¿cómo se despeja $r$?", a: "$r = C / (2\\pi)$", options: ["$r = C / (2\\pi)$", "$r = C - 2\\pi$", "$r = \\sqrt{C / 2\\pi}$"]}
            ]
        },

        // TEMA: XX. Funciones
        'XX. Funciones - Constantes, Variables y Definición': {
            preguntas: [
                { q: "¿Qué es una 'constante'?", a: "Una cantidad que tiene un valor fijo y determinado.", options: ["Una cantidad que tiene un valor fijo y determinado.", "Una cantidad que toma diversos valores.", "La primera letra del alfabeto."]},
                { q: "¿Qué es una 'variable'?", a: "Una cantidad que toma diversos valores.", options: ["Una cantidad que toma diversos valores.", "Una cantidad con valor fijo.", "Una letra sin coeficiente."]},
                { q: "Según Baldor, ¿cuándo una variable es 'función' de otra?", a: "Cuando el valor de la primera variable depende del valor de la segunda.", options: ["Cuando el valor de la primera variable depende del valor de la segunda.", "Cuando las dos variables son iguales.", "Cuando las variables son constantes."]},
                { q: "En una función, ¿qué es la 'variable independiente'?", a: "Aquella a la que se le asignan valores arbitrarios.", options: ["Aquella a la que se le asignan valores arbitrarios.", "Aquella cuyo valor depende de la otra.", "Una constante."]},
                { q: "En una función, ¿qué es la 'variable dependiente' (o 'función')?", a: "Aquella cuyo valor depende de los valores que toma la variable independiente.", options: ["Aquella cuyo valor depende de los valores que toma la variable independiente.", "Aquella que siempre vale cero.", "El coeficiente de la función."]},
                { q: "En $y = 2x + 1$, ¿cuál es la variable independiente?", a: "$x$", options: ["$x$", "$y$", "1"]},
                { q: "En $y = 2x + 1$, ¿cuál es la variable dependiente?", a: "$y$", options: ["$y$", "$x$", "2"]},
                { q: "Las constantes se dividen en 'absolutas' y 'paramétricas'. ¿Qué es una constante absoluta?", a: "Aquella que siempre tiene el mismo valor (ej. 5, $\\pi$).", options: ["Aquella que siempre tiene el mismo valor (ej. 5, $\\pi$).", "Aquella que toma un valor fijo solo para un problema (ej. 'a' en $ax+b$).", "Una variable."]},
                { q: "¿Qué es una 'función' (definición moderna)?", a: "Una regla de correspondencia entre dos conjuntos (Dominio y Codominio) que asigna a cada elemento del Dominio *uno y solo un* elemento del Codominio.", options: ["Una regla de correspondencia entre dos conjuntos (Dominio y Codominio) que asigna a cada elemento del Dominio *uno y solo un* elemento del Codominio.", "Cualquier ecuación con $x$ e $y$.", "Una gráfica en el plano."]},
                { q: "¿Qué es el 'Dominio' de una función?", a: "El conjunto de todos los valores que puede tomar la variable independiente (x).", options: ["El conjunto de todos los valores que puede tomar la variable independiente (x).", "El conjunto de todos los valores que toma la variable dependiente (y).", "El valor más alto de la función."]}
            ]
        },
        'XX. Funciones - Notación y Gráficas (Plano Cartesiano)': {
            preguntas: [
                { q: "¿Qué significa la notación $y = f(x)$?", a: "Indica que 'y' es la variable dependiente (función) y 'x' es la variable independiente.", options: ["Indica que 'y' es la variable dependiente (función) y 'x' es la variable independiente.", "Significa 'y es igual a f por x'.", "Indica que solo se pueden usar los valores 'y', 'f', 'x'."]},
                { q: "¿Qué es el 'Plano Cartesiano'?", a: "Dos líneas rectas (ejes) que se cortan perpendicularmente en un punto (origen), dividiendo el plano en cuatro cuadrantes.", options: ["Dos líneas rectas (ejes) que se cortan perpendicularmente en un punto (origen), dividiendo el plano en cuatro cuadrantes.", "Un mapa para encontrar tesoros.", "Una fórmula matemática."]},
                { q: "¿Cómo se llama el eje horizontal en un plano cartesiano?", a: "Eje de las x o eje de las abscisas.", options: ["Eje de las x o eje de las abscisas.", "Eje de las y o eje de las ordenadas.", "Eje vertical."]},
                { q: "¿Cómo se llama el eje vertical en un plano cartesiano?", a: "Eje de las y o eje de las ordenadas.", options: ["Eje de las y o eje de las abscisas.", "Eje horizontal."]},
                { q: "¿Qué es la 'gráfica' de una función?", a: "La representación visual (línea o curva) de los pares de valores (x, y) que satisfacen la función.", options: ["La representación visual (línea o curva) de los pares de valores (x, y) que satisfacen la función.", "Una tabla de valores de la función.", "La fórmula de la función."]},
                { q: "¿Cómo se llama el punto (0, 0) donde se cortan los ejes?", a: "Origen.", options: ["Origen.", "Vértice.", "Intersección."]},
                { q: "Un punto $(x, y)$ en el plano cartesiano se llama:", a: "Coordenadas.", options: ["Coordenadas.", "Abscisa.", "Ordenada."]},
                { q: "En el par de coordenadas $(x, y)$, ¿qué representa $x$?", a: "La abscisa (distancia horizontal al origen).", options: ["La abscisa (distancia horizontal al origen).", "La ordenada (distancia vertical al origen).", "El grado de la función."]},
                { q: "En el par de coordenadas $(x, y)$, ¿qué representa $y$?", a: "La ordenada (distancia vertical al origen).", options: ["La ordenada (distancia vertical al origen).", "La abscisa (distancia horizontal al origen).", "La variable independiente."]},
                { q: "¿En qué cuadrante un punto tiene coordenadas $(-, +)$ (abscisa negativa, ordenada positiva)?", a: "Segundo Cuadrante.", options: ["Segundo Cuadrante.", "Primer Cuadrante.", "Tercer Cuadrante.", "Cuarto Cuadrante."]}
            ]
        },

        // TEMA: XXIV. Ecuaciones Simultáneas de Primer Grado
        'XXIV. Ecuaciones Simultáneas - Definiciones (Sistemas, Solución)': {
            preguntas: [
                { q: "¿Qué son 'ecuaciones simultáneas'?", a: "Dos o más ecuaciones con dos o más incógnitas que se satisfacen para los mismos valores de dichas incógnitas.", options: ["Dos o más ecuaciones con dos o más incógnitas que se satisfacen para los mismos valores de dichas incógnitas.", "Ecuaciones que tienen los mismos coeficientes.", "Ecuaciones que dan el mismo resultado por separado."]},
                { q: "¿Qué es un 'sistema de ecuaciones'?", a: "Una reunión de dos o más ecuaciones con dos o más incógnitas.", options: ["Una reunión de dos o más ecuaciones con dos o más incógnitas.", "Una sola ecuación con muchas letras.", "Un conjunto de ecuaciones sin solución."]},
                { q: "¿Qué es la 'solución' de un sistema de ecuaciones?", a: "El conjunto de valores de las incógnitas que satisface todas las ecuaciones del sistema al mismo tiempo.", options: ["El conjunto de valores de las incógnitas que satisface todas las ecuaciones del sistema al mismo tiempo.", "La solución de la primera ecuación del sistema.", "El promedio de todas las soluciones."]},
                { q: "Un sistema de ecuaciones que tiene una sola solución se llama:", a: "Determinado.", options: ["Determinado.", "Indeterminado.", "Incompatible."]},
                { q: "Un sistema de ecuaciones que NO tiene solución se llama:", a: "Incompatible (o ecuaciones independientes).", options: ["Incompatible (o ecuaciones independientes).", "Indeterminado.", "Determinado."]},
                { q: "Un sistema de ecuaciones que tiene infinitas soluciones se llama:", a: "Indeterminado (o ecuaciones equivalentes).", options: ["Indeterminado (o ecuaciones equivalentes).", "Determinado.", "Incompatible."]},
                { q: "¿Qué son 'ecuaciones equivalentes' en un sistema?", a: "Las que se obtienen una de la otra (ej. $x+y=2$ y $2x+2y=4$).", options: ["Las que se obtienen una de la otra (ej. $x+y=2$ y $2x+2y=4$).", "Ecuaciones que no tienen solución.", "Ecuaciones con las mismas letras."]},
                { q: "Geométricamente, la solución de un sistema $2 \\times 2$ (dos ecuaciones, dos incógnitas) representa...", a: "El punto de intersección de dos rectas.", options: ["El punto de intersección de dos rectas.", "El área entre dos rectas.", "La pendiente de las rectas."]},
                { q: "Geométricamente, ¿qué representa un sistema 'incompatible'?", a: "Dos rectas paralelas (nunca se cortan).", options: ["Dos rectas paralelas (nunca se cortan).", "Dos rectas que se cortan en un punto.", "La misma recta."]},
                { q: "Geométricamente, ¿qué representa un sistema 'indeterminado'?", a: "Dos ecuaciones que representan la misma recta (infinitos puntos de intersección).", options: ["Dos ecuaciones que representan la misma recta (infinitos puntos de intersección).", "Dos rectas paralelas.", "Dos rectas perpendiculares."]}
            ]
        },
        'XXIV. Ecuaciones Simultáneas - Método de Sustitución': {
            preguntas: [
                { q: "¿En qué consiste el 'Método de Eliminación por Sustitución'?", a: "En despejar una incógnita en una ecuación y sustituir su valor en la otra ecuación.", options: ["En despejar una incógnita en una ecuación y sustituir su valor en la otra ecuación.", "En sumar ambas ecuaciones directamente.", "En igualar las dos ecuaciones."]},
                { q: "¿Cuál es el primer paso del Método de Sustitución?", a: "Se despeja una de las incógnitas en una de las ecuaciones.", options: ["Se despeja una de las incógnitas en una de las ecuaciones.", "Se suman las ecuaciones.", "Se restan las ecuaciones."]},
                { q: "Tras despejar $x$ en la primera ecuación, ¿cuál es el segundo paso?", a: "Se sustituye el valor (expresión) de $x$ en la *segunda* ecuación.", options: ["Se sustituye el valor (expresión) de $x$ en la *segunda* ecuación.", "Se sustituye en la *misma* primera ecuación.", "Se iguala a cero."]},
                { q: "¿Qué se obtiene después de sustituir en la segunda ecuación?", a: "Una ecuación de primer grado con una sola incógnita.", options: ["Una ecuación de primer grado con una sola incógnita.", "Un sistema de ecuaciones nuevo.", "Una identidad (0=0)."      ]},
                { q: "Una vez hallado el valor de $y$, ¿cómo se halla $x$?", a: "Sustituyendo el valor de $y$ en la expresión donde se despejó $x$ (o en cualquier ecuación original).", options: ["Sustituyendo el valor de $y$ en la expresión donde se despejó $x$ (o en cualquier ecuación original).", "Repitiendo todo el proceso para $y$.", "Dividiendo $y$ entre $x$."]},
                { q: "Dado el sistema $x+y=5$ y $x-y=1$. Si despejo $x$ de la primera ($x=5-y$), ¿cuál es el siguiente paso?", a: "Sustituir $(5-y)$ en la $x$ de la *segunda* ecuación: $(5-y) - y = 1$.", options: ["Sustituir $(5-y)$ en la $x$ de la *segunda* ecuación: $(5-y) - y = 1$.", "Sustituir en la primera: $(5-y) + y = 5$.", "Despejar $y$."]},
                { q: "¿Cuándo es especialmente recomendable usar el Método de Sustitución?", a: "Cuando una de las incógnitas tiene coeficiente 1 o -1.", options: ["Cuando una de las incógnitas tiene coeficiente 1 o -1.", "Cuando todos los coeficientes son iguales.", "Cuando hay fracciones."]},
                { q: "¿Qué es 'eliminar' una incógnita?", a: "Hallar una sola ecuación que contenga solo la otra incógnita.", options: ["Hallar una sola ecuación que contenga solo la otra incógnita.", "Borrar la incógnita de la ecuación.", "Igualar la incógnita a cero."]},
                { q: "En el sistema $2x+y=4$ y $x=3$, ¿qué método es el más directo?", a: "Sustitución (sustituir $x=3$ en la primera).", options: ["Sustitución (sustituir $x=3$ en la primera).", "Igualación.", "Reducción."]},
                { q: "Si al sustituir se llega a una identidad (ej. $5=5$), ¿qué significa?", a: "Que el sistema es indeterminado (infinitas soluciones).", options: ["Que el sistema es indeterminado (infinitas soluciones).", "Que el sistema es incompatible (no hay solución).", "Que la solución es 5."]}
            ]
        },
        'XXIV. Ecuaciones Simultáneas - Método de Igualación': {
            preguntas: [
                { q: "¿En qué consiste el 'Método de Eliminación por Igualación'?", a: "En despejar la misma incógnita en ambas ecuaciones e igualar los dos valores obtenidos.", options: ["En despejar la misma incógnita en ambas ecuaciones e igualar los dos valores obtenidos.", "En sustituir el valor de una variable en la misma ecuación.", "En restar una ecuación de la otra."]},
                { q: "¿Cuál es el primer paso del Método de Igualación?", a: "Se despeja la *misma* incógnita (ej. $x$) en *ambas* ecuaciones.", options: ["Se despeja la *misma* incógnita (ej. $x$) en *ambas* ecuaciones.", "Se despeja una incógnita diferente en cada una.", "Se multiplican las ecuaciones."]},
                { q: "Tras despejar $x$ en ambas ecuaciones ($x=A$ y $x=B$), ¿cuál es el segundo paso?", a: "Se igualan las expresiones obtenidas ($A = B$).", options: ["Se igualan las expresiones obtenidas ($A = B$).", "Se suman ($A + B$).", "Se restan ($A - B$)."]},
                { q: "¿Qué se obtiene después de igualar las expresiones?", a: "Una ecuación de primer grado con una sola incógnita (la otra variable, $y$).", options: ["Una ecuación de primer grado con una sola incógnita (la otra variable, $y$).", "La solución final del sistema.", "Un número."]},
                { q: "¿Cuándo es especialmente recomendable usar el Método de Igualación?", a: "Cuando la misma incógnita ya está despejada o es muy fácil de despejar en ambas ecuaciones.", options: ["Cuando la misma incógnita ya está despejada o es muy fácil de despejar en ambas ecuaciones.", "Cuando los coeficientes son números grandes.", "Cuando una ecuación es múltiplo de la otra."]},
                { q: "Dado $x=2y+1$ y $x=3y-2$, ¿cuál es la ecuación resultante de la igualación?", a: "$2y+1 = 3y-2$", options: ["$2y+1 = 3y-2$", "$x = x$", "$2y+1+x = 3y-2+x$"]},
                { q: "Una vez hallado el valor de $y$ (tras igualar), ¿cómo se halla $x$?", a: "Sustituyendo $y$ en *cualquiera* de las dos expresiones despejadas.", options: ["Sustituyendo $y$ en *cualquiera* de las dos expresiones despejadas.", "Igualando de nuevo.", "Despejando $y$."]},
                { q: "Este método se basa en el axioma:", a: "'Cosas iguales a una tercera cosa, son iguales entre sí'.", options: ["'Cosas iguales a una tercera cosa, son iguales entre sí'.", "'El todo es mayor que la parte'.", "'La suma de los factores no altera el producto'."]},
                { q: "Si al igualar se llega a una contradicción (ej. $3=5$), ¿qué significa?", a: "Que el sistema es incompatible (no hay solución).", options: ["Que el sistema es incompatible (no hay solución).", "Que el sistema es indeterminado (infinitas soluciones).", "Que el despeje fue incorrecto."]},
                { q: "En $x+y=4$ y $x-y=2$. Despejando $x$ en ambas da: $x=4-y$ y $x=2+y$. ¿La igualación es?", a: "$4-y = 2+y$", options: ["$4-y = 2+y$", "$4-y = x$", "$x = x$"]}
            ]
        },
        'XXIV. Ecuaciones Simultáneas - Método de Reducción (Suma o Resta)': {
            preguntas: [
                { q: "¿En qué consiste el 'Método de Eliminación por Reducción'?", a: "En hacer que los coeficientes de una incógnita sean iguales en ambas ecuaciones pero con signo contrario, y luego sumar las ecuaciones.", options: ["En hacer que los coeficientes de una incógnita sean iguales en ambas ecuaciones pero con signo contrario, y luego sumar las ecuaciones.", "En reducir los términos semejantes de cada ecuación por separado.", "En dividir una ecuación por la otra."]},
                { q: "¿Cuál es el objetivo principal del Método de Reducción?", a: "Eliminar una de las incógnitas al sumar algebraicamente las dos ecuaciones.", options: ["Eliminar una de las incógnitas al sumar algebraicamente las dos ecuaciones.", "Igualar las dos ecuaciones.", "Sustituir una variable."]},
                { q: "¿Qué se debe hacer si los coeficientes de la variable a eliminar no son iguales y opuestos?", a: "Multiplicar una o ambas ecuaciones por números (MCM) para que lo sean.", options: ["Multiplicar una o ambas ecuaciones por números (MCM) para que lo sean.", "Usar otro método.", "Sumar las ecuaciones tal como están."]},
                { q: "Al sumar las ecuaciones y eliminar una variable, ¿qué se obtiene?", a: "Una ecuación de primer grado con una sola incógnita.", options: ["Una ecuación de primer grado con una sola incógnita.", "La solución de ambas variables.", "Una identidad (0=0)."      ]},
                { q: "Este método también es comúnmente conocido como...", a: "Método de Suma o Resta.", options: ["Método de Suma o Resta.", "Método de Despeje.", "Método de Gauss-Jordan."]},
                { q: "En $x+y=5$ y $x-y=1$, ¿qué variable se elimina al sumar las ecuaciones directamente?", a: "$y$ (porque $+y$ y $-y$ se anulan).", options: ["$y$ (porque $+y$ y $-y$ se anulan).", "$x$", "Ninguna."]},
                { q: "En $2x+3y=7$ y $x-2y=0$. Para eliminar $x$, ¿por cuánto multiplicas la segunda ecuación?", a: "Por -2.", options: ["Por -2.", "Por 2.", "Por 3."]},
                { q: "En $5x+2y=8$ y $3x-3y=6$. Para eliminar $y$, ¿por cuánto multiplicas la primera y segunda ecuación?", a: "Por 3 la primera, y por 2 la segunda.", options: ["Por 3 la primera, y por 2 la segunda.", "Por 3 ambas.", "Por 5 la primera, y por 3 la segunda."]},
                { q: "Si al sumar las ecuaciones se obtiene $0=0$, ¿qué significa?", a: "Que el sistema es indeterminado (infinitas soluciones).", options: ["Que el sistema es indeterminado (infinitas soluciones).", "Que el sistema es incompatible (no hay solución).", "Que la solución es (0,0)."   ]},
                { q: "Si al sumar las ecuaciones se obtiene $0=5$, ¿qué significa?", a: "Que el sistema es incompatible (no hay solución).", options: ["Que el sistema es incompatible (no hay solución).", "Que el sistema es indeterminado (infinitas soluciones).", "Que la solución es 5."]}
            ]
        }
    },
    'Cálculo Diferencial e Integral': {
        // TEMA: Unidad 1. Conceptos Esenciales de las Funciones
        '1.1 Conceptos Fundamentales de Función': {
            preguntas: [
                { q: "Según Salazar y Bahena, ¿qué es una 'función'?", a: "Una regla de correspondencia que asocia a cada elemento $x$ de un conjunto $A$ (Dominio) uno y solo un elemento $y$ de un conjunto $B$ (Codominio).", options: ["Una regla de correspondencia que asocia a cada elemento $x$ de un conjunto $A$ (Dominio) uno y solo un elemento $y$ de un conjunto $B$ (Codominio).", "Una ecuación con dos variables $x$ e $y$.", "Cualquier fórmula matemática que se pueda graficar."]},
                { q: "¿Qué es el 'Dominio' de una función?", a: "El conjunto de todos los valores de entrada (la variable independiente $x$) para los cuales la función está definida.", options: ["El conjunto de todos los valores de entrada (la variable independiente $x$) para los cuales la función está definida.", "El conjunto de todos los valores de salida (la variable dependiente $y$).", "El valor máximo que la función puede alcanzar."]},
                { q: "¿Qué es el 'Codominio' de una función?", a: "El conjunto $B$ al cual pertenecen los valores de salida de la función.", options: ["El conjunto $B$ al cual pertenecen los valores de salida de la función.", "El conjunto de todos los valores de entrada (la variable independiente $x$).", "El valor mínimo que la función puede tomar."]},
                { q: "¿Qué es la 'Imagen' o 'Rango' de una función?", a: "El subconjunto del Codominio formado por los valores que SÍ toma la variable dependiente $y$.", options: ["El subconjunto del Codominio formado por los valores que SÍ toma la variable dependiente $y$.", "El Dominio de la función.", "La gráfica de la función."]},
                { q: "En la relación $y = f(x)$, ¿cuál es la variable independiente?", a: "$x$", options: ["$x$", "$y$", "$f$"]},
                { q: "En la relación $y = f(x)$, ¿cuál es la variable dependiente?", a: "$y$", options: ["$y$", "$x$", "$f$"]},
                { q: "¿Cuál es la diferencia clave entre una 'relación' y una 'función'?", a: "En una función, a cada valor de $x$ le corresponde UN SOLO valor de $y$. En una relación, le pueden corresponder varios.", options: ["En una función, a cada valor de $x$ le corresponde UN SOLO valor de $y$. En una relación, le pueden corresponder varios.", "Son sinónimos.", "Las funciones usan letras, las relaciones números."]},
                { q: "Aplicación: En la función $f(x) = \sqrt{x}$, ¿cuál es el dominio natural (en los reales)?", a: "$x \geq 0$ (Todos los reales no negativos).", options: ["$x \geq 0$ (Todos los reales no negativos).", "Todos los números reales.", "Solo los números positivos ($x > 0$)." ]},
                { q: "Aplicación: En la función $f(x) = 1/x$, ¿cuál es el dominio natural (en los reales)?", a: "Todos los reales excepto $x=0$.", options: ["Todos los reales excepto $x=0$.", "Todos los números reales.", "Solo los números positivos."]},
                { q: "¿Cómo se llama el conjunto A en la notación $f: A \to B$?", a: "Dominio.", options: ["Dominio.", "Codominio.", "Rango."]}
            ]
        },
        '1.2 Nomenclatura y Notación': {
            preguntas: [
                { q: "¿Qué significa la notación $f: A \to B$?", a: "Describe una función $f$ que mapea elementos del conjunto $A$ (Dominio) a elementos del conjunto $B$ (Codominio).", options: ["Describe una función $f$ que mapea elementos del conjunto $A$ (Dominio) a elementos del conjunto $B$ (Codominio).", "Indica que el conjunto $A$ se divide entre el conjunto $B$.", "Es una fórmula para calcular $f$."]},
                { q: "En el temario, ¿qué significa la notación $f: Dmf \to Cdf$?", a: "Es una función $f$ que va de su Dominio ($Dmf$) a su Codominio ($Cdf$).", options: ["Es una función $f$ que va de su Dominio ($Dmf$) a su Codominio ($Cdf$).", "Significa 'Función = Dominio / Codominio'.", "Es el nombre completo de la función."]},
                { q: "¿Qué representa la 'gráfica' de una función?", a: "El conjunto de todos los pares ordenados $(x, y)$ en el plano cartesiano tales que $y = f(x)$.", options: ["El conjunto de todos los pares ordenados $(x, y)$ en el plano cartesiano tales que $y = f(x)$.", "Un dibujo de la fórmula.", "La tabla de valores de la función."]},
                { q: "¿Qué es la 'Prueba de la Recta Vertical'?", a: "Un método gráfico para determinar si una curva es una función: si una recta vertical toca la curva en más de un punto, NO es una función.", options: ["Un método gráfico para determinar si una curva es una función: si una recta vertical toca la curva en más de un punto, NO es una función.", "Un método para encontrar el dominio de una función.", "Un método para encontrar la pendiente."]},
                { q: "¿Qué significa 'evaluar' una función $f(x)$ en $x=a$?", a: "Sustituir el valor $a$ en todas las $x$ de la regla de correspondencia para hallar $f(a)$.", options: ["Sustituir el valor $a$ en todas las $x$ de la regla de correspondencia para hallar $f(a)$.", "Despejar $x$ de la función.", "Igualar la función a $a$."]},
                { q: "Aplicación: Si $f(x) = 2x+1$, ¿cuál es el valor de $f(3)$?", a: "7", options: ["7", "6", "5", "f(3)"]},
                { q: "Aplicación: Si $f(x) = x^2$, ¿cuál es el valor de $f(-2)$?", a: "4", options: ["4", "-4", "-2", "f(4)"]},
                { q: "¿Qué es la 'imagen' de $x$ bajo la función $f$?", a: "Es el valor $y$ (o $f(x)$) que le corresponde a esa $x$.", options: ["Es el valor $y$ (o $f(x)$) que le corresponde a esa $x$.", "Es el valor de $x$.", "Es la gráfica."]},
                { q: "La notación $y=f(x)$ fue introducida por el matemático:", a: "Leonhard Euler.", options: ["Leonhard Euler.", "Isaac Newton.", "Gottfried Leibniz."]},
                { q: "¿Qué es una 'función definida por partes' (o 'a trozos')?", a: "Aquella que tiene diferentes reglas de correspondencia (fórmulas) para diferentes partes de su dominio.", options: ["Aquella que tiene diferentes reglas de correspondencia (fórmulas) para diferentes partes de su dominio.", "Una función que no está completa.", "Una función que no es continua."]}
            ]
        },
        '1.3 Funciones Reales de Variable Real': {
            preguntas: [
                { q: "¿Qué es una 'función real de variable real'?", a: "Aquella cuyo dominio y codominio son subconjuntos de los números reales ($\\mathbb{R}$).", options: ["Aquella cuyo dominio y codominio son subconjuntos de los números reales ($\\mathbb{R}$).", "Una función que siempre da un resultado positivo y tangible.", "Una función que no incluye la variable $x$."]},
                { q: "¿Cómo se define una 'función algebraica'?", a: "Aquella que puede formarse usando un número finito de operaciones algebraicas (suma, resta, multiplicación, división, potencias, raíces).", options: ["Aquella que puede formarse usando un número finito de operaciones algebraicas (suma, resta, multiplicación, división, potencias, raíces).", "Aquella que usa funciones trigonométricas.", "Aquella que usa logaritmos."]},
                { q: "¿Cómo se define una 'función trascendente'?", a: "Aquella que no es algebraica. Incluye las trigonométricas, logarítmicas y exponenciales.", options: ["Aquella que no es algebraica. Incluye las trigonométricas, logarítmicas y exponenciales.", "Aquella que es muy compleja de resolver.", "Aquella cuyo dominio son todos los números reales."]},
                { q: "¿Qué es una 'función polinomial'?", a: "Un tipo de función algebraica cuya regla es un polinomio (ej. $f(x) = 3x^3 + 2x - 1$).", options: ["Un tipo de función algebraica cuya regla es un polinomio (ej. $f(x) = 3x^3 + 2x - 1$).", "Una función con muchos términos.", "Una función que siempre es una línea recta."]},
                { q: "¿Qué es una 'función racional'?", a: "Una función que es el cociente de dos polinomios, $f(x) = P(x) / Q(x)$.", options: ["Una función que es el cociente de dos polinomios, $f(x) = P(x) / Q(x)$.", "Una función que siempre tiene sentido (es 'racional').", "Una función que solo usa números enteros."]},
                { q: "¿Qué es una 'función irracional'?", a: "Una función algebraica que contiene la variable independiente bajo el signo de un radical (raíz).", options: ["Una función algebraica que contiene la variable independiente bajo el signo de un radical (raíz).", "Una función que no tiene sentido.", "Una función con números decimales."]},
                { q: "La función $f(x) = \sin(x)$ es un ejemplo de función:", a: "Trascendente (específicamente trigonométrica).", options: ["Trascendente (específicamente trigonométrica).", "Algebraica.", "Polinomial.", "Racional."]},
                { q: "La función $f(x) = \log_2(x)$ es un ejemplo de función:", a: "Trascendente (específicamente logarítmica).", options: ["Trascendente (específicamente logarítmica).", "Algebraica.", "Polinomial.", "Irracional."]},
                { q: "La función $f(x) = 3^x$ es un ejemplo de función:", a: "Trascendente (específicamente exponencial).", options: ["Trascendente (específicamente exponencial).", "Algebraica.", "Polinomial.", "Racional."]},
                { q: "La función $f(x) = (x+1) / (x-1)$ es un ejemplo de función:", a: "Algebraica (específicamente racional).", options: ["Algebraica (específicamente racional).", "Trascendente.", "Polinomial.", "Irracional."]}
            ]
        },

        // TEMA: Unidad 2. Límites de una Función
        '2.1 Idea Intuitiva de Límite': {
            preguntas: [
                { q: "¿Cuál es la 'idea intuitiva de límite'?", a: "Es el valor $L$ al cual la función $f(x)$ se 'acerca' o 'tiende' a medida que la variable $x$ se aproxima a un valor $a$.", options: ["Es el valor $L$ al cual la función $f(x)$ se 'acerca' o 'tiende' a medida que la variable $x$ se aproxima a un valor $a$.", "Es el valor exacto de la función en ese punto, $f(a)$.", "Es el valor máximo que la función puede alcanzar."]},
                { q: "¿Qué significa $\\lim_{x \\to a} f(x) = L$?", a: "Que podemos hacer que $f(x)$ esté tan cerca de $L$ como queramos, tomando $x$ suficientemente cerca de $a$ (pero no igual a $a$).", options: ["Que podemos hacer que $f(x)$ esté tan cerca de $L$ como queramos, tomando $x$ suficientemente cerca de $a$ (pero no igual a $a$).", "Que $f(a) = L$.", "Que $x = a$ y $f(x) = L$."]},
                { q: "¿Qué es un 'límite lateral por la derecha' ( $\\lim_{x \\to a^+}$ )?", a: "El valor al que se acerca $f(x)$ cuando $x$ se aproxima a $a$ tomando valores mayores que $a$.", options: ["El valor al que se acerca $f(x)$ cuando $x$ se aproxima a $a$ tomando valores mayores que $a$.", "El valor al que se acerca $f(x)$ cuando $x$ se aproxima a $a$ tomando valores menores que $a$.", "El límite de $f(x)$ en el lado positivo del eje Y."]},
                { q: "¿Qué es un 'límite lateral por la izquierda' ( $\\lim_{x \\to a^-}$ )?", a: "El valor al que se acerca $f(x)$ cuando $x$ se aproxima a $a$ tomando valores menores que $a$.", options: ["El valor al que se acerca $f(x)$ cuando $x$ se aproxima a $a$ tomando valores menores que $a$.", "El valor al que se acerca $f(x)$ cuando $x$ se aproxima a $a$ tomando valores mayores que $a$.", "El límite de $f(x)$ en el lado negativo del eje Y."]},
                { q: "¿Cuándo existe el límite $\\lim_{x \\to a} f(x)$? (Definición 2.2 del libro)", a: "Si y solo si los límites laterales existen y son iguales ( $\\lim_{x \\to a^+} f(x) = \\lim_{x \\to a^-} f(x)$ ).", options: ["Si y solo si los límites laterales existen y son iguales ( $\\lim_{x \\to a^+} f(x) = \\lim_{x \\to a^-} f(x)$ ).", "Si $f(a)$ está definida.", "Si el límite es un número positivo."]},
                { q: "Si $\\lim_{x \\to 2^-} f(x) = 5$ y $\\lim_{x \\to 2^+} f(x) = 5$, ¿cuál es el $\\lim_{x \\to 2} f(x)$?", a: "5", options: ["5", "No existe.", "10", "0"]},
                { q: "Si $\\lim_{x \\to 3^-} f(x) = 1$ y $\\lim_{x \\to 3^+} f(x) = 2$, ¿cuál es el $\\lim_{x \\to 3} f(x)$?", a: "No existe.", options: ["No existe.", "1", "2", "1.5"]},
                { q: "¿Qué es un 'límite infinito'?", a: "Cuando $f(x)$ crece o decrece sin límite (tiende a $\\infty$ o $-\\infty$) a medida que $x$ se acerca a $a$.", options: ["Cuando $f(x)$ crece o decrece sin límite (tiende a $\\infty$ o $-\\infty$) a medida que $x$ se acerca a $a$.", "Un límite que no se puede calcular.", "Un límite que es igual a cero."]},
                { q: "¿Qué representa gráficamente un límite infinito?", a: "Una asíntota vertical.", options: ["Una asíntota vertical.", "Una asíntota horizontal.", "Un agujero en la gráfica."]},
                { q: "¿Es necesario que $f(a)$ esté definida para que $\\lim_{x \\to a} f(x)$ exista?", a: "No, el límite solo se preocupa por los valores *cercanos* a $a$, no por el valor *en* $a$.", options: ["No, el límite solo se preocupa por los valores *cercanos* a $a$, no por el valor *en* $a$.", "Sí, si $f(a)$ no existe, el límite no existe.", "Sí, y $f(a)$ debe ser igual al límite."]}
            ]
        },
        '2.2 Teoremas de Límites': {
            preguntas: [
                { q: "Teorema 2.1: ¿Cuál es el límite de una constante $k$? ( $\\lim_{x \\to a} k$ )", a: "La misma constante $k$.", options: ["La misma constante $k$.", "$a$", "0", "$x$"]},
                { q: "Teorema 2.1: ¿Cuál es el límite de $x$ cuando $x$ tiende a $a$? ( $\\lim_{x \\to a} x$ )", a: "$a$", options: ["$a$", "$x$", "1", "0"]},
                { q: "Teorema 2.1 (Suma): El límite de $\\lim_{x \\to a} [f(x) + g(x)]$ es:", a: "La suma de los límites: $\\lim f(x) + \\lim g(x)$", options: ["La suma de los límites: $\\lim f(x) + \\lim g(x)$", "El producto de los límites.", "El límite de la primera función solamente."]},
                { q: "Teorema 2.1 (Producto): El límite de $\\lim_{x \\to a} [f(x) \\cdot g(x)]$ es:", a: "El producto de los límites: $\\lim f(x) \\cdot \\lim g(x)$", options: ["El producto de los límites: $\\lim f(x) \cdot \\lim g(x)$", "La suma de los límites.", "Cero."]},
                { q: "Teorema 2.1 (Cociente): El límite de $\\lim_{x \\to a} [f(x) / g(x)]$ es:", a: "El cociente de los límites, siempre que $\\lim g(x)$ no sea cero.", options: ["El cociente de los límites, siempre que $\\lim g(x)$ no sea cero.", "La resta de los límites.", "Uno."]},
                { q: "Teorema 2.1 (Constante por Función): El límite de $\\lim_{x \\to a} [c \cdot f(x)]$ es:", a: "La constante por el límite de la función: $c \cdot \\lim f(x)$", options: ["La constante por el límite de la función: $c \cdot \\lim f(x)$", "El límite de la función solamente.", "La constante solamente."]},
                { q: "Teorema 2.1 (Potencia): El límite de $\\lim_{x \\to a} [f(x)]^n$ es:", a: "$[\\lim f(x)]^n$ (El límite de la función, elevado a la potencia $n$).", options: ["$[\\lim f(x)]^n$ (El límite de la función, elevado a la potencia $n$).", "$n \cdot \\lim f(x)$", "El límite de $f(x)$."]},
                { q: "¿Qué es una 'forma indeterminada'?", a: "Una forma que no permite conocer el valor del límite directamente, como $0/0$ o $\\infty/\\infty$.", options: ["Una forma que no permite conocer el valor del límite directamente, como $0/0$ o $\\infty/\\infty$.", "Un límite que no existe.", "Un límite que es igual a cero."]},
                { q: "¿Cómo se evalúa el límite de una función polinomial?", a: "Por sustitución directa (el límite es $f(a)$).", options: ["Por sustitución directa (el límite es $f(a)$).", "Factorizando siempre.", "Igualando a cero."]},
                { q: "Si al sustituir directamente en una función racional se obtiene $0/0$, ¿qué se debe hacer?", a: "Simplificar algebraicamente (factorizar y cancelar) e intentar sustituir de nuevo.", options: ["Simplificar algebraicamente (factorizar y cancelar) e intentar sustituir de nuevo.", "El límite es 0.", "El límite no existe."]}
            ]
        },

        // TEMA: Unidad 3. La Derivada de una Función
        '3.1 Interpretación Geométrica y Física': {
            preguntas: [
                { q: "¿Cuál es la 'interpretación geométrica' de la derivada? (Concepto 3.1)", a: "Es la pendiente ( $m$ ) de la recta tangente a la gráfica de la función en un punto dado.", options: ["Es la pendiente ( $m$ ) de la recta tangente a la gráfica de la función en un punto dado.", "Es el área bajo la curva.", "Es el punto más alto de la gráfica."]},
                { q: "¿Cuál es la 'interpretación física' de la derivada? (Concepto 3.1)", a: "Es la razón de cambio instantánea de una variable con respecto a otra.", options: ["Es la razón de cambio instantánea de una variable con respecto a otra.", "Es la distancia total recorrida.", "Es la aceleración promedio."]},
                { q: "Si $s(t)$ es una función de posición con respecto al tiempo, ¿qué representa físicamente su derivada $s'(t)$?", a: "La velocidad instantánea.", options: ["La velocidad instantánea.", "La aceleración instantánea.", "La posición inicial."]},
                { q: "Si $v(t)$ es una función de velocidad con respecto al tiempo, ¿qué representa físicamente su derivada $v'(t)$?", a: "La aceleración instantánea.", options: ["La aceleración instantánea.", "La velocidad promedio.", "La posición."]},
                { q: "¿Qué es una 'razón de cambio promedio'?", a: "El cambio en $y$ dividido por el cambio en $x$ sobre un intervalo ( $\\Delta y / \\Delta x$ ).", options: ["El cambio en $y$ dividido por el cambio en $x$ sobre un intervalo ( $\\Delta y / \\Delta x$ ).", "La pendiente de la recta tangente.", "El valor final de la función."]},
                { q: "Geométricamente, ¿qué representa la 'razón de cambio promedio'?", a: "La pendiente de una recta secante que corta la curva en dos puntos.", options: ["La pendiente de una recta secante que corta la curva en dos puntos.", "La pendiente de la recta tangente.", "El área bajo la curva."]},
                { q: "¿Cómo se obtiene la 'razón de cambio instantánea' a partir de la promedio?", a: "Tomando el límite de la razón de cambio promedio cuando el intervalo ( $\\Delta x$ o $h$ ) tiende a cero.", options: ["Tomando el límite de la razón de cambio promedio cuando el intervalo ( $\\Delta x$ o $h$ ) tiende a cero.", "Promediando todas las razones de cambio.", "Multiplicando por $\\Delta x$."]},
                { q: "Aplicación: Si la derivada de una función en $x=3$ es $f'(3)=5$, ¿cuál es la pendiente de la recta tangente en ese punto?", a: "m = 5", options: ["m = 5", "m = 3", "m = 1/5"]},
                { q: "Aplicación: Si una función $s(t) = t^2$ representa la posición, ¿su velocidad instantánea en $t=2$ es?", a: "$s'(t) = 2t$, entonces $s'(2) = 4$.", options: ["$s'(t) = 2t$, entonces $s'(2) = 4$.", "$s(2) = 4$.", "No se puede saber."]},
                { q: "¿Qué es una 'recta normal'?", a: "La recta perpendicular a la recta tangente en el punto de tangencia.", options: ["La recta perpendicular a la recta tangente en el punto de tangencia.", "La recta paralela a la recta tangente.", "La recta secante."]}
            ]
        },
        '3.2 Definición de Derivada': {
            preguntas: [
                { q: "¿Cuál es la 'definición de derivada' de una función $f(x)$? (Definición 3.1)", a: "El límite: $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$", options: ["El límite: $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$", "El límite: $f'(x) = \\lim_{x \\to a} f(x)$", "La fórmula: $f(x) = ax + b$"]},
                { q: "En la definición de derivada $\\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x) - f(x)}{\\Delta x}$, ¿qué representa $\\Delta x$?", a: "El incremento en $x$ (también llamado $h$).", options: ["El incremento en $x$ (también llamado $h$).", "La pendiente de la tangente.", "La variable $y$."]},
                { q: "¿Qué significa que una función sea 'derivable' (o 'diferenciable') en un punto?", a: "Que la derivada existe en ese punto (el límite de la definición existe).", options: ["Que la derivada existe en ese punto (el límite de la definición existe).", "Que la función es continua en ese punto.", "Que la función es una línea recta."]},
                { q: "Relación Continuidad-Derivabilidad: Si una función es derivable en un punto, ¿es necesariamente continua en ese punto?", a: "Sí, la derivabilidad implica continuidad.", options: ["Sí, la derivabilidad implica continuidad.", "No, la continuidad implica derivabilidad.", "No, no hay relación."]},
                { q: "Relación Continuidad-Derivabilidad: Si una función es continua en un punto, ¿es necesariamente derivable en ese punto?", a: "No, la continuidad no implica derivabilidad (ej. una 'esquina' o 'pico').", options: ["No, la continuidad no implica derivabilidad (ej. una 'esquina' o 'pico').", "Sí, la continuidad implica derivabilidad.", "Sí, siempre son lo mismo."]},
                { q: "¿Cuál es una razón común por la que una función no es derivable en un punto?", a: "Tiene un 'pico' o 'esquina' (los límites laterales de la derivada son diferentes).", options: ["Tiene un 'pico' o 'esquina' (los límites laterales de la derivada son diferentes).", "El punto está en el origen.", "La función es positiva."]},
                { q: "¿Qué es la 'derivación'?", a: "El proceso de encontrar la derivada de una función.", options: ["El proceso de encontrar la derivada de una función.", "El proceso de encontrar la integral.", "El proceso de graficar."]},
                { q: "¿Cuál es la notación de Leibniz para la derivada?", a: "$dy/dx$", options: ["$dy/dx$", "$f'(x)$", "$D_x y$"]},
                { q: "¿Cuál es la notación de Lagrange para la derivada?", a: "$f'(x)$", options: ["$f'(x)$", "$dy/dx$", "$\\dot{y}$"]},
                { q: "¿Qué representa $f'(a)$?", a: "La derivada de la función $f(x)$ evaluada en el punto $x=a$.", options: ["La derivada de la función $f(x)$ evaluada en el punto $x=a$.", "La primera función de $a$.", "La función multiplicada por $a$."]}
            ]
        },
        '3.3 Fórmulas de Derivación y Regla de la Cadena': {
            preguntas: [
                { q: "Fórmula (Teorema 3.1): La derivada de una constante $f(x) = c$ es:", a: "$f'(x) = 0$", options: ["$f'(x) = 0$", "$f'(x) = 1$", "$f'(x) = c$"]},
                { q: "Fórmula (Teorema 3.2): La derivada de una potencia $f(x) = x^n$ es:", a: "$f'(x) = n \\cdot x^{n-1}$", options: ["$f'(x) = n \\cdot x^{n-1}$", "$f'(x) = (n+1) \\cdot x^{n+1}$", "$f'(x) = x^n$"]},
                { q: "Fórmula (Teorema 3.4 Suma): La derivada de $f(x) + g(x)$ es:", a: "La suma de sus derivadas: $f'(x) + g'(x)$", options: ["La suma de sus derivadas: $f'(x) + g'(x)$", "El producto de sus derivadas.", "Cero."]},
                { q: "Fórmula (Teorema 3.5 Producto): ¿Qué establece la 'Regla del Producto' para derivar $f(x) \\cdot g(x)$?", a: "$f(x)g'(x) + g(x)f'(x)$ (El primero por la derivada del segundo, más el segundo por la derivada del primero).", options: ["$f(x)g'(x) + g(x)f'(x)$ (El primero por la derivada del segundo, más el segundo por la derivada del primero).", "$f'(x) \\cdot g'(x)$ (El producto de las derivadas).", "$f(x)g(x) + f'(x)g'(x)$"]},
                { q: "Fórmula (Teorema 3.6 Cociente): ¿Qué establece la 'Regla del Cociente' para derivar $f(x) / g(x)$?", a: "$\\frac{g(x)f'(x) - f(x)g'(x)}{[g(x)]^2}$", options: ["$\\frac{g(x)f'(x) - f(x)g'(x)}{[g(x)]^2}$", "$\\frac{f'(x)}{g'(x)}$", "$\\frac{f(x)g'(x) - g(x)f'(x)}{[g(x)]^2}$"]},
                { q: "Fórmula (Teorema 3.7 Cadena): ¿Qué establece la 'Regla de la Cadena' para derivar una función compuesta $f(g(x))$?", a: "$f'(g(x)) \\cdot g'(x)$ (La derivada de la función externa evaluada en la interna, por la derivada de la interna).", options: ["$f'(g(x)) \\cdot g'(x)$ (La derivada de la función externa evaluada en la interna, por la derivada de la interna).", "$f'(x) \\cdot g'(x)$", "$f'(g(x)) + g'(x)$"]},
                { q: "Aplicación: ¿Cuál es la derivada de $f(x) = 5$?", a: "0", options: ["0", "1", "5"]},
                { q: "Aplicación: ¿Cuál es la derivada de $f(x) = x^3$?", a: "$3x^2$", options: ["$3x^2$", "$3x$", "$x^2$"]},
                { q: "Aplicación: ¿Cuál es la derivada de $f(x) = 4x^3$?", a: "$12x^2$", options: ["$12x^2$", "$4x^2$", "$12x^3$"]},
                { q: "Aplicación: ¿Cuál es la derivada de $f(x) = \sin(x)$?", a: "$\cos(x)$", options: ["$\cos(x)$", "$-\cos(x)$", "$-\sin(x)$"]}
            ]
        },

        // TEMA: Unidad 4. La Integral de una Función
        '4.1 Notación Sigma y Sumatorias': {
            preguntas: [
                { q: "¿Para qué se usa la 'Notación Sigma' ( $\\Sigma$ )? (Sección 4.1)", a: "Para representar sumas de muchos términos (sumatorias) de forma compacta.", options: ["Para representar sumas de muchos términos (sumatorias) de forma compacta.", "Para representar productos.", "Para representar límites."]},
                { q: "En la expresión $\\sum_{i=1}^{n} a_i$, ¿qué representa la $i$?", a: "El índice de la suma (o variable de la sumatoria).", options: ["El índice de la suma (o variable de la sumatoria).", "El resultado final.", "Una constante."]},
                { q: "En $\\sum_{i=1}^{n} a_i$, ¿qué representan el 1 y la $n$?", a: "El límite inferior y el límite superior de la suma.", options: ["El límite inferior y el límite superior de la suma.", "Los primeros dos términos.", "El dominio de la suma."]},
                { q: "Propiedad (4.1.1): La suma de una constante $c$ desde $i=1$ hasta $n$ ( $\\sum_{i=1}^{n} c$ ) es igual a:", a: "$c \\cdot n$", options: ["$c \\cdot n$", "$c$", "$n$"]},
                { q: "Propiedad (4.1.2): La linealidad $\\sum_{i=1}^{n} (a_i + b_i)$ es igual a:", a: "$\\sum a_i + \\sum b_i$", options: ["$\\sum a_i + \\sum b_i$", "$\\sum a_i \\cdot \\sum b_i$", "$\\sum (a_i - b_i)$"]},
                { q: "Propiedad (4.1.3): La linealidad $\\sum_{i=1}^{n} (c \\cdot a_i)$ es igual a:", a: "$c \\cdot \\sum a_i$", options: ["$c \cdot \\sum a_i$", "$c + \\sum a_i$", "$\\sum c$"]},
                { q: "¿Qué es una 'suma de Riemann'?", a: "Una aproximación del área bajo la curva mediante la suma de las áreas de rectángulos.", options: ["Una aproximación del área bajo la curva mediante la suma de las áreas de rectángulos.", "La suma de todos los números reales.", "El resultado de una derivada."]},
                { q: "La integral definida es, por definición, el límite de una...", a: "Suma de Riemann (cuando el número de rectángulos tiende a infinito).", options: ["Suma de Riemann (cuando el número de rectángulos tiende a infinito).", "Derivada.", "Función polinomial."]},
                { q: "Aplicación: ¿A qué es igual $\\sum_{i=1}^{3} i$?", a: "6 (porque $1+2+3=6$).", options: ["6 (porque $1+2+3=6$).", "3", "123"]},
                { q: "Aplicación: ¿A qué es igual $\\sum_{i=1}^{4} 5$?", a: "20 (porque $5+5+5+5=20$, o $5 \cdot 4=20$).", options: ["20 (porque $5+5+5+5=20$, o $5 \cdot 4=20$).", "5", "4"]}
            ]
        },
        '4.2 Integral Definida y Propiedades': {
            preguntas: [
                { q: "¿Qué es una 'antiderivada' o 'primitiva' de una función $f(x)$?", a: "Una función $F(x)$ tal que al derivarla ($F'(x)$) se obtiene $f(x)$.", options: ["Una función $F(x)$ tal que al derivarla ($F'(x)$) se obtiene $f(x)$.", "La integral definida de $f(x)$.", "El área bajo la curva de $f(x)$."]},
                { q: "¿Qué es la 'integral indefinida' $\\int f(x) \\,dx$?", a: "La familia de todas las antiderivadas de $f(x)$, representada como $F(x) + C$.", options: ["La familia de todas las antiderivadas de $f(x)$, representada como $F(x) + C$.", "El área exacta bajo la curva.", "Un número real."]},
                { q: "¿Qué representa la '$+C$' en la integral indefinida?", a: "La constante de integración.", options: ["La constante de integración.", "El codominio de la función.", "Un error en el cálculo."]},
                { q: "¿Qué es la 'integral definida' $\\int_{a}^{b} f(x) \\,dx$?", a: "Un número real que representa el área neta acumulada bajo la curva $f(x)$ desde $x=a$ hasta $x=b$.", options: ["Un número real que representa el área neta acumulada bajo la curva $f(x)$ desde $x=a$ hasta $x=b$.", "Una familia de funciones (antiderivadas).", "La pendiente de la curva en $b$."]},
                { q: "En $\\int_{a}^{b} f(x) \\,dx$, ¿cómo se llaman $a$ y $b$?", a: "Límites de integración (inferior y superior).", options: ["Límites de integración (inferior y superior).", "Constantes de integración.", "El dominio de la integral."]},
                { q: "¿Qué establece el 'Teorema Fundamental del Cálculo' (TFC, Parte 2)?", a: "Que si $F(x)$ es una antiderivada de $f(x)$, entonces $\\int_{a}^{b} f(x) \\,dx = F(b) - F(a)$.", options: ["Que si $F(x)$ es una antiderivada de $f(x)$, entonces $\\int_{a}^{b} f(x) \\,dx = F(b) - F(a)$.", "Que la derivada de una integral es la función original.", "Que la integral es la suma de rectángulos."]},
                { q: "Propiedad de Linealidad (4.2): $\\int_{a}^{b} [f(x) + g(x)] \\,dx$ es igual a:", a: "$\\int_{a}^{b} f(x) \\,dx + \\int_{a}^{b} g(x) \\,dx$", options: ["$\\int_{a}^{b} f(x) \\,dx + \\int_{a}^{b} g(x) \\,dx$", "$\\int_{a}^{b} f(x) \\,dx \\cdot \\int_{a}^{b} g(x) \\,dx$", "El área de $f(x)$ solamente."]},
                { q: "Propiedad de Linealidad (4.2): $\\int_{a}^{b} [c \\cdot f(x)] \\,dx$ es igual a:", a: "$c \\cdot \\int_{a}^{b} f(x) \\,dx$", options: ["$c \\cdot \\int_{a}^{b} f(x) \\,dx$", "$c + \\int_{a}^{b} f(x) \\,dx$", "La integral de $c$."]},
                { q: "Aplicación: ¿Cuál es la antiderivada (integral indefinida) de $f(x) = 2x$?", a: "$F(x) = x^2 + C$", options: ["$F(x) = x^2 + C$", "$F(x) = 2 + C$", "$F(x) = 2x^2 + C$"]},
                { q: "Aplicación: Usando el TFC, ¿cuál es el valor de $\\int_{0}^{2} 2x \\,dx$?", a: "4 (porque $F(x)=x^2$, y $F(2)-F(0) = 2^2 - 0^2 = 4$).", options: ["4 (porque $F(x)=x^2$, y $F(2)-F(0) = 2^2 - 0^2 = 4$).", "0", "8"]}
            ]
        }
    },
    'Geometría Analítica': {
        // TEMA: Capítulo I. Sistemas de Coordenadas
        'Cap. I - Sistema Coordenado Lineal y Segmentos Dirigidos': {
            preguntas: [
                { q: "¿Qué es un 'segmento dirigido'?", a: "Un segmento al que se le asigna una dirección o sentido (de un 'origen' a un 'extremo').", options: ["Un segmento al que se le asigna una dirección o sentido (de un 'origen' a un 'extremo').", "Un segmento que siempre es positivo.", "La distancia entre dos puntos."]},
                { q: "En un sistema coordenado lineal, ¿qué es un 'punto origen'?", a: "Un punto fijo (cero) desde el cual se miden las distancias.", options: ["Un punto fijo (cero) desde el cual se miden las distancias.", "El punto final del segmento.", "Un punto siempre positivo."]},
                { q: "¿Qué es la 'coordenada' de un punto en un sistema lineal?", a: "La distancia dirigida (con signo) desde el origen hasta el punto.", options: ["La distancia dirigida (con signo) desde el origen hasta el punto.", "La distancia absoluta (siempre positiva).", "El número de segmentos."]},
                { q: "Si A y B son dos puntos en un sistema lineal, el segmento dirigido $\overline{AB}$ tiene una magnitud definida por:", a: "$x_2 - x_1$ (coordenada del extremo menos coordenada del origen).", options: ["$x_2 - x_1$ (coordenada del extremo menos coordenada del origen).", "$x_1 - x_2$", "$x_1 + x_2$"]},
                { q: "¿Qué relación existe entre los segmentos dirigidos $\overline{AB}$ y $\overline{BA}$?", a: "Son opuestos: $\overline{AB} = - \overline{BA}$.", options: ["Son opuestos: $\overline{AB} = - \overline{BA}$.", "Son iguales: $\overline{AB} = \overline{BA}$.", "No tienen relación."]},
                { q: "¿Qué es la 'distancia' (no dirigida) entre dos puntos $P_1(x_1)$ y $P_2(x_2)$ en un sistema lineal?", a: "El valor absoluto de la magnitud: $|x_2 - x_1|$ o $|x_1 - x_2|$.", options: ["El valor absoluto de la magnitud: $|x_2 - x_1|$ o $|x_1 - x_2|$.", "Siempre $x_2 - x_1$.", "Siempre $x_1 - x_2$."]},
                { q: "Aplicación: ¿Cuál es la magnitud del segmento dirigido $\overline{AB}$ si $A(-3)$ y $B(5)$?", a: "8 (porque $5 - (-3) = 8$).", options: ["8 (porque $5 - (-3) = 8$).", "-8 (porque $-3 - 5 = -8$).", "2"]},
                { q: "Aplicación: ¿Cuál es la magnitud del segmento dirigido $\overline{BA}$ si $A(-3)$ y $B(5)$?", a: "-8 (porque $-3 - 5 = -8$).", options: ["-8 (porque $-3 - 5 = -8$).", "8 (porque $5 - (-3) = 8$).", "2"]},
                { q: "Aplicación: ¿Cuál es la distancia (no dirigida) entre $A(-3)$ y $B(5)$?", a: "8", options: ["8", "-8", "2"]},
                { q: "¿Qué es un 'sistema coordenado lineal'?", a: "Una recta en la que se fija un punto origen (0) y una unidad de medida.", options: ["Una recta en la que se fija un punto origen (0) y una unidad de medida.", "Un plano con dos ejes.", "Un segmento curvo."]}
            ]
        },
        'Cap. I - Sistema Coordenado Cartesiano (Rectangular)': {
            preguntas: [
                { q: "¿Qué es un 'sistema coordenado cartesiano' (o rectangular)?", a: "Dos rectas perpendiculares (ejes) que se cortan en un punto (origen), usado para localizar puntos en un plano.", options: ["Dos rectas perpendiculares (ejes) que se cortan en un punto (origen), usado para localizar puntos en un plano.", "Una sola recta numérica.", "Tres ejes en el espacio."]},
                { q: "¿Cómo se llama el eje horizontal?", a: "Eje X (eje de las abscisas).", options: ["Eje X (eje de las abscisas).", "Eje Y (eje de las ordenadas).", "Eje Z."]},
                { q: "¿Cómo se llama el eje vertical?", a: "Eje Y (eje de las ordenadas).", options: ["Eje Y (eje de las ordenadas).", "Eje X (eje de las abscisas).", "Eje Z."]},
                { q: "¿Cómo se llama el punto de intersección de los ejes?", a: "Origen (0, 0).", options: ["Origen (0, 0).", "Vértice.", "Punto medio."]},
                { q: "¿En cuántas regiones (cuadrantes) dividen los ejes al plano?", a: "Cuatro.", options: ["Cuatro.", "Dos.", "Tres."]},
                { q: "¿Qué signos tienen las coordenadas $(x, y)$ en el Cuadrante II?", a: "$(-, +)$ (abscisa negativa, ordenada positiva).", options: ["$(-, +)$ (abscisa negativa, ordenada positiva).", "$(+, +)$", "$(-, -)$", "$(+, -)$"]},
                { q: "¿Qué signos tienen las coordenadas $(x, y)$ en el Cuadrante IV?", a: "$(+, -)$ (abscisa positiva, ordenada negativa).", options: ["$(+, -)$ (abscisa positiva, ordenada negativa).", "$(+, +)$", "$(-, -)$", "$(-, +)$"]},
                { q: "¿Qué es la 'abscisa' de un punto?", a: "La coordenada $x$ (distancia dirigida desde el eje Y al punto).", options: ["La coordenada $x$ (distancia dirigida desde el eje Y al punto).", "La coordenada $y$ (distancia dirigida desde el eje X al punto).", "La distancia al origen."]},
                { q: "¿Qué es la 'ordenada' de un punto?", a: "La coordenada $y$ (distancia dirigida desde el eje X al punto).", options: ["La coordenada $y$ (distancia dirigida desde el eje X al punto).", "La coordenada $x$ (distancia dirigida desde el eje Y al punto).", "La distancia al origen."]},
                { q: "Cualquier punto que esté sobre el Eje X, ¿qué valor tiene su ordenada (y)?", a: "Cero.", options: ["Cero.", "Uno.", "Positiva.", "Negativa."]}
            ]
        },
        'Cap. I - Distancia entre dos Puntos (Plano)': {
            preguntas: [
                { q: "¿Cuál es la fórmula para la distancia $d$ (no dirigida) entre dos puntos $P_1(x_1, y_1)$ y $P_2(x_2, y_2)$?", a: "$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$", options: ["$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$", "$d = \sqrt{(x_2 + x_1)^2 + (y_2 + y_1)^2}$", "$d = (x_2 - x_1) + (y_2 - y_1)$"]},
                { q: "¿De qué teorema se deduce la fórmula de la distancia entre dos puntos?", a: "Del Teorema de Pitágoras.", options: ["Del Teorema de Pitágoras.", "De la Ley de Senos.", "De la Ley de Cosenos."]},
                { q: "Aplicación: ¿Cuál es la distancia entre $P_1(1, 2)$ y $P_2(4, 6)$?", a: "5 ( $d = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{3^2 + 4^2} = \sqrt{9+16} = \sqrt{25}$ )", options: ["5", "7", "25", "3"]},
                { q: "¿Qué es el 'radio vector' de un punto $P(x, y)$?", a: "La distancia (siempre positiva) desde el origen (0, 0) hasta el punto $P$.", options: ["La distancia (siempre positiva) desde el origen (0, 0) hasta el punto $P$.", "El segmento dirigido desde el origen.", "La coordenada $x$."]},
                { q: "¿Cuál es la fórmula para el radio vector $r$ de un punto $P(x, y)$?", a: "$r = \sqrt{x^2 + y^2}$", options: ["$r = \sqrt{x^2 + y^2}$", "$r = x+y$", "$r = \sqrt{x^2 - y^2}$"]},
                { q: "Si la distancia entre dos puntos es 0, ¿qué significa?", a: "Que los dos puntos son el mismo punto.", options: ["Que los dos puntos son el mismo punto.", "Que están en el origen.", "Que están sobre el eje X."]},
                { q: "Si dos puntos $P_1(x_1, y_1)$ y $P_2(x_2, y_1)$ tienen la misma ordenada ($y_1=y_1$), ¿cuál es la fórmula de la distancia?", a: "$d = |x_2 - x_1|$", options: ["$d = |x_2 - x_1|$", "$d = |y_2 - y_1|$", "$d = 0$"]},
                { q: "Si dos puntos $P_1(x_1, y_1)$ y $P_2(x_1, y_2)$ tienen la misma abscisa ($x_1=x_1$), ¿cuál es la fórmula de la distancia?", a: "$d = |y_2 - y_1|$", options: ["$d = |y_2 - y_1|$", "$d = |x_2 - x_1|$", "$d = 0$"]},
                { q: "Un triángulo es 'isósceles' si...", a: "Tiene dos lados de igual longitud.", options: ["Tiene dos lados de igual longitud.", "Tiene tres lados de igual longitud.", "Sus tres lados son de diferente longitud."]},
                { q: "Un triángulo es 'equilátero' si...", a: "Tiene tres lados de igual longitud.", options: ["Tiene tres lados de igual longitud.", "Tiene dos lados de igual longitud.", "Sus tres lados son de diferente longitud."]}
            ]
        },
        'Cap. I - División de un Segmento en una Razón Dada': {
            preguntas: [
                { q: "¿Qué significa 'dividir un segmento $\overline{P_1P_2}$ en una razón dada $r$'?", a: "Hallar un punto $P(x, y)$ tal que $\overline{P_1P} / \overline{PP_2} = r$.", options: ["Hallar un punto $P(x, y)$ tal que $\overline{P_1P} / \overline{PP_2} = r$.", "Dividir la longitud del segmento entre $r$.", "Encontrar el punto medio."]},
                { q: "¿Cuál es la fórmula para la abscisa $x$ del punto $P$ que divide al segmento $\overline{P_1P_2}$ en la razón $r$?", a: "$x = (x_1 + r \cdot x_2) / (1 + r)$", options: ["$x = (x_1 + r \cdot x_2) / (1 + r)$", "$x = (x_1 + x_2) / r$", "$x = (x_1 - x_2) / 2$"]},
                { q: "¿Cuál es la fórmula para la ordenada $y$ del punto $P$ que divide al segmento $\overline{P_1P_2}$ en la razón $r$?", a: "$y = (y_1 + r \cdot y_2) / (1 + r)$", options: ["$y = (y_1 + r \cdot y_2) / (1 + r)$", "$y = (y_1 + y_2) / r$", "$y = (y_1 - y_2) / 2$"]},
                { q: "Si el punto $P$ está *entre* $P_1$ y $P_2$, ¿cómo debe ser la razón $r$?", a: "Positiva ($r > 0$).", options: ["Positiva ($r > 0$).", "Negativa ($-1 < r < 0$).", "Menor que -1 ($r < -1$)."]},
                { q: "Si el punto $P$ está en la *prolongación* del segmento (fuera de él), ¿cómo debe ser la razón $r$?", a: "Negativa ($r < 0$).", options: ["Negativa ($r < 0$).", "Positiva ($r > 0$).", "Igual a cero ($r = 0$)."]},
                { q: "¿Para qué valor de $r$ las fórmulas de la razón no están definidas (división por cero)?", a: "$r = -1$", options: ["$r = -1$", "$r = 0$", "$r = 1$"]},
                { q: "¿Qué valor tiene la razón $r$ para el 'punto medio' del segmento?", a: "$r = 1$", options: ["$r = 1$", "$r = 0$", "$r = 1/2$", "$r = -1$"]},
                { q: "¿Cuál es la fórmula para la abscisa del punto medio $x_m$?", a: "$x_m = (x_1 + x_2) / 2$", options: ["$x_m = (x_1 + x_2) / 2$", "$x_m = (x_1 - x_2) / 2$", "$x_m = (x_1 + 2x_2) / 2$"]},
                { q: "¿Cuál es la fórmula para la ordenada del punto medio $y_m$?", a: "$y_m = (y_1 + y_2) / 2$", options: ["$y_m = (y_1 + y_2) / 2$", "$y_m = (y_1 - y_2) / 2$", "$y_m = (y_1 + 2y_2) / 2$"]},
                { q: "Aplicación: ¿Cuál es el punto medio entre $P_1(2, 3)$ y $P_2(6, 7)$?", a: "(4, 5)", options: ["(4, 5)", "(8, 10)", "(3, 5)"]}
            ]
        },
        'Cap. I - Pendiente de una Recta': {
            preguntas: [
                { q: "¿Qué es la 'inclinación' de una recta (ángulo $\alpha$)?", a: "El ángulo (positivo, menor a 180°) que forma la recta con la dirección positiva del eje X.", options: ["El ángulo (positivo, menor a 180°) que forma la recta con la dirección positiva del eje X.", "El ángulo que forma con el eje Y.", "La longitud de la recta."]},
                { q: "¿Qué es la 'pendiente' de una recta ( $m$ )?", a: "La tangente trigonométrica de su ángulo de inclinación ( $m = \tan(\alpha)$ ).", options: ["La tangente trigonométrica de su ángulo de inclinación ( $m = \tan(\alpha)$ ).", "El seno de su ángulo de inclinación.", "El ángulo $\alpha$ en radianes."]},
                { q: "¿Cuál es la fórmula para la pendiente $m$ de una recta que pasa por $P_1(x_1, y_1)$ y $P_2(x_2, y_2)$?", a: "$m = (y_2 - y_1) / (x_2 - x_1)$", options: ["$m = (y_2 - y_1) / (x_2 - x_1)$", "$m = (x_2 - x_1) / (y_2 - y_1)$", "$m = (y_2 + y_1) / (x_2 + x_1)$"]},
                { q: "Si una recta es horizontal, ¿cuál es su ángulo de inclinación $\alpha$?", a: "$0^\circ$", options: ["$0^\circ$", "$90^\circ$", "$180^\circ$"]},
                { q: "Si una recta es horizontal, ¿cuál es su pendiente $m$?", a: "0 (cero).", options: ["0 (cero).", "1", "Indefinida."]},
                { q: "Si una recta es vertical, ¿cuál es su ángulo de inclinación $\alpha$?", a: "$90^\circ$", options: ["$90^\circ$", "$0^\circ$", "$180^\circ$"]},
                { q: "Si una recta es vertical, ¿cuál es su pendiente $m$?", a: "Indefinida (o no existe, $\tan(90^\circ)$).", options: ["Indefinida (o no existe, $\tan(90^\circ)$).", "0", "1"]},
                { q: "Si la pendiente $m$ es positiva, ¿qué tipo de ángulo $\alpha$ tiene la recta?", a: "Agudo ( $0^\circ < \alpha < 90^\circ$ ). La recta 'sube'.", options: ["Agudo ( $0^\circ < \alpha < 90^\circ$ ). La recta 'sube'.", "Obtuso ( $90^\circ < \alpha < 180^\circ$ ). La recta 'baja'.", "Recto ($\alpha = 90^\circ$)."]},
                { q: "Si la pendiente $m$ es negativa, ¿qué tipo de ángulo $\alpha$ tiene la recta?", a: "Obtuso ( $90^\circ < \alpha < 180^\circ$ ). La recta 'baja'.", options: ["Obtuso ( $90^\circ < \alpha < 180^\circ$ ). La recta 'baja'.", "Agudo ( $0^\circ < \alpha < 90^\circ$ ). La recta 'sube'.", "Recto ($\alpha = 90^\circ$)."]},
                { q: "¿Qué significa que tres puntos $P_1, P_2, P_3$ sean 'colineales'?", a: "Que están sobre la misma línea recta.", options: ["Que están sobre la misma línea recta.", "Que forman un triángulo.", "Que están en el origen."]}
            ]
        },
        'Cap. I - Ángulo entre Rectas (Paralelismo y Perpendicularidad)': {
            preguntas: [
                { q: "¿Cuál es la fórmula para la tangente del ángulo $\theta$ entre dos rectas $l_1$ (pendiente $m_1$) y $l_2$ (pendiente $m_2$)?", a: "$\\tan(\theta) = (m_2 - m_1) / (1 + m_1 \cdot m_2)$", options: ["$\\tan(\theta) = (m_2 - m_1) / (1 + m_1 \cdot m_2)$", "$\\tan(\theta) = (m_1 - m_2) / (1 + m_1 \cdot m_2)$", "$\\tan(\theta) = (m_1 + m_2) / (1 - m_1 \cdot m_2)$"]},
                { q: "En la fórmula $\\tan(\theta) = (m_2 - m_1) / (1 + m_1 \cdot m_2)$, ¿qué es $m_1$?", a: "La pendiente de la recta 'inicial' (donde empieza el ángulo $\theta$).", options: ["La pendiente de la recta 'inicial' (donde empieza el ángulo $\theta$).", "La pendiente de la recta 'final' (donde termina el ángulo $\theta$).", "La pendiente mayor."]},
                { q: "En la fórmula $\\tan(\theta) = (m_2 - m_1) / (1 + m_1 \cdot m_2)$, ¿qué es $m_2$?", a: "La pendiente de la recta 'final' (donde termina el ángulo $\theta$).", options: ["La pendiente de la recta 'final' (donde termina el ángulo $\theta$).", "La pendiente de la recta 'inicial' (donde empieza el ángulo $\theta$).", "La pendiente menor."]},
                { q: "¿Cuál es la condición (de pendientes) para que dos rectas sean PARALELAS?", a: "Sus pendientes deben ser iguales ( $m_1 = m_2$ ).", options: ["Sus pendientes deben ser iguales ( $m_1 = m_2$ ).", "Sus pendientes deben ser recíprocas y de signo contrario.", "El producto de sus pendientes debe ser 1."]},
                { q: "Si $l_1$ y $l_2$ son paralelas, ¿cuál es el ángulo $\theta$ entre ellas?", a: "$0^\circ$", options: ["$0^\circ$", "$90^\circ$", "$180^\circ$"]},
                { q: "¿Cuál es la condición (de pendientes) para que dos rectas sean PERPENDICULARES?", a: "Sus pendientes deben ser recíprocas y de signo contrario ( $m_1 = -1 / m_2$ ).", options: ["Sus pendientes deben ser recíprocas y de signo contrario ( $m_1 = -1 / m_2$ ).", "Sus pendientes deben ser iguales.", "La suma de sus pendientes debe ser 0."]},
                { q: "Si $l_1$ y $l_2$ son perpendiculares, ¿cuál es el producto de sus pendientes ($m_1 \cdot m_2$)?", a: "-1 (menos uno).", options: ["-1 (menos uno).", "1", "0"]},
                { q: "Si $l_1$ y $l_2$ son perpendiculares, ¿cuál es el ángulo $\theta$ entre ellas?", a: "$90^\circ$", options: ["$90^\circ$", "$0^\circ$", "$45^\circ$"]},
                { q: "Aplicación: Si la recta $l_1$ tiene pendiente 2, ¿cuál es la pendiente de una recta $l_2$ paralela a ella?", a: "2", options: ["2", "-2", "1/2", "-1/2"]},
                { q: "Aplicación: Si la recta $l_1$ tiene pendiente 3, ¿cuál es la pendiente de una recta $l_2$ perpendicular a ella?", a: "-1/3", options: ["-1/3", "3", "1/3", "-3"]}
            ]
        },
        'Cap. I - Área de un Polígono': {
            preguntas: [
                { q: "¿Cuál es la fórmula (método de determinantes) para el área $A$ de un triángulo con vértices $P_1(x_1, y_1)$, $P_2(x_2, y_2)$, $P_3(x_3, y_3)$?", a: "$A = (1/2) | (x_1y_2 + x_2y_3 + x_3y_1) - (y_1x_2 + y_2x_3 + y_3x_1) |$", options: ["$A = (1/2) | (x_1y_2 + x_2y_3 + x_3y_1) - (y_1x_2 + y_2x_3 + y_3x_1) |$", "$A = \sqrt{(x_1+x_2+x_3)^2 + (y_1+y_2+y_3)^2}$", "$A = (x_1+x_2+x_3) / (y_1+y_2+y_3)$"]},
                { q: "En la fórmula de área por determinantes, ¿qué es crucial sobre el orden de los vértices?", a: "Deben tomarse en orden, siguiendo un sentido antihorario (contrario a las manecillas del reloj).", options: ["Deben tomarse en orden, siguiendo un sentido antihorario (contrario a las manecillas del reloj).", "Deben tomarse en sentido horario.", "El orden no importa."]},
                { q: "Si se toman los vértices en sentido horario, ¿qué resultado da la fórmula del área (sin el valor absoluto)?", a: "Un valor negativo.", options: ["Un valor negativo.", "Un valor positivo.", "Cero."]},
                { q: "¿Cómo se puede extender la fórmula del área para un polígono de $n$ vértices?", a: "Usando el mismo método del determinante, listando los $n$ vértices y repitiendo el primero al final.", options: ["Usando el mismo método del determinante, listando los $n$ vértices y repitiendo el primero al final.", "No se puede, solo sirve para triángulos.", "Multiplicando el área del triángulo por $n$."]},
                { q: "Aplicación: ¿Cuál es el área de un triángulo con vértices (0, 0), (4, 0) y (0, 3)?", a: "6 ( $A = (1/2) | (0 \cdot 0 + 4 \cdot 3 + 0 \cdot 0) - (0 \cdot 4 + 0 \cdot 0 + 3 \cdot 0) | = (1/2)|12-0| = 6$ )", options: ["6", "12", "7", "5"]},
                { q: "¿Qué resultado da la fórmula del área si los tres puntos son colineales (están en la misma recta)?", a: "Cero.", options: ["Cero.", "Uno.", "Indefinido."]},
                { q: "El método de determinantes para el área también se conoce como...", a: "Fórmula de la lazada (o 'Shoelace formula').", options: ["Fórmula de la lazada (o 'Shoelace formula').", "Fórmula de Herón.", "Teorema de Pitágoras."]},
                { q: "En el determinante para el área, $\begin{vmatrix} x_1 & y_1 \\ x_2 & y_2 \end{vmatrix}$ es igual a:", a: "$x_1y_2 - y_1x_2$", options: ["$x_1y_2 - y_1x_2$", "$x_1x_2 - y_1y_2$", "$x_1y_1 - x_2y_2$"]},
                { q: "El área de un polígono siempre debe ser una cantidad...", a: "Positiva.", options: ["Positiva.", "Negativa.", "Cero."]},
                { q: "¿Qué es un 'lugar geométrico'?", a: "El conjunto de todos los puntos (y solo esos puntos) que satisfacen una o más condiciones geométricas dadas.", options: ["El conjunto de todos los puntos (y solo esos puntos) que satisfacen una o más condiciones geométricas dadas.", "Un punto específico en el plano.", "Una fórmula."]}
            ]
        },

        // TEMA: Capítulo III. La Línea Recta
        'Cap. III - Ecuación de la Recta (Punto-Pendiente y Pendiente-Ordenada)': {
            preguntas: [
                { q: "¿Cuál es la 'forma punto-pendiente' de la ecuación de una recta?", a: "$y - y_1 = m(x - x_1)$", options: ["$y - y_1 = m(x - x_1)$", "$y = mx + b$", "$Ax + By + C = 0$"]},
                { q: "¿Qué datos necesitas para usar la forma punto-pendiente?", a: "La pendiente ( $m$ ) y un punto $(x_1, y_1)$ por donde pasa.", options: ["La pendiente ( $m$ ) y un punto $(x_1, y_1)$ por donde pasa.", "Dos puntos.", "La pendiente y la ordenada al origen."]},
                { q: "Aplicación: ¿Cuál es la ecuación de la recta con pendiente 2 que pasa por (1, 3)?", a: "$y - 3 = 2(x - 1)$", options: ["$y - 3 = 2(x - 1)$", "$y - 1 = 2(x - 3)$", "$y = 2x + 1$"]},
                { q: "¿Cuál es la 'forma pendiente-ordenada' (u ordinaria) de la ecuación de una recta?", a: "$y = mx + b$", options: ["$y = mx + b$", "$y - y_1 = m(x - x_1)$", "$Ax + By + C = 0$"]},
                { q: "En la forma $y = mx + b$, ¿qué representa $m$?", a: "La pendiente.", options: ["La pendiente.", "La ordenada al origen.", "Un punto."]},
                { q: "En la forma $y = mx + b$, ¿qué representa $b$?", a: "La ordenada al origen (el punto donde la recta corta al eje Y).", options: ["La ordenada al origen (el punto donde la recta corta al eje Y).", "La pendiente.", "La abscisa al origen."]},
                { q: "Aplicación: En la recta $y = 3x - 5$, ¿cuál es la pendiente?", a: "3", options: ["3", "-5", "5", "-3"]},
                { q: "Aplicación: En la recta $y = 3x - 5$, ¿cuál es la ordenada al origen?", a: "-5 (la recta corta al eje Y en (0, -5)).", options: ["-5 (la recta corta al eje Y en (0, -5)).", "3", "5", "0"]},
                { q: "Toda recta, excepto las verticales, puede escribirse en la forma:", a: "$y = mx + b$", options: ["$y = mx + b$", "$x = k$ (constante)", "$Ax + By + C = 0$"]},
                { q: "¿Cuál es la ecuación de una recta vertical?", a: "$x = k$ (donde $k$ es una constante, su abscisa).", options: ["$x = k$ (donde $k$ es una constante, su abscisa).", "$y = k$ (constante)", "$y = mx$"]}
            ]
        },
        'Cap. III - Ecuación de la Recta (Cartesiana y Simétrica)': {
            preguntas: [
                { q: "¿Cuál es la 'forma cartesiana' (o de dos puntos) de la ecuación de una recta?", a: "$y - y_1 = \frac{y_2 - y_1}{x_2 - x_1} (x - x_1)$", options: ["$y - y_1 = \frac{y_2 - y_1}{x_2 - x_1} (x - x_1)$", "$y = mx + b$", "$Ax + By + C = 0$"]},
                { q: "¿Qué datos necesitas para usar la forma cartesiana?", a: "Dos puntos $(x_1, y_1)$ y $(x_2, y_2)$ por donde pasa.", options: ["Dos puntos $(x_1, y_1)$ y $(x_2, y_2)$ por donde pasa.", "La pendiente y un punto.", "La pendiente y la ordenada al origen."]},
                { q: "La forma cartesiana se basa en la forma punto-pendiente, reemplazando $m$ por:", a: "La fórmula de la pendiente: $(y_2 - y_1) / (x_2 - x_1)$", options: ["La fórmula de la pendiente: $(y_2 - y_1) / (x_2 - x_1)$", "La ordenada al origen $b$.", "La constante $C$."]},
                { q: "¿Cuál es la 'forma simétrica' (o canónica / abscisa-ordenada) de la ecuación de una recta?", a: "$x/a + y/b = 1$", options: ["$x/a + y/b = 1$", "$y = mx + b$", "$Ax + By + C = 0$"]},
                { q: "En la forma simétrica $x/a + y/b = 1$, ¿qué representa $a$?", a: "La abscisa al origen (el punto $(a, 0)$ donde corta al eje X).", options: ["La abscisa al origen (el punto $(a, 0)$ donde corta al eje X).", "La ordenada al origen (el punto $(0, b)$).", "La pendiente."]},
                { q: "En la forma simétrica $x/a + y/b = 1$, ¿qué representa $b$?", a: "La ordenada al origen (el punto $(0, b)$ donde corta al eje Y).", options: ["La ordenada al origen (el punto $(0, b)$ donde corta al eje Y).", "La abscisa al origen (el punto $(a, 0)$).", "La pendiente."]},
                { q: "¿Cuándo NO se puede usar la forma simétrica?", a: "Si la recta pasa por el origen (0, 0) (porque $a=0$ y $b=0$).", options: ["Si la recta pasa por el origen (0, 0) (porque $a=0$ y $b=0$).", "Si la recta es horizontal.", "Si la recta es vertical."]},
                { q: "Aplicación: ¿Cuáles son las intersecciones con los ejes de la recta $x/2 + y/3 = 1$?", a: "Corta al eje X en (2, 0) y al eje Y en (0, 3).", options: ["Corta al eje X en (2, 0) y al eje Y en (0, 3).", "Corta en (3, 0) y (0, 2).", "Corta en (2, 3)."]},
                { q: "La ecuación de una recta horizontal es:", a: "$y = k$ (donde $k$ es una constante, su ordenada).", options: ["$y = k$ (donde $k$ es una constante, su ordenada).", "$x = k$ (constante)", "$y = x$"]},
                { q: "La ecuación del Eje X es:", a: "$y = 0$", options: ["$y = 0$", "$x = 0$", "$y = x$"]}
            ]
        },
        'Cap. III - Ecuación General de la Recta': {
            preguntas: [
                { q: "¿Cuál es la 'forma general' de la ecuación de una recta?", a: "$Ax + By + C = 0$", options: ["$Ax + By + C = 0$", "$y = mx + b$", "$x/a + y/b = 1$"]},
                { q: "En la forma general $Ax + By + C = 0$, ¿a qué es igual la pendiente $m$ (si $B \neq 0$)?", a: "$m = -A / B$", options: ["$m = -A / B$", "$m = A / B$", "$m = -C / B$"]},
                { q: "En la forma general $Ax + By + C = 0$, ¿a qué es igual la ordenada al origen $b$ (si $B \neq 0$)?", a: "$b = -C / B$", options: ["$b = -C / B$", "$b = -C / A$", "$b = -A / B$"]},
                { q: "Si en la Ecuación General $B = 0$ (y $A \neq 0$), ¿qué tipo de recta representa?", a: "Una recta vertical ($x = -C/A$).", options: ["Una recta vertical ($x = -C/A$).", "Una recta horizontal ($y = -C/B$).", "Una recta que pasa por el origen."]},
                { q: "Si en la Ecuación General $A = 0$ (y $B \neq 0$), ¿qué tipo de recta representa?", a: "Una recta horizontal ($y = -C/B$).", options: ["Una recta horizontal ($y = -C/B$).", "Una recta vertical ($x = -C/A$).", "Una recta que pasa por el origen."]},
                { q: "Si en la Ecuación General $C = 0$ (y $A, B \neq 0$), ¿qué característica tiene la recta?", a: "Pasa por el origen (0, 0).", options: ["Pasa por el origen (0, 0).", "Es horizontal.", "Es vertical."]},
                { q: "Aplicación: ¿Cuál es la pendiente de la recta $2x + 3y - 6 = 0$?", a: "-2/3 ( $m = -A/B = -2/3$ )", options: ["-2/3", "2/3", "3/2", "6"]},
                { q: "Aplicación: ¿Cuál es la ordenada al origen de la recta $2x + 3y - 6 = 0$?", a: "2 ( $b = -C/B = -(-6)/3 = 2$ )", options: ["2", "3", "-6", "-2/3"]},
                { q: "Dos rectas $A_1x+B_1y+C_1=0$ y $A_2x+B_2y+C_2=0$ son paralelas si:", a: "$A_1/A_2 = B_1/B_2$ (o $m_1=m_2$).", options: ["$A_1/A_2 = B_1/B_2$ (o $m_1=m_2$).", "$A_1A_2 + B_1B_2 = 0$.", "$C_1 = C_2$."]},
                { q: "Dos rectas $A_1x+B_1y+C_1=0$ y $A_2x+B_2y+C_2=0$ son perpendiculares si:", a: "$A_1A_2 + B_1B_2 = 0$ (o $m_1 \cdot m_2 = -1$).", options: ["$A_1A_2 + B_1B_2 = 0$ (o $m_1 \cdot m_2 = -1$).", "$A_1/A_2 = B_1/B_2$.", "$C_1 = C_2$."]}
            ]
        },
        'Cap. III - Forma Normal y Distancia de Punto a Recta': {
            preguntas: [
                { q: "¿Cuál es la 'forma normal' de la ecuación de una recta?", a: "$x \cos(\omega) + y \sin(\omega) - p = 0$", options: ["$x \cos(\omega) + y \sin(\omega) - p = 0$", "$y = mx + b$", "$Ax + By + C = 0$"]},
                { q: "En la forma normal, ¿qué representa $p$?", a: "La distancia (positiva) desde el origen hasta la recta.", options: ["La distancia (positiva) desde el origen hasta la recta.", "La pendiente.", "Un punto en la recta."]},
                { q: "En la forma normal, ¿qué representa $\omega$ (omega)?", a: "El ángulo de inclinación de la línea normal (perpendicular) a la recta, que pasa por el origen.", options: ["El ángulo de inclinación de la línea normal (perpendicular) a la recta, que pasa por el origen.", "El ángulo de inclinación de la recta.", "El área."]},
                { q: "Para convertir la Ecuación General $Ax+By+C=0$ a la Forma Normal, ¿por qué factor se divide?", a: "Por $r = \pm \sqrt{A^2 + B^2}$ (el signo se escoge opuesto al de C).", options: ["Por $r = \pm \sqrt{A^2 + B^2}$ (el signo se escoge opuesto al de C).", "Por $C$.", "Por $A+B$."]},
                { q: "¿Qué signo debe tener el radical $\sqrt{A^2 + B^2}$ al normalizar?", a: "El signo contrario al término $C$ (para que $p$ sea positiva).", options: ["El signo contrario al término $C$ (para que $p$ sea positiva).", "Siempre positivo.", "Siempre negativo."]},
                { q: "¿Cuál es la fórmula para la distancia $d$ de un punto $(x_1, y_1)$ a una recta $Ax + By + C = 0$?", a: "$d = |Ax_1 + By_1 + C| / \sqrt{A^2 + B^2}$", options: ["$d = |Ax_1 + By_1 + C| / \sqrt{A^2 + B^2}$", "$d = |Ax_1 - By_1 + C| / \sqrt{A^2 + B^2}$", "$d = Ax_1 + By_1 + C$"]},
                { q: "En la fórmula de distancia de un punto a una recta, ¿qué significa si el resultado (antes del valor absoluto) es positivo?", a: "Que el punto y el origen están en lados opuestos de la recta.", options: ["Que el punto y el origen están en lados opuestos de la recta.", "Que el punto y el origen están del mismo lado de la recta.", "Que el punto está sobre la recta."]},
                { q: "En la fórmula de distancia, ¿qué significa si el resultado (antes del valor absoluto) es negativo?", a: "Que el punto y el origen están del mismo lado de la recta.", options: ["Que el punto y el origen están del mismo lado de la recta.", "Que el punto y el origen están en lados opuestos de la recta.", "Que el punto está sobre la recta."]},
                { q: "Si la distancia $d$ de un punto a una recta es 0, ¿qué significa?", a: "Que el punto está sobre la recta.", options: ["Que el punto está sobre la recta.", "Que el punto es el origen.", "Que la recta es horizontal."]},
                { q: "Aplicación: ¿Cuál es la distancia del origen (0, 0) a la recta $3x + 4y - 10 = 0$?", a: "2 ( $d = |3(0) + 4(0) - 10| / \sqrt{3^2 + 4^2} = |-10| / 5 = 2$ )", options: ["2", "10", "5", "-2"]}
            ]
        },

        // TEMA: Capítulo IV. Ecuación de la Circunferencia
        'Cap. IV - Definición y Ecuación Ordinaria': {
            preguntas: [
                { q: "¿Qué es una 'circunferencia' (definición geométrica)?", a: "El lugar geométrico de un punto que se mueve en un plano de manera que su distancia a un punto fijo (centro) es siempre constante.", options: ["El lugar geométrico de un punto que se mueve en un plano de manera que su distancia a un punto fijo (centro) es siempre constante.", "El lugar geométrico de un punto equidistante de un foco y una directriz.", "El área de un círculo."]},
                { q: "¿Cómo se llama el punto fijo en la definición de circunferencia?", a: "Centro.", options: ["Centro.", "Foco.", "Vértice."]},
                { q: "¿Cómo se llama la distancia constante en la definición de circunferencia?", a: "Radio.", options: ["Radio.", "Diámetro.", "Lado recto."]},
                { q: "¿Cuál es la 'forma ordinaria' (o canónica) de la ecuación de una circunferencia con centro en el ORIGEN (0, 0) y radio $r$?", a: "$x^2 + y^2 = r^2$", options: ["$x^2 + y^2 = r^2$", "$x^2 - y^2 = r^2$", "$(x-h)^2 + (y-k)^2 = r^2$"]},
                { q: "Aplicación: ¿Cuál es la ecuación de una circunferencia con centro en el origen y radio 5?", a: "$x^2 + y^2 = 25$", options: ["$x^2 + y^2 = 25$", "$x^2 + y^2 = 5$", "$x^2 - y^2 = 25$"]},
                { q: "Aplicación: De la ecuación $x^2 + y^2 = 9$, ¿cuál es el radio?", a: "3 (porque $r^2 = 9$).", options: ["3 (porque $r^2 = 9$).", "9", "81"]},
                { q: "¿Cuál es la 'forma ordinaria' de la ecuación de una circunferencia con centro FUERA del origen $C(h, k)$ y radio $r$?", a: "$(x - h)^2 + (y - k)^2 = r^2$", options: ["$(x - h)^2 + (y - k)^2 = r^2$", "$x^2 + y^2 = r^2$", "$(x + h)^2 + (y + k)^2 = r^2$"]},
                { q: "Aplicación: ¿Cuál es la ecuación de la circunferencia con centro en (2, 3) y radio 4?", a: "$(x - 2)^2 + (y - 3)^2 = 16$", options: ["$(x - 2)^2 + (y - 3)^2 = 16$", "$(x + 2)^2 + (y + 3)^2 = 16$", "$(x - 2)^2 + (y - 3)^2 = 4$"]},
                { q: "Aplicación: ¿Cuál es el centro de la circunferencia $(x + 1)^2 + (y - 5)^2 = 8$?", a: "$(-1, 5)$", options: ["$(-1, 5)$", "(1, -5)", "(1, 5)"]},
                { q: "Aplicación: ¿Cuál es el radio de la circunferencia $(x + 1)^2 + (y - 5)^2 = 8$?", a: "$\sqrt{8}$ (o $2\sqrt{2}$)", options: ["$\sqrt{8}$ (o $2\sqrt{2}$)", "8", "4"]}
            ]
        },
        'Cap. IV - Ecuación General de la Circunferencia': {
            preguntas: [
                { q: "Si desarrollamos la forma ordinaria $(x-h)^2 + (y-k)^2 = r^2$, obtenemos la 'forma general' de la ecuación. ¿Cuál es su estructura?", a: "$x^2 + y^2 + Dx + Ey + F = 0$", options: ["$x^2 + y^2 + Dx + Ey + F = 0$", "$Ax^2 + By^2 + Cxy + Dx + Ey + F = 0$", "$y = Ax^2 + Bx + C$"]},
                { q: "En la ecuación general $x^2 + y^2 + Dx + Ey + F = 0$, ¿a qué es igual $D$?", a: "$D = -2h$ (donde $h$ es la abscisa del centro).", options: ["$D = -2h$ (donde $h$ es la abscisa del centro).", "$D = h$", "$D = -2k$"]},
                { q: "En la ecuación general $x^2 + y^2 + Dx + Ey + F = 0$, ¿a qué es igual $E$?", a: "$E = -2k$ (donde $k$ es la ordenada del centro).", options: ["$E = -2k$ (donde $k$ es la ordenada del centro).", "$E = k$", "$E = -2h$"]},
                { q: "En la ecuación general $x^2 + y^2 + Dx + Ey + F = 0$, ¿a qué es igual $F$?", a: "$F = h^2 + k^2 - r^2$", options: ["$F = h^2 + k^2 - r^2$", "$F = r^2$", "$F = h+k$"]},
                { q: "¿Cómo se pasa de la forma general $x^2 + y^2 + Dx + Ey + F = 0$ a la forma ordinaria?", a: "Completando los cuadrados para $x$ y para $y$.", options: ["Completando los cuadrados para $x$ y para $y$.", "Usando la fórmula general.", "Factorizando."]},
                { q: "Dada la forma general, la coordenada $h$ del centro es:", a: "$h = -D / 2$", options: ["$h = -D / 2$", "$h = D / 2$", "$h = -E / 2$"]},
                { q: "Dada la forma general, la coordenada $k$ del centro es:", a: "$k = -E / 2$", options: ["$k = -E / 2$", "$k = E / 2$", "$k = -D / 2$"]},
                { q: "Dada la forma general, ¿cómo se calcula el radio $r$?", a: "$r = (1/2) \sqrt{D^2 + E^2 - 4F}$", options: ["$r = (1/2) \sqrt{D^2 + E^2 - 4F}$", "$r = D^2 + E^2 - 4F$", "$r = \sqrt{F}$"]},
                { q: "Si en la forma general $D^2 + E^2 - 4F > 0$, ¿qué representa la ecuación?", a: "Una circunferencia real.", options: ["Una circunferencia real.", "Un punto.", "Una circunferencia imaginaria (no existe)."]},
                { q: "Si en la forma general $D^2 + E^2 - 4F = 0$, ¿qué representa la ecuación?", a: "Un punto (la circunferencia tiene radio cero).", options: ["Un punto (la circunferencia tiene radio cero).", "Una circunferencia real.", "Una circunferencia imaginaria (no existe)."]}
            ]
        },

        // TEMA: Capítulo VI. La Parábola
        'Cap. VI - Definición y Elementos': {
            preguntas: [
                { q: "¿Qué es una 'parábola' (definición geométrica)?", a: "El lugar geométrico de un punto que se mueve en un plano de manera que su distancia a un punto fijo (foco) es siempre igual a su distancia a una recta fija (directriz).", options: ["El lugar geométrico de un punto que se mueve en un plano de manera que su distancia a un punto fijo (foco) es siempre igual a su distancia a una recta fija (directriz).", "El lugar geométrico de un punto cuya distancia a un centro es constante.", "El lugar geométrico de un punto cuya suma de distancias a dos focos es constante."]},
                { q: "¿Cómo se llama el punto fijo en la definición de parábola?", a: "Foco (F).", options: ["Foco (F).", "Centro (C).", "Vértice (V)."]},
                { q: "¿Cómo se llama la recta fija en la definición de parábola?", a: "Directriz (d).", options: ["Directriz (d).", "Eje focal.", "Lado recto."]},
                { q: "¿Qué es el 'vértice' (V) de la parábola?", a: "El punto de la parábola que está más cerca de la directriz (es el punto medio entre el foco y la directriz).", options: ["El punto de la parábola que está más cerca de la directriz (es el punto medio entre el foco y la directriz).", "El foco.", "El centro."]},
                { q: "¿Qué es el 'eje focal' (o eje de simetría) de la parábola?", a: "La recta que pasa por el foco y el vértice, y es perpendicular a la directriz.", options: ["La recta que pasa por el foco y el vértice, y es perpendicular a la directriz.", "La directriz.", "El lado recto."]},
                { q: "¿Qué es el 'parámetro' $p$?", a: "La distancia dirigida desde el vértice hasta el foco (y también del vértice a la directriz).", options: ["La distancia dirigida desde el vértice hasta el foco (y también del vértice a la directriz).", "El ancho de la parábola.", "La distancia al origen."]},
                { q: "¿Qué es el 'lado recto' (LR) de la parábola?", a: "La cuerda focal (que pasa por el foco) perpendicular al eje focal.", options: ["La cuerda focal (que pasa por el foco) perpendicular al eje focal.", "La directriz.", "El eje de simetría."]},
                { q: "¿Cuál es la longitud del lado recto (LR)?", a: "$LR = |4p|$", options: ["$LR = |4p|$", "$LR = |2p|$", "$LR = p$"]},
                { q: "¿Qué es la 'excentricidad' ($e$) de una parábola?", a: "Es la razón de la distancia al foco entre la distancia a la directriz. Para la parábola, $e = 1$.", options: ["Es la razón de la distancia al foco entre la distancia a la directriz. Para la parábola, $e = 1$.", "$e = 0$", "$e > 1$"]},
                { q: "Si $p > 0$, ¿hacia dónde abre la parábola (si su eje es horizontal)?", a: "Hacia la derecha.", options: ["Hacia la derecha.", "Hacia la izquierda.", "Hacia arriba."]}
            ]
        },
        'Cap. VI - Ecuación Ordinaria (Vértice en Origen)': {
            preguntas: [
                { q: "¿Cuál es la ecuación ordinaria de la parábola con VÉRTICE EN EL ORIGEN (0,0) y eje focal en el Eje X?", a: "$y^2 = 4px$", options: ["$y^2 = 4px$", "$x^2 = 4py$", "$y = 4px^2$"]},
                { q: "En la ecuación $y^2 = 4px$, ¿cuáles son las coordenadas del foco?", a: "$F(p, 0)$", options: ["$F(p, 0)$", "$F(0, p)$", "$F(0, 0)$"]},
                { q: "En la ecuación $y^2 = 4px$, ¿cuál es la ecuación de la directriz?", a: "$x = -p$", options: ["$x = -p$", "$y = -p$", "$x = p$"]},
                { q: "Si la ecuación es $y^2 = 12x$, ¿cuál es el valor de $p$?", a: "3 (porque $4p = 12$).", options: ["3 (porque $4p = 12$).", "12", "6", "4"]},
                { q: "Si la ecuación es $y^2 = -8x$, ¿cuál es el valor de $p$ y hacia dónde abre?", a: "$p = -2$. Abre hacia la izquierda.", options: ["$p = -2$. Abre hacia la izquierda.", "$p = -8$. Abre hacia la izquierda.", "$p = 2$. Abre hacia la derecha."]},
                { q: "¿Cuál es la ecuación ordinaria de la parábola con VÉRTICE EN EL ORIGEN (0,0) y eje focal en el Eje Y?", a: "$x^2 = 4py$", options: ["$x^2 = 4py$", "$y^2 = 4px$", "$x = 4py^2$"]},
                { q: "En la ecuación $x^2 = 4py$, ¿cuáles son las coordenadas del foco?", a: "$F(0, p)$", options: ["$F(0, p)$", "$F(p, 0)$", "$F(0, 0)$"]},
                { q: "En la ecuación $x^2 = 4py$, ¿cuál es la ecuación de la directriz?", a: "$y = -p$", options: ["$y = -p$", "$x = -p$", "$y = p$"]},
                { q: "Si la ecuación es $x^2 = 20y$, ¿hacia dónde abre y cuál es el valor de $p$?", a: "Abre hacia arriba, $p = 5$.", options: ["Abre hacia arriba, $p = 5$.", "Abre hacia abajo, $p = -5$.", "Abre hacia la derecha, $p = 5$."]},
                { q: "Si la ecuación es $x^2 = -4y$, ¿cuál es el foco?", a: "$F(0, -1)$ (porque $4p = -4$, $p = -1$).", options: ["$F(0, -1)$ (porque $4p = -4$, $p = -1$).", "$F(-1, 0)$", "$F(0, 1)$"]}
            ]
        },
        'Cap. VI - Ecuación Ordinaria (Vértice en (h, k))': {
            preguntas: [
                { q: "¿Cuál es la ecuación ordinaria de la parábola con VÉRTICE en $V(h, k)$ y eje focal PARALELO AL EJE X?", a: "$(y - k)^2 = 4p(x - h)$", options: ["$(y - k)^2 = 4p(x - h)$", "$(x - h)^2 = 4p(y - k)$", "$(y + k)^2 = 4p(x + h)$"]},
                { q: "En la ecuación $(y - k)^2 = 4p(x - h)$, ¿cuáles son las coordenadas del foco?", a: "$F(h + p, k)$", options: ["$F(h + p, k)$", "$F(h, k + p)$", "$F(h - p, k)$"]},
                { q: "En la ecuación $(y - k)^2 = 4p(x - h)$, ¿cuál es la ecuación de la directriz?", a: "$x = h - p$", options: ["$x = h - p$", "$y = k - p$", "$x = h + p$"]},
                { q: "Aplicación: Si la ecuación es $(y - 1)^2 = 8(x - 3)$, ¿cuál es el vértice?", a: "$V(3, 1)$", options: ["$V(3, 1)$", "$V(1, 3)$", "$V(-3, -1)$"]},
                { q: "Aplicación: Si la ecuación es $(y - 1)^2 = 8(x - 3)$, ¿cuál es el valor de $p$ y el foco?", a: "$p=2$, Foco en $(3+2, 1) = (5, 1)$", options: ["$p=2$, Foco en $(3+2, 1) = (5, 1)$", "$p=8$, Foco en $(11, 1)$", "$p=2$, Foco en $(3, 1+2) = (3, 3)$"]},
                { q: "¿Cuál es la ecuación ordinaria de la parábola con VÉRTICE en $V(h, k)$ y eje focal PARALELO AL EJE Y?", a: "$(x - h)^2 = 4p(y - k)$", options: ["$(x - h)^2 = 4p(y - k)$", "$(y - k)^2 = 4p(x - h)$", "$(x + h)^2 = 4p(y + k)$"]},
                { q: "En la ecuación $(x - h)^2 = 4p(y - k)$, ¿cuáles son las coordenadas del foco?", a: "$F(h, k + p)$", options: ["$F(h, k + p)$", "$F(h + p, k)$", "$F(h, k - p)$"]},
                { q: "En la ecuación $(x - h)^2 = 4p(y - k)$, ¿cuál es la ecuación de la directriz?", a: "$y = k - p$", options: ["$y = k - p$", "$x = h - p$", "$y = k + p$"]},
                { q: "Aplicación: Si la ecuación es $(x + 2)^2 = -12(y - 5)$, ¿cuál es el vértice?", a: "$V(-2, 5)$", options: ["$V(-2, 5)$", "$V(2, -5)$", "$V(5, -2)$"]},
                { q: "Aplicación: Si la ecuación es $(x + 2)^2 = -12(y - 5)$, ¿hacia dónde abre y cuál es el foco?", a: "Abre hacia abajo, $p=-3$. Foco en $(-2, 5-3) = (-2, 2)$", options: ["Abre hacia abajo, $p=-3$. Foco en $(-2, 5-3) = (-2, 2)$", "Abre hacia la izquierda, $p=-3$. Foco en $(-2-3, 5) = (-5, 5)$", "Abre hacia abajo, $p=3$. Foco en $(-2, 5+3) = (-2, 8)$"]}
            ]
        },
        'Cap. VI - Ecuación General de la Parábola': {
            preguntas: [
                { q: "Si desarrollamos la forma ordinaria $(y - k)^2 = 4p(x - h)$, ¿qué forma general se obtiene?", a: "$y^2 + Dx + Ey + F = 0$ (Cuadrática en $y$, lineal en $x$).", options: ["$y^2 + Dx + Ey + F = 0$ (Cuadrática en $y$, lineal en $x$).", "$x^2 + Dx + Ey + F = 0$ (Cuadrática en $x$, lineal en $y$).", "$x^2 + y^2 + Dx + Ey + F = 0$"]},
                { q: "Si desarrollamos la forma ordinaria $(x - h)^2 = 4p(y - k)$, ¿qué forma general se obtiene?", a: "$x^2 + Dx + Ey + F = 0$ (Cuadrática en $x$, lineal en $y$).", options: ["$x^2 + Dx + Ey + F = 0$ (Cuadrática en $x$, lineal en $y$).", "$y^2 + Dx + Ey + F = 0$ (Cuadrática en $y$, lineal en $x$).", "$x^2 + y^2 + Dx + Ey + F = 0$"]},
                { q: "Una ecuación $Ax^2 + Cy^2 + Dx + Ey + F = 0$ representa una parábola si:", a: "Uno de los coeficientes cuadráticos ($A$ o $C$) es CERO, pero no ambos.", options: ["Uno de los coeficientes cuadráticos ($A$ o $C$) es CERO, pero no ambos.", "Ambos coeficientes cuadráticos ($A$ y $C$) son IGUALES.", "Ambos coeficientes cuadráticos ($A$ y $C$) son CERO."]},
                { q: "Si la ecuación es $y^2 + 8x + 6y + 1 = 0$, ¿qué tipo de parábola es?", a: "Horizontal (cuadrática en $y$, lineal en $x$).", options: ["Horizontal (cuadrática en $y$, lineal en $x$).", "Vertical (cuadrática en $x$, lineal en $y$).", "No es una parábola."]},
                { q: "Si la ecuación es $x^2 - 4x + 2y - 10 = 0$, ¿qué tipo de parábola es?", a: "Vertical (cuadrática en $x$, lineal en $y$).", options: ["Vertical (cuadrática en $x$, lineal en $y$).", "Horizontal (cuadrática en $y$, lineal en $x$).", "No es una parábola."]},
                { q: "¿Cómo se pasa de la forma general (ej. $x^2 + Dx + Ey + F = 0$) a la forma ordinaria?", a: "Completando el cuadrado de la variable cuadrática (en este caso $x$) y factorizando.", options: ["Completando el cuadrado de la variable cuadrática (en este caso $x$) y factorizando.", "Usando la fórmula general.", "Dividiendo todo por $E$."]},
                { q: "Al completar el cuadrado en $y^2 + Ey$, ¿qué término se suma y se resta?", a: "$(E/2)^2$", options: ["$(E/2)^2$", "$E^2$", "$E/2$"]},
                { q: "Aplicación: $y^2 + 6y = ...$ ¿Qué falta para completar el cuadrado?", a: "9 (porque $(6/2)^2 = 3^2 = 9$).", options: ["9", "6", "36"]},
                { q: "Si se completa $y^2 + 6y + 9$, ¿cuál es el binomio factorizado?", a: "$(y + 3)^2$", options: ["$(y + 3)^2$", "$(y - 3)^2$", "$(y + 9)^2$"]},
                { q: "Aplicación: $x^2 - 8x = ...$ ¿Qué falta para completar el cuadrado?", a: "16 (porque $(-8/2)^2 = (-4)^2 = 16$).", options: ["16", "8", "64"]}
            ]
        },

        // TEMA: Capítulo VII. La Elipse
        'Cap. VII - Definición y Elementos': {
            preguntas: [
                { q: "¿Qué es una 'elipse' (definición geométrica)?", a: "El lugar geométrico de un punto que se mueve en un plano de manera que la suma de sus distancias a dos puntos fijos (focos) es siempre constante.", options: ["El lugar geométrico de un punto que se mueve en un plano de manera que la suma de sus distancias a dos puntos fijos (focos) es siempre constante.", "El lugar geométrico de un punto cuya distancia a un centro es constante.", "El lugar geométrico de un punto equidistante de un foco y una directriz."]},
                { q: "¿Cómo se llaman los dos puntos fijos en la definición de elipse?", a: "Focos ($F$ y $F'$).", options: ["Focos ($F$ y $F'$).", "Centros.", "Vértices."]},
                { q: "¿Qué es el 'eje focal' de la elipse?", a: "La recta que pasa por los dos focos.", options: ["La recta que pasa por los dos focos.", "La recta perpendicular al eje focal.", "Un radio."]},
                { q: "¿Qué son los 'vértices' (V y V') de la elipse?", a: "Los puntos donde el eje focal corta a la elipse.", options: ["Los puntos donde el eje focal corta a la elipse.", "Los focos.", "El centro."]},
                { q: "¿Qué es el 'eje mayor'?", a: "El segmento de recta que une los dos vértices ($\overline{VV'}$).", options: ["El segmento de recta que une los dos vértices ($\overline{VV'}$).", "El segmento que une los focos.", "El lado recto."]},
                { q: "¿Qué es el 'centro' (C) de la elipse?", a: "El punto medio del segmento que une los focos (y también de los vértices).", options: ["El punto medio del segmento que une los focos (y también de los vértices).", "Uno de los focos.", "Uno de los vértices."]},
                { q: "¿Qué es el 'eje menor'?", a: "El segmento de recta perpendicular al eje mayor en el centro, que une los puntos $A$ y $A'$ de la elipse.", options: ["El segmento de recta perpendicular al eje mayor en el centro, que une los puntos $A$ y $A'$ de la elipse.", "El eje focal.", "El lado recto."]},
                { q: "¿Qué representa $a$ (semieje mayor)?", a: "La distancia del centro a uno de los vértices ( $a = CV$ ).", options: ["La distancia del centro a uno de los vértices ( $a = CV$ ).", "La distancia del centro a uno de los focos ( $c = CF$ ).", "La distancia del centro al extremo del eje menor ( $b = CA$ )."]},
                { q: "¿Qué representa $c$ (semieje focal)?", a: "La distancia del centro a uno de los focos ( $c = CF$ ).", options: ["La distancia del centro a uno de los focos ( $c = CF$ ).", "La distancia del centro a uno de los vértices ( $a = CV$ ).", "La distancia del centro al extremo del eje menor ( $b = CA$ )."]},
                { q: "¿Qué representa $b$ (semieje menor)?", a: "La distancia del centro a uno de los extremos del eje menor ( $b = CA$ ).", options: ["La distancia del centro a uno de los extremos del eje menor ( $b = CA$ ).", "La distancia del centro a uno de los focos ( $c = CF$ ).", "La distancia del centro a uno de los vértices ( $a = CV$ )."]}
            ]
        },
        'Cap. VII - Elementos (Lado Recto, Excentricidad, Relación)': {
            preguntas: [
                { q: "¿Cuál es la relación fundamental entre $a$, $b$ y $c$ en una elipse?", a: "$a^2 = b^2 + c^2$ ( $a$ siempre es la mayor).", options: ["$a^2 = b^2 + c^2$ ( $a$ siempre es la mayor).", "$c^2 = a^2 + b^2$", "$b^2 = a^2 + c^2$"]},
                { q: "¿Qué es el 'lado recto' (LR) de la elipse?", a: "La cuerda que pasa por un foco y es perpendicular al eje focal.", options: ["La cuerda que pasa por un foco y es perpendicular al eje focal.", "El eje mayor.", "El eje menor."]},
                { q: "¿Cuál es la longitud del lado recto (LR) de la elipse?", a: "$LR = 2b^2 / a$", options: ["$LR = 2b^2 / a$", "$LR = 2a^2 / b$", "$LR = 2c^2 / a$"]},
                { q: "¿Qué es la 'excentricidad' ($e$) de una elipse?", a: "La razón $e = c / a$.", options: ["La razón $e = c / a$.", "La razón $e = a / c$.", "La razón $e = b / a$."]},
                { q: "¿Qué valores puede tomar la excentricidad ($e$) en una elipse?", a: "Entre 0 y 1 ( $0 < e < 1$ ).", options: ["Entre 0 y 1 ( $0 < e < 1$ ).", "Exactamente 1 ($e = 1$).", "Mayor que 1 ($e > 1$)."]},
                { q: "Si la excentricidad $e$ se acerca a 0 (cero), ¿qué forma toma la elipse?", a: "Se vuelve casi circular ( $c$ es pequeño, $a \approx b$ ).", options: ["Se vuelve casi circular ( $c$ es pequeño, $a \approx b$ ).", "Se vuelve muy alargada (achatada).", "Se convierte en parábola."]},
                { q: "Si la excentricidad $e$ se acerca a 1, ¿qué forma toma la elipse?", a: "Se vuelve muy alargada (achatada) ( $c$ es grande, $c \approx a$ ).", options: ["Se vuelve muy alargada (achatada) ( $c$ es grande, $c \approx a$ ).", "Se vuelve casi circular.", "Se convierte en hipérbola."]},
                { q: "¿Qué es la 'suma constante' en la definición de la elipse?", a: "Es igual a la longitud del eje mayor ( $2a$ ).", options: ["Es igual a la longitud del eje mayor ( $2a$ ).", "Es igual a la longitud del eje menor ( $2b$ ).", "Es igual a $2c$."]},
                { q: "En la elipse, ¿cuál es siempre la longitud mayor entre $a$, $b$ y $c$?", a: "$a$ (semieje mayor).", options: ["$a$ (semieje mayor).", "$b$ (semieje menor).", "$c$ (semieje focal)."]},
                { q: "Aplicación: Si $a=5$ y $c=3$, ¿cuál es el valor de $b$?", a: "4 (porque $a^2 = b^2 + c^2 \implies 25 = b^2 + 9 \implies b^2 = 16$).", options: ["4", "5", "3", "16"]}
            ]
        },
        'Cap. VII - Ecuación Ordinaria (Centro en Origen)': {
            preguntas: [
                { q: "Ecuación ordinaria de la elipse con CENTRO EN EL ORIGEN (0,0) y eje focal en el Eje X:", a: "$x^2/a^2 + y^2/b^2 = 1$", options: ["$x^2/a^2 + y^2/b^2 = 1$", "$x^2/b^2 + y^2/a^2 = 1$", "$x^2 - y^2 = a^2$"]},
                { q: "En la elipse $x^2/a^2 + y^2/b^2 = 1$, ¿dónde están los focos?", a: "En $(\pm c, 0)$ sobre el Eje X.", options: ["En $(\pm c, 0)$ sobre el Eje X.", "En $(0, \pm c)$ sobre el Eje Y.", "En $(0, 0)$."]},
                { q: "En la elipse $x^2/a^2 + y^2/b^2 = 1$, ¿dónde están los vértices?", a: "En $(\pm a, 0)$ sobre el Eje X.", options: ["En $(\pm a, 0)$ sobre el Eje X.", "En $(0, \pm a)$ sobre el Eje Y.", "En $(0, \pm b)$."]},
                { q: "Ecuación ordinaria de la elipse con CENTRO EN EL ORIGEN (0,0) y eje focal en el Eje Y:", a: "$x^2/b^2 + y^2/a^2 = 1$", options: ["$x^2/b^2 + y^2/a^2 = 1$", "$x^2/a^2 + y^2/b^2 = 1$", "$y^2 - x^2 = a^2$"]},
                { q: "En la elipse $x^2/b^2 + y^2/a^2 = 1$, ¿dónde están los focos?", a: "En $(0, \pm c)$ sobre el Eje Y.", options: ["En $(0, \pm c)$ sobre el Eje Y.", "En $(\pm c, 0)$ sobre el Eje X.", "En $(0, 0)$."]},
                { q: "En la elipse $x^2/b^2 + y^2/a^2 = 1$, ¿dónde están los vértices?", a: "En $(0, \pm a)$ sobre el Eje Y.", options: ["En $(0, \pm a)$ sobre el Eje Y.", "En $(\pm a, 0)$ sobre el Eje X.", "En $(\pm b, 0)$."]},
                { q: "¿Cómo se identifica $a^2$ en la ecuación de una elipse?", a: "Es el denominador MÁS GRANDE.", options: ["Es el denominador MÁS GRANDE.", "Es el denominador MÁS PEQUEÑO.", "Es el denominador de $x^2$."]},
                { q: "Aplicación: En la elipse $x^2/25 + y^2/16 = 1$, ¿cuál es el valor de $a$?", a: "5 (porque $a^2 = 25$).", options: ["5", "4", "25", "16"]},
                { q: "Aplicación: En la elipse $x^2/25 + y^2/16 = 1$, ¿cuál es el eje focal?", a: "El Eje X (porque $a^2$ está debajo de $x^2$).", options: ["El Eje X (porque $a^2$ está debajo de $x^2$).", "El Eje Y.", "No tiene."]},
                { q: "Aplicación: En la elipse $x^2/9 + y^2/16 = 1$, ¿cuál es el valor de $a$ y $b$?", a: "$a=4$ y $b=3$ (porque $a^2=16$ es el mayor).", options: ["$a=4$ y $b=3$ (porque $a^2=16$ es el mayor).", "$a=3$ y $b=4$.", "$a=16$ y $b=9$."]}
            ]
        },
        'Cap. VII - Ecuación Ordinaria (Centro en (h, k)) y General': {
            preguntas: [
                { q: "Ecuación ordinaria de la elipse con CENTRO en $C(h, k)$ y eje focal PARALELO AL EJE X:", a: "$(x-h)^2/a^2 + (y-k)^2/b^2 = 1$", options: ["$(x-h)^2/a^2 + (y-k)^2/b^2 = 1$", "$(x-h)^2/b^2 + (y-k)^2/a^2 = 1$", "$(x+h)^2/a^2 + (y+k)^2/b^2 = 1$"]},
                { q: "Ecuación ordinaria de la elipse con CENTRO en $C(h, k)$ y eje focal PARALELO AL EJE Y:", a: "$(x-h)^2/b^2 + (y-k)^2/a^2 = 1$", options: ["$(x-h)^2/b^2 + (y-k)^2/a^2 = 1$", "$(x-h)^2/a^2 + (y-k)^2/b^2 = 1$", "$(x+h)^2/b^2 + (y+k)^2/a^2 = 1$"]},
                { q: "Aplicación: En $\frac{(x-1)^2}{16} + \frac{(y-5)^2}{9} = 1$, ¿cuál es el centro?", a: "$C(1, 5)$", options: ["$C(1, 5)$", "$C(-1, -5)$", "$C(16, 9)$"]},
                { q: "Aplicación: En $\frac{(x-1)^2}{16} + \frac{(y-5)^2}{9} = 1$, ¿cuál es el eje focal?", a: "Paralelo al Eje X (porque $a^2=16$ está bajo $x$).", options: ["Paralelo al Eje X (porque $a^2=16$ está bajo $x$).", "Paralelo al Eje Y.", "El Eje X."]},
                { q: "Aplicación: En $\frac{(x-1)^2}{16} + \frac{(y-5)^2}{9} = 1$, ¿cuál es el valor de $c$?", a: "$\sqrt{7}$ (porque $c^2 = a^2 - b^2 = 16 - 9 = 7$).", options: ["$\sqrt{7}$", "7", "5", "1"]},
                { q: "¿Cuál es la 'forma general' de la ecuación de una elipse?", a: "$Ax^2 + Cy^2 + Dx + Ey + F = 0$", options: ["$Ax^2 + Cy^2 + Dx + Ey + F = 0$", "$y = Ax^2 + Bx + C$", "$Ax + By + C = 0$"]},
                { q: "En la Ecuación General $Ax^2 + Cy^2 + ... = 0$, ¿qué condición cumplen $A$ y $C$ para que sea una elipse?", a: "$A$ y $C$ deben tener el MISMO SIGNO (ambos + o ambos -) pero DIFERENTE VALOR.", options: ["$A$ y $C$ deben tener el MISMO SIGNO (ambos + o ambos -) pero DIFERENTE VALOR.", "$A$ y $C$ deben ser iguales.", "$A$ y $C$ deben tener signos opuestos."]},
                { q: "Si en la Ecuación General $A = C$ (y mismo signo), ¿qué cónica es?", a: "Una circunferencia.", options: ["Una circunferencia.", "Una elipse.", "Una parábola."]},
                { q: "¿Cómo se pasa de la forma general $Ax^2 + Cy^2 + Dx + Ey + F = 0$ a la ordinaria?", a: "Completando los cuadrados para $x$ y para $y$.", options: ["Completando los cuadrados para $x$ y para $y$.", "Usando la fórmula general.", "Dividiendo por $F$."]},
                { q: "La ecuación $9x^2 + 16y^2 - 18x - 64y - 71 = 0$ representa una...", a: "Elipse (A=9, C=16, mismo signo, diferente valor).", options: ["Elipse", "Hipérbola", "Parábola", "Circunferencia"]}
            ]
        },

        // TEMA: Capítulo VIII. La Hipérbola
        'Cap. VIII - Definición y Elementos': {
            preguntas: [
                { q: "¿Qué es una 'hipérbola' (definición geométrica)?", a: "El lugar geométrico de un punto que se mueve en un plano de manera que el valor absoluto de la diferencia de sus distancias a dos puntos fijos (focos) es siempre constante.", options: ["El lugar geométrico de un punto que se mueve en un plano de manera que el valor absoluto de la diferencia de sus distancias a dos puntos fijos (focos) es siempre constante.", "El lugar geométrico de un punto cuya suma de distancias a dos focos es constante.", "El lugar geométrico de un punto cuya distancia a un centro es constante."]},
                { q: "¿Cómo se llaman los dos puntos fijos en la definición de hipérbola?", a: "Focos ($F$ y $F'$).", options: ["Focos ($F$ y $F'$).", "Centros.", "Vértices."]},
                { q: "¿Qué es el 'eje focal' de la hipérbola?", a: "La recta que pasa por los dos focos.", options: ["La recta que pasa por los dos focos.", "La recta perpendicular al eje focal.", "Una asíntota."]},
                { q: "¿Qué son los 'vértices' (V y V') de la hipérbola?", a: "Los puntos donde el eje focal corta a la hipérbola.", options: ["Los puntos donde el eje focal corta a la hipérbola.", "Los focos.", "El centro."]},
                { q: "¿Qué es el 'eje transverso'?", a: "El segmento de recta que une los dos vértices ($\overline{VV'}$).", options: ["El segmento de recta que une los dos vértices ($\overline{VV'}$).", "El eje conjugado.", "El lado recto."]},
                { q: "¿Qué es el 'centro' (C) de la hipérbola?", a: "El punto medio del segmento que une los focos (y también de los vértices).", options: ["El punto medio del segmento que une los focos (y también de los vértices).", "Uno de los focos.", "Uno de los vértices."]},
                { q: "¿Qué es el 'eje conjugado'?", a: "El segmento de recta perpendicular al eje transverso en el centro.", options: ["El segmento de recta perpendicular al eje transverso en el centro.", "El eje focal.", "El lado recto."]},
                { q: "¿Qué representa $a$ (semieje transverso)?", a: "La distancia del centro a uno de los vértices ( $a = CV$ ).", options: ["La distancia del centro a uno de los vértices ( $a = CV$ ).", "La distancia del centro a uno de los focos ( $c = CF$ ).", "La distancia del centro al extremo del eje conjugado ( $b$ )."]},
                { q: "¿Qué representa $c$ (semieje focal)?", a: "La distancia del centro a uno de los focos ( $c = CF$ ).", options: ["La distancia del centro a uno de los focos ( $c = CF$ ).", "La distancia del centro a uno de los vértices ( $a = CV$ ).", "La distancia del centro al extremo del eje conjugado ( $b$ )."]},
                { q: "¿Qué representa $b$ (semieje conjugado)?", a: "La distancia del centro a uno de los extremos del eje conjugado.", options: ["La distancia del centro a uno de los extremos del eje conjugado.", "La distancia del centro a uno de los focos ( $c = CF$ ).", "La distancia del centro a uno de los vértices ( $a = CV$ )."]}
            ]
        },
        'Cap. VIII - Elementos (Lado Recto, Excentricidad, Relación)': {
            preguntas: [
                { q: "¿Cuál es la relación fundamental entre $a$, $b$ y $c$ en una hipérbola?", a: "$c^2 = a^2 + b^2$ ( $c$ siempre es la mayor).", options: ["$c^2 = a^2 + b^2$ ( $c$ siempre es la mayor).", "$a^2 = b^2 + c^2$", "$b^2 = a^2 + c^2$"]},
                { q: "¿Qué es el 'lado recto' (LR) de la hipérbola?", a: "La cuerda que pasa por un foco y es perpendicular al eje focal.", options: ["La cuerda que pasa por un foco y es perpendicular al eje focal.", "El eje transverso.", "El eje conjugado."]},
                { q: "¿Cuál es la longitud del lado recto (LR) de la hipérbola?", a: "$LR = 2b^2 / a$", options: ["$LR = 2b^2 / a$", "$LR = 2a^2 / b$", "$LR = 2c^2 / a$"]},
                { q: "¿Qué es la 'excentricidad' ($e$) de una hipérbola?", a: "La razón $e = c / a$.", options: ["La razón $e = c / a$.", "La razón $e = a / c$.", "La razón $e = b / a$."]},
                { q: "¿Qué valores puede tomar la excentricidad ($e$) en una hipérbola?", a: "Siempre es mayor que 1 ($e > 1$).", options: ["Siempre es mayor que 1 ($e > 1$).", "Exactamente 1 ($e = 1$).", "Entre 0 y 1 ( $0 < e < 1$ )."]},
                { q: "Si la excentricidad $e$ se acerca a 1, ¿qué forma toma la hipérbola?", a: "Se vuelve 'estrecha' (las ramas se cierran).", options: ["Se vuelve 'estrecha' (las ramas se cierran).", "Se vuelve 'ancha' (las ramas se abren).", "Se convierte en parábola."]},
                { q: "Si la excentricidad $e$ es muy grande, ¿qué forma toma la hipérbola?", a: "Se vuelve 'ancha' (las ramas se abren mucho).", options: ["Se vuelve 'ancha' (las ramas se abren mucho).", "Se vuelve 'estrecha' (las ramas se cierran).", "Se convierte en elipse."]},
                { q: "¿Qué es la 'diferencia constante' en la definición de la hipérbola?", a: "Es igual a la longitud del eje transverso ( $2a$ ).", options: ["Es igual a la longitud del eje transverso ( $2a$ ).", "Es igual a la longitud del eje conjugado ( $2b$ ).", "Es igual a $2c$."]},
                { q: "En la hipérbola, ¿cuál es siempre la longitud mayor entre $a$ y $c$?", a: "$c$ (semieje focal).", options: ["$c$ (semieje focal).", "$a$ (semieje transverso).", "Son iguales."]},
                { q: "Aplicación: Si $a=3$ y $b=4$, ¿cuál es el valor de $c$?", a: "5 (porque $c^2 = a^2 + b^2 = 9 + 16 = 25$).", options: ["5", "3", "4", "$\sqrt{7}$"]}
            ]
        },
        'Cap. VIII - Ecuación Ordinaria (Centro en Origen) y Asíntotas': {
            preguntas: [
                { q: "Ecuación ordinaria de la hipérbola con CENTRO EN EL ORIGEN (0,0) y eje focal en el Eje X:", a: "$x^2/a^2 - y^2/b^2 = 1$", options: ["$x^2/a^2 - y^2/b^2 = 1$", "$y^2/a^2 - x^2/b^2 = 1$", "$x^2/a^2 + y^2/b^2 = 1$"]},
                { q: "En la hipérbola $x^2/a^2 - y^2/b^2 = 1$, ¿dónde están los focos?", a: "En $(\pm c, 0)$ sobre el Eje X.", options: ["En $(\pm c, 0)$ sobre el Eje X.", "En $(0, \pm c)$ sobre el Eje Y.", "En $(0, 0)$."]},
                { q: "En la hipérbola $x^2/a^2 - y^2/b^2 = 1$, ¿dónde están los vértices?", a: "En $(\pm a, 0)$ sobre el Eje X.", options: ["En $(\pm a, 0)$ sobre el Eje X.", "En $(0, \pm a)$ sobre el Eje Y.", "En $(0, \pm b)$."]},
                { q: "Ecuación ordinaria de la hipérbola con CENTRO EN EL ORIGEN (0,0) y eje focal en el Eje Y:", a: "$y^2/a^2 - x^2/b^2 = 1$", options: ["$y^2/a^2 - x^2/b^2 = 1$", "$x^2/a^2 - y^2/b^2 = 1$", "$x^2/b^2 + y^2/a^2 = 1$"]},
                { q: "En la hipérbola $y^2/a^2 - x^2/b^2 = 1$, ¿dónde están los focos?", a: "En $(0, \pm c)$ sobre el Eje Y.", options: ["En $(0, \pm c)$ sobre el Eje Y.", "En $(\pm c, 0)$ sobre el Eje X.", "En $(0, 0)$."]},
                { q: "¿Cómo se identifica $a^2$ en la ecuación de una hipérbola?", a: "Es el denominador del término POSITIVO.", options: ["Es el denominador del término POSITIVO.", "Es el denominador del término NEGATIVO.", "Es el denominador MÁS GRANDE."]},
                { q: "Aplicación: En la hipérbola $x^2/9 - y^2/16 = 1$, ¿cuál es el eje focal?", a: "El Eje X (porque $x^2$ es el término positivo).", options: ["El Eje X (porque $x^2$ es el término positivo).", "El Eje Y.", "No tiene."]},
                { q: "Aplicación: En la hipérbola $y^2/25 - x^2/9 = 1$, ¿cuáles son los valores de $a$ y $b$?", a: "$a=5$ y $b=3$ ( $a^2$ es 25, $b^2$ es 9).", options: ["$a=5$ y $b=3$ ( $a^2$ es 25, $b^2$ es 9).", "$a=3$ y $b=5$.", "$a=25$ y $b=9$."]},
                { q: "¿Qué son las 'asíntotas' de la hipérbola?", a: "Rectas que pasan por el centro, a las cuales las ramas de la hipérbola se acercan indefinidamente sin tocarlas.", options: ["Rectas que pasan por el centro, a las cuales las ramas de la hipérbola se acercan indefinidamente sin tocarlas.", "El eje focal y el eje conjugado.", "Las directrices."]},
                { q: "¿Cuáles son las ecuaciones de las asíntotas para $x^2/a^2 - y^2/b^2 = 1$?", a: "$y = \pm (b/a)x$", options: ["$y = \pm (b/a)x$", "$y = \pm (a/b)x$", "$y = \pm x$"]}
            ]
        },
        'Cap. VIII - Ecuación Ordinaria (Centro en (h, k)) y General': {
            preguntas: [
                { q: "Ecuación ordinaria de la hipérbola con CENTRO en $C(h, k)$ y eje focal PARALELO AL EJE X:", a: "$(x-h)^2/a^2 - (y-k)^2/b^2 = 1$", options: ["$(x-h)^2/a^2 - (y-k)^2/b^2 = 1$", "$(y-k)^2/a^2 - (x-h)^2/b^2 = 1$", "$(x+h)^2/a^2 - (y+k)^2/b^2 = 1$"]},
                { q: "Ecuación ordinaria de la hipérbola con CENTRO en $C(h, k)$ y eje focal PARALELO AL EJE Y:", a: "$(y-k)^2/a^2 - (x-h)^2/b^2 = 1$", options: ["$(y-k)^2/a^2 - (x-h)^2/b^2 = 1$", "$(x-h)^2/a^2 - (y-k)^2/b^2 = 1$", "$(y+k)^2/a^2 - (x+h)^2/b^2 = 1$"]},
                { q: "Aplicación: En $\frac{(x-3)^2}{16} - \frac{(y+1)^2}{9} = 1$, ¿cuál es el centro?", a: "$C(3, -1)$", options: ["$C(3, -1)$", "$C(-3, 1)$", "$C(16, 9)$"]},
                { q: "Aplicación: En $\frac{(x-3)^2}{16} - \frac{(y+1)^2}{9} = 1$, ¿cuál es el eje focal?", a: "Paralelo al Eje X (porque $x$ está en el término positivo).", options: ["Paralelo al Eje X (porque $x$ está en el término positivo).", "Paralelo al Eje Y.", "El Eje X."]},
                { q: "Aplicación: En $\frac{(x-3)^2}{16} - \frac{(y+1)^2}{9} = 1$, ¿cuál es el valor de $c$?", a: "5 (porque $c^2 = a^2 + b^2 = 16 + 9 = 25$).", options: ["5", "$\sqrt{7}$", "7", "25"]},
                { q: "¿Cuál es la 'forma general' de la ecuación de una hipérbola?", a: "$Ax^2 + Cy^2 + Dx + Ey + F = 0$", options: ["$Ax^2 + Cy^2 + Dx + Ey + F = 0$", "$y = Ax^2 + Bx + C$", "$Ax + By + C = 0$"]},
                { q: "En la Ecuación General $Ax^2 + Cy^2 + ... = 0$, ¿qué condición cumplen $A$ y $C$ para que sea una hipérbola?", a: "$A$ y $C$ deben tener SIGNOS OPUESTOS (uno + y otro -).", options: ["$A$ y $C$ deben tener SIGNOS OPUESTOS (uno + y otro -).", "$A$ y $C$ deben tener el mismo signo.", "$A$ y $C$ deben ser iguales."]},
                { q: "Si en la Ecuación General $A=4$ y $C=-9$, ¿qué cónica es?", a: "Una hipérbola.", options: ["Una hipérbola.", "Una elipse.", "Una circunferencia."]},
                { q: "Si en la Ecuación General $A=4$ y $C=4$, ¿qué cónica es?", a: "Una circunferencia.", options: ["Una circunferencia.", "Una hipérbola.", "Una elipse."]},
                { q: "La ecuación $9x^2 - 4y^2 - 18x - 16y - 43 = 0$ representa una...", a: "Hipérbola (A=9, C=-4, signos opuestos).", options: ["Hipérbola", "Elipse", "Parábola", "Circunferencia"]}
            ]
        }
    }
};