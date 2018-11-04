<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(\App\TourCategory::class, 4)->create()->each(function (\App\TourCategory $category) {
            $category->tours()->saveMany(
              factory(\App\Tour::class,10)->make()
            );
        });
    }
}
