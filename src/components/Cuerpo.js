import React from 'react';
import { Grid} from '@material-ui/core';
import PerfilProfesional from './PerfilProfesional';
import HabilidadesProfesionales from './HabilidadesProfesionales';
import ExperienciaProfesional from './ExperienciaProfesional';
import Educacion from './Educacion';
import LogrosCompetencias from './LogrosCompetencias';

export function Cuerpo() {
    return (
        <div style={{ background: '#f5f7f9', padding: '20px' }}>
            <Grid container spacing={2}>
                <PerfilProfesional />
                <HabilidadesProfesionales />
                <ExperienciaProfesional />
                <Educacion />
                <LogrosCompetencias />
            </Grid>
        </div>
    );
}
