# El diseño y desarrollo de interfaces

### ¿Qué es la web?

Un **sitio web** es un conjunto de páginas web agrupadas bajo un mismo dominio de internet. Presenta las siguientes **características**:
- **Usable**: Permite a los usuarios interactuar de forma sencilla, intuitiva, agradable y segura.
- **Visual**: La percepción de los usuarios durante su navegación es positiva; los elementos gráficos empleados tienen una finalidad y objetivos más allá del decorativo.
- **Educativo**: Los usuarios tienen facilidad para aprender al usarlo y conservan los conocimientos adquiridos.
- **Actualizado**: Ofrece nuevos contenidos periódicamente y mantiene una interfaz moderna.

_*Nota*_: La interfaz web debe estar diseñada pensando en el usuario.

Por otra parte, para localizar un sitio web tenemos que hacer uso de un identificador para este. Existe confusión con términos como URI, URL y URN.

**URI (Identificador Uniforme de Recursos):**  
Es una cadena de caracteres que identifica de manera única un recurso en Internet, ya sea por su nombre, su ubicación o ambos. Es el término más general y engloba tanto a las URLs como a las URNs.  
- `https://www.google.es` es una URI porque identifica el recurso (la página principal de Google España) y permite acceder a él.

**URL (Localizador Uniforme de Recursos):**  
Es un tipo específico de URI que indica la ubicación exacta de un recurso en la red y cómo acceder a él (incluye el protocolo, como http o https).  
- `https://www.google.es` es una URL porque especifica el protocolo (`https`) y la dirección donde se encuentra el recurso (el sitio web de Google España).

**URN (Nombre Uniforme de Recurso):**  
Es otro tipo de URI que identifica un recurso mediante un nombre único y permanente, sin indicar su localización ni el método de acceso.  
- `urn:isbn:9783161484100` identifica un libro concreto por su ISBN, independientemente de dónde esté almacenado. No existe un URN público típico para www.google.es, pero sí para libros.

### ¿Qué es la accesibilidad web?

La web está diseñada para que todo el mundo pueda utilizarla, independientemente del hardware, software, idioma, capacidad... Cuando la web cumple ese objetivo, es accesible para personas con un diverso rango de audición, movimiento, visión y habilidades cognitivas. El **acceso a las tecnologías** de la información y la comunicación, incluida la web, está definido como un **derecho humano básico**. La accesibilidad de la web mejora el posicionamiento SEO de la web, amplía el alcance en el mercado y minimiza el riesgo legal (en muchos países la *accesibilidad web es un requisito legal*, existiendo multas).

**Marco normativo**:
- Directiva (UE) 2016/2102 sobre la accesibilidad de los sitios web y aplicaciones para dispositivos móviles de los organismos del sector público.
- Real Decreto 1112/2018 sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.
- Decisión de Ejecución (UE) 2018/2048 de la Comisión, de 20 de diciembre de 2018, sobre la norma armonizada aplicable a los sitios web y a las aplicaciones para dispositivos móviles redactada en apoyo de la Directiva (UE) 2016/2102 del Parlamento Europeo y del Consejo.

Para ayudar a los usuarios con diversidad funcional visual y auditiva existen productos de apoyo como:
- Lectores de pantalla, como por ejemplo: JAWS, VoiceOver, NVDA.
- Navegadores de voz.
- Teclado como dispositivo de entrada.

_*Nota*_: Aunque el objetivo de los *CAPTCHA* es diferenciar entre humanos y bots, muchas veces también se convierten en un obstáculo para personas que dependen de lectores de pantalla o que tienen otras limitaciones sensoriales.

Existen múltiples motivos por los cuales un usuario puede tener problemas de accesibilidad con la web, como navegación compleja, imágenes sin texto alternativo, tablas mal formadas... Siguiendo las pautas **WCAG** se pueden mitigar estos problemas.

Las pautas y los principios del diseño accesible los establece el W3C (World Wide Web Consortium), como asociación internacional que trabaja para desarrollar normas y estándares para la web, fundada por el físico Tim Berners-Lee. Existen tres tipologías principales de pautas de accesibilidad:
- **WCAG (Web Content Accessibility Guidelines)**: Pautas de accesibilidad del contenido en la web para hacer este más accesible para personas con diversidad funcional. Además, se incluyen por cada pauta uno o varios criterios de conformidad que se clasifican según el nivel de cumplimiento asociado (A, AA, AAA). Sus principios son:
  - *Perceptible*: La información y componentes de la interfaz han de ser presentados de forma que sean percibidos por el usuario.
  - *Operable*: Los componentes de la interfaz de usuario y métodos de navegación deben poder ser utilizados por personas con diferentes tipos de discapacidad.
  - *Comprensible*: La información y funcionamiento de la interfaz de usuario han de ser fáciles de entender.
  - *Robusto*: La interfaz ha de ser compatible con herramientas actuales y futuras de la web.
- **ATAG (Authoring Tool Accessibility Guidelines)**: Pautas de accesibilidad para herramientas de autor. Se establecen pautas para garantizar que las herramientas de creación de contenidos sean accesibles tanto para personas que las usan como para crear contenido a consumir que sea accesible. Las herramientas deben ser usables para todo tipo de personas y ayudar a crear contenido web que siga las pautas de accesibilidad **WCAG**. *ATAG 2.0* define:
  - Parte A: Hacer que la herramienta de autor sea accesible en sí misma.
  - Parte B: Hacer que la herramienta de autor ayude a los creadores a producir contenido accesible.
- **UAAG (User Agent Accessibility Guidelines)**: Pautas de accesibilidad para agentes de usuario. Se definen pautas para que los agentes de usuario, como navegadores web o reproductores multimedia, sean accesibles para todas las personas. Estas pautas aseguran que los navegadores tengan funcionalidades que ayuden a interactuar con el contenido de la web, soportar lectores de pantalla, navegación mediante teclado...

**WAI-ARIA**  
*Web Accessibility Initiative - Accessible Rich Internet Application*, conocida como **WAI-ARIA**, define una forma de hacer que el contenido web y las aplicaciones web sean más accesibles a personas con diversidad funcional. ARIA funciona como un CSS para tecnologías de asistencia, controlando cómo estas herramientas interpretan la experiencia no visual de un usuario. Un uso incorrecto de ARIA puede provocar problemas graves, haciendo que el contenido visual no se traduzca bien para usuarios de lectores de pantalla. Se definen:
- *Rol*: Un rol es una promesa: Cuando se usa un rol ARIA, como role="button", se está haciendo una promesa de que el elemento se comportará como ese rol sugiere. Sirve para indicar de qué tipo es un elemento y cuál es su función.
- *Estado*: Un estado es una propiedad dinámica que expresa una característica de un objeto que puede cambiar en respuesta a la interacción de las personas usuarias o automáticamente.

Por último, destacar que existen herramientas de análisis de accesibilidad web como:
- Wave.
- Axe.
- Lighthouse.

La accesibilidad es una cuestión fundamental para la labor del **SEO** (Search Engine Optimization). Podemos decir que en el posicionamiento de una web, navegadores como Google rastrean sitios web como si fuesen un usuario con diversidad funcional visual, por lo que accesibilidad y SEO están estrictamente vinculados, permitiendo una buena accesibilidad llegar a un mayor público.

### ¿Cómo desarrollar una interfaz?

El proceso de desarrollar aplicaciones implica un enfoque dedicado al diseño e implementación de interfaces, ya que estas son el principal medio de interacción con el usuario. Desde este punto de vista, tenemos dos perfiles diferentes en la industria:
- *Diseñador UX*: Se enfoca en el diseño de la interacción, traza el camino del usuario dentro de la aplicación y se centra en satisfacer la experiencia de usuario. Este es experto en wireframes, prototipos e investigación.
- *Diseñador UI*: Diseña la interfaz a nivel visual.

Podemos decir que desarrollar un producto que le gusta a la gente implica una buena experiencia de usuario (UX) acompañada de una interfaz adecuada (UI).

La **usabilidad** se refiere a la facilidad con la que las personas usuarias pueden interactuar con un software o sistema. Esto implica la creación de interfaces intuitivas que faciliten la ejecución de tareas. Se centra en los siguientes principios:
- Conocer a la persona usuaria.
- Minimizar la memorización.
- Optimizar las operaciones.
- Gestionar errores.

Por otra parte, una buena experiencia de interacción del usuario o UX se basa en los siguientes factores:
- Carga cognitiva.
- Disposición de elementos.
- Tipografía.
- Consistencia...

En cuanto a la usabilidad, destacan las *10 reglas de oro de Jakob Nielsen*:
1. **Visibilidad del estado del sistema**: El sistema debe mantener a los usuarios informados sobre lo que está ocurriendo, mediante una retroalimentación apropiada en un tiempo razonable.
2. **Relación entre el sistema y el mundo real**: El sistema debe hablar el idioma de los usuarios, utilizando palabras, frases y conceptos familiares para ellos, en lugar de términos orientados al sistema.
3. **Control y libertad del usuario**: Los usuarios suelen elegir funciones por error y necesitarán una "salida de emergencia" claramente marcada para salir de la acción no deseada sin tener que pasar por un diálogo extenso.
4. **Consistencia y estándares**: Los usuarios no deben preguntarse si diferentes palabras, situaciones o acciones significan lo mismo. Se deben seguir las convenciones de la plataforma.
5. **Prevención de errores**: Mejor que un buen mensaje de error es un diseño cuidadoso que prevenga que ocurra el problema en primer lugar.
6. **Reconocimiento antes que recuerdo**: Minimizar la carga de memoria del usuario haciendo visibles los objetos, acciones y opciones. El usuario no debería tener que recordar información de una parte del diálogo a otra.
7. **Flexibilidad y eficiencia de uso**: Los aceleradores —invisibles para el usuario novel— pueden acelerar la interacción para el usuario experto, de modo que el sistema pueda atender tanto a usuarios inexpertos como experimentados.
8. **Estética y diseño minimalista**: Los diálogos no deben contener información irrelevante o raramente necesaria. Cada unidad extra de información compite con la información relevante y disminuye su visibilidad relativa.
9. **Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores**: Los mensajes de error deben expresarse en lenguaje claro (sin códigos), indicar con precisión el problema y sugerir una solución constructiva.
10. **Ayuda y documentación**: Aunque es mejor si el sistema puede ser usado sin documentación, puede ser necesario proporcionar ayuda y documentación fácilmente accesible y centrada en la tarea del usuario.

Además de lo anterior, existen normativas relacionadas con la usabilidad, destacando la **ISO 25010** y la **ISO 9241**.
- *ISO 25010*: Se centra en productos software en general, no solo en aplicaciones, aunque evalúa la calidad del software y uno de los aspectos en que se centra es la usabilidad.
- *ISO 9241*: Se centra en la ergonomía e interacción humano-computador, especialmente centrada en la interfaz de usuario.

La experiencia de usuario (UX) es una filosofía de diseño centrada en crear interfaces que satisfacen las necesidades de los usuarios finales, logrando así mayor satisfacción y facilidad de uso. Para ello, los diseñadores y responsables de producto emplean diversos métodos de investigación y se apoyan en **leyes** y principios basados en la psicología y la usabilidad, destacando las siguientes:
1. **Ley de Prägnanz**: La ley de simplicidad nos dice que las personas tienden a percibir las formas y los objetos de la manera más simple y organizada posible.
2. **Ley de Hick**: El tiempo de respuesta del usuario es directamente proporcional a la cantidad de estímulos. Cuanto mayor sea el número de opciones, más tardará el usuario en dar una respuesta.
3. **Ley de Tesler**: La ley de conservación de la complejidad dice que para cualquier sistema existe un nivel de complejidad que no se puede reducir.
4. **Ley de proximidad**: La mente tiene una disposición natural para agrupar elementos según su proximidad. La proximidad entre elementos ayuda a comprenderlos mejor.
5. **Ley de posición en Serie**: La posición de un elemento en una secuencia afecta a la precisión de su recuerdo. Los usuarios tienden a recordar mejor los elementos al principio y al final de una serie.
6. **Ley de Fitts**: El tiempo que se tarda en llegar a un objeto es proporcional a la distancia en la que se encuentra y a su tamaño.
7. **Ley de Parkinson**: Cuanto más tiempo tiene un usuario para realizar una tarea, más tiempo tarda en completarla.
8. **Ley de Von Restorff**: En una lista de elementos recordaremos mejor los que destaquen del resto.
9. **Ley de Pareto**: La ley del 80/20 establece que el 80% de los efectos provienen del 20% de las causas.
10. **Ley de Zeigarnik**: Las personas suelen recordar tareas incompletas o interrumpidas mejor que las completadas.
11. **Ley de Miller**: Un usuario suele recordar 7 elementos. En la práctica esto se refiere a que el contenido de las interfaces debe estar dividido en grupos pequeños y fáciles de recordar.
12. **Ley de Jakob**: La ley de la experiencia web dictamina que los usuarios prefieren aquellos sitios que funcionen igual que los que ya conocen.