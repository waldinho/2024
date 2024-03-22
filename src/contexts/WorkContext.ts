import { createContext } from 'react';
import { Content } from '../types';

export const WorkContext = createContext<Content[]>([]);