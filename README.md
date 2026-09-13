# Smart Center CRM / LMS

Современный светлый frontend CRM/LMS учебного центра.

Деплоится на **GitHub Pages**. Firebase (Auth / Firestore / Storage / Functions) подключается опционально — настраиваете сами, когда будете готовы.

Без Firebase приложение работает как **полноценное браузерное приложение**: данные сохраняются в localStorage, доступны поиск, экспорт Excel и печать. Firebase подключается для общей облачной базы и авторизации.

## Возможности UI

- Role-based интерфейс (director / manager / teacher / student / parent)
- Dashboard директора
- Ученики и родители
- Группы и расписание
- Контроль оплат (green / yellow / red)
- QR attendance flow
- Финансы: Excel / PDF / печать
- Аналитика, отчёты преподавателей, сотрудники, уведомления
- Responsive desktop / tablet / mobile

## Быстрый старт (локально)

```bash
npm install
npm run dev
```

Откройте http://localhost:5173

В локальном режиме введите любой email/пароль или оставьте поля пустыми. Данные сохраняются в браузере. Для многопользовательской работы подключите Firebase через `.env` и задайте правила доступа.

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub и запушьте код в ветку `main`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. После push workflow `.github/workflows/deploy.yml` соберёт и опубликует сайт.

Сайт будет доступен по адресу:
- `https://USERNAME.github.io/REPO_NAME/` (project site)

Если пути к CSS/JS ломаются, в workflow раскомментируйте и укажите:

```yaml
VITE_BASE: /REPO_NAME/
```

или локально:

```bash
VITE_BASE=/REPO_NAME/ npm run build
```

## Подключение Firebase (когда будете готовы)

1. Создайте проект в [Firebase Console](https://console.firebase.google.com/).
2. Скопируйте web-config в `.env` (см. `.env.example`).
3. Для GitHub Actions добавьте те же `VITE_FIREBASE_*` в **Settings → Secrets and variables → Actions**.
4. Правила и Cloud Functions лежат в репозитории (`firestore.rules`, `storage.rules`, `functions/`) — деплойте через Firebase CLI:

```bash
firebase login
firebase use <project-id>
firebase deploy --only firestore:rules,firestore:indexes,storage,functions
```

Пока secrets / `.env` пустые — сайт остаётся в демо-режиме.

## Структура

```
├── src/                      # React + Vite
├── public/
├── functions/                # Cloud Functions (опционально)
├── docs/ARCHITECTURE.md
├── firestore.rules           # опционально
├── storage.rules
├── firestore.indexes.json
├── firebase.json
├── .github/workflows/deploy.yml   # → GitHub Pages
└── .env.example
```

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | локальная разработка |
| `npm run build` | сборка в `dist/` |
| `npm run preview` | просмотр production-сборки |

## Лицензия

Private / учебный проект.
