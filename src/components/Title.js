import { Typography } from "@mui/material";

const Title = ({ text }) => {
    return <Typography variant="h5" component="h2" style={{ marginBottom: "20px" }}>{text} </Typography>
}

export default Title