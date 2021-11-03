import { Typography } from "@mui/material";
import { content } from "./content"

const About = () => {
    return (
        <>
            <Typography variant="h5" component="h2" style={{ marginBottom: "20px" }}>Pomodoro Tracker App</Typography>
            {content.map(({ text, id }) =>
                <Typography
                    key={id}
                    variant="subtitle1"
                    component="h3"
                    style={{ marginBottom: "20px" }}>
                    {text}
                </Typography>)}
        </>
    )
}

export default About