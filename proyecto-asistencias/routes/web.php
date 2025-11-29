<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AsignacionHorarioController;
use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\GruposController;
use App\Http\Controllers\IncidenciasController;
use App\Http\Controllers\NotificacionesController;
use App\Http\Controllers\OrganizacionesController;
use App\Http\Controllers\PermisosController;
use App\Http\Controllers\RegistroAsistenciasController;
use App\Http\Controllers\RolPermisoController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\SedesController;
use App\Http\Controllers\TokenAPIController;
use App\Http\Controllers\TurnosController;
use App\Http\Controllers\UsuarioRolController;
use App\Http\Controllers\UsuariosController;

Route::get('/', function () {
    return view('users.index');
});

Route::get('/asignacion-horario', function () {
    return view('asignacionhorario.index');
});

Route::get('/bitacora', function () {
    return view('bitacora.index');
});

Route::get('/grupos', function () {
    return view('grupos.index');
});

Route::get('/incidencias', function () {
    return view('incidencias.index');
});

Route::get('/notificaciones', function () {
    return view('notificaciones.index');
});

Route::get('/organizaciones', function () {
    return view('organizaciones.index');
});

Route::get('/permisos', function () {
    return view('permisos.index');
});

Route::get('/registro-asistencias', function () {
    return view('registroasistencias.index');
});

Route::get('/rol-permiso', function () {
    return view('rolpermiso.index');
});

Route::get('/roles', function () {
    return view('roles.index');
});

Route::get('/sedes', function () {
    return view('sedes.index');
});

Route::get('/token-api', function () {
    return view('tokenapi.index');
});

Route::get('/turnos', function () {
    return view('turnos.index');
});

Route::get('/usuario-rol', function () {
    return view('usuariorol.index');
});

Route::get('/usuarios', function () {
    return view('users.index');
});
