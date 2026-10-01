# Verkoopsite Stenenmolenstraat 23j, Ertvelde

Twee statische versies van de verkoopsite, elk volledig zelfstandig (geen build nodig):

| Map | Versie |
|---|---|
| `v1/` | Feitelijke site: indeling, technische gegevens, foto's, grondplannen, bezoek inplannen |
| `v2/` | Verhaal van de eigenaars ("wij"), in hoofdstukken; vrij ingevulde passages zijn gemarkeerd met een stippellijn |

Elke map heeft een eigen `index.html` en `media/`. De mediabestanden zijn identiek; git bewaart ze maar één keer.

## Deployen in Coolify

Per versie één resource:

1. **New Resource → Public/Private Repository** en kies deze repo, branch `main`.
2. **Build Pack:** `Static`.
3. **Base Directory:** `/v1` (of `/v2` voor de tweede resource). Publish Directory leeg laten (`/`).
4. **Domain:** bv. `https://stenenmolenstraat.be` voor de gekozen versie en een subdomein voor de andere.
5. Deploy. Nginx serveert de map rechtstreeks; er is geen build-stap.

## Vóór livegang

- In `index.html`: de `<meta name="robots" content="noindex">` en de gele voorbeeldbalk (`.draft`) verwijderen; beide zijn gemarkeerd met een HTML-comment.
- Alle gele placeholders invullen: `grep -c 'class="todo' v1/index.html v2/index.html` moet 0 geven.
- In v2: de stippellijn-markering (`class="vrij"`) weghalen zodra de eigenaars de teksten nagelezen hebben.
- `og:image` absoluut maken zodra het domein gekend is.

## Externe diensten

- Bezoeken: Cal.com (`stenenmolenstraat/plaatsbezoek`), vrije momenten via de publieke slots-API, boeken via de Cal.com-popup.
- Kaart (v1): OpenStreetMap-embed.
- Lettertypes: Google Fonts.

## Folder voor bezoekers

`folder/folder.pdf` is een afdrukbare folder van 4 A4-pagina's, gemaakt van `folder/folder.html` (die de foto's uit `v1/media/` gebruikt). Na een wijziging opnieuw maken met:

```
node folder/maak-pdf.js
```

De QR-code (`folder/qr.svg`) verwijst naar `https://stenenmolenstraat.flo.re/v1/`.
