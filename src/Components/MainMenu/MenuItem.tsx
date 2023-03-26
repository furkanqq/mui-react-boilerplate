import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import React from 'react';

interface MenuItemProps {
    tag: string;
    title?: string;
    children?: any;
}

class MenuItem extends React.Component<MenuItemProps> {
    constructor(props: MenuItemProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => (location.href = '/' + this.props.tag)}
                >
                    <ListItemIcon>{this.props.children}</ListItemIcon>
                    <ListItemText primary={this.props.title} />
                </ListItemButton>
            </ListItem>
        );
    }
}

export default MenuItem;
