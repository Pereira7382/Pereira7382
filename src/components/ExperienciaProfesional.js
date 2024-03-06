import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Card, CardContent, Divider } from '@material-ui/core';
const ExperienciaProfesional = () => {
    return (

        <Grid container spacing={4}>


            <Grid item xs={12} id="experiencia-profesional">
                <Divider />

                <Typography variant="h6" style={{ marginTop: '20px', color: '#333', fontFamily: 'Impact, sans-serif' }}>
                    Experiencia Profesional
                </Typography>



            </Grid>


            {/* Experiencia 1 */}
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Ingeniero - Docente Universitario
                        </Typography>
                        <Typography gutterBottom>
                            Universidad Central de Costa Rica | Mayo 2023–Actualidad
                        </Typography>
                        <Typography>
                            <ul>
                                <li>
                                    Encargado de impartir clases de cursos de ingeniería.
                                </li>
                            </ul>

                        </Typography>

                        <Typography gutterBottom style={{ marginTop: '20px' }}>
                            Referencia:
                        </Typography>
                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <span>Rodolfo Cardenas-Director de carrera</span>
                        </Typography>
                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={"/iconos/whatsapp.png"} alt="Teléfono" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                            <span><a href="https://wa.me/88174060">88174060</a></span>
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
            {/* Experiencia 2 */}
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            TCU Universitario - Inspector de puentes
                        </Typography>
                        <Typography gutterBottom>
                            Municipalidad de Sarapiquí | Enero 2022 - Marzo 2022
                        </Typography>
                        <Typography>

                            <ul>
                                <li>
                                    Supervisión y inspección de puentes.</li>
                                <li>Redactar informes sobre el estado de los puentes.</li>
                                <li>Supervisión y inspección de puentes</li>
                                <li>Recopilar información del avance de las obras para emitir recomendaciones.</li>
                            </ul>

                        </Typography>

                        <Typography gutterBottom style={{ marginTop: '20px' }}>
                            Referencia:
                        </Typography>

                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={"/iconos/ingeniero.png"} alt="Ingeniero" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                            <span>Yeison Zúñiga Ramírez - Ingeniero</span>
                        </Typography>
                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={"/iconos/gmail.png"} alt="Correo" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                            <span><a href="mailto:yzuniga@sarapiqui.go.cr">yzuniga@sarapiqui.go.cr</a></span>
                        </Typography>
                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={"/iconos/whatsapp.png"} alt="Teléfono" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                            <span><a href="https://wa.me/8889036">8889036</a></span>
                        </Typography>




                    </CardContent>
                </Card>
            </Grid>
            {/* Experiencia 3 */}

            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Ingeniero de Proyectos
                        </Typography>
                        <Typography gutterBottom>
                            LGC Ingeniería en pavimentos | Octubre 2023 - Actualidad
                        </Typography>
                        <ul>
                            <li>Coordinación y ajuste a los requerimientos del proyecto</li>
                            <li>Control y ajuste de cantidades del presupuesto de proyecto.</li>
                            <li>Supervisión y coordinación con encargados en proyecto.</li>
                            <li>Inspección de obras desde inicio a fin del procedimiento constructivo de carreteras.</li>
                            <li>Control de avance de obra.Supervisión de personal de campo cuadrillas y maquinaria.</li>
                            <li>Presupuestos: presupuesto de obra civil menor.</li>
                            <li>Redacción de informes diarios sobre actividades realizadas conforme al avance</li>
                            <li>Cubicajes de góndolas para equipo de acarreoSupervisión de control de calidad con ensayos respectivos a la normativa vigente</li>
                        </ul>
                        <Typography variant="h6" gutterBottom>
                            Detalles de Proyectos:
                        </Typography>
                        <ul>
                            <li>Rehabilitación del Sistema de Drenaje y Mejoramiento de la Superficie de Ruedo, con carpeta asfáltica, en una longitud de 850 m, en el camino C. 7-005-098 Barrio Las Palmas. Cantón de Matina.</li>
                            <ul>
                                <li>Colocación MAC . 221m3</li>
                            </ul>
                            <li>Rehabilitación del Sistema de Drenaje y Mejoramiento de la Superficie de Ruedo, con carpeta asfáltica, en una longitud de 1,900 m, en el camino C. 7-05-120. Barrio La trinidad Cantón de Matina.</li>
                            <ul>
                                <li>Colocación MAC . 510,34m3</li>
                                <li>Colado de cabezales de concreto y cajas de registro 10m3</li>
                            </ul>
                            <li>Rehabilitación del Sistema de Drenaje y Mejoramiento de la Superficie de Ruedo, con carpeta asfáltica, en una longitud de 930 m, en el camino C. 7-05-113 Sahara. Cantón de Matina.</li>
                            <ul>
                                <li>Colocación material base 1 1/2". 1416,25m3</li>
                                <li>Colocación de pasos de tubería de Concreto Reforzado clase III – C 76, diámetro 1520 mm y 	600mm</li>
                                <li>Colado de cabezales de concreto y cajas de registro 40m3</li>
                            </ul>
                            <li>Rehabilitación del Sistema de Drenaje y Mejoramiento de la Superficie de Ruedo, con carpeta asfáltica, en una longitud 	de 1700 m, en el camino C. 7-05-112 Maria Agüero. Cantón de Matina.</li>
                            <ul>
                                <li>Colocación material base 1 1/2". 1896m3</li>
                                <li>Colocación material préstamo 3". 3067 m3</li>
                                <li>Colocación de pasos de tubería de Concreto Reforzado clase III – C 76, diámetro 600mm</li>
                                <li>Colado de cabezales de concreto y cajas de registro 15m3</li>
                                <li>Colocación MAC . 537m3</li>
                            </ul>
                        </ul>
                        <Typography variant="h6" gutterBottom>
                            Referencia:
                        </Typography>

                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={"/iconos/ingeniero.png"} alt="Ingeniero" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                            <span>Víctor Vílchez - Ingeniero encargado del departamento de inspección LGC</span>
                            <a href="https://wa.me/50683901033" target="_blank" rel="noopener noreferrer">
                                <img src={"/iconos/whatsapp.png"} alt="WhatsApp" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                <span>83901033</span>
                            </a>
                        </Typography>
                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={"/iconos/ingeniero.png"} alt="Ingeniero" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                            <span>Jehostin Arceyut - Ingeniero de jefatura de UTGVM</span>
                            <a href="https://wa.me/50685809593" target="_blank" rel="noopener noreferrer">
                                <img src={"/iconos/whatsapp.png"} alt="WhatsApp" style={{ width: '20px', height: '20px', marginLeft: '10px', marginRight: '5px' }} />
                                <span>85809593</span>
                            </a>
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Asistente de ingeniería
                        </Typography>
                        <Typography gutterBottom>
                            MJ Concretos | Septiembre 2021 - Septiembre 2022
                        </Typography>
                        <ul>
                            <li>Coordinación y negociación con el cliente y ajuste a los requerimientos de este.</li>
                            <li>Selección y coordinación con subcontratistas en proyecto.</li>
                            <li>Cumplimiento de fechas establecidas.</li>
                            <li>Supervisión de personal de campo.</li>
                            <li>Presupuestos: presupuesto de obra civil menor.</li>
                            <li>Proveeduría: encargado de cotizaciones y compra de materiales.</li>
                            <li>Función de intermediario para relaciones comerciales, así como servicio al cliente.</li>
                            <li>Ampliacion de la ruta nacional 32 Carretera Braulio Carrillo - Seccion rio Madre,Rio Liverpool,
                                Rio Cuba, Rio escondido, Rio los Gemelos,Rio Toro amarillo- Limon en colocacion de concreto en Bastiones y
                                pilotes en puentes . entre 60 a 130m3</li>
                            <li>Colocacion de losa de concreto para bodega de almacenamiento Almacen Colono construccion. 50 m3.</li>
                            <li>Colocacion de losa de concreto para almacenamiento APM Terminal . 30 m3.</li>
                            <li>Redacción de informes.</li>
                        </ul>
                        <Typography gutterBottom style={{ marginTop: '20px' }}>
                            Referencia:
                        </Typography>
                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={"/iconos/ingeniero.png"} alt="Ingeniero" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                            <span>Isaac Pérez Arce - Ingeniero</span>
                        </Typography>

                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={"/iconos/gmail.png"} alt="Correo" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                            <span><a href="mailto:lperez@mjconcretos.com">lperez@mjconcretos.com</a></span>
                        </Typography>

                        <Typography variant="subtitle2" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={"/iconos/whatsapp.png"} alt="Teléfono" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                            <span><a href="https://wa.me/62447192">62447192</a></span>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>






        </Grid>

    );
}

export default ExperienciaProfesional;
