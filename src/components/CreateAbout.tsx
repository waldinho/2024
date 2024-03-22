import React, { useState, FormEvent } from "react";
import { useRouter } from 'next/navigation'
import styled from 'styled-components';
import { CardProps } from '../types';

export default function Create() {
    const [form, setForm] = useState<CardProps>({
        title: "",
        blurb: "",
        imgUrl: "",
    });
     
    const router = useRouter()
     
    const updateForm = (value: CardProps) => {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
     
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newContent = { ...form };
        await fetch("http://localhost:5000/about/add", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newContent),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        setForm({ title: "", blurb: "", imgUrl: "" });
        router.push('/about', { scroll: false })
    }

    return (
        <>
            <Title>Create About Content</Title>
            <form onSubmit={onSubmit}>
                <FormGroup>
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <input
                    type="text"
                    id="title"
                    value={form.title}
                    onChange={(e) => updateForm({ title: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="blurb">Blurb</FormLabel>
                    <textarea
                    id="blurb"
                    value={form.blurb}
                    onChange={(e) => updateForm({ blurb: e.target.value })}
                    rows={10}
                    cols={50}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="logUrl">Image URL</FormLabel>
                    <input
                    type="text"
                    id="imgUrl"
                    value={form.imgUrl}
                    onChange={(e) => updateForm({ imgUrl: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <input
                    type="submit"
                    value="Create"
                    className="btn btn-primary"
                    />
                </FormGroup>
            </form>
        </>
    );
}

const Title = styled.h3`
    font-size: 1.5em;
    text-align: center;
`;

const FormGroup = styled.div`
    margin: 1rem;
`;

const FormLabel = styled.label`
    display: inline-block;
    width: 6rem;
`;