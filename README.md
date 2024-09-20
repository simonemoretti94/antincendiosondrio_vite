# Deploy della tua app Vite Vue su GitHub Pages

## Prerequisiti
- Avere un repository GitHub.
- Avere Node.js e npm installati.

## Passaggi

### 1. Configura il file `vite.config.js`
Apri il file `vite.config.js` e aggiungi la proprietà `base` con il nome del tuo repository GitHub.

```javascript
export default {
  base: '/nome-del-tuo-repository/',
  // altre configurazioni
}

2. Costruisci il progetto
Esegui il comando per costruire il progetto.

npm run build

2.1  Aggiungi i file nella directory dist:
  Aggiungi i file generati nella directory dist al tuo repository Git.
  git add dist -f
  git commit -m "Add dist directory"

3. Crea un branch gh-pages
Se non lo hai già fatto, crea un branch gh-pages nel tuo repository GitHub.

git subtree push --prefix dist origin gh-pages

4. Non è necessario eseguire npm run build ogni volta che fai un commit, ma dovresti farlo ogni volta che vuoi aggiornare il branch gh-pages con le ultime modifiche. Ecco come puoi gestire il flusso di lavoro:

Lavoro quotidiano:
Continua a lavorare sul tuo progetto in VSCode come fai normalmente.
Fai commit delle tue modifiche nel branch main regolarmente.
git add .
git commit -m "Descrizione delle modifiche"
git push origin main

Aggiornamento del branch gh-pages:
Quando sei pronto per aggiornare il branch gh-pages con le ultime modifiche, esegui npm run build per generare i file di build nella directory dist.
npm run build

Aggiungi i file generati nella directory dist al tuo repository Git.
git add dist -f
git commit -m "Aggiorna dist directory"

Pusha le modifiche nel branch gh-pages.
git subtree push --prefix dist origin gh-pages

In questo modo, puoi continuare a lavorare sul tuo progetto senza dover eseguire npm run build ogni volta che fai un commit. Esegui npm run build solo quando vuoi aggiornare il branch gh-pages con le ultime modifiche.

4.1 Automatizza il deploy con GitHub Actions
Puoi creare un workflow GitHub Actions per automatizzare il processo di deploy. Crea una cartella .github/workflows nella radice del tuo repository e aggiungi un file deploy.yml con il seguente contenuto:

name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

5. Configura GitHub Pages
Vai nelle impostazioni del tuo repository su GitHub, nella sezione “Pages”, e seleziona il branch gh-pages come sorgente per GitHub Pages.

6. Effettua il push delle modifiche
Ogni volta che fai un push delle modifiche su main da VSCode, GitHub Actions eseguirà automaticamente il workflow e deployerà le modifiche su gh-pages.

Script di Deploy (Opzionale)
Se preferisci, puoi creare uno script Bash per automatizzare il processo di aggiunta, commit e push delle modifiche dal branch main al branch gh-pages.

Crea il file deploy.sh
Nella radice del tuo repository, crea un file chiamato deploy.sh con il seguente contenuto:

#!/bin/bash

# Configura le informazioni utente per Git
git config --global user.email "tuo@example.com"
git config --global user.name "Il Tuo Nome"

# Aggiungi e committa le modifiche nel branch main
git add .
git commit -m "Commit message"

# Pusha le modifiche nel branch gh-pages
git subtree push --prefix dist origin gh-pages

Rendi eseguibile lo script
Esegui il seguente comando per rendere eseguibile lo script:

chmod +x deploy.sh

Esegui lo script
Ogni volta che vuoi aggiornare il branch gh-pages con le modifiche dal branch main, esegui il seguente comando:

./deploy.sh






--------------------------

####Aggiungendo la tabella

npm install jspdf jspdf-autotable


<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Giorno</th>
          <th>Entrata Mattina</th>
          <th>Uscita Mattina</th>
          <th>Entrata Pomeriggio</th>
          <th>Uscita Pomeriggio</th>
          <th>Totale Ore</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in records" :key="index">
          <td>{{ record.giorno }}</td>
          <td>{{ record.entrataMattina }}</td>
          <td>{{ record.uscitaMattina }}</td>
          <td>{{ record.entrataPomeriggio }}</td>
          <td>{{ record.uscitaPomeriggio }}</td>
          <td>{{ record.totaleOre }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="downloadPDF">Scarica PDF</button>
  </div>
</template>

<script>
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default {
  data() {
    return {
      records: [
        { giorno: 1, entrataMattina: '8:00', uscitaMattina: '12:00', entrataPomeriggio: '13:00', uscitaPomeriggio: '17:00', totaleOre: '8:00' },
        // Aggiungi altri record qui
      ]
    };
  },
  methods: {
    downloadPDF() {
      const doc = new jsPDF();
      autoTable(doc, { html: 'table' });
      doc.save('tabella.pdf');
    }
  }
};
</script>
