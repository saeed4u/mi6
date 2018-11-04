<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TourControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testFeaturedToursInViews()
    {
        $response = $this->call('GET','/');
        $response->assertViewHas('features');
    }
}
