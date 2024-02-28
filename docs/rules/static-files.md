# Static files

## Имена статичных файлов должны соответствовать kebab-case

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Визуальная идентификация статичных файлов за счет того, что для программного кода используется именование через PascalCase и camelCase.

**✅ Valid**

```
├── icons/
|    ├── arrow-icon.svg
|    └── connect-icon.png
├── images/
|    └── inner-banner.jpg
├── statics/
|    └── doc.pdf
```

**❌ Invalid**

```
├── icons/
|    ├── arrowIcon.svg
|    └── connect_icon.png
├── images/
|    └── InnerBanner.jpg
```
