import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../components/Steps.css";
const Steps = () => {
    return (
        <div className='steps'>
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/256/1509/1509494.png" alt="" />
                        </div>
                        <p style={{ maxWidth: 500, color: "rgba(0,0,0,0.5)", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo et, esse laudantium consequatur. Eum soluta illum architecto dolorum quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam sint repudiandae.</p>
                        <button className='adopt'>Adopt a child now</button>
                    </div>
                    <div className="righ">
                        <p style={{ fontSize: "2rem" }}>Steps to adopt & foster a child</p>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>1.Getting Start</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ color: "rgb(0,0,0,0.5)" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid velit, asperiores libero. Beatae vitae nostrum et distinctio saepe autem quisquam cupiditate labore voluptatum, eligendi ipsam atque assumenda odit, perferendis dicta.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>2. Envisioning your family</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quibusdam possimus dolor odio dicta ipsam deleniti enim suscipit. Sed aperiam hic recusandae, perspiciatis quibusdam numquam nisi dolorum nostrum porro explicabo.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>3. Getting approved</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quibusdam architecto vitae provident saepe omnis dignissimos corporis ratione nihil. Laboriosam nesciunt fugiat modi quis, odio tempora enim ipsa consequuntur temporibus.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>4. Being matched with a child</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fugiat autem, explicabo dolorum libero totam doloribus ex ducimus repellendus qui nam distinctio cupiditate deleniti ipsam quibusdam neque quaerat tenetur ipsa.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>5. Receiving a placement</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit culpa accusamus repellat ut officia nesciunt aliquid qui nulla, provident ratione doloremque porro atque repellendus perspiciatis est. Accusamus earum, animi quod?
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>6. Finalizing an adoption</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sint placeat praesentium, libero excepturi laboriosam officia sapiente ipsa magnam asperiores tempora ea, et repellendus reprehenderit dolores, hic at in. Fugit..
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>7. State information</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sequi nobis beatae nesciunt fugit quisquam culpa rerum ipsum quibusdam impedit, sed soluta, quos neque reiciendis, earum magni laudantium iure, deleniti?
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps