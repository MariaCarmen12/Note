import { Box, Group, Input, Select, Tabs, ThemeIcon, Radio, UnstyledButton, Checkbox } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { useStyles } from './NoteStyles';
import {
    IconChevronDown,
    IconCircleDot,
    IconCirclePlus,
    IconEdit,
    IconGitBranch,
    IconGripVertical,
    IconMail,
    IconMenu,
    IconMenu2,
    IconQuestionMark,
    IconSquareRoundedMinus,
    IconSquareRoundedPlus,
    IconTool,
    IconTrashX,
} from '@tabler/icons-react';
import { mockdata } from '../NavbarTypes/data';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { NoteContext } from 'src/context/NoteContext';
import { Note } from 'src/interface/interface';



export const Notes = () => {

    const { addNote, notes, updateNote } = useContext(NoteContext)


    const { classes, cx } = useStyles();
    const [state, handlers] = useListState();
    const [radios, setRadios] = useState(['', '', '']);
    const [selectedRadio, setSelectedRadio] = useState('');


    const handleUpdateNote = (index: number, value: string) => {
        const indexN = mockdata.findIndex((item) => item.label === value);
        updateNote(index, value, mockdata[indexN].color, mockdata[indexN].icon)
    };

    const handleAddRadio = () => {
        setRadios([...radios, '']);
    };

    const handleRemoveRadio = (index: number) => {
        const updatedRadios = [...radios];
        updatedRadios.splice(index, 1);
        setRadios(updatedRadios);

        if (selectedRadio === index.toString()) {
            setSelectedRadio('');
        }
    };
    const handleRadioChange = (radioValue: string, index: number) => {
        setSelectedRadio(index.toString());
        const updatedRadios = [...radios];
        updatedRadios[index] = radioValue;
        setRadios(updatedRadios);
    };
    const renderItems = (radio: string, index: number, item: JSX.Element)=>{
        return (
            <Draggable key={radio} index={index} draggableId={radio}>
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div {...provided.dragHandleProps} className={classes.dragHandle}>
                        <IconGripVertical size="1.05rem" stroke={1.5} />
                    </div>
                    <Box sx={{ marginTop: '3%', flex: 2 }}>
                        <Group key={index}>
                          {item}
                            <Input
                                className={classes.input}
                                placeholder="Enter an answer choice"
                                value={radio}
                                onChange={(event) => handleRadioChange(event.target.value, index)}
                            />
                            <UnstyledButton onClick={() => handleRemoveRadio(index)}>
                                <IconSquareRoundedMinus size="12px" />
                            </UnstyledButton>
                            <UnstyledButton onClick={handleAddRadio}>
                                <IconSquareRoundedPlus size="12px" />
                            </UnstyledButton>
                        </Group>
                    </Box>
                </div>
            )}
        </Draggable>
        )
    }






    const handleAddNote = ({ id, label, color, icon: Icon }: Note) => {


        return (
            <Box key={id} className="note">
                <Box className={classes.container}>
                    <Tabs variant="pills" defaultValue="gallery">
                        <Group sx={{ justifyContent: 'between' }}>
                            <Tabs.List>
                                <Tabs.Tab value="gallery" icon={<IconEdit size="0.8rem" />}>
                                    Edit
                                </Tabs.Tab>
                                <Tabs.Tab value="messages" icon={<IconTool size="0.8rem" />}>
                                    Options
                                </Tabs.Tab>
                                <Tabs.Tab value="settings" icon={<IconGitBranch size="0.8rem" />}>
                                    Logic
                                </Tabs.Tab>
                            </Tabs.List>
                            <Box sx={{ flex: 2, textAlign: 'right' }}>
                                <IconTrashX size={'10.5px'} />
                            </Box>
                        </Group>

                        <Tabs.Panel value="gallery" pt="xs">
                            <Group>
                                <Input
                                    className={classes.input}
                                    icon={<IconQuestionMark size={'16px'} />}
                                    placeholder="Enter your question"
                                />
                                <Select
                                    defaultValue={label}
                                    data={mockdata.map((option) => option.label)}
                                    onChange={(value) => handleUpdateNote(id, value as string)}
                                    rightSection={<IconChevronDown size="1rem" />}
                                    rightSectionWidth={30}
                                    icon={
                                        <ThemeIcon
                                            variant="light"
                                            size={25}
                                            sx={{ borderRadius: 50, backgroundColor: color }}
                                        >
                                            {Icon && <Icon size="1rem" color="black" />}
                                        </ThemeIcon>
                                    }
                                />
                            </Group>

                            <DragDropContext
                                onDragEnd={({ destination, source }) =>
                                    handlers.reorder({ from: source.index, to: destination?.index || 0 })
                                }
                            >
                                <Droppable droppableId="dnd-list" direction="vertical">
                                    {(provided) => (
                                        <div {...provided.droppableProps} ref={provided.innerRef} style={{ width: '100%' }}>
                                            {label === 'Radio' && radios.map((radios, index) => renderItems(radios, index,  <Radio id={`radio-${index}`} checked={selectedRadio === index.toString()} onChange={() => setSelectedRadio(index.toString())}/>))}
                                            {label === 'Checkboxes' &&  radios.map((radios, index) => renderItems(radios, index, <Checkbox id={`radio-${index}`} checked={selectedRadio === index.toString()} onChange={() => setSelectedRadio(index.toString())} />))}
                                            {label === 'Short Answer' && radios.map((radios, index) => renderItems(radios, index, <IconMenu/>))}
                                            {label === 'Long Answer' && radios.map((radios, index) => renderItems(radios, index, <IconMenu2/> ))}
                                            {label === 'Email' && radios.map((radios, index) => renderItems(radios, index,  <IconMail/>))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        </Tabs.Panel>

                        <Tabs.Panel value="messages" pt="xs">
                           Options
                        </Tabs.Panel>

                        <Tabs.Panel value="settings" pt="xs">
                            Logic
                        </Tabs.Panel>
                    </Tabs>
                </Box>
            </Box>
        );
    };








    return (
        <Box className={classes.noteContainer}>
            <Box sx={{ width: '100%' }}>
                {notes.map((p) => handleAddNote(p))}
            </Box>
            <UnstyledButton
                onClick={() => addNote(notes.length + 1, 'Radio', '#E6FCF5', IconCircleDot)}
                className={classes.button}>
                <Group position="center">
                    <IconCirclePlus />
                    Add Question
                </Group>
            </UnstyledButton>
        </Box>
    );
};