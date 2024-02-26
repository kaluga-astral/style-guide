# Функции и методы

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
Именование функций идентично [именованию Boolean переменных](./vars#boolean-переменные-должны-иметь-префикс-указывающий-на-принадлежность-к-boolean), 
но правило считаем как стандарт, который привычно используется в стандарте языка (например: `isNaN`, `hasOwnProperty`).

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

## Запрещено использовать в названиях существительные во множественном числе только с добавлением окончания

Необходимо добавлять уточняющее слово: `getDrafts` -> `getDraftList`.

**✨ Мотивация**

Из-за существительных во множественном числе с добавлением окончания (например, `s`) сложно отличить функцию, работающую с одной сущностью и несколькими.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
class Example {
  public getDraft = () => {};
  public getDraftList = () => {};
  
  public sendDraft = () => {};
  public sendDraftList = () => {};
  public sendAllDraftList = () => {};

  public calcDraftSum = () => {};
  public calcDraftListSum = () => {};
}
```

---

```tsx
const DraftScreen = () => {};

const DraftListScreen = () => {};
```

**❌ Invalid**

Сложно визуально найти отличия в названиях из-за разницы в одну букву.

```ts
class Example {
  public getDraft = () => {};
  public getDrafts = () => {};
  
  public sendDraft = () => {};
  public sendDrafts = () => {};
  public sendAllDrafts = () => {};

  public calcDraftSum = () => {};
  public calcDraftsSum = () => {};
}
```

---

```tsx
const DraftScreen = () => {};

const DraftsScreen = () => {};
```

## Использование `Remove` и `Delete` в именах

**✨ Мотивация**

Исключение споров о нейминге функций и методов удаления.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

### Для бизнес-логики

Если операция удаления производится с возможностью восстановления, то необходимо использовать `Remove`.
Если восстановление не возможно, то необходимо использовать `Delete`.

**✅ Valid**

`removeAccount` - функция удаления аккаунта пользователя с возможностью в будущем его восстановления.

`removeRequest` - функция, удаляющая из реестра заявление, но при этом перемещающая его в "архив".

`deleteRequest` - функция полностью удаляющая заявление из системы.

### Для инфраструктурного кода

Для мутирующих операций используется `Delete`.
Для иммутабельных операций используется `Remove`.

**✅ Valid**

```ts
// Мутирующая операции
const deleteID = (user: User) => {
  delete user.id;
};

// Иммутабельная операция
const removeID = ({ id, ...user }: User) => user;

// Мутирующая операции
const deleteItem = (array: unknown[]) => {
    array.splice(2);
};

// Иммутабельная операция
const removeItem = (array: unknown[]) => array.slice(2);
```

```ts
class Example {
  private id?: string;
  
  private deleteID = () => {
    this.id = undefined;
  }
}
```
