# Работа с TODO в коде

## TODO в коде должен содержать ссылку на тех. долговую задачу

Для каждого TODO должна быть создана тех. долговая задача в Jira по [шаблону](https://track.astral.ru/soft/wiki/pages/viewpage.action?pageId=3849335550).

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

- Создание задачи под TODO позволяет планировать закрытие тех. долга
- Возможность быстрого перехода из бэклога тех. долга в блок кода, который требует рефакторинга.

**✅ Valid**

```ts
// TODO: избавиться от any. https://track.astral.ru/soft/browse/EXAMPLE-000
const calc = (params: any) => params.startDate + params.endDate;
```

**❌ Invalid**

```ts
// TODO: избавиться от any
const calc = (params: any) => params.startDate + params.endDate;
```
