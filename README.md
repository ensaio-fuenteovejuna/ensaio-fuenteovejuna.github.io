# Ensaio · Fuenteovejuna (versão web)

Build estático gerado por `build_web.py` a partir do projeto-fonte no Google Drive
(`Teatro/App - Fuentevejuna/ensaio-mengo`). Não edite `docs/` à mão: altere o projeto-fonte e rode

```bash
python3 build_web.py          # gera ~/Projects/ensaio-mengo-web/docs
cd ~/Projects/ensaio-mengo-web && git add -A && git commit -m "Atualiza" && git push
```

- Áudios salvos (ElevenLabs) são servidos como MP3 estáticos; falas sem áudio usam a voz do aparelho.
- Nenhuma chave de API é publicada.
