<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CorporateGovernanceController extends Controller
{
    public function index()
    {
        return Inertia::render('CorporateGovernance/CorporateGovernance');
    }
}
