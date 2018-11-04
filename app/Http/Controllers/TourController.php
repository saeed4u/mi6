<?php

namespace App\Http\Controllers;

use App\Tour;
use Faker\Generator;
use Illuminate\Http\Request;

class TourController extends Controller
{

    public function getFeatures()
    {
        $features = collect();
        $images_parent_dir = 'tour/images/feature-location/';
        for ($i = 1; $i <= 10; $i++) {
            if ($i < 10) {
                $i = '0' . $i;
            }
            $image = $images_parent_dir . ('feature-location-' . $i . '.jpg');
            $features->push($image);
        }
        return $features;
    }

    public function getReviews()
    {
        $reviews = collect();
        $images_parent_dir = 'tour/images/reviewer/reviewer-';
        $names = ['Liisi Tee', 'Ama Kwansah', 'Kwamena Yesu', 'Seyi', 'Ibrahim Mahdy', 'Ayshen'];
        $locations = ['Accra, Ghana', 'New York, USA', 'Abuja, Nigeria', 'Lagos, Nigeria', 'Cairo, Egypt', 'Baku, Azerbaijan'];
        $sentences = ['I loved it!', 'I had an amazing experience with my tour'];
        for ($i = 1; $i <= 6; $i++) {
            $j = '0' . $i;
            $image = $images_parent_dir . $j . '.png';

            $review = new \stdClass();
            $review->image = $image;
            $review->name = $names[$i - 1];
            $review->location = $locations[$i - 1];
            $review->review = $sentences[rand(0, 1)];
            $reviews->push($review);
        }
        return $reviews;
    }


    public function index()
    {
        $features = $this->getFeatures();
        $reviews = $this->getReviews();
        $tours = Tour::take(3)->get();
        return view('tour.index', compact('features', 'tours', 'reviews'));
    }
}
