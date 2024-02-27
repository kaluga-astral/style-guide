# Рефакторинг vitest globals

Codemode позволяет проставить необходимые импорты из `vitest` во все файлы с тестами, в соответствии с [правилом](https://kaluga-astral.github.io/style-guide/docs/rules/tests/globals).

## Что делает
- Смотрит, какие сущности `vitest`а используются в тесте;
- Сортирует и импортирует их в первой строчке файла;

## Как использовать
1. Скопировать `vitest-globals.codemode.js` в корень своего проекта
2. Установить `ts-morph` как dev зависимость
```
npm install --save-dev ts-morph
```
3. Внутри скрипта указать glob паттерн, чтобы под него попали все файлы с тестами (место помечено TODO)
4. Запустить скрипт:
```
node vitest-globals.codemode.js
```