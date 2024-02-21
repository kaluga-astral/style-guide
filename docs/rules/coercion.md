# Приведение типов

## Boolean

### При преобразовании в Boolean необходимо использовать явное приведение

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Достижение прозрачности в приведении типов и однородности кода.

**✅ Valid**

```ts
const string = 'string';

const isShow = Boolean(string);
```

**❌ Invalid**

```ts
const string = 'string';

const isShow = !!string;
```

#### Преобразовывать в Boolean в условных операторах не надо

**✅ Valid**

```ts
const string = 'string';

...

if (string) {}

...

const viewString = string ? 'Новое' : 'Старое';
```

**❌ Invalid**

```ts
const string = 'string';

...

if (Boolean(string)) {}

...

const viewString = Boolean(string) ? 'Новое' : 'Старое';
```

## Number

### При преобразовании в Number необходимо использовать явное приведение

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Достижение прозрачности в приведении типов и однородности кода.

**✅ Valid**

```ts
const string = '22';

const number = Number(string);
const intNumber = parseInt(string);
const foatNumber = parseFloat(string);
```

**❌ Invalid**

```ts
const string = '22';

const number = +string;
```

```ts
const string = '22';

const number = 1 * string;
```

## String

### При преобразовании в String необходимо использовать явное приведение

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Достижение прозрачности в приведении типов и однородности кода.

**✅ Valid**

```ts
const number = 22;

const string = String(number);
```

**❌ Invalid**

```ts
const number = 22;

const string = '' + number;
```

### Для склеивания строк необходимо использовать строковый шаблон

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Однозначность проводимой операции.

**✅ Valid**

```ts
const str1 = 'str1';
const str2 = 'str2';

const string = `${str1}${str2}`;
```

**❌ Invalid**

```ts
const str1 = 'str1';
const str2 = 'str2';

const string = str1 + str2;
```

#### Для склеивания строки и Number необходимо использовать строковый шаблон

**✅ Valid**

```ts
const str = 'str';
const number = 22;

const string = `${str} - ${number}`;
```

**❌ Invalid**

```ts
const str = 'str';
const number = 22;

const string = str + ' - ' + number;
```
