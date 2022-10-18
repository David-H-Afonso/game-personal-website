git checkout develop
git pull origin develop
yarn
yarn build
git add .
git commit -m "deploy"
git push origin develop
cd ".."
cd "D:\Programacion\personal-website\deploy-game-personal-website"
git pull origin master
git stash
git rm -r *
git fetch --all
git checkout origin/develop -- build/
git mv (gci build/*) .
git add .
git commit -m "deploy"
git push origin master
cd ".."
cd "D:\Programacion\personal-website\game-personal-website"
git checkout develop