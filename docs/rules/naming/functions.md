# Функции и методы

## Функции и методы должны начинаться с глагола

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

### Функции и методы, возвращающие Boolean должны начинаться с глагола

Глагол в начале функции должен указывать на цель проводимой проверки.

**✨ Мотивация**

Добавление глагола в начало функции позволяет избежать пересечений с Boolean переменными.
Самый распространенный глагол: check.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
const checkIsEmpty = (value: unknown) => remeda.isEmpty(value);

const checkWasRemoved = (obj?: Record<string, unknown>): obj is undefined =>
    obj === undefined;

const validateID = (id: string) =>
    id.length === 2;
```

```ts
class Example {
  public checkIsEmpty = (value: unknown) => remeda.isEmpty(value);

  public checkWasRemoved = (obj?: Record<string, unknown>): obj is undefined =>
    obj === undefined;

  public validateID = (obj: { id?: string }) => Boolean(obj.id);
}
```

**❌ Invalid**

```ts
// имя идентично переменной
const isEmpty = (value: unknown) => remeda.isEmpty(value);

// имя идентично переменной
const hasRemoved = (obj?: Record<string, unknown>): obj is undefined =>
    obj === undefined;

// нет глагола
const removed = (obj?: Record<string, unknown>): obj is undefined =>
    obj === undefined;
```

```tsx
// приходится переименовывать функцию из-за пересечений с параметрами и переменными
import { isEmpty as checkIsEmpty } from 'utils';

export const UserInfo = ({ data, isEmpty }: Props) => {
  const isEmptyData = isEmpty && checkIsEmpty(data);

  return (
    <Grid>
      {isEmpty && <NoData />}
    </Grid>
  );
};
```

## Для существительных во множественном числе необходимо добавлять уточняющее слово

Необходимо добавлять уточняющее слово: `getDrafts` -> `getDraftList`.

**✨ Мотивация**

Из-за существительных во множественном числе с добавлением окончания (например, `s`) сложно отличить функцию, работающую с одной сущностью и несколькими

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
class Example {
  public getDraft = () => {};
  public getDraftList = () => {};
  
  public sendDraft = () => {};
  public sendDraftList = () => {};

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

  public calcDraftSum = () => {};
  public calcDraftsSum = () => {};
}
```

---

```tsx
const DraftScreen = () => {};

const DraftsScreen = () => {};
```

### Рекомендуется использовать постфикс `List` для существительных во множественном числе

В большинстве случаев для описания существительного во множественном числе подойдет `List`, этому постфиксу необходимо отдавать предпочтение.

**✨ Мотивация**

Использование различных постфиксов может привести к неоднородности кода. Например, использование слов `Many`, `One`, `Sindle`, `Multiple`...

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
