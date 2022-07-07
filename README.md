This is a demo project for [@JBtje/Vite-Vue3PDF](https://github.com/JBtje/vite-vue3pdf). This project is based upon
Laravel 9,
Vue 3 (with Typescript) and Vite. It contains some extra packages like dayjs, vue-i18n, axios, etc.

Download

```
git clone git@github.com:JBtje/vite-vue3pdf-demo.git
```

Install Composer

```
composer install
```

The below commands will copy the .env.example to .env, and fill in the secrets.

```
cp .env.example .env
php artisan key:generate
```

Install NPM

```
npm install
```

Run migrations (database is not needed for this demo)

```
php artisan migrate --seed
```

Deploy application using

```
sh deploy.sh
```

### Don't forget to manually add [/pdfjs/pdf.worker.js](https://github.com/JBtje/vite-vue3pdf-demo/raw/master/public/pdfjs/pdf.worker.js "Demo") in your own project.

![Demo](https://github.com/JBtje/vite-vue3pdf-demo/raw/master/demo.png "Demo")