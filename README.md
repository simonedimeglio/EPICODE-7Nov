# EPICODE - 7 Novembre 2024

## Ripasso Props

Le props permettono ai componenti di comunicare tra loro, dal componente genitore ai componenti figli.

**Partiamo da un componente "Genitore"**:

```jsx
// App.js
import React from "react";
import ComponenteFiglio from "./ComponenteFiglio";

function App() {
  // Questo messaggio verrà passato al componente figlio
  const messaggio = "EPICODE <3";

  return (
    <div>
      {/* Passiamo il messaggio come una prop */}
      <ComponenteFiglio testo={messaggio} />
    </div>
  );
}

export default App;
```

**Nel componente "Figlio"**:

```jsx
// ComponenteFiglio.js
import React from "react";

function ComponenteFiglio(props) {
  return <h1>{props.testo}</h1>;
}

export default ComponenteFiglio;
```

## Stato - useState

In React, lo **stato** è un `oggetto` che rappresenta i dati interni di un componente e tiene traccia delle informazioni che possono cambiare nel tempo. Questi dati determinano come viene visualizzato un componente e si aggiornano automaticamente quando lo stato cambia.

> Quando il valore dello stato cambia, React ridisegna automaticamente il componente per riflettere il nuovo stato. Non serve aggiornare la pagina o cambiare il DOM manualmente; React lo fa per te.

In React, un **hook** è una **funzione speciale** che permette di “agganciare” (_in inglese, “hook”_) le funzionalità di React, come lo stato o il ciclo di vita, all’interno dei componenti funzionali.

`useState` è uno degli hook fondamentali in React, che consente di gestire lo **stato** di un componente. Partiamo dall’esempio del contatore, un ottimo modo per mostrare come funziona lo stato e come può cambiare nel tempo.

### Iniziamo importando useState

Prima di tutto, importiamo `useState` da React. `useState` è un hook che React ci mette a disposizione per aggiungere uno stato ai componenti funzionali.

```jsx
import React, { useState } from "react";
```

### Creiamo il componente Contatore

Definiamo il componente `Counter`, in cui useremo `useState` per tenere traccia del valore del contatore.

```jsx
function Counter() {
  // Inizializziamo una variabile di stato chiamata "count" con un valore iniziale di 0
  // useState restituisce un array con due elementi: [valoreAttuale, funzionePerAggiornareIlValore]
  const [count, setCount] = useState(0);

  // La variabile "count" contiene il valore attuale del contatore, e "setCount" è una funzione che useremo per aggiornare il valore di "count".
```

### Creiamo la funzione che incrementerà il contatore

Creiamo una funzione chiamata `increment` che aumenterà il valore del contatore di 1 ogni volta che viene chiamata.

```jsx
// Funzione per incrementare il contatore
const increment = () => {
  // Usando setCount aggiorniamo il valore di "count" aggiungendo 1 al valore attuale
  setCount(count + 1);
};
```

### Mostriamo il contatore ed il pulsante

Infine, nel return del componente, visualizziamo il valore attuale del contatore e creiamo un pulsante per incrementarlo. Ogni volta che clicchiamo sul pulsante, chiamiamo la funzione `increment`.

```jsx
  return (
    <div>
      {/* Mostriamo il valore attuale del contatore */}
      <h1>Contatore: {count}</h1>
      {/* Pulsante per incrementare il contatore */}
      <button onClick={increment}>Incrementa</button>
    </div>
  );
}

export default Counter;
```

### Differenza tra Stato e Props

Lo stato è “privato” del componente: un componente gestisce e modifica il proprio stato senza influenzare gli altri componenti. Le props, al contrario, sono valori passati da un componente genitore a un componente figlio e non possono essere modificate dal figlio.

## React-Bootstrap

React-Bootstrap è una libreria che permette di usare i componenti e lo stile di Bootstrap direttamente in React. È particolarmente utile perché fornisce componenti pronti all’uso e ben stilizzati, come pulsanti, modali, navbar, e molto altro, senza dover scrivere manualmente il codice HTML e CSS di Bootstrap.

Con React-Bootstrap, non devi preoccuparti di aggiungere classi manualmente per ogni componente, perché puoi semplicemente utilizzare i componenti già disponibili nella libreria. Inoltre, i componenti di React-Bootstrap si integrano facilmente con lo stato e gli eventi di React, rendendo più semplice la gestione del codice.

Per integrare React-Bootstrap nel tuo progetto segui questi passaggi:

### 1 - Installazione

La prima cosa da fare è installare React-Bootstrap nel progetto. Puoi farlo con il seguente comando:

```bash
npm install react-bootstrap bootstrap
```

### 2 - Import dello stile

React-Bootstrap necessita dello stile CSS di Bootstrap per funzionare correttamente. Devi importare il file CSS di Bootstrap nel tuo progetto, di solito nel file index.js o App.js:

### 3 - Uso dei componenti

Ora puoi usare i componenti di Bootstrap come Button, Card, Navbar, ecc., direttamente come componenti React.

Per mostrare come funziona, creiamo un pulsante usando React-Bootstrap.

```jsx
import React from "react";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* Utilizziamo il componente Button di React-Bootstrap */}
      <Button variant="primary">Clicca qui</Button>
    </div>
  );
}

export default App;
```

### Esempio avanzato

React-Bootstrap rende facile creare layout più complessi come card e griglie.

```jsx
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Titolo della Card</Card.Title>
              <Card.Text>
                Questo è un esempio di card in React-Bootstrap.
              </Card.Text>
              <Button variant="primary">Scopri di più</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
```

> `Container`, `Row`, `Col`: Questi componenti servono a creare un layout reattivo (responsive). Container è il contenitore principale, Row crea una riga, e Col definisce una colonna che occupa una parte dello spazio disponibile.

> `Card`: La Card è un contenitore strutturato con immagine, titolo, testo e pulsante.

> Componenti con Prop: Ogni componente React-Bootstrap, come Card.Img e Card.Body, si integra con le props per aggiungere personalizzazioni come immagini, testo, e stili.

## `map` in React

Il metodo map in React è spesso utilizzato per creare una lista di elementi da un array. Ad esempio, possiamo usare map per prendere un array di nomi e renderizzarli in una lista. Vediamo come fare.

### 1 - Crea un array di nomi

Immaginiamo di avere un array di nomi che vogliamo visualizzare come lista.

```jsx
const nomi = ["Alice", "Bob", "Charlie", "David"];
```

### 2 - Usare map per Creare la Lista di Elementi

Con map, possiamo iterare su ciascun nome nell’array e restituire un elemento HTML per ogni nome. In questo esempio, restituiremo un elemento `<li>` per ogni nome.

```jsx
import React from "react";

function ListaNomi() {
  const nomi = ["Alice", "Bob", "Charlie", "David"];

  return (
    <ul>
      {nomi.map((name, index) => (
        // Ogni elemento della lista deve avere una chiave unica ("key") per aiutare React a gestire la lista in modo efficiente
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default ListaNomi;
```

> `map` crea una nuova `array` trasformando ogni elemento in base alla funzione che definiamo (in questo caso, una funzione che restituisce un `<li>`). Ogni elemento `<li>` ha una `key={index}`, che permette a React di identificare ogni elemento della lista. È importante che ogni elemento in una lista abbia una chiave unica per evitare problemi di prestazioni e per una gestione ottimale degli aggiornamenti.
