
import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core'; // Import Divider component

const Educacion = () => {
    return (
        <Grid item xs={12} md={6} id="educacion">
            {/* Cuadro de Educación */}
            <Divider />
            <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                Educación
            </Typography>
            <div style={{ marginBottom: '20px' }}>
                <Typography variant="body1" gutterBottom>
                    <img src="/iconos/fide.png" alt="Universidad" style={{ width: '20px', marginRight: '5px' }} />
                    Licenciatura en Ingeniería Civil <br />
                    Universidad Fidélitas | 2023
                </Typography>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Typography variant="body2" gutterBottom>
                    Colegiatura Profesional: IC -38581 <br />
                    Colegio de Ingenieros y Arquitectos de Costa Rica
                </Typography>
            </div>
            <div>
                <Typography variant="body2" gutterBottom>
                    Cursos adicionales:
                </Typography>
                <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <img src="/iconos/revit.jpeg" alt="Curso" style={{ width: '20px', marginRight: '5px' }} />
                        Autodesk Revit
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <img src="/iconos/civil.png" alt="Curso" style={{ width: '20px', marginRight: '5px' }} />
                        Autodesk AutoCAD Civil 3D
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <img src="/iconos/proyect.png" alt="Curso" style={{ width: '20px', marginRight: '5px' }} />
                        Programación de obras en edificaciones MS Project
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <img src="/iconos/excel.png" alt="Curso" style={{ width: '20px', marginRight: '5px' }} />
                        Microsoft Office Excel Avanzado
                    </li>
                </ul>
            </div>
        </Grid>
    );
}

export default Educacion;
