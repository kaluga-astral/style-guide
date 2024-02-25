# Нейминг функций и методов

## Функции и методы должны начинаться с глагола

Исключение: [Функции и методы, возвращающие Boolean](#функции-и-методы-возвращающие-boolean-должны-содержать-префикс-указывающий-на-принадлежность-к-boolean).

**✨ Мотивация**

Глагол в названии функции или метода позволяет быстро понять выполняемое действие.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
const calcSum = () => {};

const getUserData = () => {};

const removeID = () => {};

const refreshData = () => {};

const formatToView = () => {};

const createRequest = () => {};
```

```ts
class Example {
  public calcSum = () => {};

  public getUserData = () => {};

  public removeID = () => {};

  public refresh = () => {};

  public formatToView = () => {};
}
```

**❌ Invalid**
```ts
// Глагол в конце
const sumCalc = () => {};

// Судя из названия это не функция, а объект
const userDataGetter = () => {};

// Судя из названия это не функция, а объект
const toViewFormatter = () => {};

// Название указывает, что это процесс, а не функция
const refreshingData = () => {};
```

## Функции и методы, возвращающие Boolean должны содержать префикс, указывающий на принадлежность к Boolean

**✨ Мотивация**

Идентификация функций и методов, возвращающих Boolean.
Именование функций идентично [именованию Boolean параметров и свойств](./props), 
но правило считаем как стандарт, который привычно используется в популярных npm-пакетах (например, `remeda`).

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
const isEmpty = (value: unknown) => remeda.isEmpty(value);

const wasRemoved = (obj?: Record<string, unknown>): obj is undefined =>
    obj === undefined;

const hasID = (obj: { id?: string }) =>
    Boolean(obj.id);
```

```ts
class Example {
  public isEmpty = (value: unknown) => remeda.isEmpty(value);

  public wasRemoved = (obj?: Record<string, unknown>): obj is undefined =>
    obj === undefined;

  public hasID = (obj: { id?: string }) => Boolean(obj.id);
}
```

**❌ Invalid**

```ts
const empty = (value: unknown) => remeda.isEmpty(value);

const checkRemoved = (obj?: Record<string, unknown>): obj is undefined =>
    obj === undefined;
```

