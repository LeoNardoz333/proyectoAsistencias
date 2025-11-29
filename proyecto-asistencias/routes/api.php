<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('asignacion-horario', AsignacionHorarioController::class);

Route::apiResource('bitacora', BitacoraController::class);

Route::apiResource('grupos', GruposController::class);

Route::apiResource('incidencias', IncidenciasController::class);

Route::apiResource('notificaciones', NotificacionesController::class);

Route::apiResource('organizaciones', OrganizacionesController::class);

Route::apiResource('permisos', PermisosController::class);

Route::apiResource('registro-asistencias', RegistroAsistenciasController::class);

Route::apiResource('rol-permiso', RolPermisoController::class);

Route::apiResource('roles', RolesController::class);

Route::apiResource('sedes', SedesController::class);

Route::apiResource('token-api', TokenAPIController::class);

Route::apiResource('turnos', TurnosController::class);

Route::apiResource('usuario-rol', UsuarioRolController::class);

Route::apiResource('usuarios', UsuariosController::class);
