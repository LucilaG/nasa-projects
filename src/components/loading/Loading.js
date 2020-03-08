import React from 'react'
import { Container } from './style';
import { AiOutlineLoading } from 'react-icons/ai';


const Loading = ({className}) =>(<Container className={className}><AiOutlineLoading fontSize={50} /></Container>)

export default Loading;

