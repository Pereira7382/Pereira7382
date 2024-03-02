import React from 'react';
import { Typography } from '@material-ui/core';
import { FaCheckCircle } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core'; // Import Divider component
const LogrosCompetencias = () => {
    return (
        <Grid item xs={12} md={6} id="logros-y-competencias" className="scroll-transition">
            <Divider />
            <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                Logros y Competencias
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50', fontSize: '1.2em' }} /> {/* Icono de verificación */}
                        Cualidades de <span style={{ color: '#000000' }}>determinación</span>, <span style={{ color: '#000000' }}>compromiso</span>, <span style={{ color: '#000000' }}>exigencia</span> y <span style={{ color: '#000000' }}>responsabilidad</span> en el trabajo.
                    </Typography>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50', fontSize: '1.2em' }} />
                        Profesional capaz de ajustarse a la entrega y cumplimiento de las labores asignadas, así como capacidad para el aprendizaje de <span style={{ color: '#000000' }}>nuevos procesos</span>.
                    </Typography>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50', fontSize: '1.2em' }} />
                        Identifica, formula y resuelve problemas de ingeniería, especialmente enfrentar problemas abiertos o que requieran un enfoque <span style={{ color: '#000000' }}>multidisciplinario</span>.
                    </Typography>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50', fontSize: '1.2em' }} />
                        Inspección de obras civiles, cumplimiento de <span style={{ color: '#000000' }}>requisitos</span> y <span style={{ color: '#000000' }}>necesidades</span>, así como las <span style={{ color: '#000000' }}>restricciones</span> y <span style={{ color: '#000000' }}>limitaciones</span> dadas.
                    </Typography>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50', fontSize: '1.2em' }} />
                        Capacidad para el manejo de <span style={{ color: '#000000' }}>especificaciones técnicas</span> y la elaboración de <span style={{ color: '#000000' }}>informes técnicos</span>.
                    </Typography>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50', fontSize: '1.2em' }} />
                        Capacidad de análisis de la problemática de la <span style={{ color: '#000000' }}>seguridad</span> y <span style={{ color: '#000000' }}>salud</span> en las obras de construcción.
                    </Typography>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50', fontSize: '1.2em' }} />
                        Conocimiento de los <span style={{ color: '#000000' }}>procedimientos constructivos</span>, la <span style={{ color: '#000000' }}>maquinaria de construcción</span> y las <span style={{ color: '#000000' }}>técnicas de organización</span>, medición y valoración de obras.
                    </Typography>
                </li>
                <li style={{ marginBottom: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        <FaCheckCircle style={{ marginRight: '10px', color: '#4caf50', fontSize: '1.2em' }} />
                        Capacidad para aplicar los conocimientos sobre el funcionamiento resistente de las estructuras siguiendo las <span style={{ color: '#000000' }}>normativas existentes</span>.
                    </Typography>
                </li>
                {/* Agrega los otros elementos de la lista aquí */}
            </ul>
        </Grid>
    );
}

export default LogrosCompetencias;
