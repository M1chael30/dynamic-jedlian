<?php

namespace App\Http\Controllers;

use App\Models\Log;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $pages = Page::select('id', 'name', 'route_name')->get();

        $logs = Log::select('id', 'action', 'description', 'created_at', 'user_id')
            ->with('user:id,name,role')
            ->latest()
            ->simplePaginate(10)
            ->through(fn($log) => [
                'id' => $log->id,
                'user_id' => $log->user_id,
                'action' => $log->action,
                'description' => $log->description,
                'time_ago' => $log->created_at->diffForHumans(),
                'user' => [
                    'id' => $log->user->id,
                    'name' => $log->user->name,
                    'role' => $log->user->role,
                ]
            ]);

        return Inertia::render("Admin/Dashboard", [
            "pages" => $pages,
            "logs" => $logs,
        ]);
    }
}
