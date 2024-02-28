# Создание модулей

## Название модулей должно быть в camelCase

**✨ Мотивация**

camelCase в данном случае указывает, что модуль - это директория-контейнер, а не класс или компонент.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── modules/
|    ├── cart/
|    ├── payment/
|    ├── request/
|    └── layout/
```

**❌ Invalid**

```
├── modules/
|    ├── CartModule/
|    ├── PaymentModule/
|    ├── RequestModule/
|    └── LayoutModule/
```

## Названия модулей не должны содержать постфиксы `Module`

**✨ Мотивация**

Каждый модуль находится в директории `modules`, это уже указывает на то, что директория является модулем.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── modules/
|    ├── cart/
|    ├── payment/
|    ├── request/
|    └── layout/
```

**❌ Invalid**

```
├── modules/
|    ├── cartModule/
|    ├── pymentModule/
|    ├── requestModule/
|    └── layoutModule/
```
