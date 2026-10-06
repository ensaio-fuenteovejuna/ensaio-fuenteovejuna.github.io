# Ensaio · Fuenteovejuna (versão web)

Build estático gerado por `build_web.py` a partir do projeto-fonte no Google Drive
(`Teatro/App - Fuentevejuna/ensaio-mengo`). Não edite `site/` à mão: altere o projeto-fonte e rode

```bash
python3 build_web.py          # gera ~/Projects/ensaio-mengo-web/site
cd ~/Projects/ensaio-mengo-web/site && vercel deploy --prod
```

- Áudios salvos (ElevenLabs) são servidos como MP3 estáticos; falas sem áudio usam a voz do aparelho.
- Nenhuma chave de API é publicada.
