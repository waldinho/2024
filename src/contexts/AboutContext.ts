import { createContext } from 'react';
import { Content } from '../types';

export const AboutContext = createContext<Content>({
    _id: '',
});