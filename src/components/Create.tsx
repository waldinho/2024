import React, { useState, FormEvent } from "react";
import { useRouter } from 'next/navigation'
import styled from 'styled-components';
import { CardProps } from '../types';

export default function Create() {
    const [form, setForm] = useState<CardProps>({
        company: "",
        blurb: "",
        logoUrl: "",
    });
     
    const router = useRouter()
     
    const updateForm = (value: CardProps) => {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
     
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newWork = { ...form };
        await fetch("http://localhost:5000/work/add", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newWork),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        setForm({ company: "", blurb: "", logoUrl: "" });
        router.push('/work', { scroll: false })
    }

    return (
        <>
            <Title>Create Work</Title>
            <form onSubmit={onSubmit}>
                <FormGroup>
                    <FormLabel htmlFor="company">Company</FormLabel>
                    <input
                    type="text"
                    id="company"
                    value={form.company}
                    onChange={(e) => updateForm({ company: e.target.value })}
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
                    <FormLabel htmlFor="logUrl">Logo URL</FormLabel>
                    <input
                    type="text"
                    id="logoUrl"
                    value={form.logoUrl}
                    onChange={(e) => updateForm({ logoUrl: e.target.value })}
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