import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';
import { routes } from "./routes"
import { AppBar, Button, ListItem, List } from '@mui/material';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

const Header = () => {
    const history = useHistory()
    const handleGoBackButton = () => {
        history.goBack()
    }

    return (
        <>
            <AppBar position="static" color="primary" style={{ alignItems: 'center' }}>
                <List style={{ display: 'flex' }}>
                    {routes.map(link =>
                        <ListItem
                            key={link.id} as={NavLink}
                            to={link.route}
                            style={{ color: '#ffffff', fontSize: "24px" }}>
                            {link.name}</ListItem>)}
                </List>
            </AppBar>
            <Button onClick={handleGoBackButton} type="button" title="Back to previous page"><ArrowBackSharpIcon /></Button>
        </>
    )
}

export default Header