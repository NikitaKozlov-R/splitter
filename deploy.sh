#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

git add -A
git commit -m 'deploy'

git push -f git@github.com:NikitaKozlov-R/splitter.git master:gh-pages

cd -

