#!/usr/bin/env bash
git stash
git pull
composer check-platform-reqs
composer install
npm install
npm run build
php artisan clear-compiled
sudo php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan config:cache
php artisan view:cache
composer dump-autoload

# Kill all workers gracefully, and supervisor will restart the process
# sudo php artisan queue:restart
