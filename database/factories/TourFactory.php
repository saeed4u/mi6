<?php

use Faker\Generator as Faker;

$factory->define(\App\Tour::class, function (Faker $faker) {
    return [
        'name' => rtrim($faker->sentence(rand(4, 10)), '.'),
        'description' => $faker->sentence(rand(15, 20), true),
        'location' => $faker->words(1, true),
        'price' => $faker->numberBetween(100, 10000),
    ];
});
