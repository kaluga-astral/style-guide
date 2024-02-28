# Fakes

## Фейковые данные имеют префикс `fake`

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Позволяет отличить фейковые данные в тесте от других видов данных.

**✅ Valid**

```ts
it('CreateBook отправляет измененные values формы в репозиторий', async () => {
  const fakeBook = bookRepositoryFaker.makeBookByName();
  const fakeBookFormValues: BookFormValues = {
    name: fakeBook.name,
    genre: fakeBook.genre,
    pageCount: '22',
    author: fakeBook.author,
    isPresentCoAuthor: false,
  };

  const cacheService = createCacheService();
  const creationBookSpy = vi.fn().mockResolvedValue(undefined);
  const adminRepositoryMock = mock<AdministrationRepository>({
    createBookMutation: () => cacheService.createMutation(creationBookSpy),
  });

  const sut = new CreateBookScreenStore(
    adminRepositoryMock,
    createRouterMock(),
  );

  await sut.createBook(fakeBookFormValues);

  expect(creationBookSpy).toBeCalledWith({
    name: fakeBook.name,
    genreID: fakeBook.genre.id,
    pageCount: 22,
    author: fakeBook.author,
  });
});
```

**❌ Invalid**

```ts
it('CreateBook отправляет измененные values формы в репозиторий', async () => {
  const book = bookRepositoryFaker.makeBookByName();
  const bookFormValues: BookFormValues = {
    name: book.name,
    genre: book.genre,
    pageCount: '22',
    author: book.author,
    isPresentCoAuthor: false,
  };

  const cacheService = createCacheService();
  const creationBookSpy = vi.fn().mockResolvedValue(undefined);
  const adminRepositoryMock = mock<AdministrationRepository>({
    createBookMutation: () => cacheService.createMutation(creationBookSpy),
  });

  const sut = new CreateBookScreenStore(
    adminRepositoryMock,
    createRouterMock(),
  );

  await sut.createBook(bookFormValues);

  expect(creationBookSpy).toBeCalledWith({
    name: book.name,
    genreID: book.genre.id,
    pageCount: 22,
    author: book.author,
  });
});
```

## Faker сервис должен находится в отдельном файле с названием `faker.ts`

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Идентификация faker сервисов и отделение их от production-кода.

**✅ Valid**

```
├── UserRepository/
|    ├── UserRepository.ts
|    ├── faker.ts
|    └── index.ts 
```

**❌ Invalid**

```
├── UserRepository/
|    ├── UserRepository.ts
|    ├── UserRepository.faker.ts
|    └── index.ts 
```

```
├── UserRepository/
|    ├── UserRepository.ts
|    ├── UserRepository.stub.ts
|    └── index.ts 
```
