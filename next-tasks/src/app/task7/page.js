'use client'

import Link from "next/link";
import { useState } from "react";

export default function Task2() {

    const [flag, setFlag] = useState('');

    return <>
        <p>7. Создайте кнопки "Показать текст", "Скрыть текст", параграф. Используйте useState
            для отслеживания текущего выбора пользователя. В зависимости от выбора,
            отображайте соответствующий контент.</p>

        
        <div>
            <button onClick={() => setFlag(true)}>Show text</button>
            <button onClick={() => setFlag(false)}>Hide text</button>

            <p>{flag? 'TEXT': ''}</p>
        </div>

        <p><Link href='/'>home</Link></p>

    </>
}