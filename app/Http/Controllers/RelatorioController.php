<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use PDF;

class RelatorioController extends Controller
{
    public function makePDF()
    {
        $usuarios = User::all()->toArray();

        $pdf = PDF::loadView('relatorios.usuarios', ['usuarios' => $usuarios]);
        return $pdf->download('itsolutionstuff.pdf');
    }
}
