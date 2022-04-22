## Installation
#### backend part : 
Clone the repository

    git clone https://github.com/Abdelmalek123-Ennani/react_laravel_api.git

Switch to the repo folder

    cd react_laravel_api/laravelapi

Install all the dependencies using composer

    composer install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000 (use ReactJs to interact with app due to laravel in this project used just to create an API not UI)
<hr />

#### frontend part : 

Switch to the frontEnd folder
 
    cd react_laravel_api/laravel_react_fron_end

Install all the dependencies using npm

    npm install

Start the local development server(for reactJs)

    npm start

You can now access the server at http://localhost:3000

<hr />
Happy coding folks ):

