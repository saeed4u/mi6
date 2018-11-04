<?php

namespace Tests\Feature;

use App\Http\Controllers\TourController;
use App\Tour;
use Illuminate\Support\Facades\App;
use Mockery\Mock;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TourControllerTest extends TestCase
{
    protected $tourMock;

    /**
     * Test that the features variable is passed to the index view.
     *
     * @return void
     */
    public function testFeaturedLocationInViews()
    {
        $response = $this->call('GET','/');
        $response->assertViewHas('features');
    }


}
