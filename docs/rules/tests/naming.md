# Нейминг тест-кейсов

## Название файлов с тестами имеет постфикс .test

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Однородность кода.

**✅ Valid**

```
├── UserRepository/
|    ├── UserRepository.ts
|    ├── UserRepository.test.ts
|    └── index.ts 
```

**❌ Invalid**

```
├── UserRepository/
|    ├── UserRepository.ts
|    ├── UserRepository.spec.ts
|    └── index.ts 
```


### Тест-кейс должен начинаться с большой буквы

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Позволяет достичь соответствия правилам русского языка и повысить удобство чтения тест-кейсов.

**✅ Valid**

```ts
it('Успешное создание книги показывает уведомление об успешности');
it('OnChange вызывается без переданного isExpanded');
```

### Тест-кейсы описываются на русском языке

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Коммуникация в компании происходит на русском языке. Кейсы на русском языке позволяют повысить удобство чтения тест-кейсов.

**✅ Valid**

```ts
it('Успешное создание книги показывает уведомление об успешности');
it('OnChange вызывается без переданного isExpanded');
```

**❌ Invalid**

```ts
it('Validate default invalid length message');
```

### Для указания значения параметра используется формат `PARAM_NAME=VALUE`

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Позволяет достичь единообразия указания параметров в тест-кейсах.

**✅ Valid**

```ts
it('К label добавляется "*", если required=true');
it('В маску добавляется 8 при isStartWithPlus=false')
```

**❌ Invalid**

```ts
it('К label добавляется "*", если required true');
it('К label добавляется "*", если required:true');
```

### Нельзя указывать длинные значения в названиях тест-кейсов

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Длинные значения значительно ухудшают удобство чтения тест-кейсов.

**❌ Invalid**

```ts
it('Отображается "...", если value="Provident ut qui consequatur. Eveniet deserunt et unde numquam. Velit distinctio excepturi deleniti tempora praesentium voluptatem laboriosam accusamus autem. Esse saepe sunt veritatis consequatur officia nihil tempora quisquam necessitatibus. Officia et dolorem."');
it('Генерируется исключение для json "{"k":"Provident ut qui consequatur. Eveniet deserunt et unde numquam. Velit distinctio excepturi deleniti tempora praesentium voluptatem laboriosam accusamus autem. Esse saepe sunt veritatis consequatur officia nihil tempora quisquam necessitatibus. Officia et dolorem."}"');
```

**✅ Valid**

```ts
it('Отображается "..." для длинных строк');
it('Генерируется исключение для json, содержащих строки длиной больше 20 символов')
```
