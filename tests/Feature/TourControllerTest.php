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

    /**
     * Test that tours are passed to the index view
     */
    public function testToursInViews(){
        $response = $this->call('GET','/');
        $response->assertViewHas('tours');
    }

    /**
     * Test that tours are passed to the index view
     */
    public function testReviewsInViews(){
        $response = $this->call('GET','/');
        $response->assertViewHas('reviews');
    }

    public function testForReviewsReturned(){
        $controller = new TourController();
        $reviews = $controller->getReviews();
        $this->assertNotEmpty($reviews,'Reviews is empty');
    }

    public function testForReviewSizeReturned(){
        $controller = new TourController();
        $reviews = $controller->getReviews();
        $this->assertEquals(6,count($reviews));
    }
    

}
