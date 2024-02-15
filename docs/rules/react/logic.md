# Логика в компонентах

## Обработчики с префиксом `handle`

**✨ Мотивация**

Идентификация обработчиков react.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```tsx
const Cart = ({ list, onSetSum }: Props) => {
  // calcSum - не обработчик, поэтому префикс не нужен
  const calcSum = () => list.reduce((sum, { price }) => sum + price, 0);

  const handleClickPay = () => {
    onSetSum(calcSum(list));
  };

  return (
    <section>
      <Button onClick={handleClickButton}>Оплатить</Button>
    </section>
  );
};

```

**❌ Invalid**

```tsx

const Cart = ({ list, onSetSum }: Props) => {
  // Это не обработчик
  const hadleCalcSum = () => list.reduce((sum, { price }) => sum + price, 0);

  // Обработчик не по формату
  const clickPayHandler = () => {
    onSetSum(calcSum(list));
  };

  return (
    <section>
      <Button onClick={clickPayHandler}>Оплатить</Button>
    </section>
  );
};
```

## Запрещены длинные условия в `jsx` разметке

**✨ Мотивация**

Длинные условия усложняют восприятие `jsx` компонента.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**❌ Invalid**

```tsx
const Cart = ({ list, isSuccess, userName, onPay }: Props) => {
  return (
    <section>
      {(Boolean(list.length) && isSuccess) ||
        (userName.startsWith('Vasya') && (
          <Button onClick={onPay}>Оплатить</Button>
        ))}
    </section>
  );
};
```

**✅ Valid**

```tsx
const Cart = ({ list, isSuccess, userName, onPay }: Props) => {
  const isVasya = userName.startsWith('Vasya');
  const isShowPayButton = (Boolean(list.length) && isSuccess) || isVasya;

  return (
    <section>
      {isShowPayButton && <Button onClick={onPay}>Оплатить</Button>}
    </section>
  );
};
```


## Запрещена логика в циклах внутри `jsx` разметки

Логику в циклах необходимо переносить в отдельный компонент или в тело функции компонента.

**✨ Мотивация**

Упрощение восприятия и поддержки `jsx` компонента.

**🤖 Автоматизация**

Не имплементировано в eslint-config.


**❌ Invalid**

```tsx
const MainPage = ({ list }: Props) => {
  return (
    <section>
      <Header />
      <Filters />
      <ul>
        {list.map((item) => {
          // Сложность восприятия и поддержки будет увеличиваться по мере роста логики компонента
          const price = formatPriceToView(item.price);
          const nickName = [item.name, item.surname].join(' ');

          return (
            <li>
              <Typography>{price}</Typography>
              <Typography>{nickName}</Typography>
            </li>
          );
        })}
      </ul>
      </section>
  );
};
```

**✅ Valid**

```tsx
const ListItem = ({ itemInfo }: ListItemProps) => {
  const price = formatPriceToView(item.price);
  const nickName = [item.name, item.surname].join(' ');

  return (
    <li>
      <Typography>{price}</Typography>
      <Typography>{nickName}</Typography>
    </li>
  );
};

const MainPage = ({ list }: MainPageProps) => {
  return (
    <section>
      <Header />
      <Filters />
      <ul>
        {list.map((item) => (
            <ListItem itemInfo={item} />
        ))}
      </ul>
    </section>
  );
};
```

