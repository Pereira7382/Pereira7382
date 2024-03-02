import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const HabilidadesProfesionales = () => {
    return (
        <Grid item xs={12} md={6} id="habilidades-profesionales" >
                    <Typography variant='body1' style={{ textAlign: 'left', maxWidth: '600px', fontFamily: 'Roboto, sans-serif' }}>
                        <Typography variant="h6"style={{ marginBottom: '20px', color: '#333', fontFamily: 'Impact, sans-serif' }}>
                            Habilidades Profesionales
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/gestionPresupuestaria.png" alt="Gestión de presupuestos" style={{ width: '24px', marginRight: '10px' }} /> Gestión de presupuestos
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/InterpretacionDatos.png" alt="Interpretación de datos" style={{ width: '24px', marginRight: '10px' }} /> Interpretación de datos
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/PlaneacionEstrategica.png" alt="Planeación estratégica" style={{ width: '24px', marginRight: '10px' }} /> Planeación estratégica
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/InvestigaciónYdesarrollo.png" alt="Investigación y desarrollo" style={{ width: '24px', marginRight: '10px' }} /> Investigación y desarrollo
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/GestionYcontrolInventario.png" alt="Gestión y control de inventarios" style={{ width: '24px', marginRight: '10px' }} /> Gestión y control de inventarios
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/GestiOnCalidad.png" alt="Gestión de la calidad" style={{ width: '24px', marginRight: '10px' }} /> Gestión de la calidad
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/OptimizaciónDeprocesos.png" alt="Optimización de procesos" style={{ width: '24px', marginRight: '10px' }} /> Optimización de procesos
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/GestiónAdministrativa.png" alt="Gestión administrativa" style={{ width: '24px', marginRight: '10px' }} /> Gestión administrativa
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/EjecucionDeproyectos.png" alt="Ejecución de proyectos" style={{ width: '24px', marginRight: '10px' }} /> Ejecución de proyectos
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/GestionDelCambio.png" alt="Gestión del cambio" style={{ width: '24px', marginRight: '10px' }} /> Gestión del cambio
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="/iconos/LiderazgoDeEquipo.png" alt="Liderazgo de equipo" style={{ width: '24px', marginRight: '10px' }} /> Liderazgo de equipo
                                </div>
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
               
    );
}

export default HabilidadesProfesionales;
