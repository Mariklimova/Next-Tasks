'use client'

import Link from "next/link";
import { useState } from "react";

export default function Task2() {

    const [bool, setBool] = useState(true);

    return <>
        <p>6. Создайте кнопку, которая позволяет пользователю переключаться между светлой
            и темной темой интерфейса. Используйте useState, чтобы отслеживать текущую
            тему. Применяйте соответствующие стили в зависимости от выбранной темы.</p>

        <div style={{ background: !bool? 'black':'white', height: '300px', width: '100%' }}></div>
        <div>
            <button onClick={() => setBool(!bool)}>Change Background</button>
        </div>

        <p><Link href='/'>home</Link></p>

    </>
}