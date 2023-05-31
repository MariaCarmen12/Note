import { useContext, useState } from 'react';
import {
    Group,
    Box,
    Collapse,
    ThemeIcon,
    Text,
    UnstyledButton,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight, TablerIconsProps } from '@tabler/icons-react';
import { useStyles } from './SelectorsStyles';
import { NoteContext } from 'src/context/NoteContext';

interface SelectProps {
    icon: (props: TablerIconsProps) => JSX.Element
    label: string;
    color?: string
}

export function Selectors({ icon: Icon, label, color }: SelectProps) {
    
    const { classes } = useStyles();
    const { addNote, notes } = useContext(NoteContext)

    return (
            <UnstyledButton
                className={classes.control}
                sx={{
                    ":hover": { backgroundColor: color }
                }}
                onClick={() => addNote( notes.length+1, label,color as string, Icon)}
                >
                <Group position="apart" spacing={0}>
                    <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: 50 }}>
                        <ThemeIcon variant="light" size={30} sx={{ borderRadius: 50, backgroundColor: color }}>
                            <Icon size="1.2rem" color='black' />
                        </ThemeIcon>
                        <Box ml="md">{label}</Box>
                    </Box>
                </Group>
            </UnstyledButton>
    );
}