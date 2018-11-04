<?php

use Faker\Generator as Faker;

$factory->define(\App\TourCategory::class, function (Faker $faker) {
    return [
        'name' => rtrim($faker->sentence(rand(4, 10)), '.'),
        'description' => $faker->sentence(rand(10, 20), true),
        'is_active' => true
    ];
});
