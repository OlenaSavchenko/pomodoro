import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';
import { routes } from "./routes"
import { AppBar, Button, ListItem, ListItemText, List, Container } from '@mui/material';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

const Header = () => {
    const history = useHistory()
    const handleGoBackButton = () => {
        history.goBack()
    }

    return (
        <>
            <AppBar position="static" color="primary">
                <Container maxWidth="sm">
                    <List style={{ display: 'flex' }}>
                        {routes.map(link =>
                            <ListItem
                                key={link.id} as={NavLink}
                                to={link.route}>
                                <ListItemText style={{ color: '#ffffff' }}>{link.name}</ListItemText>
                            </ListItem>)}
                    </List>
                </Container>
            </AppBar>
            <Button onClick={handleGoBackButton} type="button" title="Back to previous page"><ArrowBackSharpIcon /></Button>
        </>
    )
}

export default Header