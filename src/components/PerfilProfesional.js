import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const PerfilProfesional = () => {
    return (
        <Grid item xs={12} md={6} id="perfil-profesional">
            <Typography variant='body1' style={{ textAlign: 'left', maxWidth: '600px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                <Typography variant="h6" style={{ marginBottom: '20px', color: '#333', fontFamily: 'Impact, sans-serif' }}>
                    Perfil Profesional
                </Typography>
                <div style={{ marginBottom: '20px', fontSize: '16px' }}>
                    Profesional en Ingeniería Civil.
                </div>
                <div style={{ marginBottom: '20px', fontSize: '16px' }}>
                    Experiencia en la evaluación, coordinación, ejecución,
                    control y dirección de proyectos de construcción.
                </div>
                <div style={{ marginBottom: '20px', fontSize: '16px' }}>
                    Habilidad en el liderazgo de equipos de trabajo,
                    creador de estrategias para lograr los objetivos de las
                    organizaciones. Amplio conocimiento en lectura de
                    planos estructurales de edificaciones verticales,
                    horizontales y estructuras viales como puentes e
                    intercambios (elementos de concreto armado).
                </div>
                <div style={{ fontSize: '16px' }}>
                    Profesional con actitud emprendedora,
                    autodidacta, práctico, metódico, analítico y
                    proactivo.
                </div>
            </Typography>
        </Grid>
    );
}

export default PerfilProfesional;
