FROM php:7.4-fpm AS php-fpm-74

COPY composer.lock composer.json /var/www/api/

WORKDIR /var/www/api

RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    libzip-dev \
    libonig-dev \
    git \
    curl

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_mysql mysqli mbstring zip exif pcntl
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

COPY . .
RUN composer install

COPY --chown=www:www . /var/www/api
RUN chown -R www:www /var/www/api

USER www

EXPOSE 9000
CMD ["php-fpm"]
