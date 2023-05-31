import { TablerIconsProps } from '@tabler/icons-react';
import React, { createContext, useState } from 'react';
import { Note } from 'src/interface/interface';

type NoteContextProps = {
    notes: Note[];
    addNote: (id: number, label: string, color: string, icon: (props: TablerIconsProps) => JSX.Element) => void;
    updateNote: (id: number, label: string, color: string, icon: (props: TablerIconsProps) => JSX.Element) => void;
};

export const NoteContext = createContext({} as NoteContextProps);

export const NoteProvider = ({ children }: any) => {
    const [notes, setNotes] = useState<Note[]>([]);

    const addNote = (id: number, label: string, color: string, icon: (props: TablerIconsProps) => JSX.Element,) => {
        setNotes([...notes, { id: id, label: label, color: color, icon: icon}]); // Agregar radios con un valor inicial
    };

    const updateNote = (id: number, label: string, color: string, icon: (props: TablerIconsProps) => JSX.Element,) => {
        setNotes(
            notes.map((prod) => {
                return prod.id === id ? { ...prod, label: label, color: color, icon: icon } : prod;
            })
        );
    };

    return (
        <NoteContext.Provider
            value={{
                notes,
                addNote,
                updateNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};
